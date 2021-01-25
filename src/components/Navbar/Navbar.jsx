import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AppBar, Link, Tooltip, Zoom } from '@material-ui/core';
import Scrollspy from 'react-scrollspy';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CodeIcon from '@material-ui/icons/Code';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles({
    link: {
        color: 'white',
        margin: 15,
        textAlign: 'center',
    },
});

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: 'tan',
        color: 'black',
        boxShadow: theme.shadows[1],
        fontSize: 16,
    },
}))(Tooltip);

export default function Navbar() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed">
                <Scrollspy items={['intro', 'about', 'projects', 'skills', 'contact']} currentClassName="is-current" offset={0}>
                    {/* <div id="navbar-icons"> */}
                    <LightTooltip title="Home" TransitionComponent={Zoom}>
                        <Link href="#intro" className={classes.link} id="nav-links"><HomeIcon fontSize="large" /></Link>
                    </LightTooltip>
                    <LightTooltip title="About" TransitionComponent={Zoom}>
                        <Link href="#about" className={classes.link} id="nav-links"><PersonIcon fontSize="large" /></Link>
                    </LightTooltip>
                    <LightTooltip title="Projects" TransitionComponent={Zoom}>
                        <Link href="#projects" className={classes.link} id="nav-links"><AssignmentIcon fontSize="large" /></Link>
                    </LightTooltip>
                    <LightTooltip title="Skills" TransitionComponent={Zoom}>
                        <Link href="#skills" className={classes.link} id="nav-links"><CodeIcon fontSize="large" /></Link>
                    </LightTooltip>
                    <LightTooltip title="Contact" TransitionComponent={Zoom}>
                        <Link href="#contact" className={classes.link} id="nav-links"><PhoneIcon fontSize="large" /></Link>
                    </LightTooltip>
                    {/* </div> */}
                </Scrollspy>
            </AppBar>
        </>
    )
}