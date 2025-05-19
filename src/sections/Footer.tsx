import React from "react";
import SocialIcons from "../components/SocialIcons";

const Footer: React.FC = () => {
	return (
		<footer className="flex flex-col items-center gap-4 mt-20 mb-10">
			<p className="text-sm mb-4">Copyright © Emmelie Johansson 2025</p>
			<SocialIcons />
		</footer>
	);
};

export default Footer;
