import React from 'react';
import { Background } from './components/layout/Background';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { Differentials } from './sections/Differentials';
import { About } from './sections/About';
import { Psyvision } from './sections/Psyvision';
import { Music } from './sections/Music';

export default function App() {
  return (
    <div className="font-body relative">
      <Background />
      <Header />
      <Hero />
      <Differentials />
      <About />
      <Psyvision />
      <Music />
      <Footer />
    </div>
  );
}
