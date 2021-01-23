import React from 'react';
import './About.css';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
// import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

const useStyles = makeStyles({
    brand: {
        marginBottom: 30,
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

                <div className="statement">
                    <Typography className={classes.brand} variant="h5">
                        <IconButton><AccountTreeIcon color="primary" style={{ fontSize: 50 }} /></IconButton>I am passionate about web development and personal development, which are merged together to create my projects.
                    </Typography>
                    <Typography variant="h5">
                        <IconButton><WbIncandescentIcon color="primary" style={{ fontSize: 50 }} /></IconButton>My mission is to make a positive impact in a technology-driven world by using innovation to engineer software.
                    </Typography>
                </div>
            </div>
        </>
    )
}