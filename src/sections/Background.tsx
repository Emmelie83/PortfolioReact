import React from "react";
import TimelineItem from "../components/TimelineItem";

const timelineData = [
	{
		date: "2024–2025",
		title: "Java Developer Traineeship",
		company: "Finatix GmbH, Leipzig",
		content: (
			<>
				<p className="text-sm md:text-lg font-semibold mb-2">
					Six-month traineeship focused on backend and DevOps
					practices:
				</p>
				<ul className="text-sm md:text-lg list-disc pl-6 leading-relaxed">
					<li>
						Worked hands-on with Java and Spring Boot in a
						microservices setup
					</li>
					<li>
						Used Docker and CI/CD tools as part of a DevOps workflow
					</li>
					<li>
						Contributed to modernizing an internal reporting system
					</li>
					<li>Collaborated in an agile team using Scrum</li>
				</ul>
			</>
		),
	},
	{
		date: "2023–2025",
		title: "Fullstack Java Developer Program",
		company: "IT-Högskolan, Gothenburg",
		content: (
			<>
				<p className="text-sm md:text-lg font-semibold mb-2">
					Two year vocational education including traineeship:
				</p>
				<p className="text-sm md:text-lg leading-relaxed">
					Education focused on Java with Spring Boot, databases, and
					software architecture principles such as SOLID and design
					patterns. Built secure and scalable web applications and
					worked in agile teams using Scrum and Kanban.
				</p>
			</>
		),
	},
	{
		date: "2022–2024",
		title: "Freestanding Developer Courses",
		company: "University Courses, Sweden",
		content: (
			<>
				<p className="text-sm md:text-lg font-semibold mb-2">
					Completed university-level courses alongside my Java
					studies:
				</p>
				<ul className="text-sm md:text-lg list-disc pl-6 leading-relaxed">
					<li>C – University of Gothenburg</li>
					<li>
						Python for Computer Linguists – University of Gothenburg
					</li>
					<li>Python – Chalmers University of Technology</li>
					<li>Web Design – University West</li>
					<li>Databases – Luleå University of Technology</li>
					<li>Java – Luleå University of Technology</li>
				</ul>
			</>
		),
	},
	{
		date: "2012–2022",
		title: "Translator",
		company: "Leipzig, Hunnebostrand, Brussels",
		content: (
			<>
				<p className="text-sm md:text-lg font-semibold mb-2">
					I have over ten years of experience as a translator, both
					freelance and in-house:
				</p>
				<ul className="text-sm md:text-lg list-disc pl-6 leading-relaxed">
					<li>Translator and transcreator at Relaxdays GmbH</li>
					<li>Freelance translator for the European Union</li>
					<li>Translation trainee at the European Commission</li>
				</ul>
			</>
		),
	},
	{
		date: "2010–2012",
		title: "MA in Translation Studies",
		company: "Linnaeus University, Växjö",
		content: (
			<>
				<p className="text-sm md:text-lg font-semibold mb-2">
					An MA in Translation Studies building on a BA in German:
				</p>
				<p className="text-sm md:text-lg leading-relaxed">
					Completed a Master’s degree in Translation Studies with a
					focus on translation from German and Swedish, CAT tools, and
					linguistic theory. My master’s thesis can be found here.
				</p>
			</>
		),
	},
];

const Background: React.FC = () => {
	return (
		<section
			id="background"
			className="mx-auto px-8 lg:px-0 lg:py-12 mb-20">
			<h2 className="text-3xl md:text-5xl font-bold mb-6">Background</h2>

			<div className="relative border-l-2 md:border-l-3 border-[#585C64] pl-4 sm:pl-6 space-y-12">
				{timelineData.map((item, index) => (
					<TimelineItem
						key={index}
						date={item.date}
						title={item.title}
						company={item.company}
						defaultOpen={index === 0}>
						<div>{item.content}</div>
					</TimelineItem>
				))}
			</div>
		</section>
	);
};

export default Background;
