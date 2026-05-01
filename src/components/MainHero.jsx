import { useState } from 'react';
import './MainHero.css';

const MainHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <section className="main-hero">
      
      {/* Background Wave Image */}
      <div className="hero-bg-wave" style={{ backgroundImage: "url('/bg-wave.jpg')" }}></div>

      {/* Navigation / Header */}
      <nav className={`main-nav-pill ${isMenuOpen ? 'is-menu-open' : ''}`}>
        <div className="nav-logo">
          <span className="logo-blue">H</span><span className="logo-2">2</span><span className="logo-blue">S</span>
        </div>
        <div className="nav-links">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#how-preview" onClick={closeMenu}>How to participate?</a>
          <a href="#challenges-preview" onClick={closeMenu}>Challenges</a>
          <a href="#schedule" onClick={closeMenu}>Schedules</a>
          <a href="#rewards" onClick={closeMenu}>Rewards</a>
          <a href="#faq" onClick={closeMenu}>FAQs</a>
        </div>
        <div className="nav-actions">
          <button className="sign-in-btn">Sign In</button>
          <button
            className="nav-menu-btn"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Content Area */}
      <div className="hero-main-layout">
        
        {/* The huge background text (behind the model) */}
        <div className="hero-text-layer">
          <h1 className="headline-solid">CODE THE</h1>
          <h1 className="headline-outline">FUTURE</h1>
        </div>

        {/* The model and the purple geometric block */}
        <div className="hero-model-layer">
          <div className="purple-geometric-block"></div>
          <img 
            src="/futuresticmodel.png" 
            alt="Futuristic Model" 
            className="model-img"
          />
        </div>

        {/* Subtitle bottom left */}
        <div className="hero-subtitle-left">
          WHERE INNOVATION BECOMES REALITY
        </div>

        {/* Register CTA bottom right */}
        <div className="hero-cta-right">
          <button className="glass-register-btn">
            Register Now
          </button>
        </div>

      </div>

    </section>
  );
};

export default MainHero;
