import React from "react";
import TimelineItem from "../components/TimelineItem";

const timelineData = [
	{
		date: "2024–2025",
		title: "Developer Traineeship",
		company: "Finatix GmbH, Leipzig",
		content: [
			"Worked hands-on with Java and Spring Boot in a microservices setup",
			"Used Docker and CI/CD tools in a DevOps workflow",
			"Contributed to modernizing an internal reporting system",
			"Collaborated in an agile team using Scrum",
		],
		intro: "Six-month traineeship focused on backend and DevOps practices:",
	},
	{
		date: "2023–2025",
		title: "Java Developer Program",
		company: "IT-Högskolan, Gothenburg",
		content: [
			"Java, OOP, Design Patterns & SOLID principles, CRUD operations with JDBC & JPA",
			"Web development with a focus on security & scalability",
			"Agile methodologies: Scrum & Kanban",
		],
		intro: "Two-year vocational education including traineeship:",
	},
	{
		date: "2022–2024",
		title: "Developer Courses",
		company: "Universities, Sweden",
		content: [
			"C – University of Gothenburg",
			"Python for Computer Linguists – University of Gothenburg",
			"Python – Chalmers University of Technology",
			"Web Design – University West",
			"Databases – Luleå University of Technology",
			"Java – Luleå University of Technology",
		],
		intro: "Completed university-level courses alongside my Java studies:",
	},
	{
		date: "2012–2022",
		title: "Translator",
		company: "Leipzig, Hunnebostrand, Brussels",
		content: [
			"Translator and transcreator at Relaxdays GmbH",
			"Freelance translator for the European Union",
			"Translation trainee at the European Commission",
		],
		intro: "Over ten years of experience as a translator, both freelance and in-house:",
	},
	{
		date: "2010–2012",
		title: "MA in Translation",
		company: "Linnaeus University, Växjö",
		content: [
			"Translation from German",
			"Translation Studies and linguistic theory",
			"Swedish text theory and grammar",
		],
		intro: "An MA in Translation Studies building on a BA in German:",
	},
];

const Background: React.FC = () => {
	return (
		<section id="background" className="mb-20">
			<h2>Background</h2>

			<div className="relative border-l-2 md:border-l-3 border-[#585C64] pl-2 sm:pl-6 my-10">
				{timelineData.map((item, index) => (
					<TimelineItem
						key={index}
						date={item.date}
						title={item.title}
						company={item.company}
						defaultOpen={index === 0}>
						<div>
							<p className="mb-2 leading-tight">{item.intro}</p>
							<ul className="list-disc pl-6 leading-relaxed">
								{item.content.map((line, i) => (
									<li key={i}>{line}</li>
								))}
							</ul>
						</div>
					</TimelineItem>
				))}
			</div>
		</section>
	);
};

export default Background;
