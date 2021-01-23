import React from 'react';
import projectData from './projectData.js';
import './Proj.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography, IconButton, Icon } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles({
    card: {
        width: 270,
        height: 440,
        // margin: 0,
    },
    cardHeader: {
    },
    avatar: {
    },
    media: {
        height: 0,
        // paddingTop: '56.25%', // 16:9
        paddingTop: 200,
        paddingLeft: 0,
        paddingRight: 0,
        // width: 270,
    },
    subheader: {
        paddingRight: 5,
        paddingLeft: 5,
        marginBottom: 0,
        paddingBottom: 0,
        paddingTop: 0,
    },
    button: {
        paddingTop: 0,
        marginTop: 0,
    },
});

export default function Proj() {
    const classes = useStyles();

    return (
        <div>
            <h1 id="projects">Projects</h1>
            <div className="card">
                {projectData.map(project => {
                    return (
                        <div>
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
                                        <CardContent>
                                            <span className="technologies">{project.technologies.map(tech => tech)}</span>
                                            <Typography className={classes.subheader}>
                                                <h4>{project.subheader}</h4>
                                            </Typography>
                                        </CardContent>
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
                                            <Typography>
                                                <p className={classes.subheader}>{project.description}</p>
                                            </Typography>
                                        </CardContent>
                                        <IconButton
                                            className={classes.button} aria-label="demo" variant="contained" href={project.demoLink} target="_blank" rel="noopener noreferrer"><LanguageIcon color="primary" /></IconButton>
                                        <IconButton className={classes.button} aria-label="code" variant="contained" href={project.codeLink} target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary" /></IconButton>
                                        {/* <IconButton className={classes.button} aria-label="code" variant="contained" href={project.youtubeLink} target="_blank" rel="noopener noreferrer"><YouTubeIcon color="primary" /></IconButton> */}
                                    </Card>
                                </BackSide>
                            </Flippy>
                        </div >
                    )
                })}
            </div >
        </div>
    )
}