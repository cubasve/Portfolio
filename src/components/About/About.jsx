import React from "react";
import "./About.css";
import { IconButton } from "@material-ui/core";
import {
	AccountBox,
	AccountTree,
	Assignment,
	WbIncandescent,
} from "@material-ui/icons";
// import AccountBoxIcon from '@material-ui/icons/AccountBox';
// import AccountTreeIcon from '@material-ui/icons/AccountTree';
// import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

export default function About() {
	return (
		<>
			<h1 id="about">About</h1>
			<div className="About">
				<div className="account">
					<AccountBox color="primary" style={{ fontSize: 200 }} />
				</div>

				<div className="brand">
					<div className="one statement">
						<IconButton disabled>
							<WbIncandescent color="primary" style={{ fontSize: 40 }} />
						</IconButton>
						<span className="statement development">
							{/* I am a full-stack software developer who specializes in the MERN
							stack.*/}
							I am compiling what I have learnt in life into applications and
							sharing that knowledge in a fun and interactive way.
						</span>
					</div>

					<div className="two statement">
						<IconButton disabled>
							<Assignment color="primary" style={{ fontSize: 40 }} />
						</IconButton>
						<span className="statement development">
							My interests include financial literacy, sustainability, and
							personal development, {/*healthcare, and education,*/} which are
							reflected in my personal projects.
						</span>
					</div>

					<div className="three statement">
						<IconButton disabled>
							<AccountTree color="primary" style={{ fontSize: 40 }} />
						</IconButton>
						<span className="statement">
							I integrate my passion for technology with my interests above to
							achieve my mission of building revolutionary software that
							enriches lives.
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
