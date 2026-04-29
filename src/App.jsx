import React from 'react'
import HeroSection from './components/HeroSection'
import TimelineSlider from './components/TimelineSlider'
import ImageGallery from './components/ImageGallery'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <TimelineSlider />
      <ImageGallery />
    </div>
  )
}

export default App

