import React from "react";
import Project, { type ProjectProps } from "../components/Project";
import scalacinema from "../assets/img/scalacinema.png";
import messagesapp from "../assets/img/messagesapp.png";
import onsight from "../assets/img/onsight.png";
import rovarspraket from "../assets/img/rovarspraket.png";


const projects: ProjectProps[] = [
	{
		title: "Cinema ticket booking system",
		image: scalacinema,
		techStack: "Java · Spring Boot · Vue.js · MongoDB · TMDB API",
		address: "https://github.com/Emmelie83/CinemaGroupProject",
		description:
			"A group-built cinema booking web app with a Vue.js frontend and Spring Boot backend. Users can browse movies from The Movie Data Base (TMDB), select seats, and manage bookings through personal profiles. Admins can manage movies and schedules.",
	},
	{
		title: "Messages app",
		image: messagesapp,
		techStack: "Java · Spring Boot · Thymeleaf · Swagger · MySQL",
		reverse: true,
		address: "https://github.com/Emmelie83/springBootGroupProject",
		description:
			"A group-built Spring Boot web app with GitHub OAuth2 login, user profile management, and message publishing. It includes public/private message visibility, a REST API, multilingual support (EN/SV) via external translation, and API documentation with Swagger.",
	},
	{
		title: "Climbing trips website",
		image: onsight,
		techStack: "HTML · CSS · Javascript · Figma",
		address: "https://github.com/Emmelie83/webbapp_labb1",
	},
	{
		title: "Translation app",
		image: rovarspraket,
		techStack: "HTML · CSS · Javascript",
		reverse: true,
		address: "https://github.com/Emmelie83/RobberLanguage",
	},
];

const Projects: React.FC = () => (
	<section
		id="projects">
		<h2>My Projects</h2>
		<div className="mt-10">
			{projects.map((project, index) => (
				<Project key={index} {...project} />
			))}
		</div>
	</section>
);

export default Projects;
