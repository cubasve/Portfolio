import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faGithub,
	faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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

export default function Contact() {
	const classes = useStyles();
	return (
		<>
			<h1 id="contact">Contact</h1>
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
							<FontAwesomeIcon icon={faEnvelope} />
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
			<br />
		</>
	);
}
