import MainHero from './components/MainHero'
import AboutHackathon from './components/AboutHackathon'
import WhatIsHackathon from './components/WhatIsHackathon'
import ParticipationChallenges from './components/ParticipationChallenges'
import WhyParticipate from './components/WhyParticipate'
import EventInfoSection from './components/EventInfoSection'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <MainHero />
      <AboutHackathon />
      <WhatIsHackathon />
      <WhyParticipate />
      <ParticipationChallenges />
      <EventInfoSection />
    </div>
  )
}

export default App
