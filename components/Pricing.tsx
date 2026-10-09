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
  "Advertisement publication",
  "Your own Advertisement No (e.g. KRA-10284)",
  "Search visibility across Sri Lanka and overseas",
  "Review and verification by the Karakaara team",
  "Receive inquiries - no fee to respond",
  `${PUBLISH_PLAN_MONTHS}-month validity`,
  "One-time payment - no automatic renewal",
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
            One Simple Fee to Publish
          </h2>
          <p className="section-sub">
            Pay once to publish your matrimonial advertisement for{" "}
            {PUBLISH_PLAN_MONTHS} months - no connection fees, no subscriptions,
            no hidden charges.
          </p>
        </header>

        <div className={s.grid} data-stagger>
          <div className={`${s.card} ${s.popular}`}>
            <span className={s.ribbon}>Post Advertisement</span>
            <div className={s.name}>Basic Advertisement</div>
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
          Lankan advertisers pay LKR {PUBLISH_PRICES.lk.amount}; the exact amount is
          confirmed in the app before payment.
        </p>
      </div>
    </section>
  );
}
