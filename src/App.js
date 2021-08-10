import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Proj from "./components/Proj/Proj";
// import Projects from './components/Projects/Projects';
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import "./App.css";
import { ModeProvider } from "./context/ModeContext";

export default function App() {
	return (
		<div className="App">
			<ModeProvider>
				<Navbar />
				<Intro />
				<About />
				<Proj />
				{/* <Projects /> */}
				<Skills />
				<Contact />
			</ModeProvider>
		</div>
	);
}
