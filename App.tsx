import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { ImageGenerator } from './components/ImageGenerator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <ImageGenerator />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
