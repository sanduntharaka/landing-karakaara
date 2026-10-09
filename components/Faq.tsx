import { PUBLISH_PLAN_MONTHS, PUBLISH_PRICES } from "@/lib/pricing";
import s from "./Faq.module.css";

export const FAQS = [
  {
    q: "What is Karakaara?",
    a: "Karakaara is a trusted digital platform where Sri Lankan individuals and families can publish, discover and respond to matrimonial advertisements - the traditional Sri Lankan matrimonial advertisement, brought online.",
  },
  {
    q: "Who can post a matrimonial advertisement?",
    a: "You can post an advertisement for yourself, or a parent, sibling, relative or guardian can post on someone's behalf. Each advertisement shows who posted it, for example \"Advertisement posted by: Mother\".",
  },
  {
    q: "How much does it cost to post an advertisement?",
    a: `A Basic Advertisement costs LKR ${PUBLISH_PRICES.lk.amount} and stays published for ${PUBLISH_PLAN_MONTHS} months. Advertisers outside Sri Lanka pay the equivalent in their local currency. It is a one-time payment with no automatic renewal.`,
  },
  {
    q: "Do I have to pay to send or respond to an inquiry?",
    a: "No. Browsing advertisements, sending inquiries and responding to them carry no connection fees. You only pay to publish your own advertisement.",
  },
  {
    q: "Will my phone number be shown publicly?",
    a: "No. Your phone number and email are hidden by default. Interested parties send an inquiry through Karakaara, and you decide whether to respond and how to share your contact details.",
  },
  {
    q: "How are advertisements reviewed?",
    a: "Every advertisement is reviewed by the Karakaara team before it is published. We check for fake or misleading information, offensive content, spam and duplicates. Approved advertisements display a Verified Advertisement badge.",
  },
  {
    q: "What happens when my advertisement expires?",
    a: `Your advertisement is removed from public listings after ${PUBLISH_PLAN_MONTHS} months. Nothing is charged automatically - you can choose to publish it again whenever you like.`,
  },
  {
    q: "Can Sri Lankans living overseas use Karakaara?",
    a: "Yes. Karakaara is built for Sri Lankans at home and across the diaspora, including the UK, Australia, Canada, Europe, the Middle East and beyond.",
  },
];

export default function Faq() {
  return (
    <section className={`${s.faq} section`} id="faq" aria-labelledby="faq-h">
      <div className="container">
        <header className="section-hdr">
          <span className="badge">FAQ</span>
          <h2 className="section-title" id="faq-h">
            Frequently Asked Questions
          </h2>
        </header>

        <div className={s.list} data-stagger>
          {FAQS.map((f) => (
            <details key={f.q} className={s.item}>
              <summary className={s.q}>{f.q}</summary>
              <p className={s.a}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
