import s from "./Pricing.module.css";

type Plan = {
  id: string;
  name: string;
  price: number;
  connections: number;
  perConnection: number;
  popular: boolean;
};

const PLANS: Plan[] = [
  { id: "starter", name: "Starter", price: 300, connections: 1, perConnection: 300, popular: false },
  { id: "basic", name: "Basic", price: 1000, connections: 5, perConnection: 200, popular: false },
  { id: "popular", name: "Popular", price: 1800, connections: 10, perConnection: 180, popular: true },
  { id: "premium", name: "Premium", price: 3000, connections: 20, perConnection: 150, popular: false },
];

function formatLKR(n: number) {
  return `LKR ${n.toLocaleString("en-LK")}`;
}

export default function Pricing() {
  return (
    <section className={`${s.pricing} section`} id="pricing" aria-labelledby="pricing-h">
      <div className="container">
        <header className="section-hdr">
          <span className="badge">Simple, Transparent Pricing</span>
          <h2 className="section-title" id="pricing-h">
            Pay Only When It Matters
          </h2>
          <p className="section-sub">
            Browsing profiles and publishing proposals is completely free.
            Buy connection credits only when you&apos;re ready to unlock full
            contact details after a mutual proposal acceptance - no
            subscriptions, no hidden charges.
          </p>
        </header>

        <div className={s.grid}>
          {PLANS.map((plan) => (
            <div key={plan.id} className={`${s.card} ${plan.popular ? s.popular : ""}`}>
              {plan.popular && <span className={s.ribbon}>Most Popular</span>}
              <div className={s.name}>{plan.name}</div>
              <div className={s.price}>{formatLKR(plan.price)}</div>
              <div className={s.credits}>
                {plan.connections} connection{plan.connections > 1 ? "s" : ""}
              </div>
              <div className={s.perConn}>{formatLKR(plan.perConnection)} per connection</div>
            </div>
          ))}
        </div>

        <p className={s.note}>
          A connection credit unlocks one member&apos;s full contact details
          after both sides accept a proposal. Prices are shown in Sri Lankan
          Rupees (LKR); members outside Sri Lanka are shown equivalent
          local-currency pricing in the app.
        </p>
      </div>
    </section>
  );
}
