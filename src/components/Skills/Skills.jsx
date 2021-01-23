import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Tooltip, IconButton } from '@material-ui/core';
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
    skill: {
        fontSize: 48,
        paddingLeft: 5,
        paddingRight: 5,
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
            <h1 id="skills">Skills</h1>
            <div className="Skills">
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" className={classes.title}>FRONT-END</Typography>
                        <Typography variant="h3" className={classes.icon}>{html} {css} {javascript} {react} {jQuery}</Typography>
                        <Typography>
                            <Tooltip title="HTML">
                                <IconButton aria-label="HTML" className={classes.skill}>{html}</IconButton>
                            </Tooltip>
                            <Tooltip title="CSS">
                                <IconButton aria-label="CSS" className={classes.skill}>{css}</IconButton>
                            </Tooltip>
                            <Tooltip title="JavaScript">
                                <IconButton aria-label="JavaScript" className={classes.skill}>{javascript}</IconButton>
                            </Tooltip>
                            <Tooltip title="React">
                                <IconButton aria-label="React" className={classes.skill}>{react}</IconButton>
                            </Tooltip>
                            <Tooltip title="jQuery">
                                <IconButton aria-label="jQuery" className={classes.skill}>{jQuery}</IconButton>
                            </Tooltip>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" className={classes.title}>BACK-END</Typography>
                        <Typography variant="h3" className={classes.icon}>{express} {node} {python} {django}{mongoDB}{postgresql}</Typography>
                        <Typography>
                            <Tooltip title="Express">
                                <IconButton aria-label="Express" className={classes.skill}>{express}</IconButton>
                            </Tooltip>
                            <Tooltip title="Node">
                                <IconButton aria-label="Node" className={classes.skill}>{node}</IconButton>
                            </Tooltip>
                            <Tooltip title="Python">
                                <IconButton aria-label="Python" className={classes.skill}>{python}</IconButton>
                            </Tooltip>
                            <Tooltip title="Django">
                                <IconButton aria-label="Django" className={classes.skill}>{django}</IconButton>
                            </Tooltip>
                            <Tooltip title="MongoDB">
                                <IconButton aria-label="MongoDB" className={classes.skill}>{mongoDB}</IconButton>
                            </Tooltip>
                            <Tooltip title="PostgreSQL">
                                <IconButton aria-label="PostgreSQL" className={classes.skill}>{postgresql}</IconButton>
                            </Tooltip>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" className={classes.title}>TOOLS</Typography>
                        <Typography variant="h3" className={classes.icon}>{git} {gitHub} {heroku} {trello} {vsCode}</Typography>
                        <Typography>
                            <Tooltip title="Git">
                                <IconButton aria-label="Git" className={classes.skill}>{git}</IconButton>
                            </Tooltip>
                            <Tooltip title="GitHub">
                                <IconButton aria-label="GitHub" className={classes.skill}>{gitHub}</IconButton>
                            </Tooltip>
                            <Tooltip title="Heroku">
                                <IconButton aria-label="Heroku" className={classes.skill}>{heroku}</IconButton>
                            </Tooltip>
                            <Tooltip title="Trello">
                                <IconButton aria-label="Trello" className={classes.skill}>{trello}</IconButton>
                            </Tooltip>
                            <Tooltip title="VS Code">
                                <IconButton aria-label="VS Code" className={classes.skill}>{vsCode}</IconButton>
                            </Tooltip>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}