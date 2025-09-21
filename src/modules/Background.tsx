import TimelineItem from "../components/TimelineItem";

type TimelineEntry = {
	date: string;
	title: string;
	company: string;
	intro: string;
	content: string[];
};

const timelineData: TimelineEntry[] = [
	{
		date: "2025–Ongoing",
		title: "Software Developer Traineeship",
		company: "Exxeta, Leipzig",
		intro: "Six-month traineeship focused on Java and full-stack development:",
		content: [
			"Developing applications with Java, Spring Boot, and microservices architecture",
			"Frontend development using Angular",
			"Collaborating in an agile team using Scrum and continuous improvement practices",
		],
	},
	{
		date: "2024–2025",
		title: "Software Developer Traineeship",
		company: "Finatix GmbH, Leipzig",
		intro: "Six-month traineeship focused on backend and DevOps practices:",
		content: [
			"Worked hands-on with Java and Spring Boot in a microservices setup",
			"Used Docker and CI/CD tools in a DevOps workflow",
			"Contributed to modernizing an internal reporting system",
			"Collaborated in an agile team using Scrum",
		],
	},
	{
		date: "2023–2025",
		title: "Java Developer Program",
		company: "IT-Högskolan, Gothenburg",
		intro: "Two-year vocational education including traineeship:",
		content: [
			"Java, OOP, Design Patterns & SOLID principles, CRUD operations with JDBC & JPA",
			"Web development with a focus on security & scalability",
			"Agile methodologies: Scrum & Kanban",
			"Spring Boot, Docker, Git, Vue.js",
		],
	},
	{
		date: "2022–2024",
		title: "Developer Courses",
		company: "Various universities in Sweden",
		intro: "Completed university-level courses alongside my Java studies:",
		content: [
			"C – University of Gothenburg",
			"Python for Computer Linguists – University of Gothenburg",
			"Python – Chalmers University of Technology",
			"Web Design – University West",
			"UX Design – University West",
			"Databases – Luleå University of Technology",
			"Java – Luleå University of Technology",
		],
	},
	{
		date: "2012–2022",
		title: "Translator",
		company: "Leipzig, Hunnebostrand, Brussels",
		intro: "Over ten years of experience as a translator, both freelance and in-house:",
		content: [
			"Translator and transcreator at Relaxdays GmbH",
			"Freelance translator for the European Union",
			"Translation trainee at the European Commission",
		],
	},
	{
		date: "2010–2012",
		title: "Master’s in Translation",
		company: "Linnaeus University, Växjö",
		intro: "An M.A. in Translation Studies building on a B.A. in German:",
		content: [
			"Translation from German",
			"Translation Studies and linguistic theory",
			"Swedish text theory and grammar",
		],
	},
];

export default function Background() {
	return (
		<div id="background" className="pt-8">
			<section>
				<h2>Background</h2>
				<ol className="relative border-l border-[#d5cfd1] pl-2 sm:pl-6 my-10">
					{timelineData.map(
						({ date, title, company, intro, content }, index) => {
							const key = `${title}-${date}`;
							return (
								<li key={key}>
									<TimelineItem
										date={date}
										title={title}
										company={company}
										defaultOpen={index === 0}>
										<div>
											<p className="mb-2 leading-tight">
												{intro}
											</p>
											<ul className="list-disc pl-6 leading-relaxed">
												{content.map((line, i) => (
													<li key={i}>{line}</li>
												))}
											</ul>
										</div>
									</TimelineItem>
								</li>
							);
						}
					)}
				</ol>
			</section>
			<hr className="border-t border-[#d5cfd1] mx-auto brightness-50" />
		</div>
	);
}
