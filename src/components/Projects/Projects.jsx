import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';
import { faDonate, faTshirt, faGlobeAmericas, faWalking } from '@fortawesome/free-solid-svg-icons';
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

const useStyles = makeStyles(theme => ({
    root: { backgroundColor: theme.palette.background.paper, width: 500 }
}))

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
    const hangman = <FontAwesomeIcon icon={faWalking} size="3x" />

    return (
        <>
            <h1>Projects</h1>

            {/* <div className={classes.root}> */}
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
                    <Tab label="Hangman" icon={hangman}{...allyProps(3)} />
                </Tabs>
            </AppBar>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>About Finesse: Description, Technologies, Screenshot/Gif</TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>About Swapify <i class="fas fa-donate"></i></TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>About Slash Trash</TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>About Hangman</TabPanel>
            </SwipeableViews>
            {/* </div> */}
        </>
    )
}