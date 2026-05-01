import { useState, useEffect } from 'react';
import './WhatIsHackathon.css';

const WhatIsHackathon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 16,
    hours: 12,
    minutes: 42,
    seconds: 31
  });

  useEffect(() => {
    // Simple mock countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleImagePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--cursor-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--cursor-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section className="what-is-hackathon">
      <div className="wih-container">
        
        {/* LEFT SIDE: TEXT AND TIMER */}
        <div className="wih-content">
          <h2 className="wih-title">
            WHAT IS THE<br />HACKATHON?
          </h2>
          
          <div className="wih-paragraphs">
            <p>
              The Lorem Ipsum Innovation Hackathon is a flagship event crafted to uncover 
              pioneering ideas in science, technology, and system design. As technological 
              advancements accelerate globally, this initiative aims to bridge academic 
              knowledge with practical implementation.
            </p>
            <p>
              Participants will work on challenge statements designed by leading R&D units, 
              applying theoretical expertise to build innovative prototypes and solutions 
              with potential real-world application.
            </p>
          </div>

          <div className="wih-submission-area">
            <span className="submission-label">Submission Closing In:</span>
            
            <div className="timer-btn-group">
              <div className="timer-box">
                <span className="corner top-left"></span>
                <span className="corner top-right"></span>
                <span className="corner bottom-left"></span>
                <span className="corner bottom-right"></span>
                {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
              </div>
              
              <button className="register-now-btn">
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: IMAGE COLLAGE */}
        <div className="wih-collage">
          <div className="crosshair-h line-1"></div>
          <div className="crosshair-v line-1"></div>
          <div className="crosshair-h line-2"></div>
          <div className="crosshair-v line-2"></div>

          <div className="collage-img img-laptop" tabIndex="0" onPointerMove={handleImagePointerMove}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Working on laptop" />
          </div>
          
          <div className="collage-img img-globe" tabIndex="0" onPointerMove={handleImagePointerMove}>
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Glowing globe" />
          </div>
          
          <div className="collage-img img-vr" tabIndex="0" onPointerMove={handleImagePointerMove}>
            <img src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="VR headset" />
          </div>
          
          <div className="collage-img img-team" tabIndex="0" onPointerMove={handleImagePointerMove}>
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Team meeting" />
          </div>
          
          <div className="collage-img img-people" tabIndex="0" onPointerMove={handleImagePointerMove}>
            <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="People sitting" />
          </div>

          {/* Plus marks at intersections */}
          <div className="plus-mark pm-1">+</div>
          <div className="plus-mark pm-2">+</div>
          <div className="plus-mark pm-3">+</div>
        </div>

      </div>
    </section>
  );
};

export default WhatIsHackathon;
