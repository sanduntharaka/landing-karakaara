import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LegalContactLinks from "../privacy/LegalContactLinks";
import s from "../privacy/Privacy.module.css";

export const metadata: Metadata = {
  title: "Terms and Conditions | Karakaara",
  description:
    "Terms and conditions for using Karakaara matrimony services, paid features, and PayHere payments.",
  alternates: { canonical: "https://karakaara.lk/business-terms" },
  openGraph: {
    title: "Terms and Conditions | Karakaara",
    description:
      "Terms for account use, proposals, payments, refunds, community safety, and service access on Karakaara.",
    url: "https://karakaara.lk/business-terms",
    siteName: "Karakaara",
    type: "website",
  },
};

const termsSections = [
  {
    title: "Use of the Website and App",
    body: "Welcome to Karakaara. These Terms and Conditions govern your use of our website, app, and matrimony services. You must use Karakaara only for lawful, genuine, and respectful matrimony-related purposes. You are responsible for maintaining the confidentiality of your account and for all activity under your account.",
  },
  {
    title: "Eligibility and Account Information",
    body: "You must be legally eligible to use matrimony services in your jurisdiction. You agree to provide accurate, complete, and current information during registration, profile creation, proposal submission, and payment. You must not impersonate another person or submit information, photos, or content that you do not have permission to use.",
  },
  {
    title: "Service Information and Pricing",
    body: "We aim to describe Karakaara services, paid features, subscriptions, promotions, and pricing clearly. However, availability, pricing, features, and promotional offers may change from time to time. Any displayed price or offer may be subject to additional terms shown in the app or website.",
  },
  {
    title: "Orders and Payments",
    body: "By purchasing a paid service through Karakaara, you authorize the applicable charge through your selected payment method. Payments are processed by PayHere or other approved payment channels. Karakaara does not store your full card number, CVV, or payment credentials on its own servers. We may refuse, cancel, or reverse a transaction where fraud, misuse, pricing error, or service abuse is suspected.",
  },
  {
    title: "Returns and Refunds",
    body: "Our Return and Refund Policy explains when refund requests may be considered for digital services. Please review the Return and Refund Policy page before making a payment.",
  },
  {
    title: "Proposal Review and Moderation",
    body: "Karakaara may manually review proposals before publication. We may edit, reject, suspend, remove, or restrict profiles, proposals, messages, or activity that appear fraudulent, unsafe, abusive, misleading, unlawful, or inconsistent with our community standards.",
  },
  {
    title: "Member Conduct",
    body: "Members must treat others with respect. Harassment, threats, hate speech, scams, requests for inappropriate content, unauthorized advertising, attempts to collect private details without consent, and misuse of the platform are not allowed.",
  },
  {
    title: "Intellectual Property",
    body: "All content, branding, logos, designs, software, text, graphics, and materials made available by Karakaara are protected by intellectual property rights and belong to Karakaara, Lankovate, or their licensors. You may not copy, reproduce, distribute, or modify Karakaara materials without prior written permission.",
  },
  {
    title: "Service Availability",
    body: "We work to keep Karakaara reliable, but we do not guarantee uninterrupted or error-free access. The service may be unavailable because of maintenance, upgrades, network issues, security work, payment gateway downtime, or events outside our control.",
  },
  {
    title: "Limitation of Liability",
    body: "Karakaara helps members discover and communicate with potential matches, but members are responsible for their own decisions, communications, meetings, and personal arrangements. We do not guarantee marriage, compatibility, proposal acceptance, or the accuracy of every statement made by another member. To the extent permitted by law, Karakaara is not liable for indirect, incidental, special, or consequential losses arising from use of the service.",
  },
  {
    title: "Amendments and Termination",
    body: "We may update these Terms and Conditions, modify services, or restrict, suspend, or terminate access where an account breaches these terms, creates safety risks, misuses the platform, attempts fraud, or harms members or the service. Continued use of Karakaara after updates are posted means you agree to the revised terms.",
  },
];

