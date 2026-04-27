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
		date: "2026–ongoing",
		title: "Junior Backend Developer",
		company: "Exxeta, Leipzig",
		intro: "Developing Java/Spring Boot applications, automated testing systems, and exploring Agentic AI.",
		content: [],
	},
	{
		date: "2025–2026",
		title: "Software Developer Traineeship",
		company: "Exxeta, Leipzig",
		intro: "Focused on backend development with Java, testing, and modern agile software engineering practices.",
		content: [],
	},
	{
		date: "2024–2025",
		title: "Software Developer Traineeship",
		company: "Finatix GmbH, Leipzig",
		intro: "Focused on Java backend development, full-stack fundamentals, and modern software engineering practices.",
		content: [],
	},
	{
		date: "2023–2025",
		title: "Java Developer Program",
		company: "IT-Högskolan, Gothenburg",
		intro: "Two-year vocational program focused on Java backend development, software engineering principles, and modern tooling including Spring Boot, Docker, and Git.",
		content: [],
	},
	{
		date: "2012–2022",
		title: "Translator",
		company: "Leipzig, Hunnebostrand, Brussels",
		intro: "Over ten years of experience as a translator, both freelance and in-house",
		content: [],
	},
	{
		date: "2010–2012",
		title: "Master’s in Translation",
		company: "Linnaeus University, Växjö",
		intro: "An M.A. in Translation Studies, building on a B.A. in German",
		content: [],
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
