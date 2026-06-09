import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LegalContactLinks from "../privacy/LegalContactLinks";
import s from "../privacy/Privacy.module.css";

export const metadata: Metadata = {
  title: "Return and Refund Policy | Karakaara",
  description:
    "Karakaara return and refund policy for digital matrimony services and PayHere payments.",
  alternates: { canonical: "https://karakaara.lk/return-policy" },
  openGraph: {
    title: "Return and Refund Policy | Karakaara",
    description:
      "How Karakaara handles returns, refunds, duplicate payments, and payment issues.",
    url: "https://karakaara.lk/return-policy",
    siteName: "Karakaara",
    type: "website",
  },
};

const refundSections = [
  {
    title: "Returns",
    body: "Karakaara provides digital matrimony services, not physical goods. Therefore, there are no physical items to return. Once a paid digital service, subscription, proposal feature, promotion, or account feature has been activated or used, it is generally considered delivered.",
  },
  {
    title: "Refunds",
    body: "Refund requests may be considered when a payment was charged more than once for the same transaction, when payment was successful but the purchased service was not activated, or when a technical issue on Karakaara's side prevented delivery of the paid service. If a refund is approved, it will be initiated to the original payment method where possible.",
  },
  {
    title: "Exchanges",
    body: "Because Karakaara services are digital, we do not offer product exchanges. If you selected the wrong paid service or experienced a service activation issue, contact us and we will review the request based on the status of the service and payment.",
  },
  {
    title: "Non-Returnable and Non-Refundable Services",
    body: "Payments are generally non-refundable for change of mind, unused time after activation, incorrect information submitted by the member, account suspension caused by a breach of our terms, completed proposal or visibility services, or issues caused by banks, cards, mobile networks, devices, or app stores outside Karakaara's control.",
  },
  {
    title: "Damaged or Defective Services",
    body: "If a paid feature is not working because of a verified technical issue on Karakaara's side, contact us with the transaction details. Depending on the issue, we may restore the service, extend access, provide an alternative correction, or approve a refund.",
  },
  {
    title: "Return Shipping",
    body: "Return shipping does not apply because Karakaara does not sell or deliver physical goods through the website or app.",
  },
  {
    title: "Processing Time",
    body: "Refund reviews are processed after we receive the required transaction details and verify the payment and service status. If approved, the refund processing time may depend on PayHere, your bank, card issuer, or payment provider.",
  },
];

