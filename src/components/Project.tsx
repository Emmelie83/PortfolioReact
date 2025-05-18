export interface ProjectProps {
	title: string;
	image: string;
	techStack: string;
	reverse?: boolean;
}

const Project: React.FC<ProjectProps> = ({
	title,
	image,
	techStack,
	reverse,
}) => (
	<div
		className={`flex flex-col md:flex-row md:gap-10 mb-20 ${
			reverse ? "md:flex-row-reverse" : ""
		}`}>
		{/* Image Frame */}
		<div
			className="md:w-1/2 mb-4 md:mb-0">
			<div className="border border-gray-300 rounded-lg p-2 bg-gray-100 shadow-md h-full">
				<div className="rounded overflow-hidden bg-white border border-gray-200">
					<img
						src={image}
						alt={`${title} Screenshot`}
						className="w-full h-auto object-cover"
					/>
				</div>
			</div>
		</div>

		{/* Text Content: Title + Tech Stack */}
		<div
			className="order-1 md:order-2 md:w-1/2 flex flex-col">
			<h3 className="text-xl sm:text-2xl font-semibold mb-4">{title}</h3>
			<p className="text-sm sm:text-lg">{techStack}</p>
		</div>
	</div>
);

export default Project;
