import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LegalContactLinks from "../privacy/LegalContactLinks";
import s from "../privacy/Privacy.module.css";

export const metadata: Metadata = {
  title: "Delete Your Account | Karakaara",
  description:
    "Learn how to delete your Karakaara account from the app, what happens to your data, and how to request deletion if you can't access the app.",
  alternates: { canonical: "https://karakaara.lk/delete-account" },
  openGraph: {
    title: "Delete Your Account | Karakaara",
    description:
      "Step-by-step instructions to delete your Karakaara account and information on what data is removed.",
    url: "https://karakaara.lk/delete-account",
    siteName: "Karakaara",
    type: "website",
  },
};

const deletionSections = [
  {
    title: "What Gets Deleted",
    body: "Once your account is deleted, your profile, photos, preferences, and proposal activity are removed from active matching and are no longer visible to other members. Conversations with matched members are also deleted from our systems as part of the account deletion process.",
  },
  {
    title: "Information We May Retain",
    body: "We may keep limited information, such as transaction and payment records, for a period after deletion where this is required for legal, accounting, fraud-prevention, or dispute-resolution purposes. This retained information is not used to recreate your profile or to match you with other members.",
  },
  {
    title: "Can't Access the App?",
    body: "If you are unable to log in to the app, you can request account deletion through any of the contact channels below. Please include your registered name, phone number, or email address so we can locate and verify your account before processing the request.",
  },
  {
    title: "Processing Time",
    body: "Deletion requests made from within the app take effect immediately. Requests submitted through our support channels are verified and processed as soon as possible.",
  },
];

const sinhalaDeletionSections = [
  {
    title: "ඉවත් කරනු ලබන තොරතුරු",
    body: "ඔබේ ගිණුම ඉවත් කළ පසු, ඔබේ ප්‍රොෆයිලය, ඡායාරූප, කැමැත්තන් සහ යෝජනා ක්‍රියාකාරකම් ක්‍රියාකාරී ගැළපීමෙන් ඉවත් කරනු ලබන අතර අනෙක් සාමාජිකයින්ට නොපෙනේ. ගැළපුණු සාමාජිකයන් සමඟ සංවාද ද ගිණුම් ඉවත් කිරීමේ ක්‍රියාවලියේ කොටසක් ලෙස අපගේ පද්ධතිවලින් ඉවත් කරනු ලැබේ.",
  },
  {
    title: "අප රඳවාගත හැකි තොරතුරු",
    body: "නීතිමය, ගිණුම්කරණ, වංචා වැළැක්වීම හෝ ආරවුල් නිරාකරණය සඳහා අවශ්‍ය වන විට, ගනුදෙනු සහ ගෙවීම් වාර්තා වැනි සීමිත තොරතුරු ඉවත් කිරීමෙන් පසු කාලයක් අප රඳවාගත හැක. මෙම රඳවාගත් තොරතුරු ඔබේ ප්‍රොෆයිලය නැවත සෑදීමට හෝ ඔබව අනෙක් සාමාජිකයින් සමඟ ගැළපීමට භාවිත නොකරයි.",
  },
  {
    title: "යෙදුමට ප්‍රවේශ විය නොහැකිද?",
    body: "ඔබට යෙදුමට log in විය නොහැකි නම්, පහත සඳහන් ඕනෑම සන්නිවේදන ක්‍රමයක් හරහා ගිණුම ඉවත් කිරීමට ඉල්ලීමක් කළ හැක. ඔබේ ගිණුම සොයාගෙන තහවුරු කිරීමට හැකි වන පිණිස ලියාපදිංචි නම, දුරකථන අංකය හෝ email ලිපිනය ඇතුළත් කරන්න.",
  },
  {
    title: "සැකසුම් කාලය",
    body: "යෙදුම තුළින් කරන ඉවත් කිරීමේ ඉල්ලීම් වහාම ක්‍රියාත්මක වේ. අපගේ සහාය ක්‍රම හරහා ඉදිරිපත් කරන ඉල්ලීම් තහවුරු කර හැකි ඉක්මනින් සැකසනු ලැබේ.",
  },
];

