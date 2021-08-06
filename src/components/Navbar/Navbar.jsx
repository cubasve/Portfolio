import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
	AppBar,
	CssBaseline,
	Fab,
	Link,
	Slide,
	Toolbar,
	useScrollTrigger,
	Zoom,
} from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import Scrollspy from "react-scrollspy";
import PropTypes from "prop-types";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faUser, faBriefcase, faLaptopCode, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
	link: {
		color: "white",
		fontSize: "19px",
		margin: 15,
		// textAlign: 'center',
	},
	root: {
		position: "fixed",
		bottom: theme.spacing(2),
		right: theme.spacing(2),
		zIndex: 1,
		fontWeight: 200,
	},
}));

function ScrollTop({ children, window }) {
	const classes = useStyles();
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (e) => {
		const anchor = (e.target.ownerDocument || document).querySelector(
			"#back-to-top-anchor"
		);

		if (anchor) {
			anchor.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	};

	return (
		<Zoom in={trigger}>
			<div onClick={handleClick} role="presentation" className={classes.root}>
				{children}
			</div>
		</Zoom>
	);
}

ScrollTop.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

function HideOnScroll({ children, window }) {
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

export default function Navbar(props) {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar position="fixed">
					<Scrollspy
						items={["intro", "about", "projects", "skills", "contact"]}
						currentClassName="is-current"
						offset={0}
					>
						<Link href="#intro" className={classes.link} id="nav-links">
							{/* <FontAwesomeIcon icon={faHome} /> */}
							Home
						</Link>
						<Link href="#about" className={classes.link}>
							{/* <FontAwesomeIcon icon={faUser} /> */}
							About
						</Link>
						<Link href="#projects" className={classes.link}>
							{/* <FontAwesomeIcon icon={faBriefcase} /> */}
							Projects
						</Link>
						<Link href="#skills" className={classes.link}>
							{/* <FontAwesomeIcon icon={faLaptopCode} /> */}
							Skills
						</Link>
						{/* <Link href="#contact" className={classes.link}><FontAwesomeIcon icon={faPhoneAlt} /> Contact</Link> */}
					</Scrollspy>
				</AppBar>
			</HideOnScroll>
			<Toolbar id="back-to-top-anchor" />
			<ScrollTop {...props}>
				<Fab size="small" aria-label="scroll back to top" color="primary">
					<KeyboardArrowUp />
				</Fab>
			</ScrollTop>
		</>
	);
}
