import React from 'react';
import './About.css';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
// import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

const useStyles = makeStyles({
    icon: {
    },
});

export default function About() {
    const classes = useStyles();

    return (
        <>
            <h1 id="about">About</h1>
            <div className="About">
                <div className="account">
                    <IconButton><AccountBoxIcon color="primary" style={{ fontSize: 200 }} /></IconButton>
                </div>

                <div className="brand">
                    <Typography>
                        <IconButton><AccountTreeIcon color="primary" className={classes.icon} style={{ fontSize: 40 }} /></IconButton><span className="statement development">I am passionate about web development and personal development, which are merged together to create my projects.</span>
                    </Typography>
                    <Typography>
                        <IconButton><WbIncandescentIcon color="primary" className={classes.icon} style={{ fontSize: 40 }} /></IconButton><span className="statement">My mission is to make a positive impact in a technology-driven world by using innovation to engineer software.</span>
                    </Typography>
                </div>
            </div>
        </>
    )
}