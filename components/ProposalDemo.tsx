"use client";

import { useMemo, useState } from "react";
import { APP_URLS } from "@/lib/config";
import s from "./ProposalDemo.module.css";

type Proposal = {
  id: string;
  name: string;
  gender: "Bride" | "Groom";
  age: number;
  location: string;
  religion: string;
  profession: string;
};

type Filters = { gender: "Any" | "Bride" | "Groom"; location: string; religion: string };

const GENDERS: Array<Proposal["gender"]> = ["Bride", "Groom"];
const LOCATION_VALUES = ["Colombo", "Kandy", "Galle", "Negombo", "Jaffna", "London, UK"];
const RELIGION_VALUES = ["Buddhist", "Hindu", "Christian", "Catholic"];

const FIRST_NAMES: Record<Proposal["gender"], string[]> = {
  Bride: ["Amali", "Sachini", "Dilani", "Nadeeshani", "Hashini", "Tharushi"],
  Groom: ["Kasun", "Arun", "Karthik", "Dilshan", "Nuwan", "Chamika"],
};
const LAST_NAMES = ["Perera", "Fernando", "Silva", "Rajapaksha", "Selvarajah", "Sivakumar", "Wickramasinghe", "Bandara"];
const PROFESSIONS = ["Software Engineer", "Doctor", "Civil Engineer", "Teacher", "Business Owner", "Accountant", "Architect", "Pharmacist"];

// Generated so every Looking For x District x Religion combination has at least one match.
const PROPOSALS: Proposal[] = GENDERS.flatMap((gender) =>
  LOCATION_VALUES.flatMap((location, locIdx) =>
    RELIGION_VALUES.map((religion, relIdx) => {
      const idx = locIdx * RELIGION_VALUES.length + relIdx;
      const firstNames = FIRST_NAMES[gender];
      return {
        id: `${gender}-${locIdx}-${relIdx}`,
        name: `${firstNames[idx % firstNames.length]} ${LAST_NAMES[idx % LAST_NAMES.length]}`,
        gender,
        age: 24 + (idx % 12),
        location,
        religion,
        profession: PROFESSIONS[idx % PROFESSIONS.length],
      };
    })
  )
);

// A small, varied spread shown before the user runs a search.
const FEATURED_KEYS: Array<[Proposal["gender"], string, string]> = [
  ["Bride", "Colombo", "Buddhist"],
  ["Groom", "Kandy", "Hindu"],
  ["Bride", "London, UK", "Christian"],
  ["Groom", "Galle", "Catholic"],
  ["Bride", "Negombo", "Hindu"],
  ["Groom", "Jaffna", "Buddhist"],
];
const FEATURED = FEATURED_KEYS.map(
  ([gender, location, religion]) =>
    PROPOSALS.find((p) => p.gender === gender && p.location === location && p.religion === religion)!
);

const LOCATIONS = ["Any District", ...LOCATION_VALUES];
const RELIGIONS = ["Any Religion", ...RELIGION_VALUES];

const DEFAULT_FILTERS: Filters = { gender: "Any", location: "Any District", religion: "Any Religion" };

const MAX_VISIBLE = 6;

function goToLogin() {
  window.location.href = APP_URLS.login;
}

function LockIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" width="22" height="22">
      <rect x="4" y="9" width="12" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 9V6.5a3.5 3.5 0 0 1 7 0V9" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
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

export default function ProposalDemo() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState<Filters | null>(null);

  const { results, total } = useMemo(() => {
    if (!appliedFilters) return { results: FEATURED, total: FEATURED.length };
    const matches = PROPOSALS.filter(
      (p) =>
        (appliedFilters.gender === "Any" || p.gender === appliedFilters.gender) &&
        (appliedFilters.location === "Any District" || p.location === appliedFilters.location) &&
        (appliedFilters.religion === "Any Religion" || p.religion === appliedFilters.religion)
    );
    return { results: matches.slice(0, MAX_VISIBLE), total: matches.length };
  }, [appliedFilters]);

  function handleSearch() {
    setAppliedFilters(filters);
  }

  return (
    <section className={`${s.section} section`} id="browse" aria-labelledby="browse-h">
      <div className="container">
        <header className="section-hdr">
          <span className="badge">Try It Now</span>
          <h2 className="section-title" id="browse-h">
            See real proposals waiting for you
          </h2>
          <p className="section-sub">
            Filter sample proposals below, then sign in to view full profiles,
            photos, and start connecting.
          </p>
        </header>

        <div className={s.filterBar}>
          <label className={s.field}>
            <span>Looking For</span>
            <select
              value={filters.gender}
              onChange={(e) => setFilters((f) => ({ ...f, gender: e.target.value as Filters["gender"] }))}
            >
              <option value="Any">Any</option>
              <option value="Bride">Bride</option>
              <option value="Groom">Groom</option>
            </select>
          </label>
          <label className={s.field}>
            <span>District</span>
            <select
              value={filters.location}
              onChange={(e) => setFilters((f) => ({ ...f, location: e.target.value }))}
            >
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </label>
          <label className={s.field}>
            <span>Religion</span>
            <select
              value={filters.religion}
              onChange={(e) => setFilters((f) => ({ ...f, religion: e.target.value }))}
            >
              {RELIGIONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </label>
          <button type="button" className={s.searchBtn} onClick={handleSearch}>
            <SearchIcon />
            Search Proposals
          </button>
        </div>

        <div className={s.grid}>
          {results.map((p) => (
            <button type="button" key={p.id} className={s.card} onClick={goToLogin}>
              <span className={s.avatar} aria-hidden="true">
                <LockIcon />
              </span>
              <span className={s.name}>{p.name}</span>
              <span className={s.meta}>
                {p.gender} &middot; {p.age} yrs &middot; {p.location}
              </span>
              <span className={s.meta}>
                {p.religion} &middot; {p.profession}
              </span>
              <span className={s.viewLink}>Sign in to view profile &rarr;</span>
            </button>
          ))}
        </div>

        {total > results.length && (
          <p className={s.more}>
            Showing {results.length} of {total} matching sample proposals.{" "}
            <button type="button" className={s.moreLink} onClick={goToLogin}>
              Sign in to see the rest
            </button>
          </p>
        )}
      </div>
    </section>
  );
}
