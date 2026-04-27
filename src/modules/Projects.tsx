import Project, { type ProjectProps } from "../components/Project";
import scalacinema from "../assets/img/scalacinema.png";
import messagesapp from "../assets/img/messagesapp.png";
import dicegame from "../assets/img/dicegame.png";

const projects: ProjectProps[] = [
	{
		title: "Cinema booking system",
		image: scalacinema,
		techStack: "Java · Spring Boot · Vue.js · MongoDB · TMDB API",
		address: "https://github.com/Emmelie83/CinemaGroupProject",
		description:
			"Full-stack Java backend system with external API integration and booking workflow management.",
	},
	{
		title: "Messages Forum App",
		image: messagesapp,
		techStack: "Java · Spring Boot · Thymeleaf · Swagger · MySQL",
		reverse: true,
		address: "https://github.com/Emmelie83/springBootGroupProject",
		description:
			"Secure backend system with authentication, multilingual support, and API documentation.",
	},
	{
		title: "Thirty Dice Game",
		image: dicegame,
		techStack: "Kotlin · Android Studio · Material Design",
		reverse: false,
		variant: "mobile",
		address: "https://github.com/Emmelie83/DiceGameThirtyAndroid",
		description:
			"An Android implementation of the classic Scandinavian dice game 'Thirty'. The game is developed in Kotlin using MVVM architecture, ViewModel, and LiveData for state management.",
	},
];

export default function Projects() {
	return (
		<div id="projects" className="pt-8">
			<section>
				<h2>My Projects</h2>
				<div className="my-10">
					{projects.map((project) => (
						<Project key={project.title} {...project} />
					))}
				</div>
			</section>
			<hr className="border-t border-[#d5cfd1] mx-auto brightness-50" />
		</div>
	);
}