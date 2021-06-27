import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
	Card,
	CardContent,
	Typography,
	Tooltip,
	IconButton,
	Zoom,
} from "@material-ui/core";
import "./Skills.css";
import { BackupSharp } from "@material-ui/icons";

const useStyles = makeStyles({
	card: {
		minWidth: 275,
		margin: 20,
	},
	category: {
		paddingBottom: 20,
	},
	// icon: {
	//     margin: 50,
	// },
	skill: {
		fontSize: 48,
		paddingLeft: 5,
		paddingRight: 5,
	},
	backend: {
		fontSize: 48,
		paddingLeft: 2,
		paddingRight: 2,
	},
	tooltip: {
		fontSize: 25,
		color: "black",
	},
});

//FRONTEND
const html = <i class="devicon-html5-plain colored"></i>;
const bootstrap = <i class="devicon-bootstrap-plain colored"></i>;
const javascript = <i class="devicon-javascript-plain colored"></i>;
const typescript = <i class="devicon-typescript-plain colored"></i>;
const react = <i class="devicon-react-original colored"></i>;
const redux = <i class="devicon-redux-original colored"></i>;
//const jQuery = <i class="devicon-jquery-plain colored"></i>;

//BACKEND
const postgresql = <i class="devicon-postgresql-plain colored"></i>;
const django = <i class="devicon-django-plain colored"></i>;
const express = <i class="devicon-express-original colored"></i>;
const node = <i class="devicon-nodejs-plain colored"></i>;
const mongoDB = <i class="devicon-mongodb-plain colored"></i>;

//TOOLS
const git = <i class="devicon-git-plain colored"></i>;
const npm = <i class="devicon-npm-original-wordmark colored"></i>;
const bash = <i class="devicon-bash-plain colored"></i>;
const jest = <i class="devicon-jest-plain colored"></i>;
const vsCode = <i class="devicon-vscode-plain colored"></i>;

//STYLING
const css = <i class="devicon-css3-plain colored"></i>;
const materialUI = <i class="devicon-materialui-plain colored"></i>;
const sass = <i class="devicon-sass-original colored"></i>;

//HOSTING PLATFORMS
const aws = <i class="devicon-amazonwebservices-original colored"></i>;
const gitHub = <i class="devicon-github-plain colored"></i>;
const heroku = <i class="devicon-heroku-plain colored"></i>;

const LightTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "tan",
		color: "black",
		boxShadow: theme.shadows[1],
		fontSize: 16,
	},
}))(Tooltip);

