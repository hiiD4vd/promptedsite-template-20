import React, { useEffect, useRef } from 'react';
import { ExperienceManager } from '../engine/experienceEngine';

export const CanvasExperience: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      ExperienceManager.init(canvasRef.current);
    }

    return () => {
      ExperienceManager.destroy();
    };
  }, []);

  return (
    <div id="experience-wrapper">
      <canvas id="experience-canvas" ref={canvasRef} />
    </div>
  );
};
