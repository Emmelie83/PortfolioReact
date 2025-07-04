import SocialIcon from "./SocialIcon";
import githubIcon from "../assets/icons/github.svg";
import globeIcon from "../assets/icons/globe.svg";

export interface ProjectProps {
	title: string;
	image: string;
	techStack: string;
	reverse?: boolean;
	address: string;
  description?: string;
  liveLink?: string;
}

export default function Project ({
	title,
	image,
	techStack,
	reverse,
  address,
  description,
  liveLink
}: ProjectProps) {
	return (
		<div
			className={`flex flex-col lg:flex-row lg:items-center ${
				reverse ? "lg:flex-row-reverse" : ""
			} lg:gap-10 lg:w-full bg-[#1d1d29] my-10 px-2 py-6 sm:p-6 md:p-8 lg:px-4 lg:py-8 xl:p-10 rounded-xl justify-center`}>
			{/* Image Section */}
			<div className="md:w-3/4 lg:w-1/2 lg:py-6 xl:py-0">
				<div className="border border-gray-300 rounded-lg p-2 bg-gray-100 shadow-md h-full">
					<div className="rounded overflow-hidden bg-white border border-gray-200">
						<img
							src={image}
							alt={`Screenshot of ${title} project`}
							className="w-full h-auto object-cover"
						/>
					</div>
				</div>
			</div>

			{/* Text Section */}
			<div className="order-1 md:order-2 md:w-3/4 lg:w-1/2 flex flex-col">
				<h3>{title}</h3>
				<p id="tech-stack">{techStack}</p>

				{description && (
					<div className="mt-2 lg:mt-1.5 mb-1 lg:mb-1 lg:w-full lg:max-w-[800px] xl:w-9/10">
						{description}
					</div>
				)}

				<div className="flex gap-4 md:gap-6 my-4 lg:mt-4 xl:mt-6">
					<SocialIcon
						address={address}
						path={githubIcon}
						alt="Source code on GitHub"
					/>
					{liveLink && (
						<SocialIcon 
							address={liveLink}
							path={globeIcon}
							alt="Live site"
						/>
					)}
				</div>
			</div>
		</div>
	);
}
