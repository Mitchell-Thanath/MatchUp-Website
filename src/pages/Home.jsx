import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import { getLiveStats, subscribeToStats } from '../lib/supabase'

const TESTFLIGHT_URL = 'https://testflight.apple.com/join/RDrC9kst'

function Home() {
  const [currencyMode, setCurrencyMode] = useState('COINS')
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [sentTaunt, setSentTaunt] = useState(null)
  const [matchMode, setMatchMode] = useState('random')
  const [selectedPicks, setSelectedPicks] = useState({})
  const [yourScore, setYourScore] = useState(3)
  const [oppScore, setOppScore] = useState(2)
  const [activePopup, setActivePopup] = useState('hint')
  const [showBetaModal, setShowBetaModal] = useState(false)
  
  // Stats from database
  const [stats, setStats] = useState({
    liveMatchups: 0,
    inProgressMatchups: 0,
    completedMatchups: 0,
    totalPlayers: 0,
    tokensPlayed: 0,
  })
  
  // Animated counter values
  const [animatedStats, setAnimatedStats] = useState({
    inProgressMatchups: 0,
    completedMatchups: 0,
    totalPlayers: 0,
    tokensPlayed: 0,
  })

  // Fetch real stats from Supabase
  useEffect(() => {
    async function fetchStats() {
      const liveStats = await getLiveStats()
      setStats(liveStats)
    }
    fetchStats()

    // Subscribe to realtime updates
    const unsubscribe = subscribeToStats(() => {
      fetchStats()
    })

    return () => unsubscribe()
  }, [])
  
  // Animate counters when stats change
  useEffect(() => {
    const duration = 1500 // 1.5 seconds
    const steps = 40
    const interval = duration / steps
    
    const targets = {
      inProgressMatchups: stats.inProgressMatchups,
      completedMatchups: stats.completedMatchups,
      totalPlayers: stats.totalPlayers,
      tokensPlayed: stats.tokensPlayed,
    }
    
    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      // Ease out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      setAnimatedStats({
        inProgressMatchups: Math.round(targets.inProgressMatchups * easeOut),
        completedMatchups: Math.round(targets.completedMatchups * easeOut),
        totalPlayers: Math.round(targets.totalPlayers * easeOut),
        tokensPlayed: Math.round(targets.tokensPlayed * easeOut),
      })
      
      if (step >= steps) {
        clearInterval(timer)
        setAnimatedStats(targets) // Ensure final values are exact
      }
    }, interval)
    
    return () => clearInterval(timer)
  }, [stats])

  // User stats
  const [userStats] = useState({
    peak: 1892,
    best: '#1',
    super: 0,
    friends: 11,
    won: 43,
    bestWin: 0.90,
    accuracy: 53,
    recent: 52,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '-50px' }
    )

    document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale, .stagger-children').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuestion(prev => (prev + 1) % 5)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Rotate popups
  useEffect(() => {
    const popups = ['hint', 'picks', 'taunts', 'entry']
    let idx = 0
    const interval = setInterval(() => {
      idx = (idx + 1) % popups.length
      setActivePopup(popups[idx])
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const toggleCurrency = () => {
    setCurrencyMode(prev => prev === 'COINS' ? 'CASH' : 'COINS')
  }

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toString()
  }

  const handleTauntClick = (emoji) => {
    setSentTaunt(emoji)
    setActivePopup('taunts')
    setTimeout(() => setSentTaunt(null), 2000)
  }

  const handlePickSelection = (qNum, pick) => {
    setSelectedPicks(prev => ({ ...prev, [qNum]: pick }))
    setActivePopup('picks')
    if (Math.random() > 0.4) {
      setYourScore(prev => Math.min(prev + 1, 5))
    }
  }

  const handleEntryClick = () => {
    setActivePopup('entry')
  }

  // Taunts
  const taunts = [
    { emoji: '🔥', message: 'You cooked fr' },
    { emoji: '💀', message: 'RIP bozo' },
    { emoji: '🤡', message: 'Certified clown' },
    { emoji: '😴', message: 'Sleep on this L' },
    { emoji: '🗑️', message: 'Garbage picks' },
    { emoji: '💅', message: 'Too EZ' },
  ]

  // Match questions with real NBA players
  const questions = [
    { 
      num: 1, 
      type: 'GAME WINNER', 
      question: 'Who will win?', 
      teamA: { name: 'Lakers', abbr: 'LAL' },
      teamB: { name: 'Celtics', abbr: 'BOS' },
      options: ['LAKERS', 'CELTICS'],
      icon: '🏆'
    },
    { 
      num: 2, 
      type: 'OVER/UNDER', 
      question: 'LeBron James pts', 
      player: { name: 'LeBron James', team: 'LAL', number: '23' },
      line: 'O/U 27.5',
      options: ['OVER', 'UNDER'],
      icon: '📊'
    },
    { 
      num: 3, 
      type: 'OVER/UNDER', 
      question: 'Jayson Tatum pts', 
      player: { name: 'Jayson Tatum', team: 'BOS', number: '0' },
      line: 'O/U 26.5',
      options: ['OVER', 'UNDER'],
      icon: '📊'
    },
    { 
      num: 4, 
      type: 'STAR', 
      question: 'More assists?', 
      playerA: { name: 'LeBron', team: 'LAL', number: '23' },
      playerB: { name: 'Brown', team: 'BOS', number: '7' },
      options: ['LEBRON', 'BROWN'],
      icon: '⭐'
    },
    { 
      num: 5, 
      type: 'TIEBREAKER', 
      question: 'Total combined pts', 
      line: '2x Multiplier',
      options: ['218', '225', '232'],
      icon: '🎯'
    },
  ]

  // Leaderboard data
  const topThree = [
    { rank: 2, name: 'JohnDoe', initials: 'JD', rating: 2100, avatar: '😎' },
    { rank: 1, name: 'SportsKing', initials: 'SK', rating: 2450, avatar: '👑' },
    { rank: 3, name: 'AceMike', initials: 'AM', rating: 1890, avatar: '🎯' },
  ]

  const rankList = [
    { rank: 4, name: 'ProGamer', initials: 'PG', rating: 1720 },
    { rank: 5, name: 'LegendBoss', initials: 'LB', rating: 1650 },
    { rank: 6, name: 'NinjaJay', initials: 'NJ', rating: 1580 },
    { rank: 7, name: 'QuickShot', initials: 'QS', rating: 1490 },
  ]

  // Token component
  const Token = ({ type = 'gold', size = 'medium' }) => (
    <div className={`token-icon ${type} ${size}`}>
      <span className="token-symbol">₮</span>
    </div>
  )

  // Rating Icon
  const RatingIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
            fill="url(#ratingGrad)" stroke="#A78BFA" strokeWidth="1"/>
      <defs>
        <linearGradient id="ratingGrad" x1="2" y1="2" x2="22" y2="22">
          <stop stopColor="#8B5CF6"/>
          <stop offset="1" stopColor="#A78BFA"/>
        </linearGradient>
      </defs>
    </svg>
  )

  // Team Logo Component - Real NBA logos
  const TeamLogo = ({ team, size = 32 }) => {
    const logos = {
      LAL: 'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg',
      BOS: 'https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg',
    }
    const logoUrl = logos[team]
    
    return (
      <img 
        src={logoUrl}
        alt={team}
        className="team-logo-real" 
        style={{ 
          width: size, 
          height: size,
          objectFit: 'contain',
        }}
      />
    )
  }

  // Player Headshot - ESPN headshots
  const PlayerHeadshot = ({ player, size = 32 }) => {
    const playerIds = {
      'LeBron James': '1966',
      'LeBron': '1966',
      'Jaylen Brown': '3917376',
      'Brown': '3917376',
      'Jayson Tatum': '4065648',
      'Tatum': '4065648',
    }
    const playerId = playerIds[player.name] || playerIds[player.name?.split(' ')[0]] || '1966'
    const headshotUrl = `https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/${playerId}.png&w=350&h=254`
    
    return (
      <img 
        src={headshotUrl}
        alt={player.name}
        className="player-headshot-real"
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          objectFit: 'cover',
          objectPosition: 'top',
          border: '2px solid rgba(255,255,255,0.4)',
          boxShadow: '0 3px 12px rgba(0,0,0,0.4)',
          background: 'linear-gradient(135deg, #333, #1a1a1a)'
        }}
      />
    )
  }

  return (
    <div className="home">
      {/* Animated gradient background */}
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="nav-brand">
          <img src="/matchup-logo.png" alt="MatchUp" className="logo-image" />
          <span className="logo-text">MatchUp</span>
          <button className="beta-badge-btn" onClick={(e) => { e.preventDefault(); setShowBetaModal(true); }}>BETA</button>
        </Link>

        <div className="nav-center">
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#free-tokens" className="nav-link">Free Tokens</a>
          <a href="#social" className="nav-link">Social</a>
        </div>

        <div className="nav-right">
          <div className="live-players">
            <span className="live-pulse"></span>
            <span className="live-count counter-animate">{formatNumber(animatedStats.inProgressMatchups)}</span>
            <span className="live-label">live matchups</span>
        </div>
          <a href={TESTFLIGHT_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">Download</a>
        </div>
      </nav>

      {/* Beta Modal */}
      {showBetaModal && (
        <div className="modal-overlay" onClick={() => setShowBetaModal(false)}>
          <div className="beta-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowBetaModal(false)}>×</button>
            <div className="beta-modal-header">
              <span className="beta-icon">β</span>
              <h2>BETA Program</h2>
            </div>
            
            <div className="founding-user-card">
              <span className="founding-star">⭐</span>
              <h3>YOU'RE A FOUNDING USER</h3>
              <p>You are revolutionizing sports gaming 🚀</p>
            </div>

            <div className="vision-card">
              <span className="vision-globe">🌍</span>
              <span className="vision-label">OUR VISION</span>
              <p>Where sports knowledge becomes social competition.</p>
              <span className="vision-date">Est. October 9, 2025</span>
            </div>

            <div className="beta-benefits">
              <h4>WHAT YOU GET</h4>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon purple">👤</div>
                  <span>Direct access to founders</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon gold">💡</div>
                  <span>Shape the product</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon green">💰</div>
                  <span>Bonus tokens after call</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon purple">☕</div>
                  <span>Zero prep needed</span>
                </div>
              </div>
            </div>

            <div className="feedback-reward">
              <span className="reward-label">FEEDBACK REWARD</span>
              <div className="reward-amount">🎁 Get Rewarded!</div>
              <span className="reward-note">Credited after call completion</span>
          </div>
          
            <a href={TESTFLIGHT_URL} target="_blank" rel="noopener noreferrer" className="beta-cta">
              Download App to Join →
            </a>
          </div>
        </div>
      )}

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-left animate-on-scroll">
          <h1 className="hero-title">
              <span>Predict.</span>
              <span>Compete.</span>
              <span className="gradient-text">Win Big.</span>
          </h1>
          
          <p className="hero-subtitle">
              Challenge other players to predict the answer to 5 sports questions. 
              Get more right than your opponent and take home the prize. 
            It's you vs them — may the best predictor win.
          </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-value counter-animate">{formatNumber(animatedStats.completedMatchups)}</span>
                <span className="stat-label">Matchups Completed</span>
              </div>
              <div className="hero-stat">
                <span className="stat-value counter-animate">{formatNumber(animatedStats.totalPlayers)}</span>
                <span className="stat-label">Total Players</span>
              </div>
              <div className="hero-stat">
                <span className="stat-value counter-animate">{formatNumber(animatedStats.tokensPlayed)}</span>
                <span className="stat-label">Tokens Played</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href={TESTFLIGHT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span>Download Free</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              </a>
              <a href="#how-it-works" className="btn-secondary">See How It Works</a>
            </div>
          </div>

          <div className="hero-right animate-on-scroll delay-1">
            {/* Interactive Phone Demo */}
            <div className="phone-demo">
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  {/* App Header */}
                  <div className="demo-header">
                    <img src="/matchup-logo.png" alt="MatchUp" className="demo-logo-img" />
                    <span className="demo-title">MATCHUP</span>
                    <span className="demo-badge">NBA</span>
                  </div>

                  {/* Match Teams with Real Logos */}
                  <div className="demo-match-header">
                    <div className="demo-team">
                      <TeamLogo team="LAL" size={36} />
                      <span>Lakers</span>
                    </div>
                    <div className="demo-vs-circle">VS</div>
                    <div className="demo-team">
                      <TeamLogo team="BOS" size={36} />
                      <span>Celtics</span>
                    </div>
          </div>

                  {/* Entry/Win Boxes */}
                  <div className="demo-entry-boxes" onClick={handleEntryClick}>
                    <div className="entry-box">
                      <span className="entry-box-label">ENTRY</span>
                      <div className="entry-box-value">
                        <Token type="gold" size="small" />
                        <span>10</span>
            </div>
            </div>
                    <div className="entry-box win">
                      <span className="entry-box-label">TO WIN</span>
                      <div className="entry-box-value">
                        <Token type="gold" size="small" />
                        <span>18</span>
            </div>
          </div>
        </div>

                  {/* Live Indicator */}
                  <div className="demo-live">
                    <span className="demo-live-dot"></span>
                    <span>LIVE MATCH</span>
                  </div>

                  {/* Players */}
                  <div className="demo-players">
                    <div className="demo-player">
                      <div className="demo-avatar you">
                        <span>👤</span>
                        <span className="crown-badge">👑</span>
                      </div>
                      <span className="demo-player-name">You</span>
                      <span className="demo-score win">{yourScore}</span>
                    </div>
                    <div className="demo-vs-badge">VS</div>
                    <div className="demo-player">
                      <div className="demo-avatar opp">😈</div>
                      <span className="demo-player-name">Mike_23</span>
                      <span className="demo-score">{oppScore}</span>
                    </div>
                  </div>

                  {/* Interactive Questions */}
                  <div className="demo-questions">
                    {questions.map((q, idx) => (
                      <div 
                        key={q.num}
                        className={`demo-question ${selectedPicks[q.num] ? 'picked' : ''} ${idx === activeQuestion ? 'active' : ''}`}
                      >
                        <div className="demo-q-left">
                          <span className="demo-q-icon">{q.icon}</span>
                          <div className="demo-q-info">
                            <span className="demo-q-type">{q.type}</span>
                            <span className="demo-q-text">{q.question}</span>
                            {q.player && (
                              <div className="demo-q-player">
                                <PlayerHeadshot player={q.player} size={32} />
                                <span>{q.player.name}</span>
                              </div>
                            )}
                            {q.playerA && q.playerB && (
                              <div className="demo-q-matchup">
                                <PlayerHeadshot player={q.playerA} size={28} />
                                <span>vs</span>
                                <PlayerHeadshot player={q.playerB} size={28} />
                              </div>
                            )}
                            {q.line && <span className="demo-q-line">{q.line}</span>}
                          </div>
                        </div>
                        <div className="demo-q-picks">
                          {q.options.map((opt, i) => (
                            <button
                              key={i}
                              className={`demo-pick-btn ${selectedPicks[q.num] === opt ? 'selected' : ''}`}
                              onClick={() => handlePickSelection(q.num, opt)}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Taunts Bar */}
                  <div className="demo-taunts">
                    <span className="demo-taunts-label">Send:</span>
                    <div className="demo-taunt-btns">
                      {taunts.slice(0, 5).map((t, i) => (
                        <button 
                          key={i} 
                          className={`demo-taunt-btn ${sentTaunt === t.emoji ? 'sent' : ''}`}
                          onClick={() => handleTauntClick(t.emoji)}
                        >
                          {t.emoji}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sent Taunt Animation */}
                  {sentTaunt && (
                    <div className="taunt-sent-popup">
                      <span className="taunt-sent-emoji">{sentTaunt}</span>
                      <span>Sent!</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="phone-glow"></div>
            </div>

            {/* Dynamic Contextual Popups */}
            <div className={`context-popup hint ${activePopup === 'hint' ? 'show' : ''}`}>
              <span className="popup-icon">👆</span>
              <span>Make your picks!</span>
            </div>

            <div className={`context-popup picks ${activePopup === 'picks' ? 'show' : ''}`}>
              <span className="popup-icon">🎯</span>
              <div className="popup-content">
                <span className="popup-title">Most correct wins!</span>
                <span className="popup-sub">Your picks: {Object.keys(selectedPicks).length}/5</span>
              </div>
            </div>

            <div className={`context-popup taunts ${activePopup === 'taunts' ? 'show' : ''}`}>
              <span className="popup-icon">💬</span>
              <div className="popup-content">
                <span className="popup-title">Trash Talk!</span>
                <span className="popup-sub">Send taunts during the match</span>
              </div>
            </div>

            <div className={`context-popup entry ${activePopup === 'entry' ? 'show' : ''}`}>
              <span className="popup-icon">🏆</span>
              <div className="popup-content">
                <span className="popup-title">Winner Takes All!</span>
                <span className="popup-sub">Entry: 10₮ → Win: 18₮</span>
              </div>
            </div>

            {/* Victory Card */}
            <div className="float-card victory animate-float">
              <span className="victory-crown">👑</span>
              <div className="victory-content">
                <span className="victory-title">VICTORY</span>
                <span className="victory-winnings">+18 Tokens</span>
              </div>
            </div>
          </div>
        </section>

        {/* Wave Transition */}
        <div className="wave-transition">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z" 
                  fill="rgba(139, 92, 246, 0.05)"/>
          </svg>
        </div>

        {/* Two Ways to Play - 3D Experience */}
        <section className="ways-to-play-section animate-on-scroll" id="how-it-works">
          <div className="section-header">
            <h2 className="section-title-3d">
              <span className="title-layer">Two Ways to Play</span>
            </h2>
            <p className="section-subtitle-glow">Sweepstakes model • No purchase necessary</p>
            </div>
            
          <div className="ways-to-play-stage">
            {/* Toggle Switch - Original Style */}
            <div className="toggle-wrapper">
              <div 
                className={`toggle-switch-3d ${currencyMode === 'CASH' ? 'cash' : 'coins'}`}
                onClick={toggleCurrency}
              >
                <div className="toggle-bezel">
                  <div className="toggle-track-bg gold"></div>
                  <div className="toggle-track-bg green"></div>
                  <div className="toggle-thumb">
                    <Token type={currencyMode === 'CASH' ? 'green' : 'gold'} size="small" />
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Floating Cards */}
            <div className="currency-cards-3d">
              <div 
                className={`currency-card-3d coins ${currencyMode === 'COINS' ? 'active front' : 'back'}`}
                onClick={() => setCurrencyMode('COINS')}
              >
                <div className="card-3d-inner">
                  <div className="card-face front">
                    <div className="card-shine"></div>
                    <div className="card-content">
                      <div className="floating-token">
                        <Token type="gold" size="large" />
                        <div className="token-glow gold"></div>
                      </div>
                      <h3>Match Coins</h3>
                      <span className="card-badge">Entertainment</span>
                      <div className="card-features">
                        <div className="feature-item">
                          <span className="feature-icon">🎮</span>
                          <span>Play for fun</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-icon">💰</span>
                          <span>Purchase packages</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-icon">✨</span>
                          <span>Entertainment only</span>
                        </div>
                      </div>
                      <button className="card-cta-3d gold">
                        <span>Start Playing</span>
                        <div className="cta-shine"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="vs-badge-3d">
                <span>VS</span>
              </div>

              <div 
                className={`currency-card-3d cash ${currencyMode === 'CASH' ? 'active front' : 'back'}`}
                onClick={() => setCurrencyMode('CASH')}
              >
                <div className="card-3d-inner">
                  <div className="card-face front">
                    <div className="card-shine"></div>
                    <div className="card-content">
                      <div className="floating-token">
                        <Token type="green" size="large" />
                        <div className="token-glow green"></div>
                      </div>
                      <h3>Match Cash</h3>
                      <span className="card-badge green">Prizes</span>
                      <div className="card-features">
                        <div className="feature-item">
                          <span className="feature-icon">🎁</span>
                          <span>FREE bonus only</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-icon">🏆</span>
                          <span>Real prizes eligible</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-icon">📋</span>
                          <span>Subject to terms</span>
                        </div>
                      </div>
                      <button className="card-cta-3d green">
                        <span>Win Prizes</span>
                        <div className="cta-shine"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Tokens Section */}
        <section className="free-tokens-section animate-on-scroll" id="free-tokens">
          <div className="section-header animate-on-scroll">
            <h2>🎁 Free Cash & Coins</h2>
            <p>Multiple ways to earn without spending</p>
          </div>

          <div className="tokens-grid stagger-children animate-on-scroll">
            {/* Daily Bonus */}
            <div className="token-reward-card daily">
              <div className="reward-card-header">
                <span className="reward-emoji">📅</span>
                <h3>Daily Bonus</h3>
              </div>
              <div className="reward-amounts">
                <div className="reward-amount-row">
                  <Token type="gold" size="medium" />
                  <span className="amount gold">+10</span>
                </div>
                <span className="plus-sign">+</span>
                <div className="reward-amount-row">
                  <Token type="green" size="medium" />
                  <span className="amount green">+0.10</span>
                </div>
              </div>
              <p className="reward-desc">Claim every day at midnight!</p>
              <a href={TESTFLIGHT_URL} target="_blank" rel="noopener noreferrer" className="reward-cta">Download to Claim</a>
            </div>

            {/* Referral Bonus */}
            <div className="token-reward-card referral">
              <div className="reward-card-header">
                <span className="reward-emoji">👥</span>
                <h3>Refer a Friend</h3>
              </div>
              <div className="reward-amounts">
                <div className="reward-amount-row">
                  <Token type="gold" size="medium" />
                  <span className="amount gold">+500</span>
                </div>
                <span className="plus-sign">+</span>
                <div className="reward-amount-row">
                  <Token type="green" size="medium" />
                  <span className="amount green">+5.00</span>
                </div>
              </div>
              <p className="reward-desc">Per friend when they play Match Cash</p>
              <div className="referral-code">
                <span className="code-label">YOUR CODE</span>
                <span className="code-value">IN-APP</span>
            </div>
          </div>

            {/* Welcome Bonus */}
            <div className="token-reward-card welcome">
              <div className="reward-card-header">
                <span className="reward-emoji">🎉</span>
                <h3>Welcome Bonus</h3>
              </div>
              <div className="reward-amounts">
                <div className="reward-amount-row">
                  <Token type="gold" size="medium" />
                  <span className="amount gold">+500</span>
                </div>
                <span className="plus-sign">+</span>
                <div className="reward-amount-row">
                  <Token type="green" size="medium" />
                  <span className="amount green">+5.00</span>
                </div>
              </div>
              <p className="reward-desc">Instant bonus on first login!</p>
              <div className="reward-badge">NO PURCHASE NECESSARY</div>
            </div>

            {/* Feedback Call Bonus */}
            <div className="token-reward-card feedback">
              <div className="reward-card-header">
                <span className="reward-emoji">📞</span>
                <h3>Feedback Call</h3>
              </div>
              <div className="reward-amounts single">
                <div className="reward-amount-row">
                  <span className="amount gold big">🎁 Get Rewarded!</span>
                </div>
              </div>
              <p className="reward-desc">Chat with founders, earn tokens!</p>
              <div className="call-stats">
                <span>🕐 30 Minutes</span>
                <span>📖 0 Prep</span>
                <span>😊 100% Casual</span>
              </div>
            </div>
          </div>
        </section>

        {/* Wave Transition */}
        <div className="wave-transition flip">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,50 C360,0 720,100 1080,50 C1260,25 1380,75 1440,50 L1440,100 L0,100 Z" 
                  fill="rgba(255, 71, 87, 0.05)"/>
          </svg>
        </div>

        {/* Social Section */}
        <section className="social-section animate-on-scroll" id="social">
          <div className="section-header">
            <h2>Social Competition</h2>
            <p>Trash talk, compete with friends, climb the ranks</p>
          </div>

          <div className="social-grid stagger-children animate-on-scroll">
            {/* Match Modes with Stats */}
            <div className="social-card modes">
              <h3>🎮 Choose Your Battle</h3>
              <div className="mode-options">
                <button 
                  className={`mode-btn ${matchMode === 'random' ? 'active' : ''}`}
                  onClick={() => setMatchMode('random')}
                >
                  <span className="mode-icon">🎲</span>
                  <span className="mode-title">Random Match</span>
                  <span className="mode-desc">Find an opponent instantly</span>
                </button>
                <button 
                  className={`mode-btn ${matchMode === 'friends' ? 'active' : ''}`}
                  onClick={() => setMatchMode('friends')}
                >
                  <span className="mode-icon">👥</span>
                  <span className="mode-title">Challenge Friend</span>
                  <span className="mode-desc">Send a direct challenge</span>
                </button>
              </div>
              
              {/* Stats Grid */}
              <div className="stats-grid-app">
                <div className="stat-box">
                  <div className="stat-box-icon purple"><RatingIcon size={18} /></div>
                  <span className="stat-box-value">{userStats.peak}</span>
                  <span className="stat-box-label">PEAK</span>
                </div>
                <div className="stat-box">
                  <div className="stat-box-icon pink">👑</div>
                  <span className="stat-box-value">{userStats.best}</span>
                  <span className="stat-box-label">BEST</span>
                </div>
                <div className="stat-box">
                  <div className="stat-box-icon gold">⭐</div>
                  <span className="stat-box-value">{userStats.super}</span>
                  <span className="stat-box-label">SUPER</span>
                </div>
                <div className="stat-box">
                  <div className="stat-box-icon teal">👥</div>
                  <span className="stat-box-value">{userStats.friends}</span>
                  <span className="stat-box-label">FRIENDS</span>
                </div>
                <div className="stat-box">
                  <div className="stat-box-icon gold">🏆</div>
                  <span className="stat-box-value">{userStats.won}</span>
                  <span className="stat-box-label">WON</span>
                </div>
                <div className="stat-box">
                  <div className="stat-box-icon green"><Token type="green" size="tiny" /></div>
                  <span className="stat-box-value">{userStats.bestWin}</span>
                  <span className="stat-box-label">BEST WIN</span>
                </div>
                <div className="stat-box">
                  <div className="stat-box-icon teal">🎯</div>
                  <span className="stat-box-value">{userStats.accuracy}%</span>
                  <span className="stat-box-label">ACCURACY</span>
                </div>
                <div className="stat-box">
                  <div className="stat-box-icon purple">📈</div>
                  <span className="stat-box-value">{userStats.recent}%</span>
                  <span className="stat-box-label">RECENT</span>
                </div>
              </div>
            </div>

            {/* Taunts */}
            <div className="social-card taunts">
              <h3>🔥 Trash Talk</h3>
              <p className="social-card-sub">Click to send (in-app)</p>
              <div className="taunts-interactive">
                {taunts.map((taunt, index) => (
                  <button 
                    key={index} 
                    className={`taunt-interactive ${sentTaunt === taunt.emoji ? 'sent' : ''}`}
                    onClick={() => handleTauntClick(taunt.emoji)}
                  >
                    <span className="taunt-emoji-large">{taunt.emoji}</span>
                    <span className="taunt-text">{taunt.message}</span>
                    {sentTaunt === taunt.emoji && <span className="taunt-sent-badge">Sent!</span>}
                  </button>
                ))}
            </div>
          </div>

            {/* Leaderboard */}
            <div className="social-card leaderboard-full">
              <h3>🏆 Global Leaderboard</h3>
              
              <div className="mini-podium-full">
                {topThree.map((player) => (
                  <div key={player.rank} className={`podium-spot-full rank-${player.rank}`}>
                    {player.rank === 1 && <span className="podium-crown-full">👑</span>}
                    <div className="podium-avatar-full">
                      <span>{player.avatar || player.initials}</span>
                    </div>
                    <span className="podium-name-full">{player.name}</span>
                    <div className="podium-rating-full">
                      <RatingIcon size={12} />
                      <span>{player.rating}</span>
                    </div>
                    <div className={`podium-block-full rank-${player.rank}`}>{player.rank}</div>
                  </div>
                ))}
              </div>

              <div className="rank-list-full">
                {rankList.map((player) => (
                  <div key={player.rank} className="rank-row-full">
                    <span className="rank-pos-full">#{player.rank}</span>
                    <div className="rank-avatar-full">{player.initials}</div>
                    <span className="rank-name-full">{player.name}</span>
                    <div className="rank-rating-full">
                      <RatingIcon size={10} />
                      <span>{player.rating}</span>
                    </div>
            </div>
                ))}
            </div>
          </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section animate-on-scroll">
          <h2>Ready to Compete?</h2>
          <p>Download free • Play instantly • Win prizes</p>
          <div className="cta-buttons">
            <a href={TESTFLIGHT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary large">
              <span>Download for iOS</span>
            </a>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="disclaimer">
          <span>🛡️</span>
          <p><strong>No Purchase Necessary.</strong> Match Cash awarded as promotional bonus only. Void where prohibited.</p>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 MatchUp. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span>•</span>
          <Link to="/terms-of-service">Terms of Service</Link>
          <span>•</span>
          <Link to="/game-rules">Game Rules</Link>
          <span>•</span>
          <Link to="/responsible-gaming">Responsible Gaming</Link>
        </div>
      </footer>
    </div>
  )
}

export default Home
