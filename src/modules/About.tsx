import SocialIcon from "../components/SocialIcon";
import linkedinIcon from "../assets/icons/linkedin.svg";
import NowSection from "../components/NowSection";

const paragraphs = [
	"In 2022, I transitioned into software engineering after more than a decade as a translator. Curiosity and a love of problem-solving drove me to take the leap.",
	"I completed a hands-on Java developer program in my hometown, Gothenburg, Sweden, alongside university-level programming courses. Along the way, I built full-stack applications using Spring Boot and React or Vue, some of which I showcase below.",
	"Currently, I’m in my second internship, working primarily with Java and Spring Boot. My focus is on writing clean, maintainable code while exploring Agentic AI.",
	"I enjoy creating functional, user-friendly applications and discovering new technologies. Every project is an opportunity to learn and grow.",
	"I’m always happy to connect with others in tech to exchange ideas and collaborate. Feel free to reach out via LinkedIn or the contact form below.",
];

export default function About() {
  return (
		<div id="about" className="pt-8">
			<section>
				<h2>About me</h2>
				<div className="flex flex-col lg:flex-row gap-10 md:gap-20 lg:justify-between my-10">
					<div className="sm:3/5 md:w-8/10 lg:w-2/3 space-y-4">
						{paragraphs.map((text, i) => (
							<p
								key={i}
								dangerouslySetInnerHTML={{ __html: text }}
							/>
						))}
						<SocialIcon
							address="https://www.linkedin.com/in/emmeliejohansson/"
							path={linkedinIcon}
							alt="LinkedIn Profile"
						/>
					</div>

					<div className="lg:w-1/3">
						<NowSection />
					</div>
				</div>
			</section>
			<hr className="border-t border-[#d5cfd1] mx-auto brightness-50" />
		</div>
  );
}
