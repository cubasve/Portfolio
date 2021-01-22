import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Proj from './components/Projects/Proj';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Proj />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
