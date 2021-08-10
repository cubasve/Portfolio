import React, { createContext, useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
	// const [mode, setMode] = useState({
	// 	setting: "dark",
	// 	icon: <Brightness2 style={{ fontSize: 40 }} />,
	// });

	const [mode, setMode] = useState(true);

	function toggleMode() {
		setMode((prevMode) => !prevMode);
	}

	const context = {
		mode,
		toggleMode,
	};

	return (
		<ModeContext.Provider value={context}>{children}</ModeContext.Provider>
	);
};
