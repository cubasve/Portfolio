import React from 'react';
import './Intro.css';
import ReactTypingEffect from 'react-typing-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faTerminal, faAddressCard, faIdBadge, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon: {
        margin: 20,
    },
});

export default function Intro() {
    const classes = useStyles();
    return (
        <div class="landing-page" id="intro">
            <div className="Contact-Icons">
                <Typography variant="h3" className="Contact">
                    <Link className={classes.icon} href="mailto:cubasve@gmail.com" color="inherit"><FontAwesomeIcon icon={faEnvelope} size="10px" /></Link>
                </Typography>
                <Typography variant="h3" className="Contact">
                    <Link className={classes.icon} href="https://github.com/cubasve" target="_blank" rel="noopener" color="inherit"><FontAwesomeIcon icon={faGithub} /></Link>
                </Typography>
                <Typography variant="h3" className="Contact">
                    <Link className={classes.icon} href="https://www.linkedin.com/in/cubasve/" target="_blank" rel="noopener" color="inherit"><FontAwesomeIcon icon={faLinkedin} /></Link>
                </Typography>
                {/* <Typography variant="h3" className="Contact">
                    <Link className={classes.icon} href="" target="_blank" rel="noopener" color="inherit"><FontAwesomeIcon icon={faAngellist} /></Link>
                </Typography>
                <Typography variant="h3" className="Contact">
                    <Link className={classes.icon} href="" target="_blank" rel="noopener" color="inherit"><FontAwesomeIcon icon={faAddressBook} /></Link>
                </Typography> */}
            </div>

            <div className="IntroduceYourself" >
                <div className="Eva">
                    <h4><FontAwesomeIcon icon={faMapMarkerAlt} />  Toronto, Ontario</h4>
                    <br />
                    <h2><FontAwesomeIcon icon={faTerminal} /> <span id="name"><ReactTypingEffect text={['Eva Cubas Vasquez']} typingDelay={1000} speed={100} eraseSpeed={200} eraseDelay={1000000} /></span></h2>
                    <h3>Full-Stack Web Developer</h3>
                </div>
            </div >
        </div>
    )
}