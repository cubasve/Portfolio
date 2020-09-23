import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Intro />
        <Projects />
        <Skills />
        <Contact />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
