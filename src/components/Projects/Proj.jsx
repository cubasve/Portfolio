import React from 'react';
import './Projects.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, IconButton, Button, Avatar, Icon, Collapse } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { faDonate, faTshirt, faGlobeAmericas, faCheckCircle, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
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
        width: 270,
        // height: 450,
        margin: 20,
    },
    cardHeader: {
    },
    avatar: {
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    subheader: {
        paddingRight: 5,
        paddingLeft: 5,
        marginBottom: 0,
    },
    button: {
        paddingTop: 0,
    },
    // description: {
    //     marginLeft: 50,
    //     marginRight: 50,
    //     marginTop: 0,
    // }
    expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    // transition: theme.transitions.create('transform', {
    //   duration: theme.transitions.duration.shortest,
    // }),
    },
    expandOpen: {
    transform: 'rotate(180deg)',
    },
});

export default function Proj() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
    };

    const finesse = <FontAwesomeIcon icon={faDonate} size="2x" />
    const swapify = <FontAwesomeIcon icon={faTshirt} size="2x" />
    const slashTrash = <FontAwesomeIcon icon={faGlobeAmericas} size="2x" />
    const bits = <FontAwesomeIcon icon={faUndoAlt} size="2x" />
    const guaranteed = <FontAwesomeIcon icon={faCheckCircle} size="2x" />

    return (
        <div className="card">
        {/* FINESSE */}
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Icon color="primary" className={classes.expand} classname={classes.expandOpen} onClick={handleExpandClick} aria-expanded={expanded}>{finesse}</Icon>
                }
                // // action={
                // //     <IconButton aria-label="more-info">
                // //         <MoreVertIcon />
                // //     </IconButton>
                // // }
                title={
                    <h2>FINESSE</h2>
                }
                className={classes.cardHeader}
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
                </CardContent>
            </Collapse>
             <CardMedia
                className={classes.media}
                image="./Finesse.png"
                title="Finesse"
            />
             <CardContent className={classes.subheader}>
                <Typography>
                    <Icon>{mongoDB}{express} {react} {node} {bootstrap}</Icon>
                    <h4>Financial Statement Tracker</h4>
                    <br />
                </Typography>
            </CardContent>
            <IconButton
                className={classes.button} aria-label="demo" variant="contained" href="https://drippininfinesse.herokuapp.com/" target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" /></IconButton>
            <IconButton className={classes.button} aria-label="code" variant="contained" href="https://github.com/cubasve/Finesse" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary" /></IconButton>

            {/* DESCRIPTION */}
        </Card>

        {/* SLASH TRASH */}
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Icon color="primary">{slashTrash}</Icon>
                }
                // action={
                //     <IconButton aria-label="more-info">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title={
                    <h2>SLASH TRASH</h2>
                }
                className={classes.cardHeader}
            />
            <CardMedia
                className={classes.media}
                image="./SlashTrash.png"
                title="SlashTrash"
            />
            <CardContent>
                <Typography className={classes.subheader}>
                    <Icon>{mongoDB}{express} {node}</Icon>
                    <h4>Eco-Friendly Household Product Finder and Tracker</h4>
                </Typography>
            </CardContent>
            <IconButton className={classes.button} variant="contained" href="https://slash-trash.herokuapp.com/" target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" /></IconButton>
            <IconButton className={classes.button} variant="contained" href="https://github.com/cubasve/Slash-Trash" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary"/></IconButton>
        </Card>

        {/* SWAPIFY */}
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Icon color="primary">{swapify}</Icon>
                }
                // action={
                //     <IconButton aria-label="more-info">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title={
                    <h2>SWAPIFY</h2>
                }
                className={classes.cardHeader}
            />
            <CardMedia
                className={classes.media}
                image="./Swapify.png"
                title="Swapify"
            />
            <CardContent>
                <Typography className={classes.subheader}>
                <Icon>{postgresql} {python} {django}</Icon>
                    <h4>Second-Hand Clothing and Shoe Exchange</h4>
                </Typography>
            </CardContent>
             <IconButton className={classes.button} variant="contained" href="https://teamswapify.herokuapp.com/" target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" /></IconButton>
            <IconButton className={classes.button} variant="contained" href="https://github.com/cubasve/Swapify" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary"/></IconButton>
        </Card>

        {/* BITS */}
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Icon color="primary">{bits}</Icon>
                }
                // action={
                //     <IconButton aria-label="more-info">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title={
                    <h2>BITS</h2>
                }
                className={classes.cardHeader}
            />
            <CardMedia
                className={classes.media}
                image="./Swapify.png"
                title="Swapify"
            />
            <CardContent>
                <Typography className={classes.subheader}>
                    <Icon>{mongoDB}{express} {react} {node} {bootstrap}</Icon>
                    {/* <h4>Habit Generator, Detonator, and Tracker</h4> */}
                    <h4>Habit Generator</h4>
                    <br />
                </Typography>
            </CardContent>
             <IconButton className={classes.button} variant="contained" href="https://teamswapify.herokuapp.com/" target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" /></IconButton>
            <IconButton className={classes.button} variant="contained" href="https://github.com/cubasve/Swapify" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary"/></IconButton>
        </Card>

        {/* GUARANTEED */}
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Icon color="primary">{guaranteed}</Icon>
                }
                // action={
                //     <IconButton aria-label="more-info">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title={
                    <h2>GUARANTEED</h2>
                }
                className={classes.cardHeader}
            />
            <CardMedia
                className={classes.media}
                image="./Swapify.png"
                title="Swapify"
            />
            <CardContent>
                <Typography className={classes.subheader}>
                    <Icon>{mongoDB}{express} {react} {node}</Icon>
                    <h4>Lifetime Warranty Product Search Engine</h4>
                </Typography>
            </CardContent>
             <IconButton className={classes.button} variant="contained" href="https://teamswapify.herokuapp.com/" target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" /></IconButton>
            <IconButton className={classes.button} variant="contained" href="https://github.com/cubasve/Swapify" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary"/></IconButton>
        </Card>
        </div>
    )
}