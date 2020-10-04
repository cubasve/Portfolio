import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHtml5, faCss3Alt, faJsSquare, faReact, faNode, faPython, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles({
    root: {
        minWidth: 275,

    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
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
            <h1>Skills</h1>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h4" component="h2">Front-End</Typography>
                    <Typography variant="h3" component="h1">
                        {/* <FontAwesomeIcon icon={faHtml5} size="3x" /> */}
                        {html} {css} {javascript} {react} {jQuery}
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h4" component="h2">Back-End</Typography>
                    <Typography variant="h3" component="p">
                        {express} {node} {python} {django} {mongoDB} {postgresql}
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h4" component="h2">Tools</Typography>
                    <Typography variant="h3" component="p">
                        {git} {gitHub} {heroku} {trello} {vsCode}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}