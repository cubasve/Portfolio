import React from 'react';
import { faDonate, faTshirt, faGlobeAmericas, faCheckCircle, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mongoDB = <i class="devicon-mongodb-plain colored"></i>;
const react = <i class="devicon-react-original colored"></i>;
const express = <i class="devicon-express-original"></i>;
const node = <i class="devicon-bootstrap-plain colored"></i>;

const projectData = [
    {
        id: 1,
        name: 'FINESSE',
        subheader: 'Financial Statement Tracker',
        logo: <FontAwesomeIcon icon={faDonate} size="2x" />,
        image: './Finesse.png',
        technologies: [
            <i class="devicon-mongodb-plain colored"></i>,
            <i class="devicon-express-original"></i>, <span> </span>,
            <i class="devicon-react-original colored"></i>, <span> </span>,
            <i class="devicon-nodejs-plain colored"></i>, <span> </span>,
            <i class="devicon-bootstrap-plain colored"></i>,
        ],
        description: 'Finesse tracks a user\'s personal financial statements and teaches financial literacy. It aims to demystify financial jargon so it is easy to understand. This application\'s concepts are based on Robert Kiyosaki\'s "Increase Your Financial IQ," with additional features implemented.',
        demoLink: 'https://drippininfinesse.herokuapp.com/',
        codeLink: 'https://github.com/cubasve/Finesse',
        youtubeLink: '',
    },
    {
        id: 2,
        name: 'SLASH TRASH',
        subheader: 'Eco-Friendly Household Product Finder and Tracker',
        logo: <FontAwesomeIcon icon={faGlobeAmericas} size="2x" />,
        image: './SlashTrash.png',
        technologies: [
            <i class="devicon-mongodb-plain colored"></i>,
            <i class="devicon-express-original"></i>, <span> </span>,
            <i class="devicon-nodejs-plain colored"></i>, <span> </span>,
        ],
        description: 'Slash Trash is a platform for users to search for eco-friendly alternatives to everyday household items and start their journey to a low-waste lifestyle.',
        demoLink: 'https://slash-trash.herokuapp.com/',
        codeLink: 'https://github.com/cubasve/Slash-Trash',
        youtubeLink: '',
    },
    {
        id: 3,
        name: 'SWAPIFY',
        subheader: 'Second-Hand Clothing and Shoe Exchange',
        logo: <FontAwesomeIcon icon={faTshirt} size="2x" />,
        image: './Swapify.png',
        technologies: [
            <i class="devicon-postgresql-plain colored"></i>, <span> </span>,
            <i class="devicon-python-plain colored"></i>, <span> </span>,
            <i class="devicon-django-plain"></i>, <span> </span>,
        ],
        description: 'Swapify is a collaborative project built by five developers. Shoes and clothing posted by the same user can be recommended to be styled together to form an outfit. Its purpose is to prevent fast fashion from being sent to landfills and instead promote the second-hand market.',
        demoLink: 'https://teamswapify.herokuapp.com/',
        codeLink: 'https://github.com/cubasve/Swapify',
        youtubeLink: '',
    },
    {
        id: 4,
        name: 'BITS',
        subheader: 'Habit Generator, Detonator, and Tracker', /* Habit Generator, Detonator, and Tracker */
        logo: <FontAwesomeIcon icon={faUndoAlt} size="2x" />,
        image: './SlashTrash.png',
        technologies: [
            <i class="devicon-postgresql-plain colored"></i>, <span> </span>,
            <i class="devicon-python-plain colored"></i>, <span> </span>,
            <i class="devicon-django-plain"></i>, <span> </span>,
        ],
        description: 'Swapify is a collaborative project built by five developers. Shoes and clothing posted by the same user can be recommended to be styled together to form an outfit. Its purpose is to prevent fast fashion from being sent to landfills and instead promote the second-hand market.',
        demoLink: 'https://teamswapify.herokuapp.com/',
        codeLink: 'https://github.com/cubasve/Swapify',
        youtubeLink: '',
    },
    {
        id: 5,
        name: 'GUARANTEED',
        subheader: 'Lifetime Warranty Product Search Engine',
        logo: <FontAwesomeIcon icon={faCheckCircle} size="2x" />,
        image: './Swapify.png',
        technologies: [
            <i class="devicon-mongodb-plain colored"></i>,
            <i class="devicon-express-original"></i>, <span> </span>,
            <i class="devicon-react-original colored"></i>, <span> </span>,
            <i class="devicon-nodejs-plain colored"></i>, <span> </span>,
            <i class="devicon-bootstrap-plain colored"></i>,
        ],
        description: 'Swapify is a collaborative project built by five developers. Shoes and clothing posted by the same user can be recommended to be styled together to form an outfit. Its purpose is to prevent fast fashion from being sent to landfills and instead promote the second-hand market.',
        demoLink: 'https://teamswapify.herokuapp.com/',
        codeLink: 'https://github.com/cubasve/Swapify',
        youtubeLink: '',
    },
];

export default projectData;