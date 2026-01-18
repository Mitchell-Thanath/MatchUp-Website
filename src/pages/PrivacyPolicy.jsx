import { Link } from 'react-router-dom'
import '../styles/PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="bg-grid"></div>
      
      <nav className="navbar">
        <Link to="/" className="logo">
          <span className="logo-icon">🎯</span>
          <span className="logo-text">MatchUp</span>
        </Link>
        <Link to="/" className="back-link">
          <svg className="back-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </Link>
      </nav>

      <main className="privacy-content">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Effective Date: November 29, 2025</p>
        </div>

        <div className="privacy-body">
          <section className="policy-section intro-section">
            <p>
              MatchUp DFS LLC. ("MatchUp," "we," "our," or "us") operates the MatchUp mobile application and related services (collectively, the "Platform"). We are committed to protecting your privacy and ensuring you understand how your information is handled. This Privacy Policy explains the types of Information we collect, how it is used, how it may be shared, and your rights regarding that Information.
            </p>
            <p>
              By downloading, accessing, or using the Platform, you agree to the collection and use of your information in accordance with this Policy.
            </p>
          </section>

          <section className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>
              We collect different types of information to provide our services, ensure legal compliance for our sweepstakes model, and improve your experience.
            </p>
            
            <h3>A. Information You Provide to Us</h3>
            <p>
              <strong>Personal Identity Information (PII):</strong> When you create an account, verify your identity, or redeem prizes, we collect information such as your full name, email address, mobile phone number, date of birth, and physical address.
            </p>
            <p>
              <strong>Identity Verification Data:</strong> To comply with federal laws (KYC/AML) and tax regulations for prize redemptions, we may require you to provide government-issued ID (e.g., driver's license, passport) and Social Security Number (SSN) details. This data is processed securely by our identity verification partners.
            </p>
            <p>
              <strong>User Content:</strong> Information you share through social features, such as "Taunts," chat messages, friend challenges, and your customized avatar selections.
            </p>

            <h3>B. Information We Collect Automatically</h3>
            <p>
              <strong>Device Information:</strong> We collect data about the device you use to access MatchUp, including IP address, device model, operating system version, unique device identifiers (e.g., IDFA, Android ID), and browser type.
            </p>
            <p>
              <strong>Geolocation Data:</strong> To ensure compliance with sweepstakes laws, we are legally required to verify your location. We collect precise GPS location data each time you enter a Match Cash contest or attempt to redeem prizes. If you are located in a restricted jurisdiction (e.g., WA, ID, MI), you will be blocked from participating in sweepstakes.
            </p>
            <p>
              <strong>Usage Data:</strong> We track your interactions with the Platform, including game history, prediction logs, pages visited, purchase history, and crash reports.
            </p>

            <h3>C. Biometric Data Policy</h3>
            <p>
              Unlike some platforms, MatchUp does NOT collect, store, or process facial recognition scans or biometric identifiers for avatar generation.
            </p>
            <p>
              <strong>Authentication:</strong> You may choose to use your device's native biometric features (e.g., FaceID, TouchID) to log in. This data is stored securely only on your device and is never transmitted to or stored on MatchUp's servers.
            </p>
            <p>
              <strong>Avatars:</strong> User avatars on MatchUp are created using pre-set customization options (e.g., selecting a jersey, hairstyle, or team). We do not use facial scans to generate these images.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use your data for the following purposes:</p>
            <ul>
              <li><strong>Service Provision:</strong> To create your account, process transactions, facilitate gameplay, and manage your "Match Coins" and "Match Cash" wallets.</li>
              <li><strong>Legal Compliance:</strong> To verify your age (18+), identity, and location to ensure you are eligible to participate in our sweepstakes under applicable state and federal laws.</li>
              <li><strong>Prize Redemption:</strong> To process redemption requests, file necessary tax forms (e.g., IRS Form 1099-MISC for winnings over $600), and prevent fraud.</li>
              <li><strong>Communication:</strong> To send you transaction confirmations, security alerts, and optional promotional updates (which you can opt out of).</li>
              <li><strong>Platform Improvement:</strong> To analyze usage trends, fix bugs, and enhance the gaming experience.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Sharing of Information</h2>
            <p>We do not sell your Personal Data. We only share information in the following circumstances:</p>
            <p>
              <strong>Service Providers:</strong> We share data with trusted third parties who perform services on our behalf, including:
            </p>
            <ul>
              <li><strong>Payment Processors:</strong> (e.g., Stripe) to process Match Coin package purchases.</li>
              <li><strong>Identity Verification:</strong> To verify your identity for redemptions.</li>
              <li><strong>Geolocation Services:</strong> To verify your physical location for legal compliance.</li>
              <li><strong>Hosting & Database:</strong> (e.g., Supabase) to securely store user data.</li>
            </ul>
            <p>
              <strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or government request, or to protect the rights, property, and safety of MatchUp, our users, or the public.
            </p>
            <p>
              <strong>Corporate Transactions:</strong> If MatchUp is involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. Sweepstakes & Promotions</h2>
            <p>
              MatchUp operates a sweepstakes model where "Match Cash" can be used to participate in contests for a chance to win real prizes.
            </p>
            <ul>
              <li><strong>No Purchase Necessary:</strong> You can obtain Match Cash for free via Alternative Methods of Entry (AMOE), such as daily login bonuses or mail-in requests.</li>
              <li><strong>Eligibility:</strong> Participation is void where prohibited by law. We use your location and identity data to strictly enforce these restrictions.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. Data Security & Retention</h2>
            <p>
              We use industry-standard security measures (encryption, secure servers) to protect your data. However, no transmission over the internet is 100% secure.
            </p>
            <p>
              <strong>Retention:</strong> We retain your Personal Data only as long as necessary to fulfill the purposes outlined in this Policy (including legal, accounting, and tax obligations).
            </p>
            <p>
              <strong>Deletion:</strong> You may request the deletion of your account and data by contacting support, subject to our legal obligation to retain certain financial and transaction records.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Children's Privacy</h2>
            <p>
              MatchUp is strictly for users aged 18 or older. We do not knowingly collect personal data from children under 18. If we discover a user is under 18, we will immediately delete their account and data.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Your Choices</h2>
            <ul>
              <li><strong>Location:</strong> You can disable location services in your device settings, but this will prevent you from accessing Match Cash contests.</li>
              <li><strong>Push Notifications:</strong> You can opt out of notifications in your device settings or the app's User Preferences.</li>
              <li><strong>Marketing Emails:</strong> You can unsubscribe via the link in any promotional email.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or your data, please contact us at <a href="mailto:matchup@matchupdfs.com">matchup@matchupdfs.com</a> with "Privacy" in the subject line of your email.
            </p>
          </section>

          {/* Terms of Use Section */}
          <div className="terms-divider">
            <span>Terms of Use</span>
          </div>

          <div className="privacy-header terms-header">
            <h1>Terms of Use</h1>
            <p className="last-updated">Last Updated: November 29, 2025</p>
          </div>

          <section className="policy-section warning-section">
            <p>
              <strong>IMPORTANT NOTICE:</strong> THESE TERMS OF USE CONTAIN A BINDING ARBITRATION PROVISION AND CLASS ACTION WAIVER (SECTION 20). PLEASE READ THEM CAREFULLY. THEY AFFECT YOUR LEGAL RIGHTS.
            </p>
            <p>
              These Terms of Use ("Terms") constitute a binding legal agreement between you ("User," "You," or "Participant") and Matchup DFS LLC. ("Matchup," "We," "Us," or "Company"). These Terms govern your access to and use of the Matchup mobile application, website, and related services (collectively, the "Platform"). NO PURCHASE NECESSARY TO ENTER OR WIN.
            </p>
            <p>
              Matchup offers a social gaming platform. While you can purchase "Match Coins" for entertainment, "Match Cash" (which can be redeemed for prizes) cannot be purchased and is always available for free via alternative methods of entry. MATCHUP IS NOT A GAMBLING PLATFORM.
            </p>
          </section>

          <section className="policy-section">
            <h2>1. Eligibility</h2>
            <p>
              <strong>1.1 Age:</strong> You must be at least 18 years old to use the Platform.
            </p>
            <p>
              <strong>1.2 Location:</strong> You must be physically located in a jurisdiction where Matchup is permitted.
            </p>
            <ul>
              <li><strong>Match Coins (Social Play):</strong> Available in all 50 U.S. states.</li>
              <li><strong>Match Cash (Sweepstakes Play):</strong> VOID WHERE PROHIBITED. Participation is strictly prohibited if you are physically located in Washington (WA), Idaho (ID), Michigan (MI), Montana (MT), Connecticut (CT), Nevada (NV), New York (NY), New Jersey (NJ), California (CA), or any other jurisdiction where such participation is restricted by law (collectively, "Excluded Territories").</li>
            </ul>
            <p>
              <strong>1.3 Verification:</strong> We reserve the right to verify your age, identity, and location at any time. Failure to provide requested documentation will result in account suspension.
            </p>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 MatchUp. All rights reserved.</p>
          <Link to="/" className="footer-link">Back to Home</Link>
        </div>
      </footer>
    </div>
  )
}

export default PrivacyPolicy