const sinhalaRefundSections = [
  {
    title: "ආපසු භාරගැනීම්",
    body: "කරකාර සපයන්නේ භෞතික භාණ්ඩ නොව ඩිජිටල් විවාහ යෝජනා සේවාවන්ය. එබැවින් ආපසු භාරදීමට භෞතික භාණ්ඩ නොමැත. ගෙවූ ඩිජිටල් සේවාවක්, subscription එකක්, යෝජනා පහසුකමක්, ප්‍රවර්ධනයක් හෝ ගිණුම් පහසුකමක් සක්‍රීය කර හෝ භාවිත කර ඇත්නම්, එය සාමාන්‍යයෙන් ලබා දී අවසන් වූ සේවාවක් ලෙස සලකනු ලැබේ.",
  },
  {
    title: "මුදල් ආපසු ගෙවීම්",
    body: "එකම ගනුදෙනුව සඳහා ගෙවීම දෙවරක් අයවී ඇති විට, ගෙවීම සාර්ථක වූ නමුත් මිලදී ගත් සේවාව සක්‍රීය නොවූ විට, හෝ කරකාර පාර්ශ්වයේ තාක්ෂණික ගැටලුවක් නිසා ගෙවූ සේවාව ලබාදීමට නොහැකි වූ විට refund ඉල්ලීම් සලකා බැලිය හැක. refund එකක් අනුමත වුවහොත්, හැකි සෑම විටම මුල් ගෙවීම් ක්‍රමයටම එය ආරම්භ කරනු ලැබේ.",
  },
  {
    title: "මාරු කිරීම්",
    body: "කරකාර සේවාවන් ඩිජිටල් බැවින්, product exchange ලබා නොදේ. ඔබ වැරදි ගෙවූ සේවාවක් තෝරාගෙන තිබේ නම් හෝ සේවා සක්‍රීය කිරීමේ ගැටලුවක් ඇති නම්, අප අමතන්න. සේවාවේ තත්ත්වය සහ ගෙවීම අනුව අප ඉල්ලීම සමාලෝචනය කරමු.",
  },
  {
    title: "ආපසු නොගන්නා සහ refund නොවන සේවාවන්",
    body: "අදහස වෙනස් වීම, සක්‍රීය කිරීමෙන් පසු භාවිත නොකළ කාලය, සාමාජිකයා විසින් වැරදි තොරතුරු ලබාදීම, අපගේ නියමයන් උල්ලංඝනය කිරීම නිසා ගිණුම අත්හිටුවීම, සම්පූර්ණ කළ යෝජනා හෝ visibility සේවාවන්, හෝ කරකාර පාලනයෙන් පිටත ඇති බැංකු, කාඩ්පත්, mobile network, උපාංග හෝ app store ගැටලු සඳහා ගෙවීම් සාමාන්‍යයෙන් refund නොවේ.",
  },
  {
    title: "දෝෂ සහිත ඩිජිටල් සේවාවන්",
    body: "කරකාර පාර්ශ්වයේ තහවුරු කළ තාක්ෂණික ගැටලුවක් නිසා ගෙවූ පහසුකමක් ක්‍රියා නොකරන්නේ නම්, ගනුදෙනු විස්තර සමඟ අප අමතන්න. ගැටලුව අනුව, සේවාව නැවත සක්‍රීය කිරීම, ප්‍රවේශ කාලය දීර්ඝ කිරීම, වෙනත් නිවැරදි කිරීමක් ලබාදීම හෝ refund අනුමත කිරීම කළ හැක.",
  },
  {
    title: "Return Shipping",
    body: "කරකාර වෙබ් අඩවිය හෝ යෙදුම හරහා භෞතික භාණ්ඩ අලෙවි හෝ බෙදාහැරීම සිදු නොකරන බැවින් return shipping අදාළ නොවේ.",
  },
  {
    title: "සැකසුම් කාලය",
    body: "අවශ්‍ය ගනුදෙනු විස්තර ලැබී ගෙවීම සහ සේවා තත්ත්වය තහවුරු කිරීමෙන් පසු refund ඉල්ලීම් සමාලෝචනය කරනු ලැබේ. අනුමත වුවහොත් refund සැකසුම් කාලය PayHere, ඔබේ බැංකුව, card issuer හෝ payment provider මත රඳා පවතී.",
  },
];

