import './AboutHackathon.css';

const AboutHackathon = () => {
  return (
    <section className="about-hackathon" id="about">
      
      {/* Decorative Side Blocks */}
      <div className="side-blocks left-blocks">
        <div className="block"></div>
        <div className="block offset-right"></div>
        <div className="block"></div>
        <div className="block offset-right"></div>
        <div className="block"></div>
      </div>
      
      <div className="side-blocks right-blocks">
        <div className="block offset-left"></div>
        <div className="block"></div>
        <div className="block offset-left"></div>
        <div className="block"></div>
        <div className="block offset-left"></div>
      </div>

      <div className="about-container">
        
        {/* Top Text Area */}
        <div className="about-text-area">
          <h4 className="purple-subtitle">ABOUT HACKATHON</h4>
          <h2 className="main-title">WHO CAN<br/>PARTICIPATE?</h2>
          
          <p className="about-paragraph">
            Welcome to the Lorem Ipsum Innovation Hackathon, an exhilarating platform designed to 
            foster innovation and creativity in the domain of advanced technology and futuristic 
            solutions. Organized by the National Center for Applied Research and supported by 
            Hack2skill, this hackathon invites undergraduate students, graduate/postgraduate 
            students, and PhD researchers to collaborate and solve critical challenges.
          </p>

          <button className="apply-btn-purple">Apply Now</button>
        </div>

        {/* Bottom Cards Area */}
        <div className="eligibility-area">
          <h4 className="purple-subtitle small-margin">WHO CAN PARTICIPATE?</h4>
          
          <div className="eligibility-cards-container">
            <div className="elig-card">
              <span>Undergraduate<br/>Students</span>
            </div>
            <div className="elig-card">
              <span>Graduate/ Postgraduate<br/>Students</span>
            </div>
            <div className="elig-card">
              <span>PhD Students/<br/>Research Scholars</span>
            </div>
          </div>

          <p className="eligibility-note">
            Note: Working Professionals are not eligible to participate in the hackathon.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutHackathon;
