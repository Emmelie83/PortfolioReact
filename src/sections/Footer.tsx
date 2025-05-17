import React from "react";
import SocialIcons from "../components/SocialIcons";

const Footer: React.FC = () => {
	return (
		<footer className="flex flex-col items-center gap-4 mb-8">
			<p>Copyright © Emmelie Johansson 2025</p>
			<SocialIcons />
		</footer>
	);
};

export default Footer;
