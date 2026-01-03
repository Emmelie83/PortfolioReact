import Project, { type ProjectProps } from "../components/Project";
import scalacinema from "../assets/img/scalacinema.png";
import messagesapp from "../assets/img/messagesapp.png";
import onsight from "../assets/img/onsight.png";
import rovarspraket from "../assets/img/rovarspraket.png";
import dicegame from "../assets/img/dicegame.png";

const projects: ProjectProps[] = [
	{
		title: "Cinema booking system",
		image: scalacinema,
		techStack: "Java · Spring Boot · Vue.js · MongoDB · TMDB API",
		address: "https://github.com/Emmelie83/CinemaGroupProject",
		description:
			"A group-built cinema ticket reservation app. Users can browse movies, select seats, and manage bookings via personal profiles. Admins can fetch movies from The Movie Database (TMDB), and manage movie schedules.",
	},
	{
		title: "Messages Forum App",
		image: messagesapp,
		techStack: "Java · Spring Boot · Thymeleaf · Swagger · MySQL",
		reverse: true,
		address: "https://github.com/Emmelie83/springBootGroupProject",
		description:
			"A group-developed messages app with GitHub OAuth2 login. Features include public and private message visibility, multilingual support (EN/SV) via external translation, and API documentation powered by Swagger.",
	},
	{
		title: "Climbing trips website",
		image: onsight,
		techStack: "HTML · CSS · JavaScript · Figma · Weather API",
		address: "https://github.com/Emmelie83/webbapp_labb1",
		liveLink: "https://climbingtripswebsite.netlify.app/",
		description:
			"A responsive website for planning and showcasing climbing trips. Designed in Figma and built with vanilla HTML, CSS, and JavaScript, it features dynamic weather data integration via a public Weather API.",
	},
	{
		title: "Translation app",
		image: rovarspraket,
		techStack: "React · Vite · TypeScript · Tailwind",
		reverse: true,
		address: "https://github.com/Emmelie83/RobberLanguageTranslator",
		description:
			"Translator from Swedish into the Robber Language. I originally built this as my first JavaScript project — now I'm rebuilding it using React and TypeScript to showcase my current skill set. The new version will be ready soon.",
	},
	{
		title: "Thirty Dice Game",
		image: dicegame,
		techStack: "Kotlin · Android Studio · TypeScript · Tailwind",
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