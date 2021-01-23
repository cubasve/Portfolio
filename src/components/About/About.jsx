import React from 'react';
import './About.css';
import { IconButton } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';


export default function About() {

    return (
        <>
            <h1 id="about">About</h1>
            <div className="About">
                <div className="account">
                    <IconButton><AccountBoxIcon color="primary" style={{ fontSize: 200 }} /></IconButton>
                </div>

                <div className="brand">
                    <div className="one statement">
                        <IconButton><AccountTreeIcon color="primary" style={{ fontSize: 40 }} /></IconButton><span className="statement development">I am passionate about web development and personal development, which are merged together to create my projects.</span>
                    </div>
                    <div className="two statement">
                        <IconButton><WbIncandescentIcon color="primary" style={{ fontSize: 40 }} /></IconButton><span className="statement">My mission is to make a positive impact in a technology-driven world by using innovation to engineer software.</span>
                    </div>
                </div>
            </div>
        </>
    )
}