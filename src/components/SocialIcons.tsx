import SocialIcon from "./SocialIcon";
import githubIcon from "../assets/icons/github.svg";
import huggingFaceIcon from "../assets/icons/huggingface.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

const icons = [
	{
		address: "https://www.linkedin.com/in/emmeliejohansson/",
		path: linkedinIcon,
		alt: "LinkedIn Profile",
	},
	{
		address: "https://github.com/Emmelie83",
		path: githubIcon,
		alt: "GitHub Profile",
	},
	{
		address: "https://huggingface.co/Emi83",
		path: huggingFaceIcon,
		alt: "Hugging Face Profile",
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
