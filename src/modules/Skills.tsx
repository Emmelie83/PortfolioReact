import React from "react";
import SkillItem from "../components/SkillItem";


import javaIcon from "../assets/icons/java.svg";
import springbootIcon from "../assets/icons/springboot.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import mongoDBIcon from "../assets/icons/mongodb.svg";
import reactIcon from "../assets/icons/react.svg";
import thymeleafIcon from "../assets/icons/thymeleaf.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import mavenIcon from "../assets/icons/maven.svg";
import gradleIcon from "../assets/icons/gradle.svg";
import vueIcon from "../assets/icons/vue.svg";
import dockerIcon from "../assets/icons/docker.svg";
import gitIcon from "../assets/icons/git.svg";
import junitIcon from "../assets/icons/junit.svg";
import pythonIcon from "../assets/icons/python.svg";
import postmanIcon from "../assets/icons/postman.svg";
import linuxIcon from "../assets/icons/linux.svg";
import figmaIcon from "../assets/icons/figma.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import kotlinIcon from "../assets/icons/kotlin.svg";

const skills = [
	[
		{ icon: javaIcon, label: "Java" },
		{ icon: springbootIcon, label: "Spring Boot" },
		{ icon: thymeleafIcon, label: "Thymeleaf" },
		{ icon: mysqlIcon, label: "MySQL" },
		{ icon: mongoDBIcon, label: "MongoDB" },
	],
	[
		{ icon: reactIcon, label: "React" },
		{ icon: vueIcon, label: "Vue.js" },
		{ icon: tailwindIcon, label: "Tailwind" },
		{ icon: javascriptIcon, label: "JavaScript" },
		{ icon: typescriptIcon, label: "TypeScript" },
	],
	[
		{ icon: dockerIcon, label: "Docker" },
		{ icon: junitIcon, label: "JUnit" },
		{ icon: gitIcon, label: "Git" },
		{ icon: postmanIcon, label: "Postman" },
		{ icon: linuxIcon, label: "Linux" },
	],
	[
		{ icon: pythonIcon, label: "Python" },
		{ icon: kotlinIcon, label: "Kotlin" },
		{ icon: mavenIcon, label: "Maven" },
		{ icon: gradleIcon, label: "Gradle" },
		{ icon: figmaIcon, label: "Figma" },
	],
];

const Skills: React.FC = () => (
	<div>
		<section id="skills">
			<h2>Skills</h2>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 mt-10 ml-10 lg:ml-0">
				{skills.map((category, index) => (
					<ul key={index} className="space-y-6">
						{category.map((skill) => (
							<SkillItem key={skill.label} {...skill} />
						))}
					</ul>
				))}
			</div>
		</section>
		<hr className="border-t-2 border-[#848a96] mx-auto brightness-50" />
	</div>
);

export default Skills;
