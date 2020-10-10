import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Link } from '@material-ui/core';


export default function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6">Eva Cubas Vasquez</Typography>
                    <Link href="#skills" color="inherit">Skills</Link>
                </Toolbar>
            </AppBar>
        </>
    )
}