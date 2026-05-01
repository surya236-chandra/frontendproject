import { useState } from 'react';
import './ParticipationChallenges.css';

const participationSteps = [
  {
    title: 'Register for Hackathon',
    text: 'Sign up now to participate in the hackathon.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3h8l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v5h5" />
        <path d="M8 13h6M8 17h4" />
        <path d="m15 16 2 2 4-5" />
      </svg>
    ),
  },
  {
    title: 'Form your Teams',
    text: 'Collaborate with like-minded individuals to form teams.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 11a4 4 0 1 0-8 0" />
        <circle cx="12" cy="7" r="3" />
        <path d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1H4Z" />
        <circle cx="6" cy="10" r="2" />
        <circle cx="18" cy="10" r="2" />
      </svg>
    ),
  },
  {
    title: 'Choose a Challenge',
    text: 'Select from the list of challenge provided.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16L13 4Z" />
        <path d="m14 11 2-2 3 3-2 2" />
      </svg>
    ),
  },
  {
    title: 'Innovate and Develop',
    text: 'Work on your solutions, supported by resources and mentorship.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m5 19 4-1 9-9-3-3-9 9Z" />
        <path d="m14 7 3 3" />
        <path d="M12 5V3M19 12h2M18 5l1-1" />
      </svg>
    ),
  },
  {
    title: 'Submit Your Solution',
    text: 'Present your innovative ideas for evaluation.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4v11" />
        <path d="m7 9 5-5 5 5" />
        <path d="M5 15v4h14v-4" />
        <circle cx="18" cy="5" r="2" />
      </svg>
    ),
  },
];

const challengeRows = [
  {
    id: '01',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=420&q=80',
    text: 'Develop an AI-driven solution to dynamically control traffic signals based on live camera feeds and vehicle density.',
  },
  {
    id: '02',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=420&q=80',
    text: 'Create a web or mobile application that integrates wearable data to provide health insights and medication reminders.',
  },
  {
    id: '03',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=420&q=80',
    text: 'Build an NLP-based tool to scan long legal contracts and output simplified summaries with key clauses and deadlines.',
  },
  {
    id: '04',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=420&q=80',
    text: 'Design a predictive model using remote sensing data and live hydrology feeds to forecast and alert flood risks in urban zones.',
  },
  {
    id: '05',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=420&q=80',
    text: 'Create a decentralized platform that allows institutions to issue and verify digital certificates securely.',
  },
  {
    id: '06',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=420&q=80',
    text: 'Design a prototype that enables prospective students to explore university campuses remotely with immersive visuals.',
  },
  {
    id: '07',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=420&q=80',
    text: 'Build a machine-learning system that classifies waste into biodegradable, recyclable, and hazardous categories using a live camera feed.',
  },
  {
    id: '08',
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=420&q=80',
    text: 'Develop a communication app that uses peer-to-peer protocols or SMS fallback to function in areas with limited internet.',
  },
  {
    id: '09',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=420&q=80',
    text: 'Build an AI-driven app that uses computer vision to translate ISL gestures into text and speech in multiple Indian languages.',
  },
  {
    id: '10',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=420&q=80',
    text: 'Design a conversational assistant trained to provide mental health first-aid and connect users to professionals during crises.',
  },
  {
    id: '11',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=420&q=80',
    text: 'Build a pipeline that processes aerial imagery to detect crop diseases and recommend corrective actions.',
  },
  {
    id: '12',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=420&q=80',
    text: 'Create a mobile assistant that helps visually impaired users navigate unfamiliar environments using spatial audio cues.',
  },
];

const ParticipationChallenges = () => {
  const [activeChallenge, setActiveChallenge] = useState(null);

  const toggleChallenge = (id) => {
    setActiveChallenge((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className="pc-section" id="pc-challenges">
      <div className="pc-shell">
        <div className="pc-glow" />

        <div className="pc-participate" id="how-preview">
          <p className="pc-kicker">HOW TO PARTICIPATE?</p>
          <div className="pc-step-grid">
            {participationSteps.map((step) => (
              <article className="pc-step" key={step.title}>
                <div className="pc-step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="pc-challenges" id="challenges-preview">
          <p className="pc-kicker">CHALLENGES</p>

          <div className="pc-list">
            {challengeRows.map((challenge) => (
              <article
                className={`pc-row ${activeChallenge === challenge.id ? 'is-active' : ''}`}
                key={challenge.id}
                onClick={() => toggleChallenge(challenge.id)}
              >
                <div className="pc-number">[{challenge.id}]</div>
                <div className="pc-thumb">
                  <img src={challenge.image} alt="" loading="lazy" />
                </div>
                <div className="pc-row-copy">
                  <p>{challenge.text}</p>
                  {activeChallenge === challenge.id && (
                    <button
                      className="pc-learn-btn"
                      type="button"
                      onClick={(event) => event.stopPropagation()}
                    >
                      LEARN MORE
                    </button>
                  )}
                </div>
                <a className="pc-arrow" href="#challenges" aria-label={`Open challenge ${challenge.id}`}>
                  ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipationChallenges;
