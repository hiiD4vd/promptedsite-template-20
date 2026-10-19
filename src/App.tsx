import React from 'react';
import { CanvasExperience } from './components/CanvasExperience';
import { Preloader } from './components/Preloader';
import { TopControls } from './components/TopControls';
import { BackButton } from './components/BackButton';

export const App: React.FC = () => {
  return (
    <main className="promptedsite-app">
      <CanvasExperience />
      <Preloader />
      <BackButton />
      <TopControls />
    </main>
  );
};

export default App;
