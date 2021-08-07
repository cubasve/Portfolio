import React from "react";
import skillData from "./skillData.js";
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
						<Typography>
							{skillData
								.filter((skill) => skill.category === "Front")
								.map((skill) => {
									return (
										<LightTooltip title={skill.name} key={skill.name} TransitionComponent={Zoom}>
											<IconButton
												aria-label={skill.name}
												className={classes.skill}
											>
												{skill.icon}
											</IconButton>
										</LightTooltip>
									);
								})}
						</Typography>
					</CardContent>
				</Card>
				<Card className={classes.card}>
					<CardContent>
						<Typography variant="h5" className={classes.category}>
							BACK-END
						</Typography>
						<Typography>
							{skillData
								.filter((skill) => skill.category === "Back")
								.map((skill) => {
									return (
										<LightTooltip title={skill.name} key={skill.name} TransitionComponent={Zoom}>
											<IconButton
												aria-label={skill.name}
												className={classes.skill}
											>
												{skill.icon}
											</IconButton>
										</LightTooltip>
									);
								})}
						</Typography>
					</CardContent>
				</Card>
				<Card className={classes.card}>
					<CardContent>
						<Typography variant="h5" className={classes.category}>
							TOOLS
						</Typography>
						<Typography>
							{skillData
								.filter((skill) => skill.category === "Tools")
								.map((skill) => {
									return (
										<LightTooltip title={skill.name} key={skill.name} TransitionComponent={Zoom}>
											<IconButton
												aria-label={skill.name}
												className={classes.skill}
											>
												{skill.icon}
											</IconButton>
										</LightTooltip>
									);
								})}
						</Typography>
					</CardContent>
				</Card>
				<Card className={classes.card}>
					<CardContent>
						<Typography variant="h5" className={classes.category}>
							STYLING
						</Typography>
						<Typography>
							{skillData
								.filter((skill) => skill.category === "Styling")
								.map((skill) => {
									return (
										<LightTooltip title={skill.name} key={skill.name} TransitionComponent={Zoom}>
											<IconButton
												aria-label={skill.name}
												className={classes.skill}
											>
												{skill.icon}
											</IconButton>
										</LightTooltip>
									);
								})}
						</Typography>
					</CardContent>
				</Card>
				<Card className={classes.card}>
					<CardContent>
						<Typography variant="h5" className={classes.category}>
							HOSTING PLATFORMS
						</Typography>
						<Typography>
							{skillData
								.filter((skill) => skill.category === "Deploy")
								.map((skill) => {
									return (
										<LightTooltip title={skill.name} key={skill.name} TransitionComponent={Zoom}>
											<IconButton
												aria-label={skill.name}
												className={classes.skill}
											>
												{skill.icon}
											</IconButton>
										</LightTooltip>
									);
								})}
						</Typography>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
