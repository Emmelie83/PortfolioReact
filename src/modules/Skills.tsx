import SkillItem from "../components/SkillItem";

import androidStudioIcon from "../assets/icons/android.svg";
import javaIcon from "../assets/icons/java.svg";
import springbootIcon from "../assets/icons/springboot.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import mongoDBIcon from "../assets/icons/mongodb.svg";
import reactIcon from "../assets/icons/react.svg";
import thymeleafIcon from "../assets/icons/thymeleaf.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
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
import springSecurityIcon from "../assets/icons/springsecurity.svg";

const skills = [
	[
		{ icon: javaIcon, label: "Java" },
		{ icon: kotlinIcon, label: "Kotlin" },
		{ icon: javascriptIcon, label: "JavaScript" },
		{ icon: typescriptIcon, label: "TypeScript" },
		{ icon: pythonIcon, label: "Python" },
	],
	[
		{ icon: springbootIcon, label: "Spring Boot" },
		{ icon: springSecurityIcon, label: "Spring Security" },
		{ icon: androidStudioIcon, label: "Android Studio" },
		{ icon: mysqlIcon, label: "MySQL" },
		{ icon: mongoDBIcon, label: "MongoDB" },
	],
	[
		{ icon: dockerIcon, label: "Docker" },
		{ icon: junitIcon, label: "JUnit" },
		{ icon: gitIcon, label: "Git" },
		{ icon: postmanIcon, label: "Postman" },
		{ icon: linuxIcon, label: "Linux" },
	],
	[
		{ icon: reactIcon, label: "React" },
		{ icon: vueIcon, label: "Vue.js" },
		{ icon: tailwindIcon, label: "Tailwind" },
		{ icon: thymeleafIcon, label: "Thymeleaf" },
		{ icon: figmaIcon, label: "Figma" },
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
