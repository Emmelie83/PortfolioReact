import React from 'react';

const SocialIcons: React.FC = () => {
  return (
		<div className="flex gap-6 py-6">
			<a
				href="https://github.com/Emmelie83"
				target="_blank"
				rel="noopener noreferrer">
				<img
					className="transition duration-200 hover:brightness-125 hover:scale-120"
					src="./icons/github.svg"
					alt="GitHub Profile"
				/>
			</a>
			<a
				href="https://gitlab.com/EmmelieJ"
				target="_blank"
				rel="noopener noreferrer">
				<img
					className="transition duration-200 hover:brightness-125 hover:scale-120"
					src="./icons/gitlab.svg"
					alt="GitLab Profile"
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/emmeliejohansson/"
				target="_blank"
				rel="noopener noreferrer">
				<img
					className="transition duration-200 hover:brightness-125 hover:scale-120"
					src="./icons/linkedin.svg"
					alt="LinkedIn Profile"
				/>
			</a>
		</div>
  );
};

export default SocialIcons;
