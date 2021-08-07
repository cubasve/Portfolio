import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
	AppBar,
	Button,
	CssBaseline,
	Drawer,
	Fab,
	Hidden,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Slide,
	Toolbar,
	Typography,
	useScrollTrigger,
	Zoom,
} from "@material-ui/core";
import { KeyboardArrowUp, Mail, Menu } from "@material-ui/icons";
import Scrollspy from "react-scrollspy";
import PropTypes from "prop-types";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faUser, faBriefcase, faLaptopCode, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 240;

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
		display: "flex",
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	toolbar: theme.mixins.toolbar,
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
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
		const anchorToTop = (e.target.ownerDocument || document).querySelector(
			"#back-to-top-anchor"
		);

		if (anchorToTop) {
			anchorToTop.scrollIntoView({ behavior: "smooth", block: "center" });
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

Navbar.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default function Navbar(props) {
	const classes = useStyles();
	const theme = useTheme();

	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(mobileOpen);
	};

	const drawer = (
		<List>
			{["Intro", "About", "Projects", "Skills"].map((text) => (
				<ListItem button key={text}>
					<ListItemIcon>
						<Mail />
					</ListItemIcon>
					<ListItemText primary={text} />
				</ListItem>
			))}
		</List>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	let desktopMenu = (
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
	);

	return (
		<>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<Menu />
					</IconButton>
					{/* <Typography variant="h6" noWrap>
						Eva CV
					</Typography> */}
				</Toolbar>
			</AppBar>

			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden only={["lg", "xl"]} implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden only={["xs", "sm", "md"]} implementation="css">
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
				</Hidden>
			</nav>
			<Toolbar id="back-to-top-anchor" />
			<ScrollTop {...props}>
				<Fab size="small" aria-label="scroll back to top" color="primary">
					<KeyboardArrowUp />
				</Fab>
			</ScrollTop>
		</>
	);
}
