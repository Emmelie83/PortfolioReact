import React from "react";
import SocialIcons from "../components/SocialIcons";
import { ChevronsUp } from "lucide-react";

const Footer: React.FC = () => (
	<footer className="flex flex-col items-center gap-4 my-10">
		<a href="#start" className="flex flex-col items-center text-accent">
			<ChevronsUp size={40} strokeWidth={1.5} />
		</a>
		<p className="text-sm lg:text-md mb-4">
			Copyright © Emmelie Johansson 2025
		</p>
		<SocialIcons />
		<div className="flex justify-center mt-[-1rem]"></div>
	</footer>
);

export default Footer;
