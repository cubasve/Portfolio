import React from 'react';
import './Projects.css';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box, Button } from '@material-ui/core';
import { faDonate, faTshirt, faGlobeAmericas, faStreetView } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (<Box p={10}><Typography>{children}</Typography></Box>)}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

function allyProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    }
}

const html = <i class="devicon-html5-plain colored"></i>;
const css = <i class="devicon-css3-plain colored"></i>;
// const bootstrap = <i class="devicon-bootstrap-plain colored"></i>;
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
    button: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 0,
        marginBottom: 0,
    },
    description: {
        marginLeft: 50,
        marginRight: 50,
    }
});

export default function Projects() {

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

    const handleChangeIndex = index => {
        setValue(index);
    }

    const finesse = <FontAwesomeIcon icon={faDonate} size="3x" />
    const swapify = <FontAwesomeIcon icon={faTshirt} size="3x" />
    const slashTrash = <FontAwesomeIcon icon={faGlobeAmericas} size="3x" />
    // const hangman = <FontAwesomeIcon icon={faStreetView} size="3x" />

    return (
        <>
            <h1 id="projects">Projects</h1>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs">
                    <Tab label="Finesse" icon={finesse} {...allyProps(0)} />
                    <Tab label="SwapiFy" icon={swapify} {...allyProps(1)} />
                    <Tab label="Slash Trash" icon={slashTrash} {...allyProps(2)} />
                    {/* <Tab label="Hangman" icon={hangman}{...allyProps(3)} /> */}
                </Tabs>
            </AppBar>

            <div className="root">
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >

                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <div className="Projects">
                            <div><img src="./Finesse.png" alt="Finesse" /></div>
                            <div className="Project-info">
                                <h1>FINESSE</h1>
                                <h2>Financial Statement Tracker</h2>
                                <h6>
                                    <Button className={classes.button} variant="contained" color="primary" href="https://drippininfinesse.herokuapp.com/" target="_blank" rel="noopener">Demo</Button>
                                    <Button className={classes.button} variant="contained" color="primary" href="https://github.com/cubasve/Finesse" target="_blank" rel="noopener">Code</Button>
                                </h6>
                                <span className="tech"><h2>Technologies:</h2> <h1>{mongoDB}{express} {react} {node}</h1></span>
                                {/* <h2>Technologies: {mongoDB} {express} {react} {node}</h2> */}
                                <p className={classes.description}>Finesse tracks a user's personal financial statements and teaches financial literacy. It aims to demystify financial jargon so it is easy to understand. This application's concepts are based on Robert Kiyosaki's "Increase Your Financial IQ," with additional features implemented.</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <div className="Projects">
                            <div><img src="./Swapify.png" alt="Swapify" /></div>
                            <div className="Project-info">
                                <h1>SWAPIFY</h1>
                                <h2>Second-Hand Clothing and Shoe Exchange</h2>
                                <h6>
                                    <Button className={classes.button} variant="contained" color="primary" href="https://teamswapify.herokuapp.com/" target="_blank" rel="noopener">Demo</Button>
                                    <Button className={classes.button} variant="contained" color="primary" href="https://github.com/cubasve/Swapify" target="_blank" rel="noopener">Code</Button>
                                </h6>
                                <span className="tech"><h2>Technologies:</h2><h1>{postgresql} {python} {django}</h1></span>
                                <p className={classes.description}>Swapify is a collaborative project built by 5 developers. Shoes and clothing posted by the same user can be recommended to be styled together to form an outfit. Its purpose is to prevent fast fashion from being sent to landfills and instead promote the second-hand market.</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <div className="Projects">
                            <div><img src="./SlashTrash.png" alt="SlashTrash" /></div>
                            <div className="Project-info">
                                <h1>SLASH TRASH</h1>
                                <h2>Eco-Friendly Household Product Tracker</h2>
                                <h6>
                                    <Button className={classes.button} variant="contained" color="primary" href="https://slash-trash.herokuapp.com/" target="_blank" rel="noopener">Demo</Button>
                                    <Button className={classes.button} variant="contained" color="primary" href="https://github.com/cubasve/Slash-Trash" target="_blank" rel="noopener">Code</Button>
                                </h6>
                                <span className="tech"><h2>Technologies:</h2><h1>{mongoDB}{express} {node}</h1></span>
                                <p className={classes.description}>Slash Trash is a platform for users to search for eco-friendly alternatives to everyday household items and start their journey to a low-waste lifestyle. This application provides actionable steps to go green by allowing the user the ability to keep track of the changes they implemented.</p>
                            </div>
                        </div>
                    </TabPanel>
                    {/* <TabPanel value={value} index={3} dir={theme.direction}>About Hangman</TabPanel> */}
                </SwipeableViews>
            </div>
        </>
    )
}