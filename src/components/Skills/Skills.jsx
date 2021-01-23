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
                                <IconButton aria-label="Express" className={classes.skill}>{express}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="Node" TransitionComponent={Zoom}>
                                <IconButton aria-label="Node" className={classes.skill}>{node}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="Python" TransitionComponent={Zoom}>
                                <IconButton aria-label="Python" className={classes.skill}>{python}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="Django" TransitionComponent={Zoom}>
                                <IconButton aria-label="Django" className={classes.skill}>{django}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="MongoDB" TransitionComponent={Zoom}>
                                <IconButton aria-label="MongoDB" className={classes.skill}>{mongoDB}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="PostgreSQL" TransitionComponent={Zoom}>
                                <IconButton aria-label="PostgreSQL" className={classes.skill}>{postgresql}</IconButton>
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
                            <LightTooltip title="Heroku" TransitionComponent={Zoom}>
                                <IconButton aria-label="Heroku" className={classes.skill}>{heroku}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="Trello" TransitionComponent={Zoom}>
                                <IconButton aria-label="Trello" className={classes.skill}>{trello}</IconButton>
                            </LightTooltip>
                            <LightTooltip title="VS Code" TransitionComponent={Zoom}>
                                <IconButton aria-label="VS Code" className={classes.skill}>{vsCode}</IconButton>
                            </LightTooltip>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}