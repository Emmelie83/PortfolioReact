import React from "react";
import SocialIcon from "./SocialIcon";
import githubIcon from "../assets/icons/github.svg";
import gitlabIcon from "../assets/icons/gitlab.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

const SocialIcons: React.FC = () => {
	return (
		<div className="flex gap-6">
			<SocialIcon
				address="https://github.com/Emmelie83"
				path={githubIcon}
				alt="GitHub Profile"
			/>
			<SocialIcon
				address="https://gitlab.com/EmmelieJ"
				path={gitlabIcon}
				alt="GitLab Profile"
			/>
			<SocialIcon
				address="https://www.linkedin.com/in/emmeliejohansson/"
				path={linkedinIcon}
				alt="LinkedIn Profile"
			/>
		</div>
	);
};

export default SocialIcons;
