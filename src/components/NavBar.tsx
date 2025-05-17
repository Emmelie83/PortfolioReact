import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // optional icons from lucide-react

const NavBar: React.FC = () => {
	const [isSticky, setIsSticky] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const navbar = document.getElementById("navbar") as HTMLElement;
		const getNavPos = () =>
			navbar.getBoundingClientRect().top + window.scrollY;
		let navPos = getNavPos();

		const handleScroll = () => {
			const scrollPos = window.scrollY;
			if (scrollPos > navPos && !isSticky) setIsSticky(true);
			else if (scrollPos <= navPos && isSticky) setIsSticky(false);
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("load", () => (navPos = getNavPos()));

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("load", () => (navPos = getNavPos()));
		};
	}, [isSticky]);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	const navLinks = (
		<>
			<a href="#about" className="hover:brightness-75">
				About
			</a>
			<a href="#background" className="hover:brightness-75">
				Background
			</a>
			<a href="#skills" className="hover:brightness-75">
				Skills
			</a>
			<a href="#projects" className="hover:brightness-75">
				Projects
			</a>
			<a href="#contact" className="hover:brightness-75">
				Contact
			</a>
		</>
	);

	return (
		<div>
			<nav
				id="navbar"
				className={`py-4 px-10 text-lg uppercase z-20 ${
					isSticky
						? "fixed top-0 left-0 w-full shadow-md bg-[#10101A]"
						: "relative"
				}`}>
				{/* Desktop nav */}
				<div className="hidden md:flex gap-6 items-center justify-end">
					{navLinks}
				</div>

				{/* Hamburger Button */}
				<div className="flex md:hidden justify-end">
					<button
						onClick={toggleMenu}
						aria-label="Toggle menu"
						className="text-white focus:outline-none">
						{menuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				{/* Mobile Menu */}
				{menuOpen && (
					<div className="flex flex-col mt-4 gap-4 md:hidden text-right">
						{navLinks}
					</div>
				)}
			</nav>
		</div>
	);
};

export default NavBar;
