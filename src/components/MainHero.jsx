import { useState } from 'react';
import './MainHero.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'How to participate?', href: '#how-preview' },
  { label: 'Challenges', href: '#challenges-preview' },
  { label: 'Schedules', href: '#schedule' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'FAQs', href: '#faq' },
];

const MainHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <section className="main-hero">
      
      {/* Background Wave Image */}
      <div className="hero-bg-wave" style={{ backgroundImage: "url('/bg-wave.jpg')" }}></div>

      {/* Navigation Pill */}
      <nav className={`main-nav-pill ${isMenuOpen ? 'is-menu-open' : ''}`}>
        <div className="nav-logo">
          <span className="logo-blue">H</span><span className="logo-2">2</span><span className="logo-blue">S</span>
        </div>

        {/* Desktop links — hidden on mobile via CSS */}
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="sign-in-btn">Sign In</button>
          <button
            className="nav-menu-btn"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown — renders OUTSIDE the pill, slides below it */}
      <div className={`mobile-menu-dropdown ${isMenuOpen ? 'is-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
        ))}
      </div>

      {/* Hero Content Area */}
      <div className="hero-main-layout">
        
        <div className="hero-text-layer">
          <h1 className="headline-solid">CODE THE</h1>
          <h1 className="headline-outline">FUTURE</h1>
        </div>

        <div className="hero-model-layer">
          <div className="purple-geometric-block"></div>
          <img 
            src="/futuresticmodel.png" 
            alt="Futuristic Model" 
            className="model-img"
          />
        </div>

        <div className="hero-subtitle-left">
          WHERE INNOVATION BECOMES REALITY
        </div>

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

