import React from "react";
import SocialIcon from "../components/SocialIcon";
import linkedinIcon from "../assets/icons/linkedin.svg";
import NowSection from "../components/NowSection";

const paragraphs = [
	"<strong>Tech moves fast — and I love trying to keep up.</strong>",
	"Whether it’s building APIs in Java or sketching interfaces in Figma, I enjoy being at the intersection of logic and creativity. I earned my degree in Java Development from IT-Högskolan, a Swedish vocational university focused on IT and software development.",
	"My journey into software development began when I decided to leave a career I truly valued: translation. Not because the field was outdated, but because I felt I had stopped growing. I was looking for something dynamic — something that would challenge me, and keep doing so.",
	"<strong>I found that in coding</strong>. Today, I learn something new almost every day. And with tech constantly evolving, I don’t see that changing anytime soon.",
	"Outside of work, I like to stay active with bouldering, unwind in nature, and get absorbed in a good book. I also enjoy connecting with new people — so feel free to reach out on LinkedIn or drop me an email!",
];

const About: React.FC = () => {
	return (
		<section id="about">
			<h2>About Me</h2>
			<div className="md:flex gap-10">
				<div className="w-2/3">
					{paragraphs.map((text, index) => (
						<p
							key={index}
							dangerouslySetInnerHTML={{ __html: text }}
						/>
					))}
					<SocialIcon
						address="https://www.linkedin.com/in/emmeliejohansson/"
						path={linkedinIcon}
						alt="LinkedIn Profile"
					/>
				</div>
				<aside className="w-1/3">
					<NowSection />
				</aside>
			</div>
		</section>
	);
};

export default About;
