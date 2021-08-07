import React from "react";
import "./Intro.css";
import ReactTypingEffect from "react-typing-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faGithub,
	faMedium,
} from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelope,
	faTerminal /*faAddressCard, faIdBadge, faAddressBook*/,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Typography, Tooltip, Zoom } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	icon: {
		margin: 20,
	},
	tooltip: {
		fontSize: 25,
		color: "black",
	},
});

const LightTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "tan",
		color: "black",
		boxShadow: theme.shadows[1],
		fontSize: 16,
	},
}))(Tooltip);

export default function Intro() {
	const classes = useStyles();
	return (
		<div class="landing-page" id="intro">
			<div className="Contact-Icons">
				<Typography variant="h3" className="Contact">
					<LightTooltip
						title="Email"
						TransitionComponent={Zoom}
						placement="top"
					>
						<Link
							className={classes.icon}
							href="mailto:cubasve@gmail.com"
							color="inherit"
						>
							<FontAwesomeIcon icon={faEnvelope} size="10px" />
						</Link>
					</LightTooltip>
				</Typography>

				<Typography variant="h3" className="Contact">
					<LightTooltip
						title="GitHub"
						TransitionComponent={Zoom}
						placement="top"
					>
						<Link
							className={classes.icon}
							href="https://github.com/cubasve"
							target="_blank"
							rel="noopener"
							color="inherit"
						>
							<FontAwesomeIcon icon={faGithub} />
						</Link>
					</LightTooltip>
				</Typography>

				<Typography variant="h3" className="Contact">
					<LightTooltip
						title="LinkedIn"
						TransitionComponent={Zoom}
						placement="top"
					>
						<Link
							className={classes.icon}
							href="https://www.linkedin.com/in/cubasve/"
							target="_blank"
							rel="noopener"
							color="inherit"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</Link>
					</LightTooltip>
				</Typography>

				<Typography variant="h3" className="Contact">
					<LightTooltip
						title="Medium"
						TransitionComponent={Zoom}
						placement="top"
					>
						<Link
							className={classes.icon}
							href="https://cubasve.medium.com/"
							target="_blank"
							rel="noopener"
							color="inherit"
						>
							<FontAwesomeIcon icon={faMedium} />
						</Link>
					</LightTooltip>
				</Typography>
			</div>

			<div className="IntroduceYourself">
				<div className="Eva">
					<h2>
						<FontAwesomeIcon icon={faTerminal} />
						<span id="name">
							<ReactTypingEffect
								text={["Eva Cubas Vasquez"]}
								typingDelay={1000}
								speed={100}
								eraseSpeed={200}
								eraseDelay={1000000}
							/>
						</span>
					</h2>
					<h3 className="title">Full-Stack Web Developer</h3>
					<h4 className="with-purpose">
						Building Transformative Applications With Purpose
					</h4>
				</div>
			</div>
		</div>
	);
}
