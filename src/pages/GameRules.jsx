import { Link } from 'react-router-dom'
import '../styles/PrivacyPolicy.css'

function GameRules() {
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
        <h1>MATCHUP GAME RULES AND MECHANICS</h1>
        <p className="last-updated">Last Updated: December 7, 2025</p>

        <section className="policy-section intro-section">
          <p>
            THESE RULES SHALL APPLY TO THE USE OF MATCHUP SOCIAL SPORTS PREDICTION PLATFORM, INCLUDING MATCH COINS (ENTERTAINMENT MODE) AND MATCH CASH (SWEEPSTAKES PRIZE MODE).
          </p>
        </section>

          <section className="policy-section">
            <h2>1. GENERAL RULES</h2>
            
            <h3>1.1 Prediction Submission</h3>
            <p><strong>No Cancellations:</strong> Once predictions are submitted for a matchup, they cannot be canceled, edited, or withdrawn.</p>
            <p><strong>Prediction Lock:</strong> All predictions automatically lock when the first associated sporting event begins. Any matchup with locked predictions cannot be modified.</p>
            <p><strong>Auto-Pick System:</strong> If you fail to submit predictions before a matchup locks, the system will NOT automatically pick for you. The matchup will be marked as inactive and your entry fee will be refunded.</p>

            <h3>1.2 Matchup Structure</h3>
            <h4>1.2.1 User Draft</h4>
            <p>Prior to making predictions, both players participate in a Draft phase to build the matchup's question set through alternating selections.</p>
            <p><strong>Draft Composition:</strong> Each matchup consists of 6 questions:</p>
            <ul>
              <li>Q1: Game Winner – Auto-assigned to both players</li>
              <li>Q2: Over/Under – Selected by first drafter</li>
              <li>Q3: Over/Under – Selected by second drafter</li>
              <li>Q4: Star Stat – Selected by first drafter</li>
              <li>Q5: Star Stat – Selected by second drafter</li>
              <li>Q6: Tiebreaker – Auto-assigned to both players</li>
            </ul>
            <p><strong>First Pick Determination:</strong> A coin flip determines which player drafts first. The first drafter selects Q2 and Q4; the second drafter selects Q3 and Q5.</p>
            <p><strong>Question Pools:</strong></p>
            <ul>
              <li>Over/Under: Choose from 6 available player prop questions</li>
              <li>Star Stat: Choose from 4 available head-to-head player matchups</li>
            </ul>
            <p><strong>Pick Timer:</strong> Players have 20 seconds per selection. If time expires, a question is automatically selected at random.</p>
            <p><strong>Tiebreaker Multiplier:</strong> A multiplier (3x, 5x, 7x, 10x, 25x, or 50x) is randomly assigned during the draft. This multiplier applies to winnings only when the tiebreaker question determines the winner.</p>
            <p><strong>Draft Completion:</strong> Once all selections are made, questions are locked and both players proceed to submit their predictions independently.</p>
            
            <p><strong>Question Format:</strong> Each matchup consists of:</p>
            <ul>
              <li>5 Regular Questions: Mix of player props, game totals, and special predictions</li>
              <li>1 Tiebreaker Question: Numeric prediction used only if regular score is tied</li>
            </ul>
            
            <p><strong>Question Types:</strong></p>
            <ul>
              <li><strong>Over/Under:</strong> Predict whether a player or team statistic will go OVER or UNDER the specified line</li>
              <li><strong>Star Stat:</strong> Choose which of two players will achieve a higher statistic</li>
              <li><strong>Tiebreaker:</strong> Numeric prediction of total points, total yards, or similar game metric</li>
            </ul>
            
            <p><strong>Question Selection:</strong> Questions are algorithmically selected to provide:</p>
            <ul>
              <li>Balanced difficulty</li>
              <li>Popular player representation</li>
              <li>Variety of prediction types</li>
              <li>No duplicate players in over/under questions</li>
            </ul>

            <h3>1.3 Official Start Times</h3>
            <p><strong>Scheduled Game Time:</strong> All sporting events must start at the scheduled date and time (local stadium time) for matchups to have action.</p>
            <p><strong>Postponed/Rescheduled Games:</strong> If a game is postponed or rescheduled to a different date:</p>
            <ul>
              <li>All affected matchups are void</li>
              <li>Entry fees are automatically refunded to all participants</li>
              <li>This rule applies unless the game is played within 24 hours of the original start time</li>
            </ul>
            <p><strong>Venue Changes:</strong> If a match venue is changed but the game is played on the scheduled date, all matchups remain valid.</p>

            <h3>1.4 Grading and Settlement</h3>
            <p><strong>Official Statistics:</strong> All predictions are graded using official statistics from:</p>
            <ul>
              <li>NFL: NFL.com official game stats</li>
              <li>NBA: NBA.com official game stats</li>
              <li>Other leagues: Official league websites or primary sports data providers</li>
            </ul>
            <p><strong>Overtime Inclusion:</strong> Unless explicitly stated otherwise:</p>
            <ul>
              <li>Overtime periods ARE included in final statistics</li>
              <li>All over/under lines include overtime</li>
              <li>This applies to all sports and question types</li>
            </ul>
            <p><strong>Settlement Timing:</strong> Matchups are settled after:</p>
            <ul>
              <li>All questions have official final statistics</li>
              <li>All games have reached official completion</li>
              <li>Typical settlement time: 15-60 minutes after game completion</li>
            </ul>
            <p><strong>Stat Corrections:</strong> In the event of official stat corrections up to 7 days after a game:</p>
            <ul>
              <li>Matchup results may be recalculated</li>
              <li>Wallet balances will be adjusted accordingly</li>
              <li>Users will be notified of any balance changes</li>
            </ul>

            <h3>1.5 Minimum Play Requirements</h3>
            <p><strong>Game Completion:</strong> For predictions to be valid, games must meet minimum completion thresholds:</p>
            <ul>
              <li>Football (NFL/NCAA): Game must reach final 5 minutes of 4th quarter or be completed</li>
              <li>Basketball (NBA/NCAA): Game must reach final 5 minutes of 4th quarter or be completed</li>
              <li>Other Sports: Game must be 90% complete or reach final minutes of regulation</li>
            </ul>
            <p><strong>Abandoned Games:</strong> If a game is abandoned before reaching minimum play requirements:</p>
            <ul>
              <li>All affected matchups are void</li>
              <li>Entry fees are refunded</li>
              <li>Exception: Questions whose outcomes were already determined will stand</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. MATCHUP TYPES</h2>
            
            <h3>2.1 Random Matchmaking</h3>
            <p><strong>Queue System:</strong> Users enter a matchmaking queue and are paired with:</p>
            <ul>
              <li>Another real player (when available)</li>
              <li>MatchUp Bot (when no human opponent is available within 10 seconds)</li>
            </ul>
            <p><strong>Bot Opponents:</strong> Bot predictions are generated using:</p>
            <ul>
              <li>Historical player performance data</li>
              <li>Current season statistics</li>
              <li>Randomization algorithms to ensure fair competition</li>
              <li>Bots cannot win more than 50% of matchups over time</li>
            </ul>
            <p><strong>Guaranteed Match:</strong> All users in random matchmaking are guaranteed an opponent within 10 seconds.</p>

            <h3>2.2 Friend Challenges</h3>
            <p><strong>Challenge Creation:</strong> Users can challenge friends to head-to-head matchups with:</p>
            <ul>
              <li>Selected sporting event</li>
              <li>Chosen entry amount</li>
              <li>Same currency mode (Match Coins or Match Cash)</li>
            </ul>
            <p><strong>Challenge Expiration:</strong> Friend challenges expire after 30 seconds if not accepted.</p>
            <p><strong>Challenge Response:</strong> Recipients can:</p>
            <ul>
              <li>Accept: Proceed to prediction screen</li>
              <li>Decline: Challenge is canceled, sender's entry fee is refunded</li>
              <li>Ignore: Challenge expires, sender's entry fee is refunded</li>
            </ul>
            <p><strong>Busy Status:</strong> Users cannot receive friend challenges while:</p>
            <ul>
              <li>Already in a matchmaking queue</li>
              <li>Currently on a prediction screen</li>
              <li>In an active matchup</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Use of Automated Participants ("Bots")</h2>
            <p>To ensure timely matchmaking and a smooth gameplay experience, the Platform may utilize automated participants ("Bots") in Matchups when a sufficient number of real users are not available to queue within a reasonable period of time.</p>
            <p>Bots are used solely to maintain gameplay continuity and do not represent real individuals or independent user accounts.</p>
            
            <h3>Bot Question Selection (Draft Phase)</h3>
            <p>During the draft phase of a Matchup, when a Bot is participating, the questions selected by the Bot are chosen entirely at random from the pool of available and eligible questions for that Matchup. Bots do not apply strategy, historical performance, user data, or predictive analysis when selecting draft questions.</p>
            
            <h3>Bot Predictions and Locking Mechanism</h3>
            <p>When making predictions, Bots operate under the following predefined and non-adaptive logic:</p>
            <p><strong>Over/Under Questions:</strong> Predictions are selected at random between the available options.</p>
            <p><strong>Star Statistic Questions and Game Winner Questions:</strong> Predictions are selected based on publicly available odds, with the Bot choosing the option associated with the higher odds.</p>
            <p>All predictions made by Bots are final and locked at the time the Matchup begins. Once submitted, Bot predictions cannot be changed, adjusted, or influenced by live game events, outcomes, player performance, or any other real-time or post-lock information.</p>
            <p>Bots do not monitor games in progress and do not have the ability to modify predictions after lock. This ensures that Bots do not gain any informational advantage and do not engage in cheating, manipulation, or outcome-based decision-making during gameplay.</p>
            <p>Bots do not learn, adapt, or optimize based on outcomes, user behavior, or prior Matchups. Their behavior is static, rule-based, and consistent across all games.</p>
            
            <h3>No Guarantee of Competitive Balance</h3>
            <p>The Platform makes no representations or guarantees that Bots will perform better or worse than real users, or that Matchups involving Bots will result in outcomes comparable to those involving only real users.</p>
            <p>By using the Platform, you acknowledge and agree that automated participants may be used under the conditions described above.</p>
          </section>

          <section className="policy-section">
            <h2>4. SCORING AND WINNING</h2>
            
            <h3>4.1 Regular Scoring</h3>
            <p><strong>Point System:</strong> Each correct prediction on the 5 regular questions earns 1 point.</p>
            <p><strong>Winner Determination:</strong> The player with the most correct predictions wins the matchup.</p>
            <p><strong>Scoring Example:</strong></p>
            <ul>
              <li>Player A: 4 correct predictions</li>
              <li>Player B: 2 correct predictions</li>
              <li>Winner: Player A</li>
            </ul>

            <h3>4.2 Tiebreaker System</h3>
            <p><strong>Tiebreaker Activation:</strong> If both players have the same number of correct predictions (e.g., 3-3), the tiebreaker is used.</p>
            <p><strong>Tiebreaker Method:</strong></p>
            <ul>
              <li>Both players submit a numeric prediction on the tiebreaker question</li>
              <li>The player whose guess is CLOSEST to the actual final score wins</li>
              <li>Distance is measured as absolute difference (e.g., guessing 225 when actual is 230 = 5-point difference)</li>
            </ul>
            <p><strong>Tiebreaker Example:</strong></p>
            <ul>
              <li>Tiebreaker Question: "Total Points (Both Teams)"</li>
              <li>Actual Final Score: 225</li>
              <li>Player A Guess: 220 (5 points away)</li>
              <li>Player B Guess: 235 (10 points away)</li>
              <li>Winner: Player A (closest guess)</li>
            </ul>
            <p><strong>Default Tiebreaker Guess:</strong> If a player doesn't submit a tiebreaker guess, the over/under line for that question is used as their default guess.</p>

            <h3>4.3 Perfect Tie Resolution</h3>
            <p><strong>Split Prize Rule:</strong> If both players:</p>
            <ul>
              <li>Have the same number of correct predictions, AND</li>
              <li>Have the exact same distance on the tiebreaker</li>
            </ul>
            <p>Then the prize pool is split 50/50 with NO platform fee deducted.</p>
            <p><strong>Perfect Tie Example:</strong></p>
            <ul>
              <li>Both players: 3 correct predictions</li>
              <li>Tiebreaker actual: 225</li>
              <li>Player A guess: 230 (5 points away)</li>
              <li>Player B guess: 220 (5 points away)</li>
              <li>Result: Perfect tie Entry: $10 each</li>
              <li>Each player receives: $10 (full refund, no fee)</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. ENTRY FEES AND PAYOUTS</h2>
            
            <h3>5.1 Entry Amounts</h3>
            <p><strong>Available Stakes:</strong> Matchups are available at the following entry levels:</p>
            <p>10, 50, 100, 250, 500, 1,000, 2,500, 5,000 (Match Coins or Match Cash)</p>
            <p><strong>Same Stakes:</strong> Both players in a matchup must wager the same amount.</p>

            <h3>5.2 Prize Pool and Payouts</h3>
            <p><strong>Total Pot:</strong> The prize pool consists of both players' entry fees combined.</p>
            <p>Example: 100 Match Coins entry Total Prize Pool = 100 + 100 = 200 Match Coins</p>
            <p><strong>Platform Service Fee:</strong> MatchUp charges a 10% platform fee on the total pot.</p>
            <p><strong>Winner Payout:</strong> The winner receives 90% of the total prize pool (1.8x their entry fee).</p>
            <p>Example: 100 Match Coins entry Total Pot: 200 Match Coins Platform Fee (10%): 20 Match Coins Winner Receives: 180 Match Coins Winner ROI: +80%</p>
            
            <div className="table-container">
              <table className="payout-table">
                <thead>
                  <tr>
                    <th>Entry</th>
                    <th>Total Pot</th>
                    <th>Platform Fee (10%)</th>
                    <th>Winner Receives</th>
                    <th>ROI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>10</td><td>20</td><td>2</td><td>18</td><td>+80%</td></tr>
                  <tr><td>50</td><td>100</td><td>10</td><td>90</td><td>+80%</td></tr>
                  <tr><td>100</td><td>200</td><td>20</td><td>180</td><td>+80%</td></tr>
                  <tr><td>250</td><td>500</td><td>50</td><td>450</td><td>+80%</td></tr>
                  <tr><td>500</td><td>1,000</td><td>100</td><td>900</td><td>+80%</td></tr>
                  <tr><td>1,000</td><td>2,000</td><td>200</td><td>1,800</td><td>+80%</td></tr>
                  <tr><td>2,500</td><td>5,000</td><td>500</td><td>4,500</td><td>+80%</td></tr>
                  <tr><td>5,000</td><td>10,000</td><td>1,000</td><td>9,000</td><td>+80%</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>Immediate Credit:</strong> Winnings are credited to your wallet immediately upon matchup settlement.</p>
          </section>

          <section className="policy-section">
            <h2>6. DUAL CURRENCY SYSTEM</h2>
            
            <h3>6.1 Match Coins (Entertainment Currency)</h3>
            <p><strong>Purpose:</strong> Match Coins are for entertainment and social competition only.</p>
            <p><strong>No Cash Value:</strong> Match Coins have no monetary value and cannot be redeemed for cash, prizes, or anything of value.</p>
            <p><strong>Acquisition:</strong></p>
            <ul>
              <li>Purchase via in-app store (1,000 - 100,000 Match Coins per package)</li>
              <li>Daily Login Bonus: 10 Match Coins per day</li>
              <li>New User Bonus: 150 Match Coins</li>
              <li>Referral Bonus: 50 Match Coins when referred friend completes first matchup</li>
            </ul>
            <p><strong>No Expiration:</strong> Match Coins do not expire.</p>

            <h3>6.2 Match Cash (Sweepstakes Prize Currency)</h3>
            <p><strong>Purpose:</strong> Match Cash is promotional sweepstakes currency that can be redeemed for real prizes.</p>
            <p><strong>Prize Value:</strong> 1.00 Match Cash = $1.00 USD equivalent prize value.</p>
            <p><strong>Acquisition (FREE ONLY):</strong></p>
            <ul>
              <li>FREE Promotional Bonus: Automatically included with Match Coins purchases</li>
              <li>Daily Login Bonus: $0.10 Match Cash per day</li>
              <li>New User Bonus: $1.50 Match Cash</li>
              <li>Alternative Method of Entry (AMOE): Request via mail (see Section 11)</li>
            </ul>
            <p><strong>NO PURCHASE NECESSARY:</strong> Match Cash can NEVER be purchased directly. It is only obtained through free promotional methods.</p>
            <p><strong>Match Cash Pending:</strong> Bonus Match Cash may have playthrough requirements before becoming redeemable (see Section 6.5).</p>

            <h3>6.3 Currency Mode Selection</h3>
            <p><strong>Toggle System:</strong> Users can switch between Match Coins Mode and Match Cash Mode at any time on the Play Now screen.</p>
            <p><strong>Separate Balances:</strong> Match Coins and Match Cash are tracked in separate wallet balances.</p>
            <p><strong>Mode Lock:</strong> Once you enter a matchmaking queue or create a friend challenge, you cannot change currency modes until that matchup is completed or canceled.</p>
            <p><strong>No Mixing:</strong> You cannot use Match Coins and Match Cash in the same matchup.</p>
          </section>

          <section className="policy-section">
            <h2>7. MATCH CASH SWEEPSTAKES RULES</h2>
            
            <h3>7.1 Eligibility</h3>
            <p><strong>Age Requirement:</strong> Must be 18 years or older (19+ in AL and NE, 21+ in MA).</p>
            <p><strong>Prohibited States:</strong> Match Cash mode is NOT available in the following states:</p>
            <p>SEE: Matchup Terms of Use Section 1.2</p>
            <p><strong>Location Verification:</strong> Users must allow location services to participate in Match Cash matchups. Location is verified before each Match Cash game.</p>
            <p><strong>One Account Per Person:</strong> Each person may only maintain one MatchUp account. Multiple accounts are prohibited and may result in account suspension.</p>

            <h3>7.2 Alternative Method of Entry (AMOE)</h3>
            <p><strong>No Purchase Necessary:</strong> You do not need to make a purchase to receive Match Cash.</p>
            <p><strong>Mail-In Method:</strong> To receive free Match Cash, send a handwritten request on a 3x5 card to:</p>
            <p className="address-block">
              MatchUp<br />
              AMOE Request<br />
              800 N King Street Suite 304<br />
              Wilmington, DE 19801<br />
              United States
            </p>
            <p>Include your full name, email address, and MatchUp username.</p>
            <p><strong>AMOE Credit:</strong> Valid requests will receive $2.00 Match Cash credited to your account within 10 business days.</p>
            <p><strong>AMOE Limit:</strong> One AMOE request per person per week.</p>

            <h3>7.3 Sweepstakes Classification</h3>
            <p><strong>Not Gambling:</strong> MatchUp Match Cash mode is a promotional sweepstakes, not gambling. You are not wagering your own money in Match Cash games because Match Cash was obtained for free.</p>
            <p><strong>Skill-Based:</strong> Match Cash matchups are skill-based prediction games where knowledge of sports and statistics affects outcomes.</p>

            <h3>7.4 Match Cash Purchase Packages</h3>
            <p><strong>Bundle Structure:</strong> Match Cash can NEVER be purchased alone. It is only included as a FREE promotional bonus when purchasing Match Coins.</p>
            <p><strong>Current Packages:</strong></p>
            <div className="table-container">
              <table className="payout-table">
                <thead>
                  <tr>
                    <th>Price</th>
                    <th>Match Coins (Purchased)</th>
                    <th>Match Cash (FREE Bonus)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>$9.99</td><td>1,000</td><td>$10.00</td></tr>
                  <tr><td>$24.99</td><td>2,500</td><td>$25.00</td></tr>
                  <tr><td>$49.99</td><td>5,000</td><td>$50.00</td></tr>
                  <tr><td>$99.99</td><td>10,000</td><td>$100.00</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>Pricing Subject to Change:</strong> Package amounts and promotional bonuses may change without notice.</p>

            <h3>7.5 Match Cash Pending (Playthrough Requirements)</h3>
            <p><strong>Bonus Match Cash:</strong> Match Cash received as a promotional bonus from purchases is initially classified as "Match Cash Pending."</p>
            <p><strong>Playthrough Requirement:</strong> To convert Match Cash Pending to redeemable Match Cash, you must:</p>
            <ul>
              <li>Play the bonus amount through at least 1x in matchups</li>
              <li>Example: $10.00 bonus requires $10.00 total entry fees in Match Cash games</li>
            </ul>
            <p><strong>Combined Balance:</strong> Your available Match Cash for playing matchups is the sum of redeemable + pending balances.</p>
            <p><strong>Redemption Restriction:</strong> Only redeemable Match Cash (not pending) can be withdrawn/redeemed for prizes.</p>
          </section>

          <section className="policy-section">
            <h2>8. MATCH CASH REDEMPTION</h2>
            
            <h3>8.1 Redemption Methods</h3>
            <p>Users will be able to redeem Match Cash through:</p>
            <ul>
              <li>Standard Bank transfer (ACH)</li>
              <li>Instant Transfer (Debit)</li>
            </ul>

            <h3>8.2 Redemption Requirements</h3>
            <p><strong>Minimum Redemption:</strong> $25.00 Match Cash.</p>
            <p><strong>Identity Verification:</strong> Will require government-issued photo ID verification (KYC).</p>
            <p><strong>Tax Information:</strong> IRS requires tax reporting for prizes over $600/year. You will need to provide:</p>
            <ul>
              <li>Social Security Number or Tax ID</li>
              <li>Legal name and mailing address</li>
            </ul>
            <p><strong>Location Verification:</strong> Must be physically located in an eligible state at time of redemption.</p>
            <p><strong>Account Standing:</strong> Account must be in good standing with no violations of terms of service.</p>
          </section>

          <section className="policy-section">
            <h2>9. DAILY LOGIN BONUS</h2>
            
            <h3>9.1 Bonus Structure</h3>
            <p><strong>Daily Reward:</strong> Users can claim a daily bonus consisting of:</p>
            <ul>
              <li>10 Match Coins</li>
              <li>$0.10 Match Cash</li>
            </ul>
            <p><strong>Claim Method:</strong> Tap the current date on the calendar in the app header to claim your bonus.</p>
            <p><strong>Reset Time:</strong> Bonus resets at 12:00 AM midnight in your device's timezone.</p>
            <p><strong>No Automatic Claim:</strong> Bonuses must be manually claimed. They do not auto-claim upon login.</p>

            <h3>9.2 Daily Bonus Rules</h3>
            <p><strong>One Per Day:</strong> Users can claim one bonus per 24-hour period.</p>
            <p><strong>No Carryover:</strong> Unclaimed bonuses do not carry over to the next day.</p>
            <p><strong>No Expiration:</strong> Once claimed, the bonus is added to your permanent balance.</p>
            <p><strong>Account Required:</strong> Must have an active MatchUp account to claim bonuses.</p>
          </section>

          <section className="policy-section">
            <h2>10. NEW USER AND REFERRAL BONUSES</h2>
            
            <h3>10.1 New User Welcome Bonus</h3>
            <p><strong>One-Time Bonus:</strong> New users receive upon account creation:</p>
            <ul>
              <li>500 Match Coins</li>
              <li>5.00 Match Cash</li>
            </ul>
            <p><strong>Automatic Credit:</strong> Bonus is automatically credited upon successful account registration.</p>
            <p><strong>One Per Person:</strong> Limited to one welcome bonus per person/device.</p>

            <h3>10.2 Referral Program</h3>
            <p><strong>Referrer Bonus:</strong> When you refer a friend who:</p>
            <ul>
              <li>Creates an account using your referral code/link</li>
              <li>Start their first Match Cash matchup</li>
            </ul>
            <p>You receive: 500 Match Coins + 5.00 Match Cash</p>
            <p><strong>Referee Bonus:</strong> The referred friend receives the standard new user bonus (500 Match Coins + 5.00 Match Cash).</p>
            <p><strong>Referral Limits:</strong> No limit on number of friends you can refer.</p>
          </section>

          <section className="policy-section">
            <h2>11. SPORT-SPECIFIC RULES</h2>
            
            <h3>11.1 Football (NFL & NCAA)</h3>
            <p><strong>Overtime Inclusion:</strong> All predictions include overtime unless otherwise specified.</p>
            <p><strong>Game Completion:</strong> Game must reach final 5 minutes or be completed for matchups to have action.</p>
            <p><strong>Player Props:</strong> Players must be active and play at least one snap for predictions to be valid. If a player is inactive or does not play:</p>
            <ul>
              <li>Individual player props involving that player are void</li>
              <li>Matchup is recalculated without that question</li>
              <li>If this reduces questions below minimum (4), entire matchup is void and refunded</li>
            </ul>
            <p><strong>Stat Definitions:</strong></p>
            <ul>
              <li>Passing Yards: Includes sacks as negative yards</li>
              <li>Rushing Yards: Net rushing yards only</li>
              <li>Receiving Yards: Receiving yards only (does not include rushing)</li>
              <li>Touchdowns: All scoring touchdowns (rushing, receiving, passing, return, defensive)</li>
            </ul>

            <h3>11.2 Basketball (NBA & NCAA)</h3>
            <p><strong>Overtime Inclusion:</strong> All predictions include overtime unless otherwise specified.</p>
            <p><strong>Game Completion:</strong> Game must reach final 5 minutes or be completed for matchups to have action.</p>
            <p><strong>Player Props:</strong> Players must see court time for predictions to have action. If a player is inactive or does not play:</p>
            <ul>
              <li>Individual player props involving that player are void</li>
              <li>Matchup is recalculated without that question</li>
            </ul>
            <p><strong>Stat Definitions:</strong></p>
            <ul>
              <li>Points: All points scored (field goals, free throws, 3-pointers)</li>
              <li>Rebounds: Total rebounds (offensive + defensive)</li>
              <li>Assists: Official assists only</li>
              <li>Double-Double/Triple-Double: Must reach double digits in 2/3 statistical categories</li>
            </ul>

            <h3>11.3 Other Sports</h3>
            <p><strong>General Rule:</strong> For sports not specifically listed, standard rules apply:</p>
            <ul>
              <li>Games must reach 90% completion or final minutes</li>
              <li>Overtime is included unless specified</li>
              <li>Official league statistics are used for grading</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>12. PROHIBITED ACTIONS</h2>
            
            <h3>12.1 Account Violations</h3>
            <p><strong>Multiple Accounts:</strong> Creating or using multiple accounts is strictly prohibited.</p>
            <p><strong>Account Sharing:</strong> Sharing account credentials or allowing others to use your account is prohibited.</p>
            <p><strong>Automated Play:</strong> Using bots, scripts, or automated tools to play matchups is prohibited.</p>

            <h3>12.2 Collusion and Cheating</h3>
            <p><strong>Collusion:</strong> Coordinating with other users to manipulate matchup outcomes is prohibited.</p>
            <p><strong>Exploiting Bugs:</strong> Intentionally exploiting bugs, glitches, or errors for advantage is prohibited.</p>
            <p><strong>False Information:</strong> Providing false identity, location, or payment information is prohibited.</p>

            <h3>12.3 Consequences</h3>
            <p><strong>Violations:</strong> Users found violating these rules may face:</p>
            <ul>
              <li>Account suspension or termination</li>
              <li>Forfeiture of balances (Match Coins and Match Cash)</li>
              <li>Ban from future participation</li>
              <li>Legal action for fraud or illegal activity</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>13. RESPONSIBLE GAMING</h2>
            
            <h3>13.1 Set Limits</h3>
            <p><strong>Budget Management:</strong> Only spend what you can afford. Set personal limits on deposits and playtime.</p>
            <p><strong>Not Financial Investment:</strong> MatchUp is entertainment. Do not rely on winnings as income.</p>

            <h3>13.2 Problem Gaming Resources</h3>
            <p><strong>Seek Help:</strong> If you or someone you know has a gaming problem, contact:</p>
            <ul>
              <li>National Problem Gambling Helpline: 1-800-522-4700</li>
              <li>NCPG: www.ncpgambling.org</li>
            </ul>
            <p><strong>Self-Exclusion:</strong> Contact support@matchupdfs.com to request voluntary account suspension.</p>
          </section>

          <section className="policy-section">
            <h2>14. GENERAL TERMS</h2>
            
            <h3>14.1 Rule Changes</h3>
            <p><strong>Modification:</strong> MatchUp reserves the right to modify these rules at any time.</p>
            <p><strong>Notification:</strong> Users will be notified of material changes via in-app notification or email.</p>
            <p><strong>Continued Use:</strong> Continued use of the app after rule changes constitutes acceptance.</p>

            <h3>14.2 Dispute Resolution</h3>
            <p><strong>Customer Support:</strong> For disputes or questions, contact: support@matchupdfs.com</p>
            <p><strong>Final Authority:</strong> MatchUp's decisions on all rule interpretations and matchup settlements are final.</p>
            <p><strong>Arbitration:</strong> Disputes not resolved through customer support shall be settled through binding arbitration as specified in the Terms of Service.</p>

            <h3>14.3 Limitation of Liability</h3>
            <p><strong>As-Is Service:</strong> MatchUp is provided "as-is" without warranties of any kind.</p>
            <p><strong>No Guarantee:</strong> MatchUp does not guarantee uninterrupted service, error-free operation, or specific results.</p>
            <p><strong>Maximum Liability:</strong> MatchUp's total liability is limited to the amount in your account balance.</p>
          </section>

          <section className="policy-section">
            <h2>15. DEFINITIONS</h2>
            <ul>
              <li><strong>Active Matchup:</strong> A matchup where predictions have been submitted and games are in progress or completed, awaiting settlement.</li>
              <li><strong>Bot Opponent:</strong> Computer-generated opponent used when human opponents are unavailable.</li>
              <li><strong>Entry Amount:</strong> The fee required to participate in a matchup.</li>
              <li><strong>Currency Mode:</strong> Either Match Coins Mode (entertainment) or Match Cash Mode (sweepstakes prizes).</li>
              <li><strong>Featured Question:</strong> The designated tiebreaker question in a matchup.</li>
              <li><strong>Grading:</strong> The process of determining prediction correctness based on official game statistics.</li>
              <li><strong>Match Cash:</strong> Promotional sweepstakes currency obtained for free, redeemable for prizes.</li>
              <li><strong>Match Coins:</strong> Entertainment currency with no cash value, used for social play.</li>
              <li><strong>Matchup:</strong> A head-to-head competition between two users making predictions on the same set of questions.</li>
              <li><strong>Platform Service Fee:</strong> The 10% fee charged by MatchUp on the total prize pool of each matchup.</li>
              <li><strong>Prediction:</strong> Your selection (over/under, player choice, or numeric guess) for a question.</li>
              <li><strong>Settlement:</strong> The final determination and payout of a completed matchup.</li>
              <li><strong>Tiebreaker:</strong> The numeric prediction question used to determine a winner when regular predictions are tied.</li>
            </ul>
            <p className="last-updated">These rules were last updated on December 7, 2025.</p>
          </section>
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

export default GameRules

