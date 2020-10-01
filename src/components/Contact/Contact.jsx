import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <FontAwesomeIcon icon={faEnvelope} size="10px" />
            <FontAwesomeIcon icon={faGithub} size="10px" />
            <FontAwesomeIcon icon={faLinkedin} size="10px" />
        </>
    )
}