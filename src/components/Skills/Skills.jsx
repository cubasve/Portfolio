import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Skills.css';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        margin: 20,
    },
    title: {
        paddingBottom: 20,
    },
    // icon: {
    //     margin: 50,
    // },
});

const html = <i class="devicon-html5-plain colored"></i>;
const css = <i class="devicon-css3-plain colored"></i>;
// const bootstrap = <i class="devicon-bootstrap-plain colored"></i>;
const javascript = <i class="devicon-javascript-plain colored"></i>;
const react = <i class="devicon-react-original colored"></i>
const jQuery = <i class="devicon-jquery-plain colored"></i>;
const postgresql = <i class="devicon-postgresql-plain colored"></i>;
const trello = <i class="devicon-trello-plain colored"></i>;
const vsCode = <i class="devicon-visualstudio-plain colored"></i>;
const python = <i class="devicon-python-plain colored"></i>;
const django = <i class="devicon-django-plain colored"></i>;
const express = <i class="devicon-express-original colored"></i>;
const node = <i class="devicon-nodejs-plain colored"></i>;
const mongoDB = <i class="devicon-mongodb-plain colored"></i>;
const git = <i class="devicon-git-plain colored"></i>;
const gitHub = <i class="devicon-github-plain colored"></i>;
const heroku = <i class="devicon-heroku-plain colored"></i>;

export default function Skills() {
    const classes = useStyles();

    return (
        <>
            <h1 id="skills">Skills</h1>
            <div className="Skills">
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" className={classes.title}>FRONT-END</Typography>
                        <Typography variant="h3" className={classes.icon}>{html} {css} {javascript} {react} {jQuery}</Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" className={classes.title}>BACK-END</Typography>
                        <Typography variant="h3" className={classes.icon}>{express} {node} {python} {django}{mongoDB}{postgresql}</Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" className={classes.title}>TOOLS</Typography>
                        <Typography variant="h3" className={classes.icon}>{git} {gitHub} {heroku} {trello} {vsCode}</Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}