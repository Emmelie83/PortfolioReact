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
		className={`flex flex-col lg:flex-row lg:gap-10 mb-20 ${
			reverse ? "lg:flex-row-reverse" : ""
		}`}>
		
		<div className="lg:w-1/2 mb-4 lg:mb-0">
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

		<div className="order-1 md:order-2 lg:w-1/2 flex flex-col">
			<h3>{title}</h3>
			<p className="text-sm">
				{techStack}
			</p>
		</div>
	</div>
);

export default Project;
