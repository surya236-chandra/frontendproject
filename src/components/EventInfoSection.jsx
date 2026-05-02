import { useRef, useState } from 'react';
import './EventInfoSection.css';

const scheduleItems = [
  {
    title: 'Registrations and Idea Submission Open',
    date: 'Thu, Jul 04, 2025',
  },
  {
    title: 'Introductory and Problem Statement Explainer Session',
    date: 'Thu, Jul 08, 2025',
  },
  {
    title: 'Mentor-Mentee Connects - Begins',
    date: 'Thu, Jul 08, 2025',
  },
  {
    title: 'Mentor-Mentee Connects - Ends',
    date: 'Tue, Jul 16, 2025',
  },
  {
    title: 'Final Submission Deadline',
    date: 'Fri, Jul 19, 2025',
  },
];

const rewardCards = [
  {
    title: 'Mentorship from Experts',
    text: 'Work under the guidance of domain professionals and technology mentors.',
  },
  {
    title: 'Recognition and Internship Opportunities',
    text: 'Outstanding performers may receive offers for internships or collaboration opportunities.',
  },
];

const faqRows = [
  {
    id: '01',
    question: 'Who can participate in the hackathon?',
    answer: 'Undergraduate, Graduate/Postgraduate, and PhD students currently enrolled in an Indian institution.',
  },
  {
    id: '02',
    question: 'What should be the ideal team size?',
    answer: 'Each team must consist of 3 to 4 members, possibly from different colleges/universities.',
  },
  {
    id: '03',
    question: 'What is the cost of participating?',
    answer: 'Participation is entirely free. No registration or submission fee is required.',
  },
  {
    id: '04',
    question: 'Can a recent graduate participate?',
    answer: 'Only current students from the 2024-25 academic year are eligible.',
  },
];

const EventInfoSection = () => {
  const [activeSchedule, setActiveSchedule] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const timelineRef = useRef(null);

  const selectSchedule = (index) => {
    setActiveSchedule(index);
    const container = timelineRef.current;
    const node = container?.children[index];
    if (!container || !node) return;

    // Scroll only the timeline container — never the page
    const containerCenter = container.offsetWidth / 2;
    const nodeCenter = node.offsetLeft + node.offsetWidth / 2;
    container.scrollTo({
      left: nodeCenter - containerCenter,
      behavior: 'smooth',
    });
  };

  const moveSchedule = (direction) => {
    const nextIndex = (activeSchedule + direction + scheduleItems.length) % scheduleItems.length;
    selectSchedule(nextIndex);
  };

  const handleScheduleKeyDown = (event, index) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      selectSchedule((index + 1) % scheduleItems.length);
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      selectSchedule((index - 1 + scheduleItems.length) % scheduleItems.length);
    }

    if (event.key === 'Home') {
      event.preventDefault();
      selectSchedule(0);
    }

    if (event.key === 'End') {
      event.preventDefault();
      selectSchedule(scheduleItems.length - 1);
    }
  };


  return (
    <section className="event-info-section" id="schedule">
      <div className="event-info-shell">
        <div className="event-purple-glow" />

        <div className="event-schedule">
          <p className="event-kicker">HACKATHON SCHEDULE</p>
          <div className="event-slider-controls" aria-label="Hackathon schedule controls">
            <button type="button" onClick={() => moveSchedule(-1)} aria-label="Previous schedule item">‹</button>
            <div className="event-slider-dots" aria-hidden="true">
              {scheduleItems.map((item, index) => (
                <span className={activeSchedule === index ? 'is-active' : ''} key={item.title}></span>
              ))}
            </div>
            <button type="button" onClick={() => moveSchedule(1)} aria-label="Next schedule item">›</button>
          </div>
          <div className="event-timeline" ref={timelineRef} role="tablist" aria-label="Hackathon schedule">
            {scheduleItems.map((item, index) => (
              <button
                className={`event-timeline-item ${activeSchedule === index ? 'is-active' : ''}`}
                type="button"
                role="tab"
                aria-selected={activeSchedule === index}
                key={item.title}
                onClick={() => selectSchedule(index)}
                onKeyDown={(event) => handleScheduleKeyDown(event, index)}
              >
                <h3>{item.title}</h3>
                <div className="event-line">
                  <span></span>
                </div>
                <p>{item.date}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="event-rewards" id="rewards">
          <p className="event-kicker">REWARDS AND BENEFITS</p>
          <div className="event-reward-grid">
            {rewardCards.map((card) => (
              <article className="event-reward-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="event-brain-wrap" aria-hidden="true">
          <img
            src="/faq-brain.jpg"
            alt=""
            className="event-brain"
          />
        </div>

        <div className="event-faq" id="faq">
          <p className="event-kicker event-faq-title">FREQUENTLY ASKED QUESTION</p>
          <div className="event-faq-list">
            {faqRows.map((row) => (
              <button
                className={`event-faq-row ${activeFaq === row.id ? 'is-active' : ''}`}
                type="button"
                key={row.id}
                onClick={() => setActiveFaq((currentId) => (currentId === row.id ? null : row.id))}
              >
                <div className="event-faq-number">{row.id}</div>
                <h3>{row.question}</h3>
                <p>{row.answer}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="event-abstract" aria-hidden="true">
          <img src="/abstract-footer.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default EventInfoSection;
