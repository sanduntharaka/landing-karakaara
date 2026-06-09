import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LegalContactLinks from "./LegalContactLinks";
import s from "./Privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Karakaara",
  description:
    "Learn how Karakaara collects, uses, shares, and protects personal information for members and PayHere payments.",
  alternates: { canonical: "https://karakaara.lk/privacy" },
  openGraph: {
    title: "Privacy Policy | Karakaara",
    description:
      "How Karakaara protects your information, conversations, reports, and payments.",
    url: "https://karakaara.lk/privacy",
    siteName: "Karakaara",
    type: "website",
  },
};

const privacySections = [
  {
    title: "Information We Collect",
    body: "When you use Karakaara, we may collect information you provide during registration, profile creation, proposal submission, communication, support requests, and payment activity. This may include your name, age, gender, contact details, photos, profile details, preferences, device information, app usage information, and transaction references. Payment card details, CVV, and payment credentials are handled securely by PayHere and are not stored on Karakaara servers.",
  },
  {
    title: "Use of Information",
    body: "We use your information to create and manage your account, review proposals, show suitable matches, enable approved communication, process paid features, provide support, improve our services, prevent fraud, protect members, and comply with legal or regulatory requirements.",
  },
  {
    title: "Information Sharing",
    body: "We do not sell your personal information. Sensitive details such as photos and contact numbers are shared with another member only after you personally approve the request. We may share limited information with trusted service providers who help us operate Karakaara, including PayHere for payment processing, hosting providers, security tools, analytics providers, and support services. We may also disclose information when required by law or to protect members and the platform.",
  },
  {
    title: "Proposal Review and Member Safety",
    body: "Before a proposal goes live, our team may manually review it to help keep profiles genuine and the community trustworthy. If you report suspicious or unsafe behaviour, our team reviews the report and may take appropriate action, including restricting, blocking, or removing accounts or proposals.",
  },
  {
    title: "Chats and Conversation Data",
    body: "Chats between matched members are end-to-end encrypted so only the connected members can read them. If a proposal is blocked, related chat messages may be permanently deleted from our systems as part of our safety process.",
  },
  {
    title: "Data Security",
    body: "We take reasonable technical and organizational steps to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no internet-based service can be guaranteed to be completely secure, and members should also take care when sharing personal information online.",
  },
  {
    title: "Cookies and Tracking Technologies",
    body: "Our website and app may use cookies, analytics, or similar technologies to understand usage, improve performance, prevent abuse, and support marketing or service improvements. You may be able to limit cookies through your browser or device settings, but some features may not work correctly if cookies or tracking permissions are disabled.",
  },
  {
    title: "PayHere Payment Data",
    body: "When you make a payment, the information required to complete the transaction is shared directly with PayHere. This may include card details, billing details, contact information, and transaction information. PayHere's data practices are governed by their own privacy policy, which we encourage you to review on their official website.",
  },
  {
    title: "Changes to the Privacy Policy",
    body: "We may update this Privacy Policy from time to time as we improve Karakaara or meet legal, operational, or payment gateway requirements. Updated versions will be posted on this page.",
  },
];

