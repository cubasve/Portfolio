import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
	AppBar,
	CssBaseline,
	Divider,
	Drawer,
	Fab,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
	useScrollTrigger,
	Zoom,
} from "@material-ui/core";
import {
	AccountCircle,
	Code,
	KeyboardArrowUp,
	Home,
	Phone,
	Menu,
	Work,
} from "@material-ui/icons";
import Scrollspy from "react-scrollspy";
import PropTypes from "prop-types";
import "./Navbar.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		position: "fixed",
		bottom: theme.spacing(2),
		right: theme.spacing(2),
		zIndex: 1,
		fontWeight: 200,
	},
	drawer: {
		[theme.breakpoints.up("md")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	link: {
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
		color: "white",
		fontSize: "19px",
		margin: theme.spacing(5),
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	name: {
		textAlign: "center",
	},
	desktop: {
		flexGrow: 1,
		textAlign: "center",
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
	window: PropTypes.func,
};

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

export default function Navbar(props) {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<div className={classes.toolbar}></div>
			<h3 className={classes.name}>Eva Cubas Vasquez</h3>
			<Divider />

			<Scrollspy
				items={["intro", "about", "projects", "skills", "contact"]}
				currentClassName="is-current"
				offset={0}
			>
				<List component="nav">
					<ListItemLink href="#intro">
						<ListItemIcon>
							<Home color="primary" />
						</ListItemIcon>
						<ListItemText primary="Intro" />
					</ListItemLink>
					<ListItemLink href="#about">
						<ListItemIcon>
							<AccountCircle color="primary" />
						</ListItemIcon>
						<ListItemText primary="About" />
					</ListItemLink>
					<ListItemLink href="#projects">
						<ListItemIcon>
							<Work color="primary" />
						</ListItemIcon>
						<ListItemText primary="Projects" />
					</ListItemLink>
					<ListItemLink href="#skills">
						<ListItemIcon>
							<Code color="primary" />
						</ListItemIcon>
						<ListItemText primary="Skills" />
					</ListItemLink>
					<ListItemLink href="#contact">
						<ListItemIcon>
							<Phone color="primary" />
						</ListItemIcon>
						<ListItemText primary="Contact" />
					</ListItemLink>
				</List>
			</Scrollspy>
		</div>
	);

	const mobileMenu = (
		<>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="start"
				onClick={handleDrawerToggle}
				className={classes.menuButton}
			>
				<Menu />
			</IconButton>
			<Typography variant="h6" noWrap className={classes.menuButton}>
				Eva Cubas Vasquez
			</Typography>
		</>
	);

	const desktopMenu = (
		<Scrollspy
			items={["intro", "about", "projects", "skills", "contact"]}
			currentClassName="is-current"
			offset={0}
			className={classes.desktop}
		>
			<Link href="#intro" className={classes.link} id="nav-links">
				Home
			</Link>
			<Link href="#about" className={classes.link}>
				About
			</Link>
			<Link href="#projects" className={classes.link}>
				Projects
			</Link>
			<Link href="#skills" className={classes.link}>
				Skills
			</Link>
			<Link href="#contact" className={classes.link}>
				Contact
			</Link>
		</Scrollspy>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<>
			<CssBaseline />
			<AppBar position="fixed">
				<Toolbar>
					{mobileMenu}
					{desktopMenu}
				</Toolbar>
			</AppBar>
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
			<Toolbar id="back-to-top-anchor" />
			<ScrollTop {...props}>
				<Fab size="small" aria-label="scroll back to top" color="primary">
					<KeyboardArrowUp />
				</Fab>
			</ScrollTop>
		</>
	);
}
