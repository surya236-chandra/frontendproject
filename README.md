# Hack2Skill Futuristic Hackathon Landing Page

A responsive React landing page built for a Hack2Skill-style hackathon assignment. The site presents a complete event experience with a futuristic hero, eligibility information, hackathon overview, participation benefits, challenge listings, an interactive schedule slider, rewards, FAQ content, and polished visual assets.

## Project Overview

This project is a single-page frontend application designed to communicate the key details of a hackathon in a visually engaging way. It focuses on clean section-based composition, smooth interactions, responsive layouts, and assignment-ready code organization.

The current page flow is:

1. Hero section with navigation and registration call-to-action
2. About and participant eligibility section
3. Hackathon overview with countdown and image collage
4. Why participate section with animated astronaut effects
5. How to participate and challenge statements section
6. Event information section with schedule slider, rewards, FAQ, and footer visual

## Tech Stack

- React 19
- Vite 8
- JavaScript
- CSS3
- ESLint

## Features

- Futuristic dark visual design with purple accent styling
- Responsive single-page layout
- Navigation links to major page sections
- Countdown timer in the hackathon overview section
- Animated astronaut/radar visual in the benefits section
- Challenge list with click-to-reveal `LEARN MORE` buttons
- Interactive hackathon schedule slider
- Keyboard controls for schedule navigation using arrow keys, `Home`, and `End`
- Touch-friendly horizontal schedule scrolling
- Cursor-aware hover effects on collage images
- FAQ area with custom brain background visual
- Optimized public image assets for hero, astronaut, FAQ, and footer visuals

## Setup Instructions

### Prerequisites

Install Node.js and npm on your machine.

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173/
```

If port `5173` is already in use, Vite may automatically choose another port.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Lint

```bash
npm run lint
```

## Folder Structure

```text
frontendproject/
├── public/
│   ├── abstract-footer.png
│   ├── astronaut-transparent.png
│   ├── bg-wave.jpg
│   ├── faq-brain.jpg
│   ├── favicon.svg
│   └── futuresticmodel.png
├── src/
│   ├── components/
│   │   ├── AboutHackathon.jsx
│   │   ├── EventInfoSection.jsx
│   │   ├── MainHero.jsx
│   │   ├── ParticipationChallenges.jsx
│   │   ├── WhatIsHackathon.jsx
│   │   └── WhyParticipate.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Component Structure

- `MainHero` handles the top hero, navigation, and primary registration CTA.
- `AboutHackathon` explains the event and participant eligibility.
- `WhatIsHackathon` contains the hackathon overview, countdown timer, and interactive image collage.
- `WhyParticipate` shows benefits with the animated astronaut visual.
- `ParticipationChallenges` contains the participation steps and challenge statement list.
- `EventInfoSection` contains the interactive schedule slider, rewards cards, FAQ rows, brain visual, and footer image.

## Code Quality Notes

- Components use meaningful names and are split into paired `.jsx` and `.css` files.
- Styling is scoped by component class names to keep sections easy to maintain.
- Unused starter files and legacy sections have been removed for a cleaner repository.
- The project has been checked with ESLint and production build commands.

## Assignment Checklist

- Clean repository structure
- Detailed README with overview, tech stack, setup, features, and folder explanation
- Working React/Vite code
- Consistent component and file naming
- Responsive behavior across common viewport sizes
- Keyboard and touch support for key interactive UI
