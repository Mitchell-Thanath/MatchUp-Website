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
          <h1>Matchup Privacy Policy</h1>
          <p className="last-updated">Effective Date: January 25, 2026</p>
        </div>

        <div className="privacy-body">
          <section className="policy-section intro-section">
            <p>
              MatchUp DFS LLC. ("MatchUp," "we," "our," or "us") operates the MatchUp mobile application and related services (collectively, the "Platform").We are committed to protecting your privacy and ensuring you understand how your information is handled. This Privacy Policy explains the types of Information we collect, how it is used, how it may be shared, and your rights regarding that Information.By downloading, accessing, or using the Platform, you agree to the collection and use of your information in accordance with this Policy.
            </p>
          </section>

          <section className="policy-section">
            <h2>1. ELIGIBILITY</h2>
            
            <h3>A. Age</h3>
            <p>
              You must be at least 18 years old to use the Platform.
            </p>

            <h3>B. Location</h3>
            <p>
              You must be physically located in a jurisdiction where Matchup is permitted.
            </p>
            <p>
              <strong>Match Coins (Social Play):</strong> Available in all 50 U.S. states.
            </p>
            <p>
              <strong>Match Cash (Sweepstakes Play):</strong> VOID WHERE PROHIBITED. Participation in Match Cash is subject to both location-based (geofencing) and identity-based (ID verification) eligibility restrictions.
            </p>
            <p>
              <strong>Geofencing Restrictions (Physical Location):</strong> Participation is strictly prohibited if you are physically located in any of the following states, regardless of residency or identity verification status: Alabama, Arizona, Colorado, Connecticut, Hawaii, Kentucky, Louisiana, Mississippi, Montana, Nevada, New Jersey, Ohio, Tennessee, West Virginia, California, New York, Washington, Michigan, Idaho, North Carolina, Rhode Island (collectively, the "Geofenced States"). Access from these states is blocked through geolocation controls.
            </p>
            <p>
              <strong>ID Verification Restrictions (Residency / Identification):</strong> Participation is also prohibited if a user's verified identity, residency, or government-issued identification indicates association with any of the following states, even if the user is not physically located in a Geofenced State at the time of access: Hawaii, Nevada, Tennessee, Washington, California, New York, Michigan, Idaho, Connecticut, Montana, New Jersey, Ohio, West Virginia, North Carolina, Rhode Island (collectively, the "ID-Restricted States").
            </p>
            <p>
              Participation is further void in any other jurisdiction where such sweepstakes or promotional contests are restricted or prohibited by law.
            </p>

            <h3>C. Verifications</h3>
            <p>
              We reserve the right to verify your age, identity, and location at any time. Failure to provide requested documentation will result in account suspension.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. INFORMATION WE COLLECT</h2>
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

            <h3>D. Financial Information (Plaid)</h3>
            <p>
              When you choose to link a bank account for prize redemptions or identity verification, we use Plaid Inc. ("Plaid") to securely connect to your financial institution. By linking your account, you authorize Plaid to access the following information from your financial institution:
            </p>
            <ul>
              <li>Account Information: Account name, account type, and account number (masked)</li>
              <li>Account Holder Information: Name and address associated with your account</li>
              <li>Account Balance: Current and available balance (for verification purposes only)</li>
            </ul>
            <p>
              <strong>Important:</strong> MatchUp does NOT store your bank login credentials. Plaid handles all connections securely using bank-level encryption. We only receive the verification status and limited account information necessary to process your redemption requests. You can revoke Plaid's access at any time through the <a href="https://my.plaid.com" target="_blank" rel="noopener noreferrer">Plaid Portal</a> or by contacting us.
            </p>
          </section>

          <section className="policy-section">
            <h2>3. HOW WE USE YOUR INFORMATION</h2>
            <p>We use your data for the following purposes:</p>
            <p>
              <strong>Service Provision:</strong> To create your account, process transactions, facilitate gameplay, and manage your "Match Coins" and "Match Cash" wallets.
            </p>
            <p>
              <strong>Legal Compliance:</strong> To verify your age (18+), identity, and location to ensure you are eligible to participate in our sweepstakes under applicable state and federal laws.
            </p>
            <p>
              <strong>Prize Redemption:</strong> To process redemption requests, file necessary tax forms (e.g., IRS Form 1099-MISC for winnings over $600), and prevent fraud.
            </p>
            <p>
              <strong>Communication:</strong> To send you transaction confirmations, security alerts, and optional promotional updates (which you can opt out of).
            </p>
            <p>
              <strong>Platform Improvement:</strong> To analyze usage trends, fix bugs, and enhance the gaming experience.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. SHARING OF INFORMATION</h2>
            <p>We do not sell your Personal Data. We only share information in the following circumstances:</p>
            <p>
              <strong>Service Providers:</strong> We share data with trusted third parties who perform services on our behalf, including:
            </p>
            <ul>
              <li><strong>Financial Data Services:</strong> Plaid Inc. to securely verify your bank account for prize redemptions. Plaid's use of your data is governed by <a href="https://plaid.com/legal/#consumers" target="_blank" rel="noopener noreferrer">Plaid's Privacy Policy</a>.</li>
              <li><strong>Identity Verification:</strong> To verify your identity for redemptions.</li>
              <li><strong>Geolocation Services:</strong> To verify your physical location for legal compliance.</li>
              <li><strong>Hosting & Database:</strong> (e.g., Supabase) to securely store user data.</li>
              <li><strong>Payment Processors:</strong> To process Match Coin package purchases.</li>
            </ul>
            <p>
              <strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or government request, or to protect the rights, property, and safety of MatchUp, our users, or the public.
            </p>
            <p>
              <strong>Corporate Transactions:</strong> If MatchUp is involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. SWEEPSTAKES & PROMOTIONS</h2>
            <p>
              MatchUp operates a sweepstakes model where "Match Cash" can be used to participate in contests for a chance to win real prizes.
            </p>
            <p>
              <strong>No Purchase Necessary:</strong> You can obtain Match Cash for free via Alternative Methods of Entry (AMOE), such as daily login bonuses or mail-in requests.
            </p>
            <p>
              <strong>Eligibility:</strong> Participation is void where prohibited by law. We use your location and identity data to strictly enforce these restrictions.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. DATA SECURITY & RETENTION</h2>
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
            <h2>7. CHILDREN'S PRIVACY</h2>
            <p>
              MatchUp is strictly for users aged 18 or older. We do not knowingly collect personal data from children under 18. If we discover a user is under 18, we will immediately delete their account and data.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. YOUR CHOICES</h2>
            <p>
              <strong>Location:</strong> You can disable location services in your device settings, but this will prevent you from accessing Match Cash contests.
            </p>
            <p>
              <strong>Push Notifications:</strong> You can opt out of notifications in your device settings or the app's User Preferences.
            </p>
            <p>
              <strong>Marketing Emails:</strong> You can unsubscribe via the link in any promotional email.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. CONTACT US</h2>
            <p>
              If you have questions about this Privacy Policy or your data, please contact us at <a href="mailto:matchup@matchupdfs.com">matchup@matchupdfs.com</a> with "Privacy" in the subject line of your email.
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
