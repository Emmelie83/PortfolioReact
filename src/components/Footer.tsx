import React from "react";
import SocialIcons from "./SocialIcons";

const Footer: React.FC = () => {
	return (
		<footer className="flex flex-col items-center gap-3 mb-4">
			<p>Copyright © Emmelie Johansson 2025</p>
			<SocialIcons />
		</footer>
	);
};

export default Footer;
