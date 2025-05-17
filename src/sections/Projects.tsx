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
		techStack: "Java · Spring Boot · Spring Security · Vue.js · MongoDB",
	},
	{
		title: "Messages app",
		image: messagesapp,
		techStack: "Java · Spring Boot · Thymeleaf · Swagger · MySQL",
		reverse: true,
	},
	{
		title: "Climbing trips website",
		image: onsight,
		techStack: "HTML · CSS · Javascript · Figma",
	},
	{
		title: "Translation app",
		image: rovarspraket,
		techStack: "HTML · CSS · Javascript",
		reverse: true,
	},
];

const Projects: React.FC = () => (
	<section id="projects" className="mx-auto px-8 lg:px-0 mb-20">
		<h2 className="text-3xl md:text-5xl font-bold mb-6">My Projects</h2>
		<div>
			{projects.map((project, index) => (
				<Project key={index} {...project} />
			))}
		</div>
	</section>
);

export default Projects;
