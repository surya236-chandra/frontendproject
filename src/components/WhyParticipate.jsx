import './WhyParticipate.css';

const WhyParticipate = () => {
  return (
    <section className="why-participate">
      
      {/* Background Rings */}
      <div className="radar-rings">
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
        <div className="ring ring-4"></div>
      </div>

      <div className="wp-header">
        <h4 className="wp-subtitle">WHY PARTICIPATE?</h4>
      </div>

      <div className="wp-container">
        
        {/* Left Panel */}
        <div className="wp-panel panel-left">
          <div className="panel-content text-right">
            <div className="benefit-item">
              <h3>Mentorship from Experts</h3>
              <p>Gain invaluable insights and guidance from experienced technologists and domain experts.</p>
            </div>
            <div className="benefit-item">
              <h3>Networking</h3>
              <p>Connect with peers, professionals, and innovation leaders from across the nation.</p>
            </div>
          </div>
          
          {/* Connector tabs */}
          <div className="connector top-connector"></div>
          <div className="connector bottom-connector"></div>
        </div>

        {/* Center Astronaut Image */}
        <div className="wp-center-visual">
          <div className="astronaut-motion-field" aria-hidden="true">
            <span className="motion-orbit orbit-a"></span>
            <span className="motion-orbit orbit-b"></span>
            <span className="motion-orbit orbit-c"></span>
            <span className="motion-dot dot-a"></span>
            <span className="motion-dot dot-b"></span>
            <span className="motion-scan"></span>
          </div>
          <img 
            src="/astronaut-transparent.png" 
            alt="Astronaut Floating" 
            className="wp-astronaut"
          />
        </div>

        {/* Right Panel */}
        <div className="wp-panel panel-right">
          {/* Connector tabs */}
          <div className="connector top-connector"></div>
          <div className="connector bottom-connector"></div>

          <div className="panel-content text-left">
            <div className="benefit-item">
              <h3>Internship Opportunities</h3>
              <p>Stand a chance to secure internships at top institutions and innovation labs.</p>
            </div>
            <div className="benefit-item active-benefit">
              <h3>Real-World Impact</h3>
              <p>Contribute to meaningful challenges that aim to improve lives and systems at scale.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyParticipate;
