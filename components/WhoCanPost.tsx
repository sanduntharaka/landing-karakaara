import s from "./WhoCanPost.module.css";

const POSTERS = [
  {
    icon: "🙋",
    title: "Individual",
    desc: "Post an advertisement for yourself.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Parent",
    desc: "Post an advertisement for your son or daughter.",
  },
  {
    icon: "🤝",
    title: "Family Member",
    desc: "Post on behalf of a sibling or relative.",
  },
  {
    icon: "🛡️",
    title: "Guardian",
    desc: "Post on behalf of the person you represent.",
  },
];

export default function WhoCanPost() {
  return (
    <section className={`${s.who} section`} id="families" aria-labelledby="who-h">
      <div className="container">
        <header className="section-hdr">
          <span className="badge">Parents &amp; Families</span>
          <h2 className="section-title" id="who-h">
            Who Can Post?
          </h2>
          <p className="section-sub">
            In Sri Lanka, finding a partner is often a family matter. On
            Karakaara, parents and relatives can post too - and every
            advertisement shows who posted it.
          </p>
        </header>

        <div className={s.grid} data-stagger>
          {POSTERS.map((p) => (
            <div key={p.title} className={s.card}>
              <span className={s.icon} aria-hidden>
                {p.icon}
              </span>
              <h3 className={s.title}>{p.title}</h3>
              <p className={s.desc}>{p.desc}</p>
            </div>
          ))}
        </div>

        <p className={s.example} data-reveal>
          Shown on every advertisement:{" "}
          <strong>Advertisement posted by: Mother</strong>
        </p>
      </div>
    </section>
  );
}