const sinhalaTermsSections = [
  {
    title: "වෙබ් අඩවිය සහ යෙදුම භාවිතය",
    body: "කරකාර වෙත සාදරයෙන් පිළිගනිමු. මෙම Terms and Conditions අපගේ වෙබ් අඩවිය, යෙදුම සහ විවාහ යෝජනා සේවාවන් භාවිතයට අදාළ වේ. කරකාර භාවිත කළ යුත්තේ නීත්‍යානුකූල, සැබෑ සහ ගෞරවණීය විවාහ යෝජනා සම්බන්ධ අරමුණු සඳහා පමණි. ඔබේ ගිණුමේ රහස්‍යතාව පවත්වා ගැනීම සහ එම ගිණුම යටතේ සිදුවන සියලු ක්‍රියාකාරකම් සඳහා ඔබ වගකිව යුතුය.",
  },
  {
    title: "සුදුසුකම් සහ ගිණුම් තොරතුරු",
    body: "ඔබේ බල ප්‍රදේශයේ විවාහ යෝජනා සේවාවන් භාවිත කිරීමට නීත්‍යානුකූලව සුදුසු විය යුතුය. ලියාපදිංචිය, ප්‍රොෆයිල් නිර්මාණය, යෝජනා ඉදිරිපත් කිරීම සහ ගෙවීම් අතරතුර නිවැරදි, සම්පූර්ණ සහ යාවත්කාලීන තොරතුරු ලබාදීමට ඔබ එකඟ වේ. වෙනත් අයෙකු ලෙස පෙනී සිටීම හෝ ඔබට භාවිත අවසර නොමැති තොරතුරු, ඡායාරූප හෝ අන්තර්ගතය ඉදිරිපත් කිරීම තහනම්ය.",
  },
  {
    title: "සේවා තොරතුරු සහ මිල ගණන්",
    body: "කරකාර සේවාවන්, ගෙවූ පහසුකම්, subscriptions, ප්‍රවර්ධන සහ මිල ගණන් පැහැදිලිව විස්තර කිරීමට අප උත්සාහ කරමු. කෙසේ වෙතත්, availability, pricing, features සහ promotional offers කලින් කලට වෙනස් විය හැක. පෙන්වන ඕනෑම මිලක් හෝ offer එකක් යෙදුමේ හෝ වෙබ් අඩවියේ දක්වන අමතර නියමයන්ට යටත් විය හැක.",
  },
  {
    title: "ඇණවුම් සහ ගෙවීම්",
    body: "කරකාර හරහා ගෙවූ සේවාවක් මිලදී ගැනීමෙන්, ඔබ තෝරාගත් ගෙවීම් ක්‍රමය හරහා අදාළ අය කිරීම සිදු කිරීමට ඔබ අවසර දෙයි. ගෙවීම් PayHere හෝ වෙනත් අනුමත payment channels හරහා සකසනු ලැබේ. කරකාර ඔබේ සම්පූර්ණ card number, CVV හෝ payment credentials තම සේවාදායකවල ගබඩා නොකරයි.",
  },
  {
    title: "ආපසු ගෙවීම්",
    body: "ඩිජිටල් සේවාවන් සඳහා refund ඉල්ලීම් සලකා බැලිය හැකි අවස්ථා අපගේ Return and Refund Policy පිටුවේ විස්තර කර ඇත. ගෙවීමක් කිරීමට පෙර එම ප්‍රතිපත්තිය සමාලෝචනය කරන්න.",
  },
  {
    title: "යෝජනා සමාලෝචනය සහ moderation",
    body: "යෝජනා ප්‍රකාශයට පත් කිරීමට පෙර කරකාර ඒවා අතින් සමාලෝචනය කළ හැක. වංචනික, අනාරක්ෂිත, අපහාසාත්මක, මඟහැරවන, නීති විරෝධී හෝ අපගේ community standards සමඟ නොගැළපෙන ප්‍රොෆයිල්, යෝජනා, පණිවිඩ හෝ ක්‍රියාකාරකම් සංස්කරණය, ප්‍රතික්ෂේප, අත්හිටුවීම, ඉවත් කිරීම හෝ සීමා කිරීම අපට හැක.",
  },
  {
    title: "සාමාජික හැසිරීම",
    body: "සාමාජිකයන් අනෙක් අය සමඟ ගෞරවයෙන් කටයුතු කළ යුතුය. හිරිහැර කිරීම, තර්ජන, hate speech, scams, අනුචිත අන්තර්ගත ඉල්ලීම්, අනවසර advertising, අවසරයකින් තොරව පුද්ගලික තොරතුරු ලබාගැනීමට උත්සාහ කිරීම සහ වේදිකාව අනිසි ලෙස භාවිත කිරීම තහනම්ය.",
  },
  {
    title: "බුද්ධිමය දේපළ",
    body: "කරකාර විසින් ලබාදෙන සියලුම content, branding, logos, designs, software, text, graphics සහ materials බුද්ධිමය දේපළ අයිතිවාසිකම් මඟින් ආරක්ෂා කර ඇති අතර කරකාර, Lankovate හෝ ඔවුන්ගේ licensors සතුය. කරකාර materials පූර්ව ලිඛිත අවසරයකින් තොරව copy, reproduce, distribute හෝ modify කළ නොහැක.",
  },
  {
    title: "සේවා ලබාගැනීමේ හැකියාව",
    body: "කරකාර විශ්වාසනීයව පවත්වාගෙන යාමට අප උත්සාහ කළත්, අඛණ්ඩ හෝ දෝෂ රහිත ප්‍රවේශයක් සහතික නොකරමු. maintenance, upgrades, network issues, security work, payment gateway downtime හෝ අපගේ පාලනයෙන් පිටත සිදුවීම් නිසා සේවාව තාවකාලිකව ලබාගත නොහැකි විය හැක.",
  },
  {
    title: "වගකීම් සීමාව",
    body: "කරකාර සාමාජිකයන්ට යෝග්‍ය ගැළපීම් සොයාගැනීමට සහ සන්නිවේදනය කිරීමට උපකාර කරයි. නමුත් තීරණ, සන්නිවේදන, හමුවීම් සහ පුද්ගලික සැලසුම් සඳහා සාමාජිකයන්ම වගකිව යුතුය. විවාහය, compatibility, proposal acceptance හෝ අනෙක් සාමාජිකයෙකු කරන සෑම ප්‍රකාශයකම නිරවද්‍යතාව අප සහතික නොකරමු.",
  },
  {
    title: "සංශෝධන සහ අවසන් කිරීම",
    body: "මෙම Terms and Conditions යාවත්කාලීන කිරීම, සේවාවන් වෙනස් කිරීම, හෝ ගිණුමක් මෙම නියමයන් උල්ලංඝනය කිරීම, ආරක්ෂක අවදානම් ඇති කිරීම, වේදිකාව අනිසි ලෙස භාවිත කිරීම, වංචා උත්සාහ කිරීම හෝ සාමාජිකයන්ට හෝ සේවාවට හානි කිරීම සිදු වූ විට ප්‍රවේශය සීමා, අත්හිටුවීම හෝ අවසන් කිරීම අපට හැක.",
  },
];

