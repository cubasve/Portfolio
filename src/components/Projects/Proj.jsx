import React from 'react';
import './Projects.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, IconButton, Button, Avatar } from '@material-ui/core';
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

export default function Proj() {
    const finesse = <FontAwesomeIcon icon={faDonate} size="3x" />
    const swapify = <FontAwesomeIcon icon={faTshirt} size="3x" />
    const slashTrash = <FontAwesomeIcon icon={faGlobeAmericas} size="3x" />

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="Finesse" color="blue">
                        {slashTrash}
                    </Avatar>
                }
                // action={
                //     <IconButton aria-label="more-info">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title="Finesse"
                subheader="Financial Statement Tracker"
            />
            <CardMedia
                image="./Finesse.png"
                title="Finesse"
            />
            <CardContent>
                <Typography>

                </Typography>
            </CardContent>
        </Card>
    )
}