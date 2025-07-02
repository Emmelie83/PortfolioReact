import { HomeIcon } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function HomeLink({ onClick }: { onClick?: () => void }) {
	return (
		<HashLink
			smooth
			to="/#home"
			aria-label="Home"
			onClick={onClick}
			className="hover:scale-110 transition duration-200">
			<HomeIcon />
		</HashLink>
	);
}
