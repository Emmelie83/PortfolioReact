import { HashLink } from "react-router-hash-link";

interface NavLinksProps {
	navSections: string[];
	activeSection: string;
	onLinkClick?: () => void;
}

export default function NavLinks({
	navSections,
	activeSection,
	onLinkClick,
}: NavLinksProps) {
	return (
		<>
			{navSections.map((section) => (
				<HashLink
					key={section}
					smooth
					to={`/#${section}`}
					onClick={onLinkClick}
					className={`relative w-full md:w-auto py-2 text-left md:text-center md:text-[.9em] uppercase
            md:before:content-[''] md:before:absolute md:before:bottom-0 md:before:left-0
            md:before:h-[1px] md:before:w-0 md:before:bg-white md:before:transition-all md:before:duration-300
            md:hover:before:w-full
            ${activeSection === section ? "border-b-1 border-gray-400" : ""}`}>
					{section.charAt(0).toUpperCase() + section.slice(1)}
				</HashLink>
			))}
		</>
	);
}
