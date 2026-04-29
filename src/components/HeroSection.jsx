import React from 'react';
import './HeroSection.css';

const FeatureCard = ({ title, description, align = 'left' }) => (
  <div className={`feature-card ${align === 'right' ? 'align-right' : 'align-left'}`}>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="feature-tab" />
  </div>
);

const HeroSection = () => {
  return (
    <section className="hero-section">

      {/* Background Orbital Circles */}
      <div className="background-orbitals">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="orbital-circle"
            style={{
              width: `${i * 300}px`,
              height: `${i * 300}px`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Top Title */}
      <h2 className="hero-title">
        Why Participate?
      </h2>

      {/* Main Content Area */}
      <div className="hero-content">

        {/* Left Cards */}
        <div className="hero-column column-left">
          <FeatureCard
            title="Mentorship from Experts"
            description="Gain invaluable insights and guidance from experienced technologists and domain experts."
            align="right"
          />
          <FeatureCard
            title="Networking"
            description="Connect with peers, professionals, and innovation leaders from across the nation."
            align="right"
          />
        </div>

        {/* Center Astronaut Image */}
        <div className="astronaut-container">
          <div className="astronaut-wrapper">
            {/* Pulsing glow behind astronaut */}
            <div className="astronaut-glow" />
            <img
              src="/astronaut-transparent.png"
              alt="Floating Astronaut"
              className="astronaut-img"
            />
          </div>
        </div>

        {/* Right Cards */}
        <div className="hero-column column-right">
          <FeatureCard
            title="Internship Opportunities"
            description="Stand a chance to secure internships at top institutions and innovation labs."
            align="left"
          />
          <FeatureCard
            title="Real-World Impact"
            description="Contribute to meaningful challenges that aim to improve lives and systems at scale."
            align="left"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
