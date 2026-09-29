"use client";

import { useSyncExternalStore } from "react";
import {
  DEFAULT_REGION,
  PUBLISH_PLAN_MONTHS,
  PUBLISH_PRICES,
  detectRegion,
  formatPrice,
} from "@/lib/pricing";
import s from "./Pricing.module.css";

const noopSubscribe = () => () => {};

const FEATURES = [
  `Your proposal stays published for ${PUBLISH_PLAN_MONTHS} months`,
  "Visible to verified members looking for a match",
  "Receive and respond to proposals",
  "One-time payment - no auto-renewal, no hidden charges",
];

export default function Pricing() {
  const region = useSyncExternalStore(noopSubscribe, detectRegion, () => DEFAULT_REGION);
  const price = PUBLISH_PRICES[region];

  return (
    <section className={`${s.pricing} section`} id="pricing" aria-labelledby="pricing-h">
      <div className="container">
        <header className="section-hdr">
          <span className="badge">Simple, Transparent Pricing</span>
          <h2 className="section-title" id="pricing-h">
            Pay Only When It Matters
          </h2>
          <p className="section-sub">
            Publish your proposal for {PUBLISH_PLAN_MONTHS} months with a single,
            affordable payment - no subscriptions, no hidden charges.
          </p>
        </header>

        <div className={s.grid} data-stagger>
          <div className={`${s.card} ${s.popular}`}>
            <span className={s.ribbon}>Publish Proposal</span>
            <div className={s.name}>{PUBLISH_PLAN_MONTHS}-Month Listing</div>
            <div className={s.price}>{formatPrice(price)}</div>
            <div className={s.credits}>for {PUBLISH_PLAN_MONTHS} months</div>
            <ul className={s.features}>
              {FEATURES.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className={s.note} data-reveal>
          Prices are shown in your local currency based on your region. Sri
          Lankan members pay LKR {PUBLISH_PRICES.lk.amount}; the exact amount is
          confirmed in the app before payment.
        </p>
      </div>
    </section>
  );
}
