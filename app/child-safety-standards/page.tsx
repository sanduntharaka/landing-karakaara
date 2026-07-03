import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LegalContactLinks from "../privacy/LegalContactLinks";
import s from "../privacy/Privacy.module.css";

export const metadata: Metadata = {
  title: "Child Safety Standards | Karakaara",
  description:
    "Karakaara's standards and commitment against child sexual abuse and exploitation (CSAE), our age requirements, reporting mechanisms, and cooperation with law enforcement.",
  alternates: { canonical: "https://karakaara.lk/child-safety-standards" },
  openGraph: {
    title: "Child Safety Standards | Karakaara",
    description:
      "Karakaara's zero-tolerance policy, safeguards, and reporting process for child sexual abuse and exploitation (CSAE).",
    url: "https://karakaara.lk/child-safety-standards",
    siteName: "Karakaara",
    type: "website",
  },
};

const childSafetySections = [
  {
    title: "Zero-Tolerance Policy",
    body: "Karakaara has zero tolerance for child sexual abuse and exploitation (CSAE) in any form. We do not permit any content, behaviour, account, or communication on our platform that sexualizes, endangers, or exploits minors, including grooming, solicitation, or the sharing of child sexual abuse material (CSAM). Any account found engaging in such behaviour is immediately banned and reported to the relevant authorities.",
  },
  {
    title: "Age Requirement",
    body: "Karakaara is a matrimony platform intended solely for adults. Users must be at least 18 years old to register and create a profile. We review submitted profiles and may request additional verification where age or identity is in question, and we remove accounts that we determine belong to minors.",
  },
  {
    title: "Prevention and Safeguards",
    body: "Every proposal and profile may be manually reviewed by our team before it goes live to help keep the community genuine and safe. We use a combination of manual review and reporting tools to detect and remove content or accounts that violate our child safety standards.",
  },
  {
    title: "In-App Reporting",
    body: "Users can report a profile, proposal, or conversation directly within the Karakaara app whenever they encounter behaviour that concerns them, including anything that may relate to child sexual abuse or exploitation. Reports are reviewed by our safety team, who may block, restrict, or permanently remove the reported account.",
  },
  {
    title: "Reporting CSAE to Us",
    body: "If you become aware of any content, account, or behaviour on Karakaara that may involve child sexual abuse or exploitation, please report it immediately through the in-app report feature or contact us directly using the details below. Reports are treated with urgency and confidentiality.",
  },
  {
    title: "Cooperation with Law Enforcement",
    body: "We cooperate with law enforcement agencies and relevant child safety organizations, and comply with applicable laws, including reporting obligations to agencies such as the National Center for Missing & Exploited Children (NCMEC) where required, to help protect children from abuse and exploitation.",
  },
];

