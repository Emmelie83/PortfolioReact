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
		className={`mb-20 flex flex-col items-center md:items-start md:flex-row md:gap-10 ${
			reverse ? "md:flex-row-reverse" : ""
		}`}>
		{/* Desktop Text Column (title + techStack) */}
		<div
			className={`hidden md:flex md:w-1/2 flex-col ${
				reverse ? "md:order-2" : "md:order-1"
			}`}>
			<h3 className="text-xl sm:text-2xl font-semibold leading-tight">
				{title}
			</h3>
			<p className="text-sm sm:text-lg leading-tight">{techStack}</p>
		</div>

		{/* Mobile Title */}
		<h3 className="text-lg sm:text-2xl font-semibold mb-2 md:hidden">
			{title}
		</h3>

		{/* Image Frame (always visible) */}
		<div className={`md:w-1/2 mb-4 md:mb-0`}>
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

		{/* Mobile Tech Stack */}
		<p className="text-xs sm:text-lg md:hidden">{techStack}</p>
	</div>
);

export default Project;
