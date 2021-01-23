import React from 'react';
import { faDonate, faTshirt, faGlobeAmericas, faCheckCircle, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const projectData = [
    {
        id: 1,
        name: 'FINESSE',
        subheader: 'Financial Statement Tracker',
        logo: <FontAwesomeIcon icon={faDonate} size="2x" />,
        image: './Finesse.png',
        technologies: [
            <i class="devicon-mongodb-plain colored"></i>,
            <i class="devicon-express-original"></i>,
            <i class="devicon-react-original colored"></i>,
            <i class="devicon-nodejs-plain colored"></i>,
            <i class="devicon-bootstrap-plain colored"></i>,
        ],
        description: 'Finesse tracks a user\'s personal financial statements and teaches financial literacy. It aims to demystify financial jargon so it is easy to understand. This application\'s concepts are based on Robert Kiyosaki\'s "Increase Your Financial IQ," with additional features implemented.',
        demoLink: 'https://drippininfinesse.herokuapp.com/',
        codeLink: 'https://github.com/cubasve/Finesse',
        youtubeLink: '',
    },
];

export default projectData;