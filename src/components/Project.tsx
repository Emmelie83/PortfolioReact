import Button from "./Button";

export interface ProjectProps {
	title: string;
	image: string;
	techStack: string;
  reverse?: boolean;
  address: string;
  description?: string;
}

const Project: React.FC<ProjectProps> = ({
	title,
	image,
	techStack,
	reverse,
	address,
	description,
}) => (
	<div
		className={`flex flex-col lg:flex-row lg:gap-5 xl:gap-10 md:w-9/10 lg:w-full bg-[#1A1A26] my-10 p-2 md:p-4 lg:px-6 lg:py-8 rounded-xl justify-center ${
			reverse ? "lg:flex-row-reverse" : ""
		} `}>
		<div className="lg:w-1/2">
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
			<p id="tech-stack" className="mt-1">
				{techStack}
			</p>
			<div className="mt-2 md:mt-3 mb-1 lg:mb-2 lg:w-full lg:max-w-[800px] xl:w-9/10">
				{description}
			</div>
			<div className="flex gap-2.5 md:gap-4 my-4 lg:mt-3 xl:mt-4">
				<Button address={address} newTab buttontext="View on GitHub" />
			</div>
		</div>
	</div>
);

export default Project;
