import React from 'react';
import './Projects.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, IconButton, Button, Avatar, Icon } from '@material-ui/core';
// import { MoreVertIcon } from '@material-ui/icons';
import { faDonate, faTshirt, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const html = <i class="devicon-html5-plain colored"></i>;
const css = <i class="devicon-css3-plain colored"></i>;
const bootstrap = <i class="devicon-bootstrap-plain colored"></i>;
const javascript = <i class="devicon-javascript-plain colored"></i>;
const react = <i class="devicon-react-original colored"></i>
const jQuery = <i class="devicon-jquery-plain colored"></i>;
const postgresql = <i class="devicon-postgresql-plain colored"></i>;
const python = <i class="devicon-python-plain colored"></i>;
const django = <i class="devicon-django-plain"></i>;
const express = <i class="devicon-express-original"></i>;
const node = <i class="devicon-nodejs-plain colored"></i>;
const mongoDB = <i class="devicon-mongodb-plain colored"></i>;
const git = <i class="devicon-git-plain colored"></i>;
const gitHub = <i class="devicon-github-plain colored"></i>;
const heroku = <i class="devicon-heroku-plain colored"></i>;

const useStyles = makeStyles({
    avatar: {
        color: "blue",
        backgroundColor: "white",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

    // description: {
    //     marginLeft: 50,
    //     marginRight: 50,
    //     marginTop: 0,
    // }
});

export default function Proj() {
    const classes = useStyles();

    const finesse = <FontAwesomeIcon icon={faDonate} size="3x" />
    const swapify = <FontAwesomeIcon icon={faTshirt} size="3x" />
    const slashTrash = <FontAwesomeIcon icon={faGlobeAmericas} size="3x" />

    return (
        <Card>
            <CardHeader
                avatar={
                    // <Avatar aria-label="Finesse" variant="rounded" className={classes.avatar}>
                    //     {finesse}
                    <Icon className="fas fa-donate" color="primary" />
                    // </Avatar>
                }
                // action={
                //     <IconButton aria-label="more-info">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title="FINESSE"
                subheader="Financial Statement Tracker"
            />
            <CardMedia
                className={classes.media}
                image="./Finesse.png"
                title="Finesse"
            />
            <CardContent>
                <Typography>
                    <Button className={classes.button} variant="contained" color="primary" href="https://drippininfinesse.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</Button>
                    <Button className={classes.button} variant="contained" color="primary" href="https://github.com/cubasve/Finesse" target="_blank" rel="noopener noreferrer">Code</Button>
                    <h2>{mongoDB}{express} {react} {node} {bootstrap} </h2>
                </Typography>
            </CardContent>
        </Card>
    )
}