import React from "react";
import TimelineItem from "../components/TimelineItem";

const timelineData = [
	{
		date: "2024–2025",
		title: "Java Developer Traineeship",
		company: "Finatix GmbH, Leipzig",
		content: (
			<>
				<p className="mb-2">
					Six-month traineeship focused on backend and DevOps
					practices:
				</p>
				<ul className="list-disc pl-6">
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
				<p className="mb-2">
					Two year vocational education including traineeship:
				</p>
				<ul className="list-disc pl-6">
					<li>Java, OOP, Design Patterns & SOLID principles, CRUD</li>
					<li>
						operations with JDBC & JPA Web development with a focus
						on
					</li>
					<li>
						security & scalability Agile methodologies: Scrum &
						Kanban
					</li>
				</ul>
			</>
		),
	},
	{
		date: "2022–2024",
		title: "Freestanding Developer Courses",
		company: "University Courses, Sweden",
		content: (
			<>
				<p className="mb-2">
					Completed university-level courses alongside my Java
					studies:
				</p>
				<ul className="list-disc pl-6">
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
				<p className="mb-2">
					Over ten years of experience as a translator, both freelance
					and in-house:
				</p>
				<ul className="list-disc pl-6">
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
				<p className="mb-2">
					An MA in Translation Studies building on a BA in German:
				</p>
				<ul className="list-disc pl-6">
					<li>Translation from German</li>
					<li>Translation Studies and linguistic theory</li>
					<li>Swedish text theory and grammar</li>
				</ul>
			</>
		),
	},
];

const Background: React.FC = () => {
	return (
		<section
			id="background"
			className="mx-auto px-8 lg:px-0 lg:py-12 mb-20">
			<h2>Background</h2>

			<div className="relative border-l-2 md:border-l-3 border-[#585C64] pl-2 sm:pl-6 space-y-12">
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
