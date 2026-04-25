import SkillItem from "../components/SkillItem";

import javaIcon from "../assets/icons/java.svg";
import springbootIcon from "../assets/icons/springboot.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import mongoDBIcon from "../assets/icons/mongodb.svg";
import reactIcon from "../assets/icons/react.svg";
import thymeleafIcon from "../assets/icons/thymeleaf.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import huggingfaceIcon from "../assets/icons/huggingface.svg";
import dockerIcon from "../assets/icons/docker.svg";
import copilotIcon from "../assets/icons/githubcopilot.svg";
import pythonIcon from "../assets/icons/python.svg";
import postmanIcon from "../assets/icons/postman.svg";
import n8nIcon from "../assets/icons/n8n.svg";
import langChainIcon from "../assets/icons/langchain.svg";
import kotlinIcon from "../assets/icons/kotlin.svg";
import springSecurityIcon from "../assets/icons/springsecurity.svg";

const skills = [
	[
		{ icon: javaIcon, label: "Java" },
		{ icon: kotlinIcon, label: "Kotlin" },
		{ icon: typescriptIcon, label: "TypeScript" },
		{ icon: pythonIcon, label: "Python" },
	],
	[
		{ icon: springbootIcon, label: "Spring Boot" },
		{ icon: springSecurityIcon, label: "Spring Security" },
		{ icon: thymeleafIcon, label: "Thymeleaf" },
		{ icon: reactIcon, label: "React" },
	],
	[
		{ icon: mysqlIcon, label: "MySQL" },
		{ icon: mongoDBIcon, label: "MongoDB" },
		{ icon: dockerIcon, label: "Docker" },
		{ icon: postmanIcon, label: "Postman" },
	],
	[
		{ icon: huggingfaceIcon, label: "Hugging Face" },
		{ icon: langChainIcon, label: "LangChain" },
		{ icon: n8nIcon, label: "n8n" },
		{ icon: copilotIcon, label: "GitHub Copilot" },
	],
];

export default function Skills() {
	return (
		<div id="skills" className="pt-8">
			<section>
				<h2>Skills</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 lg:gap-y-16 gap-x-10 my-10">
					{skills.map((category, index) => (
						<ul key={index} className="space-y-8 lg:space-y-10">
							{category.map((skill) => (
								<SkillItem key={skill.label} {...skill} />
							))}
						</ul>
					))}
				</div>
			</section>
			<hr className="border-t border-[#d5cfd1] mx-auto brightness-50" />
		</div>
	);
}
