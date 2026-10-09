import s from "./HowItWorks.module.css";

const STEPS = [
  {
    num: "1",
    title: "Create Your Advertisement",
    desc: "Provide the details of the bride or groom you are looking for - for yourself, or on behalf of your son, daughter, sibling or relative.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="10" y="6" width="24" height="32" rx="3" fill="#8B2635" fillOpacity="0.08" stroke="#8B2635" strokeWidth="1.5" />
        <path d="M15 14h14M15 20h14M15 26h9" stroke="#D1A46E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    hasLine: true,
  },
  {
    num: "2",
    title: "Submit for Review",
    desc: "Karakaara reviews every advertisement before it is published to keep the platform genuine and family-friendly.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="19" cy="19" r="11" stroke="#8B2635" strokeWidth="1.5" fill="#D1A46E" fillOpacity="0.1" />
        <path d="M14.5 19l3 3 6-6" stroke="#8B2635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 28 L38 38" stroke="#D1A46E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    hasLine: true,
  },
  {
    num: "3",
    title: "Get Published",
    desc: "Once approved, your advertisement receives its own Advertisement No (for example KRA-10284) and becomes visible to relevant users for 3 months.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M8 18v8h6l12 8V10L14 18H8z" fill="#8B2635" fillOpacity="0.1" stroke="#8B2635" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M31 16c2 1.5 3 3.5 3 6s-1 4.5-3 6" stroke="#D1A46E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    hasLine: true,
  },
  {
    num: "4",
    title: "Receive Inquiries",
    desc: "Interested individuals and families send inquiries through Karakaara - your phone number and email are never shown publicly.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="6" y="11" width="32" height="22" rx="3" fill="#D1A46E" fillOpacity="0.12" stroke="#8B2635" strokeWidth="1.5" />
        <path d="M7 13l15 11 15-11" stroke="#D1A46E" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      </svg>
    ),
    hasLine: true,
  },
  {
    num: "5",
    title: "Connect Privately",
    desc: "You decide whether to respond, and how and when to continue the conversation with the family.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M6 10h20a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H14l-6 5v-5H6a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3z" fill="#8B2635" fillOpacity="0.1" stroke="#8B2635" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M32 18h6a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-1v5l-6-5h-8a3 3 0 0 1-3-3v-1" stroke="#D1A46E" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    hasLine: false,
  },
];

export default function HowItWorks() {
  return (
    <section
      className={`${s.hiw} section`}
      id="how-it-works"
      aria-labelledby="hiw-h"
    >
      <div className="container">
        <header className="section-hdr">
          <span className="badge">Simple Steps</span>
          <h2 className="section-title" id="hiw-h">
            How Karakaara Works
          </h2>
          <p className="section-sub">
            The familiar matrimonial advertisement - now reviewed, private and
            online
          </p>
        </header>

        <div className={s.steps} data-stagger>
          {STEPS.map((step) => (
            <div key={step.num} className={s.step}>
              <div className={s.numWrap}>
                <div className={s.num}>{step.num}</div>
                {step.hasLine && <div className={s.line} aria-hidden />}
              </div>
              <div className={s.body}>
                <div className={s.icon} aria-hidden>
                  {step.icon}
                </div>
                <h3 className={s.title}>{step.title}</h3>
                <p className={s.desc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
