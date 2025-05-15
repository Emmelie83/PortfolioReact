import React from "react";
import scalacinema from "../assets/img/scalacinema.png";
import messagesapp from "../assets/img/messagesapp.png";
import onsight from "../assets/img/onsight.png";
import rovarspraket from "../assets/img/rovarspraket.png";

interface ProjectProps {
	title: string;
	image: string;
	techStack: string;
	reverse?: boolean;
}

const projects: ProjectProps[] = [
	{
		title: "Cinema ticket booking system",
		image: scalacinema,
		techStack:
			"Java · Spring Boot · Spring Security · Vue.js · MongoDB · Docker",
	},
	{
		title: "Messages app",
		image: messagesapp,
		techStack: "Java · Spring Boot · Thymeleaf · Swagger · MySQL · Docker",
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

const Project: React.FC<ProjectProps> = ({
	title,
	image,
	techStack,
	reverse,
}) => (
	<div
		className={`flex flex-col md:flex-row gap-8 my-10 ${
			reverse ? "md:flex-row-reverse" : ""
		}`}>
		<div className="flex-1">
			<div className="inline-block border border-gray-300 rounded-lg p-2 bg-gray-100 shadow-md">
				<div className="rounded overflow-hidden bg-white border border-gray-200">
					<img
						src={image}
						alt={`${title} Screenshot`}
						className="w-full h-full object-cover block"
					/>
				</div>
			</div>
		</div>

		<div className="flex-1 flex flex-col text-left">
			<h3 className="text-xl font-semibold">{title}</h3>
			<p className="text-sm text-gray-700">{techStack}</p>
		</div>
	</div>
);



const Projects: React.FC = () => (
	<section id="projects">
		<h2>My Projects</h2>
		<div>
			{projects.map((project, index) => (
				<Project key={index} {...project} />
			))}
		</div>
	</section>
);

export default Projects;
