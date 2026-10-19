import React from 'react';
import { ExperienceManager } from '../engine/experienceEngine';

export const BackButton: React.FC = () => {
  const handleBack = () => {
    ExperienceManager.resetCamera();
  };

  return (
    <button
      id="back-btn"
      className="back-btn"
      onClick={handleBack}
      aria-label="Back to overview"
    >
      <span>&#8592;</span> Back
    </button>
  );
};