export default function ReturnPolicyPage() {
  return (
    <>
      <Nav />
      <main className={s.page}>
        <section className={s.hero}>
          <div className="container">
            <Link href="/" className={s.backLink}>
              Back to home
            </Link>
            <span className="badge">Refund Policy</span>
            <h1>Return and refund policy</h1>
            <p>
              This policy explains how Karakaara handles return and refund
              requests for digital services and payments made through PayHere.
            </p>
          </div>
        </section>

        <section className={s.content} aria-labelledby="refund-policy">
          <div className="container">
            <div className={s.policyGrid}>
              <div className={s.langHeader}>
                <p>Policy</p>
                <h2 id="refund-policy">Refund Policy</h2>
              </div>
              <div className={s.sections}>
                <section className={s.policySection}>
                  <p>
                    The website karakaara.lk [the &ldquo;Site&rdquo; /
                    &ldquo;Karakaara.lk&rdquo;] is owned and operated by
                    Lankovate [&ldquo;We&rdquo;, &ldquo;Us&rdquo;, or
                    &ldquo;Our&rdquo;]. This Return and Refund Policy applies to
                    all paid digital services [&ldquo;Services&rdquo;] purchased
                    by you as a user [&ldquo;You&rdquo;] through the Site or the
                    Karakaara mobile app. Payments on the Site are processed
                    through PayHere [&ldquo;Payment Gateway&rdquo;], a
                    third-party payment service provider.
                  </p>
                  <p>This policy explains the following:</p>
                  <ul>
                    <li>
                      the conditions under which a return or refund may be
                      requested,
                    </li>
                    <li>
                      the categories of Services that are non-refundable, and
                    </li>
                    <li>
                      how We process refund requests and the applicable
                      timelines.
                    </li>
                  </ul>
                </section>
                {refundSections.map((section) => (
                  <section className={s.policySection} key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.body}</p>
                  </section>
                ))}
                <LegalContactLinks
                  title="Contact Us"
                  intro="For refund questions or requests, use any of the channels below. Please include your registered phone number or email address, transaction reference, payment date, and a short explanation of the issue."
                />
                <p className={s.closing}>
                  We may update this Return and Refund Policy from time to time.
                  The version published on this page applies to requests made
                  after it is posted.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={s.content} aria-labelledby="sinhala-refund-policy">
          <div className="container">
            <div className={s.policyGrid}>
              <div className={s.langHeader}>
                <p>සිංහල</p>
                <h2 id="sinhala-refund-policy">ආපසු ගෙවීම් ප්‍රතිපත්තිය</h2>
              </div>
              <div className={s.sections} lang="si">
                <section className={s.policySection}>
                  <p>
                    karakaara.lk වෙබ් අඩවිය [&ldquo;Site&rdquo; /
                    &ldquo;Karakaara.lk&rdquo;] හිමිකාරිත්වය සහ
                    කළමනාකරණය Lankovate [&ldquo;අපි&rdquo;,
                    &ldquo;අපට&rdquo;, හෝ &ldquo;අපගේ&rdquo;] සතු
                    වේ. මෙම Return and Refund Policy, ඔබ (&ldquo;ඔබ&rdquo;)
                    Site හෝ Karakaara ජංගම යෙදුම හරහා මිලදී ගත්
                    සියලු ගෙවූ ඩිජිටල් සේවාවන් [&ldquo;සේවාවන්&rdquo;]
                    සඳහා අදාළ වේ. Site හි ගෙවීම් PayHere
                    [&ldquo;ගෙවීම් ද්වාරය&rdquo;] හරහා සැකසේ.
                  </p>
                  <p>මෙම ප්‍රතිපත්තිය පහත කරුණු පැහැදිලි කරයි:</p>
                  <ul>
                    <li>
                      return හෝ refund ඉල්ලිය හැකි අවස්ථා,
                    </li>
                    <li>
                      refund නොවන සේවා වර්ග, සහ
                    </li>
                    <li>
                      refund ඉල්ලීම් සැකසීමේ ක්‍රමය සහ ඊට
                      ගතවන කාලය.
                    </li>
                  </ul>
                </section>
                {sinhalaRefundSections.map((section) => (
                  <section className={s.policySection} key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.body}</p>
                  </section>
                ))}
                <LegalContactLinks
                  title="අප අමතන්න"
                  intro="refund පිළිබඳ ප්‍රශ්න හෝ ඉල්ලීම් සඳහා පහත ක්‍රමයකින් කරකාර අමතන්න. ඔබගේ ලියාපදිංචි දුරකථන අංකය හෝ email ලිපිනය, transaction reference, ගෙවූ දිනය සහ ගැටලුවේ කෙටි විස්තරයක් ඇතුළත් කරන්න."
                />
                <p className={s.closing}>
                  මෙම Return and Refund Policy කලින් කලට යාවත්කාලීන කළ හැක.
                  මෙම පිටුවේ පළ කර ඇති අනුවාදය, එය පළ කිරීමෙන් පසු කරන
                  ඉල්ලීම් සඳහා අදාළ වේ.
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
