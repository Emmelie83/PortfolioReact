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
		className={`flex flex-col lg:flex-row lg:gap-10 mb-20 ${
			reverse ? "lg:flex-row-reverse" : ""
		}`}>
		<div className="sm:w-3/4 md:w-2/3 lg:w-1/2 lg:pb-8 xl:pb-2">
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

		<div className="order-1 md:order-2 lg:w-1/2 flex flex-col justify-center">
			<h3>{title}</h3>
			<p className=" sm:text-lg md:text-xl mt-1">{techStack}</p>
			<div className="mt-2 lg:mt-3 mb-1 lg:mb-2 sm:w-2/3 lg:w-full lg:max-w-[800px] xl:w-4/5">{description}</div>
			<div className="flex gap-2.5 md:gap-4 my-4 lg:mt-3 xl:mt-4">
				<Button address={address} buttontext="View on GitHub" />
			</div>
		</div>
	</div>
);

export default Project;
