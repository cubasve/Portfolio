import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNode, faPython, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';

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

export default function Skills() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>Bullet</span>

    return (
        <>
            <h1>Skills</h1>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">Front-End</Typography>
                    <Typography variant="body2" component="p">
                        <FontAwesomeIcon icon={faHtml5} size="3x" />
                        <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                        <FontAwesomeIcon icon={faJsSquare} size="3x" />
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <i className="devicon-css3-plain  icon"></i>
                        <p>Add jQuery</p>
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">Back-End</Typography>
                    <Typography variant="body2" component="p">
                        <FontAwesomeIcon icon={faNode} size="3x" />
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <p>Add Express.js, MongoDB, Django, PostgreSQL</p>
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">Deployment</Typography>
                    <Typography variant="body2" component="p">
                        <FontAwesomeIcon icon={faGitAlt} size="3x" />
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                        <p>Add Heroku, MongoDBAtlas, Command Line</p>
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}