import React from "react";
import TimelineItem from "./TimelineItem";

const timelineData = [
	{
		date: "2024–2025",
		title: "Traineeship",
		company: "Finatix GmbH, Leipzig",
		content: (
			<>
				<p>
					Six-month traineeship focused on backend and DevOps
					practices:
				</p>
				<ul className="custom-list">
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
			<p>
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
				<ul className="custom-list">
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
		title: "Translator/Transcreator",
		company: "Relaxdays, Leipzig",
		content: (
			<p>
				Worked as an in-house translator creating localized product
				content and marketing materials in English and Swedish.
				Contributed to brand consistency and SEO optimization.
			</p>
		),
	},
	{
		date: "2012–2013",
		title: "Freelance Translator",
		company: "Hunnebostrand, Sweden",
		content: (
			<p>
				Provided freelance translation and editing services for clients
				in e-commerce and publishing. Specialized in English to Swedish
				localization.
			</p>
		),
	},
	{
		date: "2012–2013",
		title: "Translation Traineeship",
		company: "European Commission, Brussels",
		content: (
			<p>
				Participated in the European Commission's translation
				traineeship program, translating official EU documents and
				gaining experience in public sector communication.
			</p>
		),
	},
	{
		date: "2010–2012",
		title: "MA in Translation Studies",
		company: "Linnaeus University, Växjö",
		content: (
			<p>
				Completed a Master’s degree in Translation Studies with a focus
				on terminology management, CAT tools, and linguistic theory.
			</p>
		),
	},
];

const Background: React.FC = () => {
	return (
		<section id="background">
			<h2>Background</h2>
			<div className="timeline-wrapper">
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
