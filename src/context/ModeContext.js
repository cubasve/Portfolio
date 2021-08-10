import React, { createContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
	const [mode, setMode] = useState({
		setting: "dark",
		icon: <FontAwesomeIcon icon={faMoon} size="15px" />,
	});

	const context = {
		mode,
		setMode,
	};

	return (
		<ModeContext.Provider value={context}>{children}</ModeContext.Provider>
	);
};