const sinhalaChildSafetySections = [
  {
    title: "ශුන්‍ය-ඉවසීම ප්‍රතිපත්තිය",
    body: "ළමා ලිංගික අපයෝජනය සහ සූරාකෑම (CSAE) පිළිබඳව කරකාරයට කිසිදු ඉවසීමක් නැත. නොමිනිසුන් ලිංගිකකරණය කිරීම, අනතුරට ලක් කිරීම හෝ සූරාකෑම වැනි කිසිදු අන්තර්ගතයක්, හැසිරීමක්, ගිණුමක් හෝ සන්නිවේදනයක් අප වේදිකාව මත ඉඩ නොදේ. එවැනි හැසිරීමක නිරත වන ඕනෑම ගිණුමක් වහාම අවහිර කර අදාළ බලධාරීන්ට වාර්තා කරනු ලැබේ.",
  },
  {
    title: "වයස් අවශ්‍යතාව",
    body: "කරකාර යනු වැඩිහිටියන් සඳහා පමණක් වූ විවාහ වේදිකාවකි. ලියාපදිංචි වී ප්‍රොෆයිලයක් සෑදීමට පරිශීලකයින් අවම වශයෙන් වයස අවුරුදු 18ක් සම්පූර්ණ කර තිබිය යුතුය. වයස හෝ අනන්‍යතාව සැක සහිත අවස්ථාවල අප අමතර තහවුරු කිරීමක් ඉල්ලා සිටිය හැකි අතර, නොමිනිසුන්ට අයත් බව තහවුරු වන ගිණුම් ඉවත් කරනු ලැබේ.",
  },
  {
    title: "වැළැක්වීම සහ ආරක්ෂණ",
    body: "ප්‍රජාව සැබෑ සහ ආරක්ෂිත බව තහවුරු කිරීමට, සෑම යෝජනාවක් සහ ප්‍රොෆයිලයක්ම ප්‍රකාශයට පත් කිරීමට පෙර අපගේ කණ්ඩායම විසින් අතින් සමාලෝචනය කළ හැක. අපගේ ළමා ආරක්ෂණ ප්‍රමිතීන් උල්ලංඝනය කරන අන්තර්ගත හෝ ගිණුම් හඳුනාගෙන ඉවත් කිරීමට අතින් සමාලෝචනය සහ වාර්තා කිරීමේ මෙවලම් අප භාවිත කරමු.",
  },
  {
    title: "යෙදුම තුළින් වාර්තා කිරීම",
    body: "ළමා ලිංගික අපයෝජනයට හෝ සූරාකෑමට අදාළ විය හැකි ඕනෑම හැසිරීමක් හමුවූ විට, පරිශීලකයින්ට කරකාර යෙදුම තුළින්ම ප්‍රොෆයිලයක්, යෝජනාවක් හෝ සංවාදයක් වාර්තා කළ හැක. වාර්තා අපගේ ආරක්ෂණ කණ්ඩායම විසින් සමාලෝචනය කරන අතර, එමගින් ගිණුම අවහිර කිරීම, සීමා කිරීම හෝ ස්ථිරවම ඉවත් කිරීම සිදු කළ හැක.",
  },
  {
    title: "අපට CSAE වාර්තා කිරීම",
    body: "ළමා ලිංගික අපයෝජනයට හෝ සූරාකෑමට සම්බන්ධ විය හැකි කිසියම් අන්තර්ගතයක්, ගිණුමක් හෝ හැසිරීමක් ඔබ දුටුවහොත්, කරුණාකර යෙදුමේ ඇති 'Report' පහසුකම හරහා හෝ පහත සඳහන් ක්‍රම හරහා අප වහාම දැනුවත් කරන්න. වාර්තා හදිසි කාරණයක් ලෙසත් රහසිගතව සලකනු ලැබේ.",
  },
  {
    title: "නීතිය ක්‍රියාත්මක කිරීමේ ආයතන සමඟ සහයෝගය",
    body: "ළමයින් අපයෝජනයෙන් සහ සූරාකෑමෙන් ආරක්ෂා කර ගැනීමට, අවශ්‍ය අවස්ථාවල National Center for Missing & Exploited Children (NCMEC) වැනි ආයතන වෙත වාර්තා කිරීම ඇතුළුව අදාළ නීති සමඟ අප අනුකූල වන අතර, නීතිය ක්‍රියාත්මක කිරීමේ ආයතන සහ අදාළ ළමා ආරක්ෂණ සංවිධාන සමඟ සහයෝගයෙන් කටයුතු කරමු.",
  },
];

