import SocialIcon from "../components/SocialIcon";
import linkedinIcon from "../assets/icons/linkedin.svg";
import NowSection from "../components/NowSection";

const paragraphs = [
	<p key="p1">
		I’m a Junior Backend Developer at Exxeta in Leipzig, Germany, working
		primarily with Java and Agentic AI systems.
	</p>,

	<p key="p2">
		Before moving into tech, I worked for over a decade as a translator. In
		2022, I transitioned into software engineering because I was ready for a new challenge andwanted to learn something new.
	</p>,

	<p key="p3">
		Since then, I’ve focused on building backend systems in Java and using
		AI to streamline software workflows. For example, I use Agentic AI to
		automate testing in an older Java Swing application.
	</p>,

	<p key="p4">
		When I’m not coding, I enjoy bouldering, spending time in nature, and
		reading. I’m always happy to connect with other developers — feel free to
		reach out on LinkedIn or via the contact form below.
	</p>,
];


export default function About() {
	return (
		<div id="about">
			<section>
				<h2>About me</h2>
				<div className="flex flex-col lg:flex-row gap-10 md:gap-20 lg:justify-between my-10">
					<div className="sm:3/5 md:w-8/10 lg:w-2/3 space-y-4">
						{paragraphs}
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
