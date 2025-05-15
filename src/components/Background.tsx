import React from "react";
import TimelineItem from "./TimelineItem";

const timelineData = [
	{
		date: "2024–2025",
		title: "Java Developer Traineeship",
		company: "Finatix GmbH, Leipzig",
		content: (
			<>
				<p>
					Six-month traineeship focused on backend and DevOps
					practices:
				</p>
				<ul className="mt-2 text-[16px] list-disc pl-6 leading-6">
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
			<p className="mt-2 text-[16px] pl-6 leading-6">
				Two-year education focused on Java with Spring Boot, databases,
				and software architecture principles such as SOLID and design
				patterns. Built secure and scalable web applications and worked
				in agile teams using Scrum and Kanban.
			</p>
		),
	},
	{
		date: "2022–2024",
		title: "Freestanding Developer Courses",
		company: "University Courses, Sweden",
		content: (
			<>
				<p>
					Completed university-level courses alongside my Java
					studies:
				</p>
				<ul className="mt-2 text-[16px] list-disc pl-6 leading-6">
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
		company: "Hunnebostrand, Brussels, Leipzig",
		content: (
			<ul className="mt-2 text-[16px] list-disc pl-6 leading-6">
				<li>Translator/transcreator for Relaxdays GmbH in Leipzig</li>
				<li>Freelance translator for the EU</li>
				<li>
					Translation traineeship at the European Commission, Brussels
				</li>
			</ul>
		),
	},
	{
		date: "2010–2012",
		title: "MA in Translation Studies",
		company: "Linnaeus University, Växjö",
		content: (
			<p className="mt-2 text-[16px] pl-6 leading-6">
				Completed a Master’s degree in Translation Studies with a focus
				on terminology management, CAT tools, and linguistic theory.
			</p>
		),
	},
];

const Background: React.FC = () => {
	return (
		<section>
			<h2>Background</h2>
			<div className="relative border-l-2 border-[#585C64] pl-6 space-y-12">
				{timelineData.map((item, index) => (
					<TimelineItem
						key={index}
						date={item.date}
						title={item.title}
						company={item.company}>
						{item.content}
					</TimelineItem>
				))}
			</div>
		</section>
	);
};

export default Background;
