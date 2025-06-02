import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	const navLinks = (onLinkClick?: () => void) => (
		<>
			{["about", "background", "skills", "projects", "contact"].map(
				(section) => (
					<a
						key={section}
						href={`#${section}`}
						className="hover:brightness-75"
						onClick={onLinkClick}>
						{section.charAt(0).toUpperCase() + section.slice(1)}
					</a>
				)
			)}
		</>
	);

	return (
		<nav
			id="navbar"
			className="fixed top-0 left-0 w-full z-20 bg-[#10101A] text-lg p-2 shadow-md">
			{/* Desktop nav */}
			<div className="hidden md:flex px-10 pt-3 gap-6 items-center justify-end uppercase">
				{navLinks()}
			</div>

			{/* Mobile nav toggle button */}
			<div className="flex md:hidden justify-end p-3">
				<button
					onClick={toggleMenu}
					aria-label="Toggle menu"
					className="text-white focus:outline-none">
					{menuOpen ? <X size={30} /> : <Menu size={30} />}
				</button>
			</div>

			{/* Mobile dropdown menu */}
			{menuOpen && (
				<div className="flex flex-col gap-3 px-10 pb-10 md:hidden bg-[#10101A] text-right uppercase">
					{navLinks(() => setMenuOpen(false))}
				</div>
			)}
		</nav>
	);
};

export default NavBar;