export default function Skills() {
	const classes = useStyles();

	return (
		<>
			<h1 id="skills">Skills</h1>
			<div className="Skills">
				<Card className={classes.card}>
					<CardContent>
						<Typography variant="h5" className={classes.category}>
							FRONT-END
						</Typography>
						{/* <Typography variant="h3" className={classes.icon}>{html} {css} {javascript} {react} {jQuery}</Typography> */}
						<Typography>
							<LightTooltip title="HTML" TransitionComponent={Zoom}>
								<IconButton aria-label="HTML" className={classes.skill}>
									{html}
								</IconButton>
							</LightTooltip>
							<LightTooltip title="JavaScript" TransitionComponent={Zoom}>
								<IconButton aria-label="JavaScript" className={classes.skill}>
									{javascript}
								</IconButton>
							</LightTooltip>
							<LightTooltip title="TypeScript" TransitionComponent={Zoom}>
								<IconButton aria-label="TypeScript" className={classes.skill}>
									{typescript}
								</IconButton>
							</LightTooltip>
							<LightTooltip title="React" TransitionComponent={Zoom}>
								<IconButton aria-label="React" className={classes.skill}>
									{react}
								</IconButton>
							</LightTooltip>
							<LightTooltip title="Redux" TransitionComponent={Zoom}>
								<IconButton aria-label="Redux" className={classes.skill}>
									{redux}
								</IconButton>
							</LightTooltip>
						</Typography>
					</CardContent>
				</Card>

				<Card className={classes.card}>
					<CardContent>
						<Typography variant="h5" className={classes.category}>
							BACK-END
						</Typography>
						{/* <Typography variant="h3" className={classes.icon}>{express} {node} {python} {django}{mongoDB}{postgresql}</Typography> */}
						<Typography>
							<LightTooltip title="Express" TransitionComponent={Zoom}>
								<IconButton aria-label="Express" className={classes.backend}>
									{express}
								</IconButton>
							</LightTooltip>
							<LightTooltip title="Node" TransitionComponent={Zoom}>
								<IconButton aria-label="Node" className={classes.backend}>
									{node}
								</IconButton>
							</LightTooltip>
							<LightTooltip title="Python" TransitionComponent={Zoom}>
								<IconButton aria-label="Python" className={classes.backend}>
									<img src="./Python.svg" width="45" height="45" alt="Python" />
								</IconButton>
							</LightTooltip>
							<LightTooltip title="Django" TransitionComponent={Zoom}>
								<IconButton aria-label="Django" className={classes.backend}>
									{django}
								</IconButton>
							</LightTooltip>
							<LightTooltip title="MongoDB" TransitionComponent={Zoom}>
								<IconButton aria-label="MongoDB" className={classes.backend}>
									{mongoDB}
								</IconButton>
							</LightTooltip>
							<LightTooltip title="PostgreSQL" TransitionComponent={Zoom}>
								<IconButton aria-label="PostgreSQL" className={classes.backend}>
									{postgresql}
								</IconButton>
							</LightTooltip>
						</Typography>
					</CardContent>
				</Card>

				<Card className={classes.card}>
					<CardContent>
						<Typography variant="h5" className={classes.category}>
							TOOLS
						</Typography>
						{/* <Typography variant="h3" className={classes.icon}>{git} {gitHub} {heroku} {trello} {vsCode}</Typography> */}
						<Typography>
							<LightTooltip title="Git" TransitionComponent={Zoom}>
								<IconButton aria-label="Git" className={classes.skill}>
									{git}
								</IconButton>
							</LightTooltip>
							<LightTooltip title="Bash" TransitionComponent={Zoom}>
								<IconButton aria-label="Bash" className={classes.skill}>
									{bash}
								</IconButton>
							</LightTooltip>
							<LightTooltip
								title="Node Package Manager"
								TransitionComponent={Zoom}
							>
								<IconButton
									aria-label="Node Package Manager"
									className={classes.skill}
								>
									{npm}
								</IconButton>
							</LightTooltip>
							<LightTooltip title="Jest" TransitionComponent={Zoom}>
								<IconButton aria-label="Jest" className={classes.skill}>
									{jest}
								</IconButton>
							</LightTooltip>
							<LightTooltip title="VS Code" TransitionComponent={Zoom}>
								<IconButton aria-label="VS Code" className={classes.skill}>
									{vsCode}
								</IconButton>
							</LightTooltip>
						</Typography>
					</CardContent>
				</Card>

				<Card className={classes.card}>
					<CardContent>
						<Typography variant="h5" className={classes.category}>
							STYLING
						</Typography>
						<Typography>
							<LightTooltip title="CSS" TransitionComponent={Zoom}>
								<IconButton aria-label="CSS" className={classes.skill}>
									{css}
								</IconButton>
							</LightTooltip>
							<LightTooltip title="Sass" TransitionComponent={Zoom}>
								<IconButton aria-label="Sass" className={classes.skill}>
									{sass}
								</IconButton>
							</LightTooltip>
							<LightTooltip title="Bootstrap" TransitionComponent={Zoom}>
								<IconButton aria-label="Bootstrap" className={classes.skill}>
									{bootstrap}
								</IconButton>
							</LightTooltip>
							<LightTooltip title="MaterializeCSS" TransitionComponent={Zoom}>
								<IconButton
									aria-label="MaterializeCSS"
									className={classes.skill}
								>
									<img
										src="./materializecss.svg"
										width="55"
										height="55"
										alt="MaterializeCSS"
									/>
								</IconButton>
							</LightTooltip>
							<LightTooltip title="Material-UI" TransitionComponent={Zoom}>
								<IconButton aria-label="Material-UI" className={classes.skill}>
									{materialUI}
								</IconButton>
							</LightTooltip>
						</Typography>
					</CardContent>
				</Card>

				<Card className={classes.card}>
					<CardContent>
						<Typography variant="h5" className={classes.category}>
							HOSTING PLATFORMS
						</Typography>
						<Typography>
							<LightTooltip title="GitHub" TransitionComponent={Zoom}>
								<IconButton aria-label="GitHub" className={classes.skill}>
									{gitHub}
								</IconButton>
							</LightTooltip>
							<LightTooltip title="Heroku" TransitionComponent={Zoom}>
								<IconButton aria-label="Heroku" className={classes.skill}>
									{heroku}
								</IconButton>
							</LightTooltip>
							<LightTooltip
								title="Amazon Web Services"
								TransitionComponent={Zoom}
							>
								<IconButton
									aria-label="Amazon Web Services"
									className={classes.skill}
								>
									{aws}
								</IconButton>
							</LightTooltip>
							<LightTooltip title="Netlify" TransitionComponent={Zoom}>
								<IconButton aria-label="Netlify" className={classes.skill}>
									<img
										src="./Netlify.svg"
										width="45"
										height="45"
										alt="Netlify"
									/>
								</IconButton>
							</LightTooltip>
							<LightTooltip title="Azure" TransitionComponent={Zoom}>
								<IconButton aria-label="Azure" className={classes.skill}>
									<img src="./azure.svg" width="45" height="45" alt="Azure" />
								</IconButton>
							</LightTooltip>
						</Typography>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
