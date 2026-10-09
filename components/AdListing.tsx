"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useInView, type Variants } from "framer-motion";
import { APP_URLS, redirectToAppOrWeb } from "@/lib/config";
import {
  fetchProposalFilters,
  fetchProposals,
  type ProposalFilters,
  type ProposalPage,
  type ProposalType,
  type PublicProposal,
} from "@/lib/api";
import s from "./AdListing.module.css";

type Filters = { type: "" | ProposalType; location: string; religion: string };
type Status = "loading" | "ready" | "error";

const DEFAULT_FILTERS: Filters = { type: "", location: "", religion: "" };

const TYPE_LABELS: Record<ProposalType, string> = {
  bride: "Bride Wanted",
  groom: "Groom Wanted",
};

const MAX_VISIBLE = 6;

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE, delay: i * 0.08 },
  }),
  exit: { opacity: 0, scale: 0.94, y: -12, transition: { duration: 0.25, ease: "easeIn" } },
};

function goToLogin() {
  redirectToAppOrWeb(APP_URLS.login);
}

function loadProposals(filters: Filters, signal: AbortSignal) {
  return fetchProposals(
    {
      type: filters.type || undefined,
      location: filters.location,
      religion: filters.religion,
      page: 1,
      page_size: MAX_VISIBLE,
    },
    signal
  );
}

// Joins the non-empty parts of a card line with a middle dot.
function line(...parts: Array<string | number | null | undefined>) {
  return parts.filter((p) => p !== null && p !== undefined && p !== "").join(" · ");
}

function VerifiedIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" width="14" height="14">
      <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.15" />
      <path d="M4.8 8.2l2 2 4.4-4.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SkeletonCard() {
  return (
    <div className={s.skeleton} aria-hidden="true">
      <span className={s.skLine} style={{ width: "35%" }} />
      <span className={s.skLine} style={{ width: "60%", height: 18 }} />
      <span className={s.skLine} style={{ width: "85%" }} />
      <span className={s.skLine} style={{ width: "70%" }} />
    </div>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" width="16" height="16">
      <circle cx="8.5" cy="8.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 16l-3.2-3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function AdCard({ ad, index, inView }: { ad: PublicProposal; index: number; inView: boolean }) {
  const job = ad.job?.en && ad.job.en !== "Other" ? ad.job.en : null;
  return (
    <motion.button
      layout
      type="button"
      className={s.card}
      onClick={goToLogin}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="exit"
      whileHover={{ y: -6, transition: { duration: 0.3, ease: EASE } }}
      whileTap={{ scale: 0.98 }}
    >
      <span className={s.sheen} aria-hidden="true" />
      <span className={s.cardTop}>
        <span className={s.adNo}>{ad.ref}</span>
        {ad.posted_by && <span className={s.postedBy}>Posted by: {ad.posted_by}</span>}
      </span>
      <span className={s.headline}>{TYPE_LABELS[ad.type] ?? "Matrimonial Advertisement"}</span>
      <span className={s.meta}>{line(ad.age && `Age ${ad.age}`, ad.height, ad.location)}</span>
      <span className={s.meta}>{line(ad.religion, ad.education?.en)}</span>
      {job && <span className={s.meta}>{job}</span>}
      <span className={s.verified}>
        <VerifiedIcon /> Verified Advertisement
      </span>
      <span className={s.viewLink}>
        View Advertisement <span className={s.arrow}>&rarr;</span>
      </span>
    </motion.button>
  );
}