export default function ChildSafetyStandardsPage() {
  return (
    <>
      <Nav />
      <main className={s.page}>
        <section className={s.hero}>
          <div className="container">
            <Link href="/" className={s.backLink}>
              Back to home
            </Link>
            <span className="badge">Child Safety</span>
            <h1>Our Child Safety Standards</h1>
            <p>
              Karakaara is committed to preventing child sexual abuse and
              exploitation (CSAE) on our platform. This page explains our
              standards, safeguards, and how to report a concern.
            </p>
          </div>
        </section>

        <section className={s.content} aria-labelledby="child-safety-standards">
          <div className="container">
            <div className={s.policyGrid}>
              <div className={s.langHeader}>
                <p>Policy</p>
                <h2 id="child-safety-standards">Child Safety Standards</h2>
              </div>
              <div className={s.sections}>
                <section className={s.policySection}>
                  <p>
                    Karakaara is an online matrimony platform operated by
                    Lankovate, intended exclusively for adults seeking a life
                    partner. The safety of every member, and the prevention of
                    child sexual abuse and exploitation (CSAE) in particular,
                    is a fundamental part of how we operate our website and
                    mobile app.
                  </p>
                  <p>
                    This page sets out our standards regarding CSAE, in line
                    with our obligations under applicable app store and legal
                    requirements, and explains how members and the public can
                    report a concern.
                  </p>
                </section>
                {childSafetySections.map((section) => (
                  <section className={s.policySection} key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.body}</p>
                  </section>
                ))}
                <LegalContactLinks
                  title="Report a Concern"
                  intro="To report content, an account, or behaviour that may involve child sexual abuse or exploitation, contact us immediately through any of the channels below."
                />
                <p className={s.closing}>
                  Protecting children is a responsibility we take seriously.
                  Reports made in good faith are always welcome and are
                  handled with urgency and confidentiality.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={s.content}
          aria-labelledby="sinhala-child-safety-standards"
        >
          <div className="container">
            <div className={s.policyGrid}>
              <div className={s.langHeader}>
                <p>සිංහල</p>
                <h2 id="sinhala-child-safety-standards">
                  ළමා ආරක්ෂණ ප්‍රමිතීන්
                </h2>
              </div>
              <div className={s.sections} lang="si">
                <section className={s.policySection}>
                  <p>
                    කරකාර යනු Lankovate විසින් මෙහෙයවනු ලබන, ජීවිත සහකාරියක්/
                    සහකරුවෙකු සොයන වැඩිහිටියන් සඳහා පමණක් වූ ඔන්ලයින් විවාහ
                    වේදිකාවකි. සෑම සාමාජිකයෙකුගේම ආරක්ෂාව, විශේෂයෙන්ම ළමා
                    ලිංගික අපයෝජනය සහ සූරාකෑම (CSAE) වැළැක්වීම, අපගේ වෙබ් අඩවිය
                    සහ ජංගම යෙදුම මෙහෙයවීමේ මූලික අංගයකි.
                  </p>
                  <p>
                    මෙම පිටුවෙන් අදාළ app store සහ නීතිමය අවශ්‍යතාවලට අනුකූලව
                    CSAE සම්බන්ධයෙන් අපගේ ප්‍රමිතීන් දක්වන අතර, සාමාජිකයින්ට
                    සහ පොදු ජනතාවට කරුණක් වාර්තා කරන ආකාරය පැහැදිලි කරයි.
                  </p>
                </section>
                {sinhalaChildSafetySections.map((section) => (
                  <section className={s.policySection} key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.body}</p>
                  </section>
                ))}
                <LegalContactLinks
                  title="කරුණක් වාර්තා කරන්න"
                  intro="ළමා ලිංගික අපයෝජනයට හෝ සූරාකෑමට සම්බන්ධ විය හැකි අන්තර්ගතයක්, ගිණුමක් හෝ හැසිරීමක් වාර්තා කිරීමට, පහත ඕනෑම ක්‍රමයක් හරහා අප වහාම අමතන්න."
                />
                <p className={s.closing}>
                  ළමයින් ආරක්ෂා කිරීම අප බැරෑරුම් ලෙස සලකන වගකීමකි. යහපත්
                  චේතනාවෙන් කරන වාර්තා සැමවිටම පිළිගනු ලබන අතර, ඒවා හදිසි
                  කාරණයක් ලෙසත් රහසිගතව හසුරුවනු ලැබේ.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
