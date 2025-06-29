import SocialIcons from "../components/SocialIcons";
import { ChevronsUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
		<footer className="flex flex-col items-center gap-4 my-10">
			<a href="#start" className="flex flex-col items-center text-accent">
				<ChevronsUp size={40} strokeWidth={1} />
			</a>
			<p className="text-sm lg:text-md mb-4">
				Copyright © {year} Emmelie Johansson
			</p>
			<SocialIcons />
		</footer>
  )
}