const sinhalaPrivacySections = [
  {
    title: "අප රැස් කරන තොරතුරු",
    body: "ඔබ කරකාර භාවිත කරන විට, ලියාපදිංචිය, ප්‍රොෆයිල් නිර්මාණය, යෝජනා ඉදිරිපත් කිරීම, සන්නිවේදනය, සහාය ඉල්ලීම් සහ ගෙවීම් ක්‍රියාකාරකම් අතරතුර ඔබ ලබා දෙන තොරතුරු අප රැස් කළ හැක. මෙයට ඔබේ නම, වයස, ස්ත්‍රී/පුරුෂ භාවය, සම්බන්ධතා විස්තර, ඡායාරූප, ප්‍රොෆයිල් විස්තර, කැමැත්තන්, උපාංග තොරතුරු, යෙදුම් භාවිත තොරතුරු සහ ගනුදෙනු යොමු අංක ඇතුළත් විය හැක. කාඩ්පත් විස්තර, CVV සහ ගෙවීම් අක්තපත්‍ර PayHere විසින් ආරක්ෂිතව හසුරුවන අතර කරකාර සේවාදායකවල ගබඩා නොකෙරේ.",
  },
  {
    title: "තොරතුරු භාවිතය",
    body: "ඔබේ ගිණුම නිර්මාණය කිරීම සහ කළමනාකරණය කිරීම, යෝජනා සමාලෝචනය කිරීම, සුදුසු ගැළපීම් පෙන්වීම, අනුමත සන්නිවේදනය සක්‍රීය කිරීම, ගෙවූ පහසුකම් සැකසීම, සහාය ලබා දීම, සේවාව වැඩිදියුණු කිරීම, වංචා වැළැක්වීම, සාමාජිකයන් ආරක්ෂා කිරීම සහ නීතිමය හෝ නියාමන අවශ්‍යතා සපුරාලීම සඳහා අප ඔබේ තොරතුරු භාවිත කරමු.",
  },
  {
    title: "තොරතුරු බෙදාගැනීම",
    body: "අප ඔබේ පුද්ගලික තොරතුරු විකුණන්නේ නැත. ඡායාරූප සහ දුරකථන අංක වැනි සංවේදී තොරතුරු අනෙක් සාමාජිකයෙකු සමඟ බෙදාගන්නේ ඔබ පෞද්ගලිකව අනුමත කළ පසු පමණි. කරකාර ක්‍රියාත්මක කිරීමට උපකාර වන විශ්වාසනීය සේවා සපයන්නන් සමඟ, PayHere, hosting, ආරක්ෂක, විශ්ලේෂණ සහ සහාය සේවා ඇතුළු සීමිත තොරතුරු බෙදාගත හැක.",
  },
  {
    title: "යෝජනා සමාලෝචනය සහ සාමාජික ආරක්ෂාව",
    body: "යෝජනාවක් ප්‍රකාශයට පත් කිරීමට පෙර, ප්‍රොෆයිල් සැබෑ බව සහ ප්‍රජාව විශ්වාසනීය බව තහවුරු කිරීමට අපගේ කණ්ඩායම එය අතින් සමාලෝචනය කළ හැක. ඔබ සැක සහිත හෝ අනාරක්ෂිත හැසිරීමක් වාර්තා කළහොත්, අපගේ කණ්ඩායම එය පරීක්ෂා කර සුදුසු ක්‍රියාමාර්ග ගනී.",
  },
  {
    title: "චැට් සහ සංවාද දත්ත",
    body: "ගැළපුණු සාමාජිකයන් අතර චැට් අන්තයේ සිට අන්තය දක්වා සංකේතනය කර ඇති අතර, එය කියවිය හැක්කේ සම්බන්ධ වූ සාමාජිකයන්ට පමණි. යෝජනාවක් අවහිර කළහොත්, ආරක්ෂක ක්‍රියාවලියේ කොටසක් ලෙස ඊට අදාළ චැට් පණිවිඩ අපගේ පද්ධතිවලින් ස්ථිරවම ඉවත් කළ හැක.",
  },
  {
    title: "දත්ත ආරක්ෂාව",
    body: "ඔබේ පුද්ගලික තොරතුරු අනවසර ප්‍රවේශය, වෙනස් කිරීම, හෙළිදරව් කිරීම හෝ විනාශ කිරීමෙන් ආරක්ෂා කිරීමට සාධාරණ තාක්ෂණික සහ සංවිධානාත්මක පියවර අප ගනිමු. කෙසේ වෙතත්, අන්තර්ජාලය මත පදනම් වූ කිසිදු සේවාවක් සම්පූර්ණයෙන්ම ආරක්ෂිත බවට සහතික කළ නොහැක.",
  },
  {
    title: "Cookies සහ අනුරූප තාක්ෂණයන්",
    body: "අපගේ වෙබ් අඩවිය සහ යෙදුම භාවිතය තේරුම් ගැනීමට, කාර්යසාධනය වැඩිදියුණු කිරීමට, අනිසි භාවිතය වැළැක්වීමට සහ සේවා වැඩිදියුණු කිරීම් සඳහා cookies, analytics හෝ සමාන තාක්ෂණයන් භාවිත කළ හැක.",
  },
  {
    title: "PayHere ගෙවීම් දත්ත",
    body: "ඔබ ගෙවීමක් සිදු කරන විට, ගනුදෙනුව සම්පූර්ණ කිරීමට අවශ්‍ය තොරතුරු PayHere වෙත කෙලින්ම බෙදාගනු ලැබේ. මෙයට කාඩ්පත් විස්තර, බිල් කිරීමේ විස්තර, සම්බන්ධතා තොරතුරු සහ ගනුදෙනු තොරතුරු ඇතුළත් විය හැක. PayHere හි දත්ත භාවිතය ඔවුන්ගේම පෞද්ගලිකත්ව ප්‍රතිපත්තිය මඟින් පාලනය වේ.",
  },
  {
    title: "පෞද්ගලිකත්ව ප්‍රතිපත්තියේ වෙනස්කම්",
    body: "කරකාර වැඩිදියුණු කිරීම හෝ නීතිමය, මෙහෙයුම් හෝ ගෙවීම් ද්වාර අවශ්‍යතා සපුරාලීම සඳහා අප මෙම පෞද්ගලිකත්ව ප්‍රතිපත්තිය කලින් කලට යාවත්කාලීන කළ හැක. යාවත්කාලීන කළ අනුවාද මෙම පිටුවේ පළ කරනු ලැබේ.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className={s.page}>
        <section className={s.hero}>
          <div className="container">
            <Link href="/" className={s.backLink}>
              Back to home
            </Link>
            <span className="badge">Privacy Policy</span>
            <h1>Your privacy matters to us</h1>
            <p>
              At Karakaara, creating a safe and trustworthy space for you to
              find your life partner is at the heart of everything we do. This
              policy explains how we collect, use, share, and protect your
              information.
            </p>
          </div>
        </section>

        <section className={s.content} aria-labelledby="privacy-policy">
          <div className="container">
            <div className={s.policyGrid}>
              <div className={s.langHeader}>
                <p>Policy</p>
                <h2 id="privacy-policy">Privacy Policy</h2>
              </div>
              <div className={s.sections}>
                <section className={s.policySection}>
                  <p>
                    The website karakaara.lk [the &ldquo;Site&rdquo; /
                    &ldquo;Karakaara.lk&rdquo;] is owned and operated by
                    Lankovate, which together with its affiliate partners
                    [collectively referred to as &ldquo;We&rdquo;,
                    &ldquo;Us&rdquo;, or &ldquo;Our&rdquo;] and third-party
                    licensors provides an online matrimony platform where you as
                    a user [&ldquo;You&rdquo;] may create a profile and seek a
                    suitable life partner [&ldquo;Matrimonial Profile&rdquo;].
                  </p>
                  <p>Our Privacy Policy statement explains the following:</p>
                  <ul>
                    <li>
                      what personal information and data may be provided by You
                      as a user of the Site,
                    </li>
                    <li>
                      what information and data we gather or collect from
                      visitors to, and users (including You) of, the Site by the
                      use of cookies and other technologies, and
                    </li>
                    <li>
                      how we store, use, share, disclose, and protect such
                      information and data.
                    </li>
                  </ul>
                  <p>
                    Our Privacy Policy applies to karakaara.lk and to the
                    Karakaara mobile app related to the Site.
                  </p>
                </section>
                {privacySections.map((section) => (
                  <section className={s.policySection} key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.body}</p>
                  </section>
                ))}
                <LegalContactLinks
                  title="Contact Us"
                  intro="If you have questions, concerns, or requests about this Privacy Policy or how your information is handled, use any of the channels below."
                />
                <p className={s.closing}>
                  By continuing to use Karakaara, you agree to the practices
                  described in this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={s.content} aria-labelledby="sinhala-privacy-policy">
          <div className="container">
            <div className={s.policyGrid}>
              <div className={s.langHeader}>
                <p>සිංහල</p>
                <h2 id="sinhala-privacy-policy">පෞද්ගලිකත්ව ප්‍රතිපත්තිය</h2>
              </div>
              <div className={s.sections} lang="si">
                <section className={s.policySection}>
                  <p>
                    karakaara.lk වෙබ් අඩවිය [&ldquo;Site&rdquo; /
                    &ldquo;Karakaara.lk&rdquo;] හිමිකාරිත්වය සහ
                    කළමනාකරණය Lankovate සතු වන අතර, එය සහ එහි
                    සහකාර හවුල්කරුවන් [සමූහිකව &ldquo;අපි&rdquo;,
                    &ldquo;අපට&rdquo;, හෝ &ldquo;අපගේ&rdquo; ලෙස
                    හඳුන්වනු ලැබේ] සහ තෙවන පාර්ශ්ව බලපත්‍ර
                    දරන්නන් ඔබ වැනි භාවිත කරන්නෙකු
                    [&ldquo;ඔබ&rdquo;] ජීවිත සහකාරිය/සහකරු සෙවීම
                    සඳහා [&ldquo;විවාහ ප්‍රොෆයිල්&rdquo;] ප්‍රොෆයිලයක්
                    සෑදීමට හැකිවන ඔන්ලයින් විවාහ වේදිකාවක් ලබා
                    දෙයි.
                  </p>
                  <p>
                    අපගේ පෞද්ගලිකත්ව ප්‍රතිපත්තිය පහත කරුණු
                    පැහැදිලි කරයි:
                  </p>
                  <ul>
                    <li>
                      Site හි භාවිත කරන්නෙකු ලෙස ඔබ විසින් ලබා
                      දිය හැකි පුද්ගලික තොරතුරු සහ දත්ත මොනවාද,
                    </li>
                    <li>
                      cookies සහ වෙනත් තාක්ෂණයන් භාවිතයෙන් Site
                      නරඹන්නන්ගෙන් සහ ඔබ ඇතුළු භාවිත
                      කරන්නන්ගෙන් අප රැස් කරන තොරතුරු
                      මොනවාද, සහ
                    </li>
                    <li>
                      එවැනි තොරතුරු අප ගබඩා කරන, භාවිත කරන,
                      බෙදාගන්නා, හෙළිදරව් කරන සහ ආරක්ෂා කරන
                      ආකාරය.
                    </li>
                  </ul>
                  <p>
                    අපගේ පෞද්ගලිකත්ව ප්‍රතිපත්තිය karakaara.lk
                    සහ Site ට අදාළ Karakaara ජංගම යෙදුමට
                    අදාළ වේ.
                  </p>
                </section>
                {sinhalaPrivacySections.map((section) => (
                  <section className={s.policySection} key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.body}</p>
                  </section>
                ))}
                <LegalContactLinks
                  title="අප අමතන්න"
                  intro="මෙම පෞද්ගලිකත්ව ප්‍රතිපත්තිය හෝ ඔබේ තොරතුරු හසුරුවන ආකාරය පිළිබඳ ප්‍රශ්න තිබේ නම්, පහත ක්‍රමයකින් කරකාර අමතන්න."
                />
                <p className={s.closing}>
                  කරකාර භාවිතය දිගටම කරගෙන යාමෙන්, ඔබ මෙම පෞද්ගලිකත්ව
                  ප්‍රතිපත්තියේ විස්තර කර ඇති භාවිතයන්ට එකඟ වන බව සලකනු ලැබේ.
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
