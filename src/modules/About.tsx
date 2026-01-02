import SocialIcon from "../components/SocialIcon";
import linkedinIcon from "../assets/icons/linkedin.svg";
import NowSection from "../components/NowSection";

const paragraphs = [
	"In 2022, I transitioned into software engineering after more than a decade as a translator. I completed a well-renowned, hands-on Java developer program in Gothenburg, Sweden, paired with university programming courses. Sometimes I pushed myself to study at 200 percent!",
	"Along the way, I explored Java, Python, C, databases, web design, and UX design, building a broad and versatile technical foundation. I also developed full-stack applications using Spring Boot, Vue, and various databases—some of which I showcase below.",
  "I am now in my second internship, working with Java and Spring Boot. My focus is on writing cleaner, more efficient code and specializing in Agentic AI.",
  "I enjoy building functional and user-friendly applications, and exploring new technologies. Each project is an opportunity to learn, grow, and contribute.",
	"I’m always happy to connect with others in tech to share ideas and collaborate. Feel free to reach out via LinkedIn or the contact form below!",
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
