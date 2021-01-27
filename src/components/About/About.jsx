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
                        <IconButton><AccountTreeIcon color="primary" style={{ fontSize: 40 }} /></IconButton><span className="statement development">My passion for web development and personal development are incorporated together to create transformative applications with purpose.</span>
                    </div>
                    <div className="two statement">
                        <IconButton><WbIncandescentIcon color="primary" style={{ fontSize: 40 }} /></IconButton><span className="statement">With my experience in education and science, my mission is to build revolutionary software that benefits humanity.</span>
                    </div>
                </div>
            </div>
        </>
    )
}