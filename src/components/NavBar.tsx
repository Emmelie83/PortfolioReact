import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	const navLinks = (onLinkClick?: () => void) => (
		<>
			{["about", "background", "skills", "projects", "contact"].map(
				(section) => (
					<a
						key={section}
						href={`#${section}`}
						className="hover:underline underline-offset-8"
						onClick={onLinkClick}>
						{section.charAt(0).toUpperCase() + section.slice(1)}
					</a>
				)
			)}
		</>
	);

  return (
		<div id="start" className="flex justify-center">
			<nav id="navbar" className="fixed text-md font-light top-0 w-full z-20 bg-[#10101A] text-white lg:hover:brightness-175 max-w-[1800px] p-2 shadow-md">
				{/* Desktop nav */}
				<div className="hidden md:flex px-10 py-3 gap-12 items-center justify-end uppercase">
					{navLinks()}
				</div>

				{/* Mobile nav toggle button */}
				<div className="flex md:hidden justify-end p-3">
					<button
						onClick={toggleMenu}
						aria-label="Toggle menu"
						className="focus:outline-none">
						{menuOpen ? <X size={30} /> : <Menu size={30} />}
					</button>
				</div>

				{/* Mobile dropdown menu */}
				{menuOpen && (
					<div
						className="flex flex-col gap-8 px-10 pb-10 md:hidden bg-[#10101A] text-left uppercase items-start w-full h-lvh"
						tabIndex={0}>
						{navLinks(() => setMenuOpen(false))}
					</div>
				)}
			</nav>
		</div>
  );    
}
