import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      {/* Animated background elements */}
      <div className="bg-grid"></div>
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <div className="bg-glow bg-glow-3"></div>
      
      {/* Floating sports icons */}
      <div className="floating-icons">
        <span className="icon icon-1">⚽</span>
        <span className="icon icon-2">🏀</span>
        <span className="icon icon-3">🏈</span>
        <span className="icon icon-4">⚾</span>
        <span className="icon icon-5">🎾</span>
        <span className="icon icon-6">🏒</span>
      </div>

      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">🎯</span>
          <span className="logo-text">MatchUp</span>
        </div>
        <div className="nav-links">
          <Link to="/privacy-policy" className="nav-link">Privacy Policy</Link>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Head-to-Head • Over/Under Predictions
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Predict. Compete.</span>
            <span className="title-line title-accent">Win Big.</span>
          </h1>
          
          <p className="hero-subtitle">
            Challenge other players to predict over/under on 5 sports questions. 
            Get more right than your opponent and take home their stake. 
            It's you vs them — may the best predictor win.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary">
              <span>Download Now</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <Link to="/privacy-policy" className="btn btn-secondary">Privacy Policy</Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">15K+</span>
              <span className="stat-label">Coins Played</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">200+</span>
              <span className="stat-label">Matchups Completed</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">5</span>
              <span className="stat-label">Questions per Match</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {/* Main Match Card */}
          <div className="match-card">
            <div className="match-header">
              <span className="match-live">LIVE MATCH</span>
              <span className="match-stake">$25 Stake</span>
            </div>
            
            <div className="match-players">
              <div className="player player-left">
                <div className="player-avatar">🔵</div>
                <span className="player-name">You</span>
                <span className="player-score">3</span>
              </div>
              <div className="vs-badge">VS</div>
              <div className="player player-right">
                <div className="player-avatar">🔴</div>
                <span className="player-name">Mike_23</span>
                <span className="player-score">2</span>
              </div>
            </div>

            <div className="match-questions">
              <div className="question completed correct">
                <span className="q-number">Q1</span>
                <span className="q-text">LeBron pts</span>
                <span className="q-line">O/U 27.5</span>
                <span className="q-pick">OVER ✓</span>
              </div>
              <div className="question completed correct">
                <span className="q-number">Q2</span>
                <span className="q-text">Mahomes TDs</span>
                <span className="q-line">O/U 2.5</span>
                <span className="q-pick">UNDER ✓</span>
              </div>
              <div className="question completed wrong">
                <span className="q-number">Q3</span>
                <span className="q-text">Judge HRs</span>
                <span className="q-line">O/U 0.5</span>
                <span className="q-pick">OVER ✗</span>
              </div>
              <div className="question completed correct">
                <span className="q-number">Q4</span>
                <span className="q-text">Ohtani Ks</span>
                <span className="q-line">O/U 8.5</span>
                <span className="q-pick">OVER ✓</span>
              </div>
              <div className="question active">
                <span className="q-number">Q5</span>
                <span className="q-text">McDavid pts</span>
                <span className="q-line">O/U 1.5</span>
                <span className="q-pick pending">WAITING...</span>
              </div>
            </div>

            <div className="match-footer">
              <span className="match-status">1 question remaining</span>
            </div>
          </div>

          {/* Side Cards */}
          <div className="side-card side-card-1">
            <div className="side-card-header">
              <span className="side-icon">🏆</span>
              <span>Victory!</span>
            </div>
            <div className="side-card-body">
              <span className="win-amount">+$25.00</span>
              <span className="win-record">You: 4 • Opponent: 1</span>
            </div>
          </div>

          <div className="side-card side-card-2">
            <div className="side-card-header">
              <span className="side-icon">⚡</span>
              <span>New Challenge</span>
            </div>
            <div className="side-card-body">
              <span className="challenger-name">Sarah_MVP</span>
              <span className="challenger-stake">wants to play for $10</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 MatchUp. All rights reserved.</p>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  )
}

export default Home
