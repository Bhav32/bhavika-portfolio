import emoji from "react-easy-emoji";

export const greetings = {
	name: "Bhavika Jain",
	title: "Hi, I'm Bhavika",
	description:
		"A passionate Software Engineer and web developer having an experience of building Web applications with Laravel / SAPUI5 / PHP / Javascript and some other cool libraries and frameworks.",
	resumeLink: "/resume/Bhavika-resume.pdf",
};

export const openSource = {
	githubUserName: "Bhav32",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/bhav32",
	instagram: "https://www.instagram.com/bhavikajain_32",
	github: "https://github.com/Bhav32",
	linkedin: "https://www.linkedin.com/in/bhavika-jain-b3070/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY WEB DEVELOPER, CONSTANT AND KEEN LEARNER",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web"
		),
		emoji(
			"⚡ Ability to multi task, react quickly to shifting priorities and meet deadlines."
		),
		emoji(
			"⚡ Proactive, Confident and with a positive “can-do” attitude"
		),
		emoji(
			"⚡ Able to clearly communicate technical data to non-technical clients"
		),
		emoji(
			"⚡ Excellent attention to detail both front and back end"
		),
		
	],

	softwareSkills: [
		{
			skillName: "HTML-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "CSS3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "Bootstrap",
			fontAwesomeClassname: "logos:bootstrap",
		},
		{
			skillName: "Jquery",
			fontAwesomeClassname: "logos:jquery",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "laravel",
			fontAwesomeClassname: "cib-laravel",
		},
		{
			skillName: "SAPUI5",
			fontAwesomeClassname: "cib-sap",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "mySql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "English", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Hindi",
		progressPercentage: "90",
	},
	{
		Stack: "Punjabi",
		progressPercentage: "90",
	},
];

export const educationInfo = [
	{
		schoolName: "Guru Nanak Dev Engineering College",
		subHeader: "Bachelor of Technology",
		duration: "August 2015 - June 2019",
		desc: "Field Area - Computer Science and engineering",
		descBullets: [
			"Marks Scored : 7.55/10 SGPA",
			"No Single Backlog",
		],
	},
	{
		schoolName: "BCM Sr. Sec School",
		subHeader: "Senior Secondary Education",
		duration: "May 2013 - May 2015",
		desc: "Field Area - Non Medical",
		descBullets: [
			"Percentage Scored - 75%",
			"No Single Backlog",
		],
	},
	
];

const prefix = '/bhavika-portfolio';

export const experience = [
	{
		role: "Software Engineer",
		company: "Accenture",
		companylogo: prefix+"/img/icons/common/airbnbLogo.png",
		date: "September 2019 – Present",
		desc: "I have been working in organisation for 2 years. I work in VMS project ( visit management system) for SAP client in the technology Sapui5. \n At first I was responsible for frontend UI after few days gradually I started my hands on SAP hana DB and now working as a full stack.",
		descBullets: [
			"Follow Agile Methodology",
			"Tools - WebIde, JIRA ,HoneyComb, GitHub, Application Studio/VS Code"
		],
	},
	{
		role: "Intern",
		company: "Avaptech",
		companylogo: prefix+"/img/icons/common/airbnbLogo.png",
		date: "Jan 2015 – Sep 2015",
		desc: "I am having my 6 Month internship in Avaptech solutions where I came to learn about different scripting languages along with php like jquery, javascript. I started to grow interest towards Laravel framework. And I also came to know about how to face real time challenges.",
		descBullets: [
			"Working technologies : HTML5 , CSS3, PHP, Laravel",
			"Tools: VS code, GitHub"
		],
	},
];

export const projects = [
	{
		name: "Standard Life Aberdeen",
		desc: "The first opportunity i got to work in the project that works for an insurance company and based on financial industrial group. I only worked for 6 months in the project As a newbie in the project I started working on monitoring and handling request from client. ",
		//link: "https://example.com",
		//github: "https://github.com/1hanzla100",
	},
	{
		name: "AxOne Project",
		desc: "In the next project, I have changed my skill completely to a different technology as SAP ui5 developer and working with Fiori Applications. My key role was to develop web applications in SAP ui5 platform under the guidelines of Fiori. I worked as frontend end dev here.",
		//github: "https://github.com/1hanzla100",
		//link: "https://example.com",
	},
	{
		name: "Visit Management System (VMS)",
		desc: "Later, I got the transfer to a new project from my previous one in the same technology. In this project i learned a lot and get more exposure as I soon started working as full stack from a front end dev. My job role was to take the daily task from my JIRA board and provide day to day update in scrum. I work in frontend build in UI, backend build in Java and database build in SAP HANA",
		//github: "https://github.com/1hanzla100",
		//link: "https://example.com",
	},
	
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Bhavika Jain has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
