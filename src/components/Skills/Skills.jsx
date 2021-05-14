import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Tooltip, IconButton, Zoom } from '@material-ui/core';
import './Skills.css';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        margin: 20,
    },
    category: {
        paddingBottom: 20,
    },
    // icon: {
    //     margin: 50,
    // },
    skill: {
        fontSize: 48,
        paddingLeft: 5,
        paddingRight: 5,
    },
    backend: {
        fontSize: 48,
        paddingLeft: 2,
        paddingRight: 2,
    },
    tooltip: {
        fontSize: 25,
        color: 'black',
    },
});

const html = <i class="devicon-html5-plain colored"></i>;
const css = <i class="devicon-css3-plain colored"></i>;
// const bootstrap = <i class="devicon-bootstrap-plain colored"></i>;
const javascript = <i class="devicon-javascript-plain colored"></i>;
const react = <i class="devicon-react-original colored"></i>
const jQuery = <i class="devicon-jquery-plain colored"></i>;
const postgresql = <i class="devicon-postgresql-plain colored"></i>;
//const trello = <i class="devicon-trello-plain colored"></i>;
//const vsCode = <i class="devicon-visualstudio-plain colored"></i>;
const npm = <i class="devicon-npm-original-wordmark colored"></i>
const python = <i class="devicon-python-plain colored"></i>;
const django = <i class="devicon-django-plain colored"></i>;
const express = <i class="devicon-express-original colored"></i>;
const node = <i class="devicon-nodejs-plain colored"></i>;
const mongoDB = <i class="devicon-mongodb-plain colored"></i>;
const git = <i class="devicon-git-plain colored"></i>;
const gitHub = <i class="devicon-github-plain colored"></i>;
const heroku = <i class="devicon-heroku-plain colored"></i>;

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: 'tan',
        color: 'black',
        boxShadow: theme.shadows[1],
        fontSize: 16,
    },
}))(Tooltip);

export default function Skills() {
    const classes = useStyles();

    return (
        <>
            <h1 id="skills">Skills</h1>
            <div className="Skills">
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" className={classes.category}>FRONT-END</Typography>
                        {/* <Typography variant="h3" className={classes.icon}>{html} {css} {javascript} {react} {jQuery}</Typography> */}
                        <Typography>
                            <LightTooltip title="HTML" TransitionComponent={Zoom}>
                                <IconButton aria-label="HTML" className={classes.skill}>{html}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="CSS" TransitionComponent={Zoom}>
                                <IconButton aria-label="CSS" className={classes.skill}>{css}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="JavaScript" TransitionComponent={Zoom}>
                                <IconButton aria-label="JavaScript" className={classes.skill}>{javascript}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="React" TransitionComponent={Zoom}>
                                <IconButton aria-label="React" className={classes.skill}>{react}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="jQuery" TransitionComponent={Zoom}>
                                <IconButton aria-label="jQuery" className={classes.skill}>{jQuery}</IconButton>
                            </LightTooltip>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" className={classes.category}>BACK-END</Typography>
                        {/* <Typography variant="h3" className={classes.icon}>{express} {node} {python} {django}{mongoDB}{postgresql}</Typography> */}
                        <Typography>
                            <LightTooltip title="Express" TransitionComponent={Zoom}>
                                <IconButton aria-label="Express" className={classes.backend}>{express}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="Node" TransitionComponent={Zoom}>
                                <IconButton aria-label="Node" className={classes.backend}>{node}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="Python" TransitionComponent={Zoom}>
                                <IconButton aria-label="Python" className={classes.backend}>
                                    <svg viewBox="0 0 128 128" width="52" height="52">
                                        <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                                            <stop offset="0" stop-color="#5A9FD4"></stop>
                                            <stop offset="1" stop-color="#306998"></stop>
                                        </linearGradient>
                                        <path fill="url(#a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137h-33.961c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491v-11.282c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548v-23.513c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zm-13.354 7.569c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"></path>
                                        <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                                            <stop offset="0" stop-color="#FFD43B"></stop><stop offset="1" stop-color="#FFE873"></stop>
                                        </linearGradient>
                                        <path fill="url(#b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655h-24.665c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412h-24.664v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.873 59.547c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"></path>
                                        <radialGradient id="c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"></stop>
                                            <stop offset="1" stop-color="#7F7F7F" stop-opacity="0"></stop>
                                        </radialGradient>
                                        <path opacity=".444" fill="url(#c)" enable-background="new" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
                                    </svg>
                                </IconButton>
                            </LightTooltip>
                            <LightTooltip title="Django" TransitionComponent={Zoom}>
                                <IconButton aria-label="Django" className={classes.backend}>{django}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="MongoDB" TransitionComponent={Zoom}>
                                <IconButton aria-label="MongoDB" className={classes.backend}>{mongoDB}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="PostgreSQL" TransitionComponent={Zoom}>
                                <IconButton aria-label="PostgreSQL" className={classes.backend}>{postgresql}</IconButton>
                            </LightTooltip>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" className={classes.category}>TOOLS</Typography>
                        {/* <Typography variant="h3" className={classes.icon}>{git} {gitHub} {heroku} {trello} {vsCode}</Typography> */}
                        <Typography>
                            <LightTooltip title="Git" TransitionComponent={Zoom}>
                                <IconButton aria-label="Git" className={classes.skill}>{git}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="GitHub" TransitionComponent={Zoom}>
                                <IconButton aria-label="GitHub" className={classes.skill}>{gitHub}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="Node Package Manager" TransitionComponent={Zoom}>
                                <IconButton aria-label="Node Package Manager" className={classes.skill}>{npm}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="Heroku" TransitionComponent={Zoom}>
                                <IconButton aria-label="Heroku" className={classes.skill}>{heroku}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="Netlify" TransitionComponent={Zoom}>
                                <IconButton aria-label="Netlify" className={classes.skill}>
                                    <img src="./Netlify.svg" width="50" height="50" alt="Netlify" />
                                </IconButton>
                            </LightTooltip>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}