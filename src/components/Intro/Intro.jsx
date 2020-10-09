import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
    name: {
        color: 'maroon',
    }
});

export default function Intro() {
    const classes = useStyles();
    return (
        <>
            <h2 className={classes.name}>EVA CUBAS VASQUEZ</h2>
            <h2>Full-Stack Web Developer</h2>
            <h3>I am passionate about web development and personal development, which are merged together to create my projects. My mission is to make a positive impact in a technology-driven world by using innovation to engineer software.</h3>
        </>
    )
}