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
		className={`flex flex-col lg:flex-row lg:gap-5 xl:gap-10 md:w-3/4 lg:w-full bg-[#1D1D2A] my-10 px-2 py-6 sm:p-6 md:p-8 lg:px-4 lg:py-8 xl:p-10 rounded-xl justify-center bg-brightness-125 ${
			reverse ? "lg:flex-row-reverse" : ""
		} `}>
		<div className="lg:w-1/2 lg:py-1 xl:py-0">
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
			<p id="tech-stack">{techStack}</p>
			<div className="mt-2 lg:mt-1.5 mb-1 lg:mb-1 lg:w-full lg:max-w-[800px] xl:w-9/10">
				{description}
			</div>
			<div className="flex gap-2.5 md:gap-4 my-4 lg:mt-3 xl:mt-4">
				<Button address={address} newTab buttontext="View on GitHub" />
			</div>
		</div>
	</div>
);

export default Project;