export default function DeleteAccountPage() {
  return (
    <>
      <Nav />
      <main className={s.page}>
        <section className={s.hero}>
          <div className="container">
            <Link href="/" className={s.backLink}>
              Back to home
            </Link>
            <span className="badge">Account Deletion</span>
            <h1>How to delete your account</h1>
            <p>
              Follow the steps below to permanently delete your Karakaara
              account and profile information. This page also explains what
              happens to your data afterwards.
            </p>
          </div>
        </section>

        <section className={s.content} aria-labelledby="delete-account-guide">
          <div className="container">
            <div className={s.policyGrid}>
              <div className={s.langHeader}>
                <p>Guide</p>
                <h2 id="delete-account-guide">Delete Your Account</h2>
              </div>
              <div className={s.sections}>
                <section className={s.policySection}>
                  <h3>Delete Your Account In The App</h3>
                  <ol>
                    <li>Open the Karakaara app and log in to your account.</li>
                    <li>Go to the Profile tab.</li>
                    <li>Tap the gear (settings) icon on your profile.</li>
                    <li>Tap &ldquo;Edit Profile&rdquo;.</li>
                    <li>
                      Scroll down and tap &ldquo;Delete Account&rdquo;.
                    </li>
                    <li>Confirm the deletion when prompted.</li>
                  </ol>
                </section>
                {deletionSections.map((section) => (
                  <section className={s.policySection} key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.body}</p>
                  </section>
                ))}
                <LegalContactLinks
                  title="Request Deletion"
                  intro="If you can't access the app or need help deleting your account, contact us through any of the channels below."
                />
                <p className={s.closing}>
                  Account deletion is permanent. Once your profile is deleted,
                  it cannot be recovered and you will need to register again
                  to use Karakaara.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={s.content}
          aria-labelledby="sinhala-delete-account-guide"
        >
          <div className="container">
            <div className={s.policyGrid}>
              <div className={s.langHeader}>
                <p>සිංහල</p>
                <h2 id="sinhala-delete-account-guide">ගිණුම ඉවත් කරන්න</h2>
              </div>
              <div className={s.sections} lang="si">
                <section className={s.policySection}>
                  <h3>යෙදුම තුළින් ඔබේ ගිණුම ඉවත් කරන්න</h3>
                  <ol>
                    <li>Karakaara යෙදුම විවෘත කර ඔබේ ගිණුමට log in වන්න.</li>
                    <li>Profile tab වෙත යන්න.</li>
                    <li>ඔබේ profile හි gear (settings) අයිකනය tap කරන්න.</li>
                    <li>&ldquo;Edit Profile&rdquo; tap කරන්න.</li>
                    <li>පහළට scroll කර &ldquo;Delete Account&rdquo; tap කරන්න.</li>
                    <li>ඉවත් කිරීම තහවුරු කරන්න.</li>
                  </ol>
                </section>
                {sinhalaDeletionSections.map((section) => (
                  <section className={s.policySection} key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.body}</p>
                  </section>
                ))}
                <LegalContactLinks
                  title="ඉවත් කිරීමට ඉල්ලීම් කරන්න"
                  intro="ඔබට යෙදුමට ප්‍රවේශ විය නොහැකි නම් හෝ ගිණුම ඉවත් කිරීමට සහාය අවශ්‍ය නම්, පහත ඕනෑම ක්‍රමයක් හරහා අප අමතන්න."
                />
                <p className={s.closing}>
                  ගිණුම ඉවත් කිරීම ස්ථිරයි. ඔබේ ප්‍රොෆයිලය ඉවත් කළ පසු එය නැවත
                  ලබාගත නොහැකි අතර, Karakaara භාවිතයට නැවත ලියාපදිංචි විය
                  යුතුය.
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
