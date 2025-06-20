import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";

const navSections = ["about", "background", "skills", "projects", "contact"];

export default function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen((prev) => !prev);

	const navLinks = useCallback(
		(onLinkClick?: () => void) =>
			navSections.map((section) => (
				<a
					key={section}
					href={`#${section}`}
					className="hover:underline underline-offset-8"
					onClick={onLinkClick}>
					{section.charAt(0).toUpperCase() + section.slice(1)}
				</a>
			)),
		[]
	);

	return (
		<header className="flex justify-center">
			<nav
				id="navbar"
				className="fixed text-md font-light top-0 w-full z-20 bg-[#10101A] text-white lg:hover:brightness-175 max-w-[1800px] p-2 shadow-md">
				{/* Desktop */}
				<div className="hidden md:flex px-10 py-3 gap-6 lg:gap-12 items-center justify-end uppercase">
					{navLinks()}
				</div>

				{/* Mobile toggle */}
				<div className="flex md:hidden justify-end p-3">
					<button
						onClick={toggleMenu}
						aria-label="Toggle menu"
						aria-expanded={menuOpen}
						className="focus:outline-none">
						{menuOpen ? <X size={30} /> : <Menu size={30} />}
					</button>
				</div>

				{/* Mobile menu */}
				{menuOpen && (
					<div
						className="flex flex-col gap-8 px-10 pb-10 md:hidden bg-[#10101A] text-left uppercase items-start w-full h-lvh transition-all duration-300 ease-in-out"
						tabIndex={0}>
						{navLinks(() => setMenuOpen(false))}
					</div>
				)}
			</nav>
		</header>
	);
}
