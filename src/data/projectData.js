import React from "react";
import {
	faDonate,
	faTshirt,
	faGlobeAmericas,
	faBookReader,
	faVideo,
	// faCheckCircle,
	faSyncAlt,
	// faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projectData = [
	{
		name: "FINESSE",
		subheader: "Financial Statement Tracker",
		logo: <FontAwesomeIcon icon={faDonate} size="2x" />,
		image: "./Finesse.png",
		technologies: [
			<i class="devicon-mongodb-plain colored"></i>,
			<i class="devicon-express-original"></i>,
			<i class="devicon-react-original colored"></i>,
			<i class="devicon-nodejs-plain colored"></i>,
			<i class="devicon-bootstrap-plain colored"></i>,
			<i class="devicon-heroku-plain colored"></i>,
		],
		description:
			"Finesse tracks a user's personal financial statements and teaches financial literacy. It aims to demystify financial jargon so it is easy to understand. This application's concepts are based on Robert Kiyosaki's \"Increase Your Financial IQ,\" with additional features implemented.",
		demoLink: "https://finessse.herokuapp.com/",
		codeLink: "https://github.com/cubasve/Finesse",
		youtubeLink: "",
	},
	{
		name: "BITS",
		subheader: "Habit Generator" /* Habit Generator, Detonator, and Tracker */,
		logo: <FontAwesomeIcon icon={faSyncAlt} size="2x" />,
		image: "./Bits.png",
		technologies: [
			<i class="devicon-mongodb-plain colored"></i>,
			<i class="devicon-express-original"></i>,
			<i class="devicon-react-original colored"></i>,
			<i class="devicon-nodejs-plain colored"></i>,
			<i class="devicon-materialui-plain colored"></i>,
			<i class="devicon-heroku-plain colored"></i>,
		],
		description:
			"Bits provides a system for users to successfully build and sustain lifelong habits. This application's concepts are based on James Clear's \"Atomic Habits\".",
		demoLink: "https://bitssss.herokuapp.com/",
		codeLink: "https://github.com/cubasve/Bits",
		youtubeLink: "",
	},
	{
		name: "SLASH TRASH",
		subheader: "Eco-Friendly Household Product Finder and Tracker",
		logo: <FontAwesomeIcon icon={faGlobeAmericas} size="2x" />,
		image: "./NewSlashTrash.png",
		technologies: [
			<i class="devicon-mongodb-plain colored"></i>,
			<i class="devicon-express-original"></i>,
			<i class="devicon-nodejs-plain colored"></i>,
			<i class="devicon-html5-plain colored"></i>,
			<img
				src="./materializecss.svg"
				width="30"
				height="30"
				alt="MaterializeCSS"
			/>,
			// <i class="devicon-css3-plain colored"></i>,
			<i class="devicon-heroku-plain colored"></i>,
		],
		description:
			"Slash Trash is a platform for users to search for eco-friendly alternatives to everyday household items and start their journey to a low-waste lifestyle.",
		demoLink: "https://slash-trash.herokuapp.com/",
		codeLink: "https://github.com/cubasve/Slash-Trash",
		youtubeLink: "",
	},
	{
		name: "SWAPIFY",
		subheader: "Second-Hand Clothing and Shoe Exchange",
		logo: <FontAwesomeIcon icon={faTshirt} size="2x" />,
		image: "./NewSwapify.png",
		technologies: [
			<i class="devicon-postgresql-plain colored"></i>,
			<img src="./Python.svg" width="25" height="25" alt="Python" />,
			<i class="devicon-django-plain"></i>,
			// <i class="devicon-css3-plain colored"></i>,
			<img
				src="./materializecss.svg"
				width="30"
				height="30"
				alt="MaterializeCSS"
			/>,
			<i class="devicon-heroku-plain colored"></i>,
		],
		description:
			"Swapify is a collaborative project built by five developers. Shoes and clothing posted by the same user can be recommended to be styled together to form an outfit. Its purpose is to prevent fast fashion from being sent to landfills and instead promote the second-hand market.",
		demoLink: "https://teamswapify.herokuapp.com/",
		codeLink: "https://github.com/cubasve/Swapify",
		youtubeLink: "",
	},
	{
		name: "SHOPPIES",
		subheader: "Movie Nominator",
		logo: <FontAwesomeIcon icon={faVideo} size="2x" />,
		image: "./Shoppies.png",
		technologies: [
			<i class="devicon-react-original colored"></i>,
			<i class="devicon-bootstrap-plain colored"></i>,
			<img src="./Netlify.svg" width="25" height="25" alt="Netlify" />,
		],
		description:
			"Shoppies allows users to search for movies from the OMDB API and nominate up to 5 of their favourite movies. Movie nominations can be saved to, removed from, and retrieved from local storage. ",
		demoLink: "https://the-shopppies.netlify.app/",
		codeLink: "https://github.com/cubasve/Shoppies",
		youtubeLink: "",
	},
	{
		name: "SCROLLS",
		subheader: "Virtual Scrolling Storybook",
		logo: <FontAwesomeIcon icon={faBookReader} size="2x" />,
		image: "./Scrolls.png",
		technologies: [
			<i class="devicon-react-original colored"></i>,
			<i class="devicon-css3-plain colored"></i>,
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
				alt="GSAP"
				width="25"
				height="25"
			/>,
			<img src="./Netlify.svg" width="25" height="25" alt="Netlify" />,
		],
		description:
			'This application shares the main concepts of the ten scrolls from the book called "The Greatest Salesman in the World" by Og Mandino. It uses GSAP (GreenSock Animation Platform) for the scrolling animation.',
		demoLink: "https://scrollls.netlify.app/",
		codeLink: "https://github.com/cubasve/Scrolls",
		youtubeLink: "",
	},
	// {
	//     name: 'GUARANTEED',
	//     subheader: 'Lifetime Warranty Product Search Engine',
	//     logo: <FontAwesomeIcon icon={faCheckCircle} size="2x" />,
	//     image: '',
	//     technologies: [
	//         <i class="devicon-mongodb-plain colored"></i>,
	//         <i class="devicon-express-original"></i>,
	//         <i class="devicon-react-original colored"></i>,
	//         <i class="devicon-nodejs-plain colored"></i>,
	//         <i class="devicon-bootstrap-plain colored"></i>,
	//     ],
	//     description: '',
	//     demoLink: '',
	//     codeLink: '',
	//     youtubeLink: '',
	// },
	// {
	//     name: 'TFSA',
	//     subheader: '',
	//     logo: <FontAwesomeIcon icon={faDonate} size="2x" />,
	//     image: '',
	//     technologies: [
	//         <i class="devicon-mongodb-plain colored"></i>,
	//         <i class="devicon-express-original"></i>,
	//         <i class="devicon-react-original colored"></i>,
	//         <i class="devicon-nodejs-plain colored"></i>,
	//         <i class="devicon-bootstrap-plain colored"></i>,
	//     ],
	//     description: '',
	//     demoLink: '',
	//     codeLink: '',
	//     youtubeLink: '',
	// },
	// {
	//     name: 'EXTRAORDINARY',
	//     subheader: '',
	//     logo: <FontAwesomeIcon icon={faShoppingCart} size="2x" />,
	//     image: '',
	//     technologies: [
	//         <i class="devicon-mongodb-plain colored"></i>,
	//         <i class="devicon-express-original"></i>,
	//         <i class="devicon-react-original colored"></i>,
	//         <i class="devicon-nodejs-plain colored"></i>,
	//         <i class="devicon-bootstrap-plain colored"></i>,
	//     ],
	//     description: '',
	//     demoLink: '',
	//     codeLink: '',
	//     youtubeLink: '',
	// },
];

export default projectData;
