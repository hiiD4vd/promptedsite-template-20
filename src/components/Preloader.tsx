import React, { useState } from 'react';
import { ExperienceManager } from '../engine/experienceEngine';

export const Preloader: React.FC = () => {
  const [dismissed, setDismissed] = useState<boolean>(false);

  const handleEnterWithSound = () => {
    setDismissed(true);
    ExperienceManager.dismissPreloader(true);
  };

  const handleEnterSilent = () => {
    setDismissed(true);
    ExperienceManager.dismissPreloader(false);
  };

  return (
    <div
      className={`preloader ${dismissed ? 'preloader--dismissed' : ''}`}
      style={dismissed ? { pointerEvents: 'none' } : undefined}
    >
      <div className="preloader__inner">
        <div className="preloader__progress-wrapper">
          <div className="preloader__progress-bar"></div>
        </div>
        <span className="preloader__percent">0%</span>

        <div className="preloader__intro">
          <h2
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: '28px',
              fontStyle: 'italic',
              color: '#3d2b1f',
              marginBottom: '8px',
            }}
          >
            PrompTedSite Sanctuary
          </h2>
          <p className="preloader__description">
            PrompTedSite is an interactive 3D digital sanctuary engineered for exploring emotional attachment styles, psychological safety, and relational comfort. Built with real-time WebGL lighting, ambient acoustic landscapes, and interactive narrative archetypes to create an immersive holding space.
          </p>
          <div className="preloader__buttons">
            <button
              id="enter-btn"
              className="preloader__btn preloader__btn--primary"
              onClick={handleEnterWithSound}
            >
              Enter
            </button>
            <button
              id="enter-silent-btn"
              className="preloader__btn preloader__btn--secondary"
              onClick={handleEnterSilent}
            >
              Enter without sound
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
