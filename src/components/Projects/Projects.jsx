import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import { Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';

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
                    <Tab label="Finesse" {...allyProps(0)} />
                    <Tab label="SwapiFy" {...allyProps(1)} />
                    <Tab label="Slash Trash" {...allyProps(2)} />
                    <Tab label="Hangman" {...allyProps(3)} />
                </Tabs>
            </AppBar>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>About Finesse</TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>About Swapify</TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>About Slash Trash</TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>About Hangman</TabPanel>
            </SwipeableViews>
            {/* </div> */}
        </>
    )
}