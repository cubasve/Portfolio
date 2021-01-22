import React from 'react';
import './Projects.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, IconButton, Button, Avatar, Icon } from '@material-ui/core';
// import { MoreVertIcon } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import YouTubeIcon from '@material-ui/icons/YouTube';
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
    card: {
        width: '300px',
    },
    avatar: {
        height: 0,
        // color: "blue",
        // marginBottom: 0,
    },
    media: {
        // width: 250,
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    subheader: {
        heightTop: 0,
        heightBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 5,
        paddingLeft: 5,
        marginTop: 0,
        marginBottom: 0,
    },
    // description: {
    //     marginLeft: 50,
    //     marginRight: 50,
    //     marginTop: 0,
    // }
});

export default function Proj() {
    const classes = useStyles();

    const finesse = <FontAwesomeIcon icon={faDonate} size="2x" />
    const swapify = <FontAwesomeIcon icon={faTshirt} size="2x" />
    const slashTrash = <FontAwesomeIcon icon={faGlobeAmericas} size="2x" />

    return (
        <div className="card">
        {/* FINESSE */}
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Icon color="primary">{finesse}</Icon>
                }
                action={
                    <IconButton aria-label="more-info">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={
                    <h2>FINESSE</h2>
                }
            />
            <CardContent>
                <Typography className={classes.subheader}>
                    <h4>Financial Statement Tracker</h4>
                    <Icon>{mongoDB}{express} {react} {node} {bootstrap}</Icon>
                </Typography>
            </CardContent>
            <CardMedia
                className={classes.media}
                image="./Finesse.png"
                title="Finesse"
            />
            <IconButton
                className={classes.button} variant="contained" color="primary" href="https://drippininfinesse.herokuapp.com/" target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" /></IconButton>
            <IconButton className={classes.button} variant="contained" color="primary" href="https://github.com/cubasve/Finesse" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary" /></IconButton>
        </Card>

        {/* SLASH TRASH */}
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Icon color="primary">{slashTrash}</Icon>
                }
                action={
                    <IconButton aria-label="more-info">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={
                    <h2>SLASH TRASH</h2>
                }
            />
            <CardContent>
                <Typography className={classes.subheader}>
                    <h4>Eco-Friendly Household Product Finder and Tracker</h4>
                    <Icon>{mongoDB}{express} {node}</Icon>
                </Typography>
            </CardContent>
            <CardMedia
                className={classes.media}
                image="./SlashTrash.png"
                title="SlashTrash"
            />
            <IconButton className={classes.button} variant="contained" color="primary" href="https://slash-trash.herokuapp.com/" target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" /></IconButton>
            <IconButton className={classes.button} variant="contained" color="primary" href="https://github.com/cubasve/Slash-Trash" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary"/></IconButton>
        </Card>

        {/* SWAPIFY */}
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Icon color="primary">{swapify}</Icon>
                }
                action={
                    <IconButton aria-label="more-info">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={
                    <h2>SWAPIFY</h2>
                }
            />
            <CardContent>
                <Typography className={classes.subheader}>
                    <h4>Second-Hand Clothing and Shoe Exchange</h4>
                    <Icon>{postgresql} {python} {django}</Icon>
                </Typography>
            </CardContent>
            <CardMedia
                className={classes.media}
                image="./Swapify.png"
                title="Swapify"
            />
             <IconButton className={classes.button} variant="contained" color="primary" href="https://teamswapify.herokuapp.com/" target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" /></IconButton>
            <IconButton className={classes.button} variant="contained" color="primary" href="https://github.com/cubasve/Swapify" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary"/></IconButton>
        </Card>
        </div>
    )
}