export default function AdListing() {
  const [options, setOptions] = useState<ProposalFilters | null>(null);
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [status, setStatus] = useState<Status>("loading");
  const [data, setData] = useState<ProposalPage | null>(null);
  const request = useRef<AbortController | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "0px 0px -80px 0px" });

  function run(next: Filters) {
    request.current?.abort();
    const controller = new AbortController();
    request.current = controller;
    loadProposals(next, controller.signal)
      .then((page) => {
        setData(page);
        setStatus("ready");
      })
      .catch((err: unknown) => {
        if (controller.signal.aborted) return;
        console.error("Failed to load advertisements", err);
        setStatus("error");
      });
  }

  function handleSearch() {
    setStatus("loading");
    run(filters);
  }

  useEffect(() => {
    const controller = new AbortController();
    fetchProposalFilters(controller.signal)
      .then(setOptions)
      .catch((err: unknown) => {
        if (!controller.signal.aborted) console.error("Failed to load filter options", err);
      });
    run(DEFAULT_FILTERS);
    return () => {
      controller.abort();
      request.current?.abort();
    };
  }, []);

  const items = data?.items ?? [];
  const total = data?.total ?? 0;
  const loading = status === "loading";

  return (
    <MotionConfig reducedMotion="user">
    <section className={`${s.section} section`} id="browse" aria-labelledby="browse-h">
      <div className="container">
        <header className="section-hdr">
          <span className="badge">Browse Matrimonial Ads</span>
          <h2 className="section-title" id="browse-h">
            Latest Matrimonial Advertisements
          </h2>
          <p className="section-sub">
            Search the latest advertisements below, then log in to view the full
            advertisement and send an inquiry to the advertiser.
          </p>
        </header>

        <div className={s.filterBar}>
          <label className={s.field}>
            <span>Advertisement Type</span>
            <select
              value={filters.type}
              onChange={(e) => setFilters((f) => ({ ...f, type: e.target.value as Filters["type"] }))}
            >
              <option value="">All Advertisements</option>
              {(options?.types ?? ["bride", "groom"]).map((t) => (
                <option key={t} value={t}>
                  {TYPE_LABELS[t] ?? t}
                </option>
              ))}
            </select>
          </label>
          <label className={s.field}>
            <span>District / Country</span>
            <select
              value={filters.location}
              onChange={(e) => setFilters((f) => ({ ...f, location: e.target.value }))}
            >
              <option value="">Any Location</option>
              {!!options?.districts.length && (
                <optgroup label="Sri Lanka">
                  {options.districts.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </optgroup>
              )}
              {!!options?.countries.length && (
                <optgroup label="Overseas">
                  {options.countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </optgroup>
              )}
            </select>
          </label>
          <label className={s.field}>
            <span>Religion</span>
            <select
              value={filters.religion}
              onChange={(e) => setFilters((f) => ({ ...f, religion: e.target.value }))}
            >
              <option value="">Any Religion</option>
              {options?.religions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </label>
          <motion.button
            type="button"
            className={s.searchBtn}
            onClick={handleSearch}
            disabled={loading}
            whileTap={{ scale: 0.96 }}
          >
            <span className={loading ? s.spin : s.icon}>
              <SearchIcon />
            </span>
            {loading ? "Searching..." : "Search Advertisements"}
          </motion.button>
        </div>

        <div ref={gridRef} className={s.grid} aria-busy={loading} aria-live="polite">
          {loading ? (
            Array.from({ length: items.length || 3 }, (_, i) => <SkeletonCard key={`sk-${i}`} />)
          ) : (
            <AnimatePresence mode="popLayout">
              {items.map((ad, i) => (
                <AdCard key={ad.ref} ad={ad} index={i} inView={gridInView} />
              ))}
            </AnimatePresence>
          )}
        </div>

        {status === "error" && (
          <p className={s.more} role="alert">
            We couldn&apos;t load advertisements right now.{" "}
            <button type="button" className={s.moreLink} onClick={handleSearch}>
              Try again
            </button>
          </p>
        )}

        {status === "ready" && items.length === 0 && (
          <p className={s.more}>
            No advertisements match these filters yet. Try a wider search.
          </p>
        )}

        <AnimatePresence>
          {status === "ready" && total > items.length && (
            <motion.p
              className={s.more}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              <button type="button" className={s.moreLink} onClick={goToLogin}>
                Log in to see more advertisements
              </button>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
    </MotionConfig>
  );
}
