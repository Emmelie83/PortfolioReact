import React from "react";
import SocialIcon from "./SocialIcon";

const SocialIcons: React.FC = () => {
	return (
		<div className="flex gap-6 py-6">
			<SocialIcon
				address="https://github.com/Emmelie83"
				path="./icons/github.svg"
				alt="GitHub Profile"
			/>
			<SocialIcon
				address="https://gitlab.com/EmmelieJ"
				path="./icons/gitlab.svg"
				alt="GitLab Profile"
			/>
			<SocialIcon
				address="https://www.linkedin.com/in/emmeliejohansson/"
				path="./icons/linkedin.svg"
				alt="LinkedIn Profile"
			/>
		</div>
	);
};

export default SocialIcons;
