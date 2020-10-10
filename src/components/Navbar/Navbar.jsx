import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';


export default function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton edge="start" color="inherit" aria-label="menu"> */}
                    <Typography variant="h6">Eva Cubas Vasquez</Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}