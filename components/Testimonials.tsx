import s from "./Testimonials.module.css";

const VALUES = [
  {
    icon: "🏛️",
    title: "Rooted in Tradition",
    body: "We deeply respect Sri Lankan culture, family values, and the sacred nature of marriage. Karakaara is built around these foundations - not just as a feature, but as a commitment.",
  },
  {
    icon: "🔒",
    title: "Privacy & Trust First",
    body: "Your profile, your story, and your family's trust matter to us. We apply strict verification and privacy controls so every connection feels safe and genuine.",
  },
  {
    icon: "🌏",
    title: "Connecting the Diaspora",
    body: "Whether you are in Colombo, Melbourne, London, or Toronto - Karakaara bridges distance so Sri Lankans everywhere can find a partner who shares their roots and values.",
  },
];

export default function Testimonials() {
  return (
    <section
      className={`${s.testimonials} section`}
      id="about"
      aria-labelledby="about-h"
    >
      <div className="container">
        <header className="section-hdr">
          <span className="badge">About Us</span>
          <h2 className="section-title" id="about-h">
            Built for Sri Lanka, by Sri Lankans
          </h2>
          <p className="section-sub">
            Karakaara was born from a simple belief - finding a life partner
            should honour your culture, involve your family, and feel completely
            yours. We are a team of Sri Lankans passionate about making that
            happen for every community, at home and around the world.
          </p>
        </header>

        <div className={s.grid}>
          {VALUES.map((v) => (
            <div key={v.title} className={s.card}>
              <div className={s.quoteMark} aria-hidden>
                {v.icon}
              </div>
              <p
                className={s.text}
                style={{ fontStyle: "normal", marginTop: "3rem" }}
              >
                {v.body}
              </p>
              <div className={s.author}>
                <div>
                  <div className={s.name}>{v.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
── TESTIMONIALS — restore when real user stories are available ──────────────

const TESTIMONIALS = [
  {
    text: 'Karakaara understood our Sri Lankan values. We found each other within weeks, and our families couldn\'t be happier. The platform made the whole process feel both modern and beautifully traditional.',
    name: 'Nimali & Kamal',
    location: 'Colombo, Sri Lanka',
    initials: 'NK',
  },
  {
    text: 'As part of the diaspora, finding someone who shared our Sri Lankan roots was so important to us. Karakaara made it possible across continents. Our poruwa ceremony was everything we dreamed of.',
    name: 'Priya & Sanjeewa',
    location: 'Melbourne, Australia',
    initials: 'PS',
  },
  {
    text: 'The proposal system is so thoughtful — it captured everything about who we are. My family was involved every step of the way. This is truly a platform built for us.',
    name: 'Dilini & Malith',
    location: 'Kandy, Sri Lanka',
    initials: 'DM',
  },
];

export default function Testimonials() {
  return (
    <section className={`${s.testimonials} section`} id="about" aria-labelledby="testi-h">
      <div className="container">
        <motion.header
          className="section-hdr"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <span className="badge">Stories of Joy</span>
          <h2 className="section-title" id="testi-h">Hearts United Through Karakaara</h2>
          <p className="section-sub">Real stories from couples who found their perfect match</p>
        </motion.header>

        <motion.div
          className={s.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} className={s.card} variants={item}>
              <div className={s.quoteMark} aria-hidden>&ldquo;</div>
              <p className={s.text}>{t.text}</p>
              <div className={s.author}>
                <div className={s.avatar} aria-hidden>{t.initials}</div>
                <div>
                  <div className={s.name}>{t.name}</div>
                  <div className={s.location}>{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
*/
