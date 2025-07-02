import { HomeIcon } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function HomeLink({ onClick }: { onClick?: () => void }) {
	return (
		<HashLink
			smooth
			to="/#home"
			aria-label="Home"
			onClick={onClick}
			className="hover:text-blue-400 transition flex items-center">
			<HomeIcon />
			{/* Optional: Add "Home" text next to icon on mobile */}
			{/* <span className="ml-2 uppercase">Home</span> */}
		</HashLink>
	);
}
