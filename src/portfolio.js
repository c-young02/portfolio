import hostel from './components/Images/hostel.jpg';
import classifier from './components/Images/classifier.png';
import wellness from './components/Images/wellness.jpg';
import nasa from './components/Images/nasa.jpg';

import JavaScript from './components/Images/JavaScript.png';
import Java from './components/Images/Java.png';
import Python from './components/Images/Python.png';
import React from './components/Images/React.png';
import HTML5 from './components/Images/HTML5.png';
import CSS from './components/Images/CSS.png';
import Express from './components/Images/Express.png';
import Node from './components/Images/Node.png';
import TensorFlow from './components/Images/TensorFlow.png';
import MongoDB from './components/Images/MongoDB.png';
import Git from './components/Images/Git.png';
import AWS from './components/Images/AWS.png';

const header = {
	homepage: 'http://localhost:3000/',
	title: 'CY',
};

const about = {
	name: 'Callum Young',
	role: 'Full Stack Developer',
	description:
		'Final-year computing student in the UK, specialising in full-stack development, adept at designing and implementing solutions across front-end and back-end technologies.',
	cv: 'https://drive.google.com/file/d/1igmL05kVfuGlWZgIzOHqdhs_WWO8f312/view?usp=drive_link',
	social: {
		linkedin: 'https://www.linkedin.com/in/c-young02',
		github: 'https://github.com/c-young02',
	},
};

const projects = [
	{
		name: 'Hostel Seeker',
		image: hostel,
		description:
			'The Hostel Seeker project encompasses an array of features, allowing users to seamlessly explore hostels in Scotland through an interactive map, search for specific accommodations with café facilities, access reviews and ratings, create personalised itineraries with arrival and departure dates, and store, review, and modify itineraries, all while fostering user engagement through account creation for trip and review management.',
		stack: ['React', 'Express', 'Node', 'NeDB', 'Bootstrap', 'Leaflet'],
		sourceCode: 'https://github.com/c-young02/FEWD_CW',
		livePreview: 'https://hostel-seeker.netlify.app/',
	},
	{
		name: 'Facial Age Classifier',
		image: classifier,
		description:
			'Facial Age Classifier is a web application that allows users to upload images and get the age classified using a trained model. The application uses a fine-tuned model based on the ResNet50 architecture to analyse the uploaded images and provide an estimated age. It is built with a user-friendly interface, making it easy for users to interact with the application and get results quickly and accurately.',
		stack: ['React', 'Bootstrap', 'Flask', 'TensorFlow'],
		sourceCode: 'https://github.com/c-young02/Age-Classification',
		videoLink:
			'https://drive.google.com/file/d/1kIs1dZaXGy7OiPXvKWnuszHIKvBSJiXf/view?usp=sharing',
	},
	{
		name: 'Welcome Wellness',
		image: wellness,
		description:
			'Welcome Wellness provides users with a comprehensive platform where they can log in to access extensive information on fitness, nutrition, and lifestyle. The site facilitates the management and tracking of personal goals, fostering individual empowerment on the journey towards a healthier and more balanced lifestyle.',
		stack: ['Mustache.js', 'Express', 'Node', 'NeDB', 'Bootstrap'],
		sourceCode: 'https://github.com/c-young02/Welcome-Wellness',
		livePreview: 'https://welcome-wellness.onrender.com/',
	},
	/* {
		name: 'NASA API Showcase',
		image: nasa,
		description:
			'NASA API Showcase, is a frontend web application that serves as a showcase of NASAs APIs. This project enables users to explore the wonders of space, featuring daily Astronomy Pictures, insights into Near-Earth Asteroids, real-time Earth Events visualised on an interactive map, and a collection of Mars Rover Photos.',
		stack: ['React', 'Bootstrap'],
		sourceCode: 'https://github.com/c-young02/NASA-API-Showcase',
		livePreview: 'https://nasa-api-showcase.netlify.app/',
	}, */
];

const skills = [
	{ name: 'JavaScript', image: JavaScript },
	{ name: 'Java', image: Java },
	{ name: 'Python', image: Python },
	{ name: 'React', image: React },
	{ name: 'HTML5', image: HTML5 },
	{ name: 'CSS', image: CSS },
	{ name: 'Express', image: Express },
	{ name: 'Node.js', image: Node },
	{ name: 'TensorFlow', image: TensorFlow },
	{ name: 'MongoDB', image: MongoDB },
	{ name: 'Git', image: Git },
	{ name: 'AWS', image: AWS },
];

const contact = {
	email: 'callum.young02@outlook.com',
};

export { header, about, projects, skills, contact };
