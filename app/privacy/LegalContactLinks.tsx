import s from "./Privacy.module.css";

type LegalContactLinksProps = Readonly<{
  title: string;
  intro: string;
}>;

export default function LegalContactLinks({
  title,
  intro,
}: LegalContactLinksProps) {
  return (
    <section className={s.policySection}>
      <h3>{title}</h3>
      <p>{intro}</p>
      <div className={s.contactLinks}>
        <a href="mailto:contact@karakaara.lk" className={s.contactLink}>
          Email
          <span>contact@karakaara.lk</span>
        </a>
        <a href="tel:+94767700657" className={s.contactLink}>
          Phone
          <span>+94 76 770 0657</span>
        </a>
        <a
          href="https://wa.me/+94767700657"
          className={s.contactLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
          <span>Message us</span>
        </a>
        <a
          href="https://web.facebook.com/profile.php?id=61590546328729"
          className={s.contactLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
          <span>Visit page</span>
        </a>
      </div>
    </section>
  );
}
