import React, { useEffect, useState, useRef } from 'react';
import './TimelineSlider.css';

const scheduleData = [
  {
    id: 1,
    title: 'Registrations and Idea Submission Open',
    date: 'Thu, Jul 04, 2024',
    active: true,
  },
  {
    id: 2,
    title: 'Introductory and Problem Statement Explainer Session',
    date: 'Thu, Jul 08, 2024',
    active: false,
  },
  {
    id: 3,
    title: 'Mentor-Mentee Connects - Begins',
    date: 'Thu, Jul 08, 2024',
    active: false,
  },
  {
    id: 4,
    title: 'Mentor-Mentee Connects - Ends',
    date: 'Tue, Jul 16, 2024',
    active: false,
  },
  {
    id: 5,
    title: 'Final Submission Deadline',
    date: 'Fri, Jul 19, 2024',
    active: false,
  },
];

const TimelineSlider = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: unobserve once triggered if you only want it to animate once
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="timeline-section" ref={sectionRef}>
      
      {/* Decorative cursor image mentioned in the prompt ("cursor hover animation") */}
      <div className="timeline-bg-glow glow-left" />
      <div className="timeline-bg-glow glow-right" />

      <h2 className="timeline-title">
        Hackathon Schedule
      </h2>

      <div className="timeline-container">
        <div 
          className={`timeline-scroll-area ${isDragging ? 'is-dragging' : ''}`}
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {scheduleData.map((item) => (
            <div 
              key={item.id} 
              className={`timeline-item ${item.active ? 'is-active' : ''}`}
            >
              {/* Title */}
              <h3>{item.title}</h3>
              
              {/* Timeline Bar */}
              <div className="timeline-bar-wrapper">
                {/* Background Bar */}
                <div className="timeline-bar-bg" />
                
                {/* Active Bar */}
                <div 
                  className="timeline-bar-active"
                  style={{ width: isVisible ? (item.active ? '100%' : '10%') : '0%' }}
                />
                
                {/* Glow effect on hover */}
                <div className="timeline-bar-glow" />
              </div>
              
              {/* Date */}
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Swipe Indicator for Mobile */}
      <div className="mobile-swipe-indicator">
        <span className="indicator-dot active"></span>
        <span className="indicator-dot"></span>
        <span className="indicator-dot"></span>
      </div>
      
    </section>
  );
};

export default TimelineSlider;
