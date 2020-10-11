import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon: {
        margin: 20,
    },
    brand: {
        margin: 80,
    }
});

export default function Intro() {
    const classes = useStyles();
    return (
        <>
            <br />
            <br />
            <div className="Contact-Icons" id="intro">
                <Typography variant="h3" className="Contact">
                    <Link className={classes.icon} href="mailto:cubasve@gmail.com" color="inherit"><FontAwesomeIcon icon={faEnvelope} size="10px" /></Link>
                </Typography>
                <Typography variant="h3" className="Contact">
                    <Link className={classes.icon} href="https://github.com/cubasve" target="_blank" rel="noopener" color="inherit"><FontAwesomeIcon icon={faGithub} /></Link>
                </Typography>
                <Typography variant="h3" className="Contact">
                    <Link className={classes.icon} href="https://www.linkedin.com/in/cubasve/" target="_blank" rel="noopener" color="inherit"><FontAwesomeIcon icon={faLinkedin} /></Link>
                </Typography>
            </div>

            <div className="IntroduceYourself" >
                <div className="Eva">
                    <h4><FontAwesomeIcon icon={faMapMarkerAlt} />  Toronto, Ontario</h4>
                    <br />
                    <h2><FontAwesomeIcon icon={faTerminal} /> <ReactTypingEffect text={['Eva Cubas Vasquez']} typingDelay={1000} speed={100} eraseSpeed={200} eraseDelay={1000000} /></h2>
                    <h3>Full-Stack Web Developer</h3>
                </div>
                <div className={classes.brand}>
                    <h4>I am passionate about web development and personal development, which are merged together to create my projects.</h4>
                    <h4>My mission is to make a positive impact in a technology-driven world by using innovation to engineer software.</h4>
                </div>
            </div >
        </>
    )
}