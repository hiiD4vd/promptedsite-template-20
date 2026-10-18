import React, { useState } from 'react';
import { ExperienceManager } from '../engine/experienceEngine';

export const TopControls: React.FC = () => {
  const [isNight, setIsNight] = useState<boolean>(false);

  const handleToggleDayNight = () => {
    const nextState = ExperienceManager.toggleDayNight();
    setIsNight(nextState);
  };

  const handleInfoMouseEnter = () => {
    ExperienceManager.showHitboxMarkers();
  };

  const handleInfoMouseLeave = () => {
    ExperienceManager.hideHitboxMarkers();
  };

  const handleInfoClick = () => {
    ExperienceManager.openInfoModal();
  };

  return (
    <div className="top-right-controls">
      <button
        id="day-night-toggle"
        className="day-night-btn"
        data-mode={isNight ? 'night' : 'day'}
        onClick={handleToggleDayNight}
        aria-label="Toggle Day and Night mode"
        title="Toggle Day/Night"
      >
        <span className="day-night-btn__icon">
          {isNight ? '\u2600' : '\u263E'}
        </span>
      </button>

      <button
        id="info-btn"
        className="info-btn"
        onMouseEnter={handleInfoMouseEnter}
        onMouseLeave={handleInfoMouseLeave}
        onClick={handleInfoClick}
        aria-label="Show Sanctuary Information"
        title="Sanctuary Information & Credits"
      >
        i
      </button>
    </div>
  );
};
