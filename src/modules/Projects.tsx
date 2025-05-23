import React from "react";
import Project, { type ProjectProps } from "../components/Project";
import scalacinema from "../assets/img/scalacinema.png";
import messagesapp from "../assets/img/messagesapp.png";
import onsight from "../assets/img/onsight.png";
import rovarspraket from "../assets/img/rovarspraket.png";


const projects: ProjectProps[] = [
	{
		title: "Cinema booking system",
		image: scalacinema,
		techStack: "Java · Spring Boot · Vue.js · MongoDB · TMDB API",
		address: "https://github.com/Emmelie83/CinemaGroupProject",
		description:
			"A group-built cinema ticket reservation app with a Vue.js frontend and Spring Boot backend. Users can browse movies, select seats, and manage bookings via personal profiles. Admins can fetch movies from The Movie Database (TMDB), and manage movie schedules.",
	},
	{
		title: "Messages Forum App",
		image: messagesapp,
		techStack: "Java · Spring Boot · Thymeleaf · Swagger · MySQL",
		reverse: true,
		address: "https://github.com/Emmelie83/springBootGroupProject",
		description:
			"A group-developed Spring Boot forum app with GitHub OAuth2 login. Features include public and private message visibility, multilingual support (EN/SV) via external translation, and API documentation powered by Swagger.",
	},
	{
		title: "Climbing trips website",
		image: onsight,
		techStack: "HTML · CSS · JavaScript · Figma",
		address: "https://github.com/Emmelie83/webbapp_labb1",
	},
	{
		title: "Translation app",
		image: rovarspraket,
		techStack: "HTML · CSS · JavaScript",
		reverse: true,
		address: "https://github.com/Emmelie83/RobberLanguage",
	},
];

const Projects: React.FC = () => (
	<div>
		<section id="projects">
			<h2>My Projects</h2>
			<div className="mt-10">
				{projects.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</section>
		<hr className="border-t-2 border-[#848a96] mx-auto brightness-50" />
	</div>
);

export default Projects;