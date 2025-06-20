import SocialIcon from "./SocialIcon";
import githubIcon from "../assets/icons/github.svg";
import gitlabIcon from "../assets/icons/gitlab.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

const icons = [
	{
		address: "https://github.com/Emmelie83",
		path: githubIcon,
		alt: "GitHub Profile",
	},
	{
		address: "https://gitlab.com/EmmelieJ",
		path: gitlabIcon,
		alt: "GitLab Profile",
	},
	{
		address: "https://www.linkedin.com/in/emmeliejohansson/",
		path: linkedinIcon,
		alt: "LinkedIn Profile",
	},
];

export default function SocialIcons() {
	return (
		<div className="flex gap-6">
			{icons.map(({ address, path, alt }) => (
				<SocialIcon
					key={address}
					address={address}
					path={path}
					alt={alt}
				/>
			))}
		</div>
	);
}