export default function BusinessTermsPage() {
  return (
    <>
      <Nav />
      <main className={s.page}>
        <section className={s.hero}>
          <div className="container">
            <Link href="/" className={s.backLink}>
              Back to home
            </Link>
            <span className="badge">Terms & Conditions</span>
            <h1>Terms and conditions</h1>
            <p>
              These terms explain the basic rules for using Karakaara,
              submitting proposals, making payments, and participating safely in
              the community.
            </p>
          </div>
        </section>

        <section className={s.content} aria-labelledby="terms-and-conditions">
          <div className="container">
            <div className={s.policyGrid}>
              <div className={s.langHeader}>
                <p>Terms</p>
                <h2 id="terms-and-conditions">Terms and Conditions</h2>
              </div>
              <div className={s.sections}>
                <section className={s.policySection}>
                  <p>
                    The website karakaara.lk [the &ldquo;Site&rdquo; /
                    &ldquo;Karakaara.lk&rdquo;] is owned and operated by
                    Lankovate [&ldquo;We&rdquo;, &ldquo;Us&rdquo;, or
                    &ldquo;Our&rdquo;]. By accessing or using the Site or the
                    Karakaara mobile app, you as a user [&ldquo;You&rdquo;] agree
                    to be bound by these Terms and Conditions
                    [&ldquo;Terms&rdquo;]. If You do not agree to these Terms,
                    You must not use the Site or its related services
                    [&ldquo;Services&rdquo;].
                  </p>
                  <p>These Terms govern the following:</p>
                  <ul>
                    <li>
                      your eligibility to use and access the Site and Services,
                    </li>
                    <li>
                      your conduct as a member and your responsibilities when
                      submitting a matrimonial profile [&ldquo;Matrimonial
                      Profile&rdquo;],
                    </li>
                    <li>
                      the ordering, payment, and refund of paid features through
                      the payment gateway PayHere
                      [&ldquo;Payment Gateway&rdquo;], and
                    </li>
                    <li>
                      the rights and limitations of both You and Us in
                      connection with the Services.
                    </li>
                  </ul>
                </section>
                {termsSections.map((section) => (
                  <section className={s.policySection} key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.body}</p>
                  </section>
                ))}
                <LegalContactLinks
                  title="Contact Us"
                  intro="For questions about these Terms and Conditions, use any of the channels below."
                />
                <p className={s.closing}>
                  Please read these Terms and Conditions carefully before using
                  Karakaara or making any payment through the app.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={s.content} aria-labelledby="sinhala-terms">
          <div className="container">
            <div className={s.policyGrid}>
              <div className={s.langHeader}>
                <p>සිංහල</p>
                <h2 id="sinhala-terms">නියමයන් සහ කොන්දේසි</h2>
              </div>
              <div className={s.sections} lang="si">
                <section className={s.policySection}>
                  <p>
                    karakaara.lk වෙබ් අඩවිය [&ldquo;Site&rdquo; /
                    &ldquo;Karakaara.lk&rdquo;] හිමිකාරිත්වය සහ
                    කළමනාකරණය Lankovate [&ldquo;අපි&rdquo;,
                    &ldquo;අපට&rdquo;, හෝ &ldquo;අපගේ&rdquo;] සතු
                    වේ. Site හෝ Karakaara ජංගම යෙදුමට ප්‍රවේශ
                    වීමෙන් හෝ භාවිත කිරීමෙන්, ඔබ
                    [&ldquo;ඔබ&rdquo;] මෙම Terms and Conditions
                    [&ldquo;නියමයන්&rdquo;] වලට බැඳී සිටීමට
                    එකඟ වේ. ඔබ මෙම නියමයන්ට එකඟ නොවේ නම්,
                    Site හෝ ඊට අදාළ සේවාවන්
                    [&ldquo;සේවාවන්&rdquo;] භාවිත නොකළ යුතුය.
                  </p>
                  <p>මෙම නියමයන් පහත කරුණු පාලනය කරයි:</p>
                  <ul>
                    <li>
                      Site සහ සේවාවන් භාවිත කිරීමට ඔබේ
                      සුදුසුකම,
                    </li>
                    <li>
                      සාමාජිකයෙකු ලෙස ඔබේ හැසිරීම සහ
                      විවාහ ප්‍රොෆයිලයක්
                      [&ldquo;විවාහ ප්‍රොෆයිල්&rdquo;]
                      ඉදිරිපත් කිරීමේදී ඔබේ වගකීම්,
                    </li>
                    <li>
                      PayHere [&ldquo;ගෙවීම් ද්වාරය&rdquo;]
                      හරහා ගෙවූ සේවා ඇණවුම් කිරීම, ගෙවීම
                      සහ refund, සහ
                    </li>
                    <li>
                      සේවාවන් සම්බන්ධව ඔබ සහ අපි දෙදෙනාගේ
                      අයිතිවාසිකම් සහ සීමාවන්.
                    </li>
                  </ul>
                </section>
                {sinhalaTermsSections.map((section) => (
                  <section className={s.policySection} key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.body}</p>
                  </section>
                ))}
                <LegalContactLinks
                  title="අප අමතන්න"
                  intro="මෙම Terms and Conditions පිළිබඳ ප්‍රශ්න සඳහා පහත ක්‍රමයකින් කරකාර අමතන්න."
                />
                <p className={s.closing}>
                  කරකාර භාවිත කිරීමට හෝ යෙදුම හරහා ගෙවීමක් කිරීමට පෙර මෙම
                  නියමයන් සහ කොන්දේසි සැලකිලිමත්ව කියවන්න.
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
