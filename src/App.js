import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Proj from "./components/Proj/Proj";
// import Projects from './components/Projects/Projects';
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import "./App.css";
import { ModeContext } from "./context/ModeContext";

export default function App() {
	const { mode, setMode } = useContext(ModeContext);

	useEffect(() => {
		try {
			const storedMode = localStorage.getItem("darkMode");
			if (storedMode) {
				setMode(JSON.parse(storedMode));
			}
		} catch (err) {
			console.error(err);
		}
	}, [setMode]);

	return (
		<div className={"App-" + (mode ? "dark" : "light")}>
			<Navbar />
			<Intro />
			<About />
			<Proj />
			{/* <Projects /> */}
			<Skills />
			<Contact />
		</div>
	);
}
