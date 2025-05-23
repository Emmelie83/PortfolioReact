import React from "react";
import SocialIcons from "../components/SocialIcons";

const Footer: React.FC = () => (
	<footer className="flex flex-col items-center gap-4 mt-20 mb-10">
		<p className="text-sm lg:text-md mb-4">
			Copyright © Emmelie Johansson 2025
		</p>
		<SocialIcons />
		<a href="#start" className="text-xs">
			Back to top
		</a>
	</footer>
);

export default Footer;
