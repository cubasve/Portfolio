import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    name: {
        color: 'maroon',
    },
    icon: {
        margin: 10,
        marginTop: 20,
        color: 'green',
    },
    city: {
        marginTop: 20,
        color: 'red',
        textAlign: 'left',
    }
});

export default function Intro() {
    const classes = useStyles();
    return (
        <>
            <div id="Intro-Icons">
                <div className="city">
                    <Typography className={classes.city} variant="h5"><FontAwesomeIcon icon={faMapMarkerAlt} /> Toronto, Ontario</Typography>
                </div>
                <div className="socials">
                    <Typography variant="h5" className="Intro">
                        <Link className={classes.icon} href="mailto:cubasve@gmail.com" color="inherit"><FontAwesomeIcon icon={faEnvelope} /></Link>
                    </Typography>
                    <Typography variant="h5" className="Intro">
                        <Link className={classes.icon} href="https://github.com/cubasve" target="_blank" rel="noopener" color="inherit"><FontAwesomeIcon icon={faGithub} /></Link>
                    </Typography>
                    <Typography variant="h5" className="Intro">
                        <Link className={classes.icon} href="https://www.linkedin.com/in/cubasve/" target="_blank" rel="noopener" color="inherit"><FontAwesomeIcon icon={faLinkedin} /></Link>
                    </Typography>
                </div>
            </div>

            <div className="Landing-page">
                <div className="Eva">
                    <h2 className={classes.name}>EVA CUBAS VASQUEZ</h2>
                    <h2>Full-Stack Web Developer</h2>
                </div>
                <div className="Brand-Statement">
                    <h3>I am passionate about web development and personal development, which are merged together to create my projects.</h3>
                    <h3>My mission is to make a positive impact in a technology-driven world by using innovation to engineer software.</h3>
                </div>
            </div>
        </>
    )
}