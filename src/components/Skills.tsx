import React from "react";

interface SkillItemProps {
	icon: string;
	label: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, label }) => (
	<li className="flex items-center gap-2 text-nowrap">
		<img src={`./icons/${icon}.svg`} alt={label} />
		{label}
	</li>
);

const skillCategories = [
	[
		{ icon: "springboot", label: "Spring Boot" },
		{ icon: "springsecurity", label: "Spring Security" },
		{ icon: "maven", label: "Maven" },
		{ icon: "gradle", label: "Gradle" },
	],
	[
		{ icon: "html", label: "HTML" },
		{ icon: "css", label: "CSS" },
		{ icon: "vue", label: "Vue.js" },
		{ icon: "thymeleaf", label: "Thymeleaf" },
	],
	[
		{ icon: "docker", label: "Docker" },
		{ icon: "junit", label: "JUnit" },
		{ icon: "git", label: "Git" },
		{ icon: "postman", label: "Postman" },
	],
	[
		{ icon: "java", label: "Java" },
		{ icon: "javascript", label: "Javascript" },
		{ icon: "python", label: "Python" },
		{ icon: "kotlin", label: "Kotlin" },
	],
];

const Skills: React.FC = () => {
	return (
		<section id="skills">
			<h2 className="text-xl">Skills</h2>
			<div className="mt-22 grid grid-cols-4 gap-42">
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
