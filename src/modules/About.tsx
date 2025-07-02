import SocialIcon from "../components/SocialIcon";
import linkedinIcon from "../assets/icons/linkedin.svg";
import NowSection from "../components/NowSection";

const paragraphs = [
	"I'm a former <strong>translator</strong> and <strong>entrepreneur</strong>, lifelong learner, and a <strong>curious soul</strong> with a love for clean code, clever design, and meaningful connections.",
	"My journey has taken me from the world of language and nuance to the fast-paced world of tech. Along the way, I’ve built <strong>APIs</strong>, designed <strong>user interfaces</strong>, and found my place at the intersection of structure and creativity.",
	"Lately, I’ve been diving into <strong>AI</strong> — especially how it overlaps with language and communication and the kind of translation work I used to do.",
	"Outside of work, you’ll find me bouldering, recharging in nature, or getting lost in a good book. I also enjoy <strong>connecting with new people</strong>, so feel free to reach out on LinkedIn or drop me an email. I'd love to hear from you!",
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
			<hr className="border-t-2 border-[#848a96] mx-auto brightness-50" />
		</div>
  );
}
