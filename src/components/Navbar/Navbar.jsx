import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';


export default function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6">Eva Cubas Vasquez</Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </>
    )
}