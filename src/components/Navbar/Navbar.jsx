import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AppBar, Link } from '@material-ui/core';
import Scrollspy from 'react-scrollspy';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faUser, faBriefcase, faLaptopCode, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
    link: {
        color: 'white',
        fontSize: '19px',
        margin: 15,
        // textAlign: 'center',
    },
});

export default function Navbar() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed">
                <Scrollspy 
                    items={['intro', 'about', 'projects', 'skills', 'contact']} 
                    currentClassName="is-current" offset={0}
                >
                    <Link href="#intro" className={classes.link} id="nav-links">
                        {/* <FontAwesomeIcon icon={faHome} /> */}
                         Home</Link>
                    <Link href="#about" className={classes.link}>
                        {/* <FontAwesomeIcon icon={faUser} /> */}
                         About</Link>
                    <Link href="#projects" className={classes.link}>
                        {/* <FontAwesomeIcon icon={faBriefcase} /> */}
                         Projects</Link>
                    <Link href="#skills" className={classes.link}>
                        {/* <FontAwesomeIcon icon={faLaptopCode} /> */}
                         Skills</Link>
                    {/* <Link href="#contact" className={classes.link}><FontAwesomeIcon icon={faPhoneAlt} /> Contact</Link> */}
                </Scrollspy>
            </AppBar>
        </>
    )
}