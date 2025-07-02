import SocialIcon from "../components/SocialIcon";
import linkedinIcon from "../assets/icons/linkedin.svg";
import NowSection from "../components/NowSection";

const paragraphs = [
	"I’m a former translator and entrepreneur, and a lifelong learner. Naturally curious, I have a passion for clean code, clever design, and meaningful connections.",
	"During my education, Java was my primary language. Today I identify as a fullstack developer, drawn to the intersection of structure and creativity.",
	"Lately, I’ve been diving into AI, especially how it relates to language, communication, and the kind of translation work I once did.",
	"When I’m not coding, you’ll find me bouldering, recharging in nature, or getting lost in a good book. I love meeting new people, so feel free to reach out on LinkedIn or send me an email — I’d be glad to connect!",
];

export default function About() {
  return (
		<div id="about" className="pt-8">
			<section>
				<h2>About me</h2>
				<div className="flex flex-col lg:flex-row gap-10 md:gap-20 lg:justify-between my-10">
					<div className="sm:3/5 md:w-8/10 lg:w-5/9 space-y-4">
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
