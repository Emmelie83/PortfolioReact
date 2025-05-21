import React from "react";
import javaIcon from "../assets/icons/java.svg";
import springbootIcon from "../assets/icons/springboot.svg";
import springsecurityIcon from "../assets/icons/springsecurity.svg";
import thymeleafIcon from "../assets/icons/thymeleaf.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import vueIcon from "../assets/icons/vue.svg";
import dockerIcon from "../assets/icons/docker.svg";
import gitIcon from "../assets/icons/git.svg";
import junitIcon from "../assets/icons/junit.svg";
import pythonIcon from "../assets/icons/python.svg";
import postmanIcon from "../assets/icons/postman.svg";
import figmaIcon from "../assets/icons/figma.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import SkillItem from "../components/SkillItem";

const skillCategories = [
	[
		{ icon: javaIcon, label: "Java" },
		{ icon: springbootIcon, label: "Spring Boot" },
		{ icon: springsecurityIcon, label: "Spring Security" },
		{ icon: thymeleafIcon, label: "Thymeleaf" },
	],
	[
		{ icon: htmlIcon, label: "HTML" },
		{ icon: cssIcon, label: "CSS" },
		{ icon: vueIcon, label: "Vue.js" },
		{ icon: javascriptIcon, label: "Javascript" },
	],
	[
		{ icon: dockerIcon, label: "Docker" },
		{ icon: junitIcon, label: "JUnit" },
		{ icon: gitIcon, label: "Git" },
		{ icon: postmanIcon, label: "Postman" },
	],
	[
		{ icon: figmaIcon, label: "Figma" },
		{ icon: tailwindIcon, label: "Tailwind" },
		{ icon: pythonIcon, label: "Python" },
		{ icon: mysqlIcon, label: "MySQL" },
	],
];

const Skills: React.FC = () => {
	return (
		<section
			id="skills" className="mb-20">
			<h2>Skills</h2>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 md:px-0 mt-10 ml-10 lg:ml-0">
				{skillCategories.map((category, index) => (
					<ul key={index} className="space-y-6">
						{category.map((skill) => (
							<SkillItem key={skill.icon} {...skill} />
						))}
					</ul>
				))}
			</div>
		</section>
	);
};

export default Skills;
