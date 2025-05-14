import React from "react";
import SocialIcons from "./SocialIcons";

const Footer: React.FC = () => {
	return (
		<div className="flex flex-col items-center gap-4 mb-4">
			<p>Copyright © Emmelie Johansson 2025</p>
			<SocialIcons />
		</div>
	);
};

export default Footer;
