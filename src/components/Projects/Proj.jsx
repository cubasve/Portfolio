import React from 'react';
import projectData from './projectData.js';
import './Projects.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography, IconButton, Icon } from '@material-ui/core';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { faDonate, faTshirt, faGlobeAmericas, faCheckCircle, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const html = <i class="devicon-html5-plain colored"></i>;
// const css = <i class="devicon-css3-plain colored"></i>;
const bootstrap = <i class="devicon-bootstrap-plain colored"></i>;
// const javascript = <i class="devicon-javascript-plain colored"></i>;
const react = <i class="devicon-react-original colored"></i>
// const jQuery = <i class="devicon-jquery-plain colored"></i>;
const postgresql = <i class="devicon-postgresql-plain colored"></i>;
const python = <i class="devicon-python-plain colored"></i>;
const django = <i class="devicon-django-plain"></i>;
const express = <i class="devicon-express-original"></i>;
const node = <i class="devicon-nodejs-plain colored"></i>;
const mongoDB = <i class="devicon-mongodb-plain colored"></i>;
// const git = <i class="devicon-git-plain colored"></i>;
// const gitHub = <i class="devicon-github-plain colored"></i>;
// const heroku = <i class="devicon-heroku-plain colored"></i>;

const useStyles = makeStyles({
    card: {
        width: 270,
        // height: 450,
        margin: 0,
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
    description: {
        paddingRight: 5,
        paddingLeft: 5,
    },
    technologies: {
        paddingRight: 70,
        paddingLeft: 70,
    },
});

export default function Proj() {
    const classes = useStyles();

    /*const finesse = <FontAwesomeIcon icon={faDonate} size="2x" />
    // const swapify = <FontAwesomeIcon icon={faTshirt} size="2x" />
    // const slashTrash = <FontAwesomeIcon icon={faGlobeAmericas} size="2x" />
    // const bits = <FontAwesomeIcon icon={faUndoAlt} size="2x" />
    // const guaranteed = <FontAwesomeIcon icon={faCheckCircle} size="2x" /> */

    return (
        <div className="card">
            {projectData.map(project => {
                return (
                    <div className="card">
                        <Flippy flipOnHover={true} flipOnClick={true} flipDirection="horizontal">
                            <FrontSide>
                                <Card className={classes.card} key={project.id}>
                                    <CardHeader
                                        avatar={
                                            <Icon color="primary">{project.logo}</Icon>
                                        }
                                        title={
                                            <h2>{project.name}</h2>
                                        }
                                        className={classes.cardHeader}
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={project.image}
                                        title={project.name}
                                    />
                                    <CardContent className={classes.subheader}>
                                        <Typography>
                                            <Icon className={classes.technologies}>{project.technologies.map(tech => tech)}</Icon>
                                            <h4>{project.subheader}</h4>
                                            <br />
                                        </Typography>
                                    </CardContent>
                                    <IconButton
                                        className={classes.button} aria-label="demo" variant="contained" href={project.demoLink} target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" /></IconButton>
                                    <IconButton className={classes.button} aria-label="code" variant="contained" href={project.codeLink} target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary" /></IconButton>
                                    <IconButton className={classes.button} aria-label="code" variant="contained" href={project.youtubeLink} target="_blank" rel="noopener noreferrer"><YouTubeIcon color="primary" /></IconButton>
                                </Card>
                            </FrontSide>
                            <BackSide>
                                <Card className={classes.card} key={project.id}>
                                    <CardHeader
                                        avatar={
                                            <Icon color="primary">{project.logo}</Icon>
                                        }
                                        title={
                                            <h2>{project.name}</h2>
                                        }
                                        className={classes.cardHeader}
                                    />
                                    <CardContent>
                                        <Typography className={classes.description}>
                                            <p>{project.description}</p>
                                        </Typography>
                                    </CardContent>
                                    <IconButton
                                        className={classes.button} aria-label="demo" variant="contained" href={project.demoLink} target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" /></IconButton>
                                    <IconButton className={classes.button} aria-label="code" variant="contained" href={project.codeLink} target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary" /></IconButton>
                                    <IconButton className={classes.button} aria-label="code" variant="contained" href={project.youtubeLink} target="_blank" rel="noopener noreferrer"><YouTubeIcon color="primary" /></IconButton>
                                </Card>
                            </BackSide>
                        </Flippy>
                    </div >
                )
            })}
        </div>
    )
}


/* ------------------------------FINESSE */
/* <Flippy flipOnHover={true} flipOnClick={true} flipDirection="horizontal">
        <FrontSide>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Icon color="primary">{finesse}</Icon>
                    }
                    title={
                        <h2>FINESSE</h2>
                    }
                    className={classes.cardHeader}
                />
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
                <IconButton className={classes.button} aria-label="code" variant="contained" href="" target="_blank" rel="noopener noreferrer"><YouTubeIcon color="primary" /></IconButton>
            </Card>
        </FrontSide>
        <BackSide>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Icon color="primary">{finesse}</Icon>
                    }
                    title={
                        <h2>FINESSE</h2>
                    }
                    className={classes.cardHeader}
                />
                <CardContent className={classes.subheader}>
                    <Typography className={classes.description}>
                        <p>Finesse tracks a user's personal financial statements and teaches financial literacy. It aims to demystify financial jargon so it is easy to understand. This application's concepts are based on Robert Kiyosaki's "Increase Your Financial IQ," with additional features implemented.</p>
                    </Typography>
                </CardContent>
                <IconButton
                    className={classes.button} aria-label="demo" variant="contained" href="https://drippininfinesse.herokuapp.com/" target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" />
                </IconButton>
                <IconButton className={classes.button} aria-label="code" variant="contained" href="https://github.com/cubasve/Finesse" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary" />
                </IconButton>
                <IconButton className={classes.button} aria-label="code" variant="contained" href="" target="_blank" rel="noopener noreferrer"><YouTubeIcon color="primary" />
                </IconButton>
            </Card>
        </BackSide>
    </Flippy>

    /* -------------------------------SLASH TRASH */
/* <Flippy flipOnHover={true} flipOnClick={true} flipDirection="horizontal">
        <FrontSide>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Icon color="primary">{slashTrash}</Icon>
                    }
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
                <IconButton className={classes.button} variant="contained" href="https://github.com/cubasve/Slash-Trash" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary" /></IconButton>
                <IconButton className={classes.button} variant="contained" href="" target="_blank" rel="noopener noreferrer"><YouTubeIcon color="primary" /></IconButton>
            </Card>
        </FrontSide>
        <BackSide>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Icon color="primary">{slashTrash}</Icon>
                    }
                    title={
                        <h2>SLASH TRASH</h2>
                    }
                    className={classes.cardHeader}
                />
                <CardContent>
                    <Typography className={classes.subheader}>
                        <p>Slash Trash is a platform for users to search for eco-friendly alternatives to everyday household items and start their journey to a low-waste lifestyle.</p>
                    </Typography>
                </CardContent>
                <IconButton className={classes.button} variant="contained" href="https://slash-trash.herokuapp.com/" target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" /></IconButton>
                <IconButton className={classes.button} variant="contained" href="https://github.com/cubasve/Slash-Trash" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary" /></IconButton>
                <IconButton className={classes.button} variant="contained" href="" target="_blank" rel="noopener noreferrer"><YouTubeIcon color="primary" /></IconButton>
            </Card>
        </BackSide>
    </Flippy> */

/* ------------------------------SWAPIFY */
/* <Flippy flipOnHover={true} flipOnClick={true} flipDirection="horizontal">
        <FrontSide>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Icon color="primary">{swapify}</Icon>
                    }
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
                <IconButton className={classes.button} variant="contained" href="https://github.com/cubasve/Swapify" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary" /></IconButton>
                <IconButton className={classes.button} variant="contained" href="" target="_blank" rel="noopener noreferrer"><YouTubeIcon color="primary" /></IconButton>
            </Card>
        </FrontSide>
        <BackSide>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Icon color="primary">{swapify}</Icon>
                    }
                    title={
                        <h2>SWAPIFY</h2>
                    }
                    className={classes.cardHeader}
                />
                <CardContent>
                    <Typography className={classes.subheader}>
                        <p>Swapify is a collaborative project built by five developers. Shoes and clothing posted by the same user can be recommended to be styled together to form an outfit. Its purpose is to prevent fast fashion from being sent to landfills and instead promote the second-hand market.</p>
                    </Typography>
                </CardContent>
                <IconButton className={classes.button} variant="contained" href="https://teamswapify.herokuapp.com/" target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" /></IconButton>
                <IconButton className={classes.button} variant="contained" href="https://github.com/cubasve/Swapify" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary" /></IconButton>
                <IconButton className={classes.button} variant="contained" href="" target="_blank" rel="noopener noreferrer"><YouTubeIcon color="primary" /></IconButton>
            </Card>
        </BackSide>
    </Flippy> */

/* ---------------------------BITS */
/* <Flippy flipOnHover={true} flipOnClick={true} flipDirection="horizontal">
        <FrontSide>
            < Card className={classes.card} >
                <CardHeader
                    avatar={
                        <Icon color="primary">{bits}</Icon>
                    }
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
                        <h4>Habit Generator, Detonator, and Tracker</h4>
                        <h4>Habit Generator</h4>
                        <br />
                    </Typography>
                </CardContent>
                <IconButton className={classes.button} variant="contained" href="https://teamswapify.herokuapp.com/" target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" /></IconButton>
                <IconButton className={classes.button} variant="contained" href="https://github.com/cubasve/Swapify" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary" /></IconButton>
                <IconButton className={classes.button} variant="contained" href="" target="_blank" rel="noopener noreferrer"><YouTubeIcon color="primary" /></IconButton>
            </Card >
        </FrontSide>
        <BackSide>
            < Card className={classes.card} >
                <CardHeader
                    avatar={
                        <Icon color="primary">{bits}</Icon>
                    }
                    title={
                        <h2>BITS</h2>
                    }
                    className={classes.cardHeader}
                />
                <CardContent>
                    <Typography className={classes.subheader}>
                        <p>Swapify is a collaborative project built by five developers. Shoes and clothing posted by the same user can be recommended to be styled together to form an outfit. Its purpose is to prevent fast fashion from being sent to landfills and instead promote the second-hand market.</p>
                    </Typography>
                </CardContent>
                <IconButton className={classes.button} variant="contained" href="https://teamswapify.herokuapp.com/" target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" /></IconButton>
                <IconButton className={classes.button} variant="contained" href="https://github.com/cubasve/Swapify" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary" /></IconButton>
                <IconButton className={classes.button} variant="contained" href="" target="_blank" rel="noopener noreferrer"><YouTubeIcon color="primary" /></IconButton>
            </Card >
        </BackSide>
    </Flippy> */

/* ------------------------GUARANTEED */
/* <Flippy flipOnHover={true} flipOnClick={true} flipDirection="horizontal">
        <FrontSide>
            < Card className={classes.card} >
                <CardHeader
                    avatar={
                        <Icon color="primary">{guaranteed}</Icon>
                    }
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
                <IconButton className={classes.button} variant="contained" href="https://github.com/cubasve/Swapify" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary" /></IconButton>
                <IconButton className={classes.button} variant="contained" href="" target="_blank" rel="noopener noreferrer"><YouTubeIcon color="primary" /></IconButton>
            </Card >
        </FrontSide>
        <BackSide>
            < Card className={classes.card} >
                <CardHeader
                    avatar={
                        <Icon color="primary">{guaranteed}</Icon>
                    }
                    title={
                        <h2>GUARANTEED</h2>
                    }
                    className={classes.cardHeader}
                />
                <CardContent>
                    <Typography className={classes.subheader}>
                        <p>Swapify is a collaborative project built by five developers. Shoes and clothing posted by the same user can be recommended to be styled together to form an outfit. Its purpose is to prevent fast fashion from being sent to landfills and instead promote the second-hand market.</p>
                    </Typography>
                </CardContent>
                <IconButton className={classes.button} variant="contained" href="https://teamswapify.herokuapp.com/" target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" /></IconButton>
                <IconButton className={classes.button} variant="contained" href="https://github.com/cubasve/Swapify" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary" /></IconButton>
                <IconButton className={classes.button} variant="contained" href="" target="_blank" rel="noopener noreferrer"><YouTubeIcon color="primary" /></IconButton>
            </Card >
        </BackSide>
                </Flippy> */