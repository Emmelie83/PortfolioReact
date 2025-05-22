import React from "react";

interface SocialIconProps {
	address: string;
	path: string;
	alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ address, path, alt }) => {
	return (
		<a href={address} target="_blank" rel="noopener noreferrer">
			<img
				className="w-8 md:w-10 transition duration-200 brightness-125 hover:brightness-175 hover:scale-120"
				src={path}
				alt={alt}
			/>
		</a>
	);
};

export default SocialIcon;
