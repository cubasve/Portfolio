import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon: {
        margin: 20,
    }
});

export default function Contact() {
    const classes = useStyles();
    return (
        <>
            <h1>Contact</h1>
            <div className="Contact-Icons">
                <Typography variant="h3" component="h2" className="Contact">
                    <Link className={classes.icon} href="mailto:cubasve@gmail.com" color="inherit"><FontAwesomeIcon icon={faEnvelope} size="10px" /></Link>
                </Typography>
                <Typography variant="h3" component="h2" className="Contact">
                    <Link className={classes.icon} href="https://github.com/cubasve" target="_blank" rel="noopener" color="inherit"><FontAwesomeIcon icon={faGithub} /></Link>
                </Typography>
                <Typography variant="h3" component="h2" className="Contact">
                    <Link className={classes.icon} href="https://www.linkedin.com/in/cubasve/" target="_blank" rel="noopener" color="inherit"><FontAwesomeIcon icon={faLinkedin} /></Link>
                </Typography>
            </div>
        </>
    )
}