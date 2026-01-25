import { Link } from 'react-router-dom'
import '../styles/PrivacyPolicy.css'

const TermsOfService = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <nav className="privacy-nav">
          <Link to="/" className="privacy-logo">🎯 MatchUp</Link>
          <Link to="/" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </Link>
        </nav>
        
        <main className="privacy-content">
          <h1 className="privacy-title">Matchup Terms of Use</h1>
          <p className="last-updated">Last Updated: Jannuary 24, 2026</p>
          
          <section className="policy-section important-notice">
            <p><strong>IMPORTANT NOTICE:</strong> THESE TERMS OF USE CONTAIN A BINDING ARBITRATION PROVISION AND CLASS ACTION WAIVER. PLEASE READ THEM CAREFULLY. THEY AFFECT YOUR LEGAL RIGHTS.</p>
          </section>

          <section className="policy-section">
            <p>These Terms of Use ("Terms") constitute a binding legal agreement between you ("User," "You," or "Participant") and Matchup DFS LLC. ("Matchup," "We," "Us," or "Company"). These Terms govern your access to and use of the Matchup mobile application, website, and related services (collectively, the "Platform").</p>
            
            <p><strong>NO PURCHASE NECESSARY TO ENTER OR WIN.</strong></p>
            
            <p>Matchup offers a social gaming platform. While you can purchase "Match Coins" for entertainment, "Match Cash" (which can be redeemed for prizes) cannot be purchased and is always available for free via alternative methods of entry. <strong>MATCHUP IS NOT A GAMBLING PLATFORM.</strong></p>
          </section>

          <section className="policy-section">
            <h2>1. ELIGIBILITY</h2>
            
            <h3>1.1 Age</h3>
            <p>You must be at least 18 years old to use the Platform.</p>
            
            <h3>1.2 Location</h3>
            <p>You must be physically located in a jurisdiction where Matchup is permitted.</p>
            
            <p><strong>Match Coins (Social Play):</strong> Available in all 50 U.S. states.</p>
            
            <p><strong>Match Cash (Sweepstakes Play):</strong> VOID WHERE PROHIBITED. Participation in Match Cash is subject to both location-based (geofencing) and identity-based (ID verification) eligibility restrictions.</p>
            
            <p><strong>Geofencing Restrictions (Physical Location):</strong> Participation is strictly prohibited if you are physically located in any of the following states, regardless of residency or identity verification status: Alabama, Arizona, Colorado, Connecticut, Hawaii, Kentucky, Louisiana, Mississippi, Montana, Nevada, New Jersey, Ohio, Tennessee, West Virginia, California, New York, Washington, Michigan, Idaho, North Carolina, Rhode Island (collectively, the "Geofenced States"). Access from these states is blocked through geolocation controls.</p>
            
            <p><strong>ID Verification Restrictions (Residency / Identification):</strong> Participation is also prohibited if a user's verified identity, residency, or government-issued identification indicates association with any of the following states, even if the user is not physically located in a Geofenced State at the time of access: Hawaii, Nevada, Tennessee, Washington, California, New York, Michigan, Idaho, Connecticut, Montana, New Jersey, Ohio, West Virginia, North Carolina, Rhode Island (collectively, the "ID-Restricted States").</p>
            
            <p>Participation is further void in any other jurisdiction where such sweepstakes or promotional contests are restricted or prohibited by law.</p>
            
            <h3>1.3 Verification</h3>
            <p>We reserve the right to verify your age, identity, and location at any time. Failure to provide requested documentation will result in account suspension.</p>
          </section>

          <section className="policy-section">
            <h2>2. VIRTUAL CURRENCIES</h2>
            <p>The Platform features two distinct virtual currencies:</p>
            
            <h3>A. Match Coins</h3>
            <p><strong>Purpose:</strong> Strictly for social, entertainment-based gameplay.</p>
            <p><strong>Value:</strong> Match Coins have NO real-world cash value. They cannot be redeemed for prizes, traded, or transferred.</p>
            <p><strong>Acquisition:</strong> You may purchase Match Coin packages or earn them for free through gameplay and bonuses.</p>
            
            <h3>B. Match Cash</h3>
            <p><strong>Purpose:</strong> For participation in promotional sweepstakes contests.</p>
            <p><strong>Value:</strong> Winnings obtained from playing with Match Cash may be redeemed for real prizes, subject to our Redemption Rules.</p>
            <p><strong>Acquisition:</strong> Match Cash is NEVER sold. It is obtained only for FREE via:</p>
            <ul>
              <li><strong>Promotional Bonus:</strong> Included as a free gift with the purchase of select Match Coin packages.</li>
              <li><strong>Daily Bonus:</strong> Claimable once every 24 hours.</li>
              <li><strong>Mail-In Request:</strong> By sending a handwritten request card to our registered address (see Official Sweepstakes Rules).</li>
            </ul>
            <p><strong>Expiration:</strong> Match Cash may expire if your account is inactive for 60 consecutive days.</p>
          </section>

          <section className="policy-section">
            <h2>3. ACCOUNTS</h2>
            
            <h3>3.1 One Account Per Person</h3>
            <p>You are permitted to open only one User Account. Creating multiple accounts (e.g., to abuse daily bonuses) is strictly prohibited and will result in a permanent ban and forfeiture of all balances.</p>
            
            <h3>3.2 Security</h3>
            <p>You are responsible for maintaining the confidentiality of your login credentials. You agree to notify us immediately of any unauthorized use of your account.</p>
            
            <h3>3.3 Inactivity</h3>
            <p>We reserve the right to close accounts that have been inactive for 12 months or longer.</p>
          </section>

          <section className="policy-section">
            <h2>4. PURCHASES & PAYMENTS</h2>
            
            <h3>4.1 Final Sale</h3>
            <p>All purchases of Match Coin packages are FINAL and non-refundable.</p>
            
            <h3>4.2 Billing</h3>
            <p>Purchases are processed via the App Store (Apple), Google Play Store, or our third-party payment processor (e.g., Stripe). You agree to their respective terms and conditions.</p>
            
            <h3>4.3 Chargebacks</h3>
            <p>If a chargeback is initiated on a purchase, your account will be immediately suspended. You agree to reimburse Matchup for any costs associated with the chargeback.</p>
          </section>

          <section className="policy-section">
            <h2>5. PRIZE REDEMPTION</h2>
            
            <h3>5.1 Minimum Threshold</h3>
            <p>You must have a minimum balance of $25.00 worth of eligible Match Cash winnings to request a redemption.</p>
            
            <h3>5.2 Playthrough Requirement</h3>
            <p>All Match Cash (excluding Token Store Purchase Bonus) must be played through at least once (1x) in a contest before it becomes eligible for redemption.</p>
            
            <h3>5.3 Verification</h3>
            <p>Before processing any redemption, we will require:</p>
            <ul>
              <li>Government-issued Photo ID (e.g., Driver's License, Passport).</li>
              <li>Proof of Address (e.g., Utility Bill).</li>
              <li>SSN (for tax reporting purposes).</li>
            </ul>
            
            <h3>5.4 Tax Reporting</h3>
            <p>You are solely responsible for determining and satisfying any federal, state, or local tax obligations arising from your participation on the Platform and from any prizes or winnings you receive.</p>
            <p>If your net winnings exceed $600 in a calendar year, Matchup will make available to you an IRS Form 1099-MISC as required by law. Such form will be provided electronically through your account Settings tab and is expected to be released on or around January 25 of the following calendar year. An automated process may run periodically through the end of January to account for processing delays.</p>
            <p>It is your responsibility to monitor your account and obtain the applicable tax documentation. If you do not receive your Form 1099-MISC by the end of January, you must contact Matchup support to request the document.</p>
            <p>Matchup does not provide tax advice, does not prepare or file tax returns on your behalf, and assumes no responsibility for your failure to obtain, report, or properly file any required tax forms.</p>
            
            <h3>5.5 Withdrawals</h3>
            <p><strong>Withdrawal Limits:</strong> Withdrawals are subject to a maximum limit of Three Hundred U.S. Dollars ($300) per user per calendar day, calculated based on Eastern Time (ET). Any withdrawal requests exceeding this limit will be declined or deferred to a subsequent day, at the Company's sole discretion. The Company reserves the right to aggregate withdrawals across multiple transactions to enforce daily limits.</p>
            <p><strong>Withdrawal Conditions:</strong> All withdrawals are subject to these Terms and Conditions and any additional policies referenced herein. Withdrawal requests are not guaranteed and may be delayed, suspended, limited, or denied based on, including but not limited to:</p>
            <ul>
              <li>Account verification requirements</li>
              <li>Compliance with applicable laws and regulations</li>
              <li>Suspected fraud, abuse, or manipulation</li>
              <li>Technical, operational, or security issues</li>
              <li>Violations of these Terms</li>
            </ul>
            <p>The Company's determination regarding withdrawals shall be final and binding to the extent permitted by law.</p>
            
            <h3>5.6 Florida Prizes and Sweepstakes</h3>
            <p>The following provisions apply specifically to participants located in the State of Florida:</p>
            <p><strong>Sweepstakes Period:</strong> Each sweepstakes promotion offered through the App (each, a "Sweepstakes") begins at 12:00:00 AM Eastern Time ("ET") and ends at 11:59:59 PM ET on the same calendar day ("Sweepstakes Period"). Each Sweepstakes is a separate and distinct promotion, offered daily, and is not combined with or carried over to any prior or subsequent Sweepstakes Period.</p>
            <p><strong>Prize Limits:</strong> The total aggregate retail value of all prizes awarded to participants located in the State of Florida during any single Sweepstakes Period shall not exceed Five Thousand U.S. Dollars ($5,000). Under no circumstances shall the total prize value awarded in Florida during any Sweepstakes Period exceed $5,000, regardless of participation levels, entry volume, or outcomes.</p>
            <p><strong>Florida Residents:</strong> Sweepstakes offered to Florida residents are intended to comply with applicable Florida laws and regulations. In the event of any conflict between these Terms and applicable law, the applicable law shall control. The Company reserves the right to modify, suspend, or cancel any Sweepstakes offered in Florida to maintain legal compliance.</p>
          </section>

          <section className="policy-section">
            <h2>6. PROHIBITED CONDUCT</h2>
            <p>You agree NOT to:</p>
            <ul>
              <li><strong>6.1</strong> Use the Platform for illegal gambling or money laundering.</li>
              <li><strong>6.2</strong> Attempt to manipulate the outcome of any game or contest.</li>
              <li><strong>6.3</strong> Use bots, scripts, or automated software to access the Platform.</li>
              <li><strong>6.4</strong> Access the Platform from an Excluded Territory via VPN or proxy.</li>
              <li><strong>6.5</strong> Harass, threaten, or abuse other users or Matchup staff.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>7. INTELLECTUAL PROPERTY</h2>
            
            <h3>7.1 Ownership</h3>
            <p>Matchup owns all rights, title, and interest in the Platform, including all software, graphics, text, and proprietary content.</p>
            
            <h3>7.2 License</h3>
            <p>We grant you a limited, non-exclusive, non-transferable, revocable license to use the Platform for personal entertainment.</p>
          </section>

          <section className="policy-section">
            <h2>8. DISCLAIMER OF WARRANTIES</h2>
            <p>THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE." WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. WE DO NOT GUARANTEE THAT THE PLATFORM WILL BE ERROR-FREE OR UNINTERRUPTED.</p>
          </section>
      </main>
        
        <footer className="privacy-footer">
          <p>© 2026 MatchUp. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default TermsOfService

