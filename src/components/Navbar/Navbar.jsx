import React from 'react';
import { AppBar, Toolbar, Link } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Scrollspy from 'react-scrollspy';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    link: {
        color: 'white',
        margin: 10,
        textAlign: 'center',
    },
    // logo: {
    //     margin: 20,
    // }
    // navbar: {
    //     display: 'block',
    // }
});

export default function Navbar() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed">
                {/* <Toolbar className="Navbar"> */}
                <Toolbar className={classes.navbar}>
                    <Scrollspy items={['intro', 'projects', 'skills', 'contact']} currentClassName="is-current" offset={0}>
                        <Link href="#intro" className={classes.link} id="nav-links"><FontAwesomeIcon icon={faLaptopCode} /> cubasve</Link>
                        <Link href="#projects" className={classes.link}>Projects</Link>
                        <Link href="#skills" className={classes.link}>Skills</Link>
                        {/* <Link href="#contact" className={classes.link}>Contact</Link> */}
                    </Scrollspy>
                </Toolbar>
            </AppBar>
        </>
    )
}