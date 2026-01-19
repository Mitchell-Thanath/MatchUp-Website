import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import GameRules from './pages/GameRules'
import TermsOfService from './pages/TermsOfService'
import ResponsibleGaming from './pages/ResponsibleGaming'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/game-rules" element={<GameRules />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/responsible-gaming" element={<ResponsibleGaming />} />
      </Routes>
    </Router>
  )
}

export default App
