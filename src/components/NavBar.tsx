import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
	const [isSticky, setIsSticky] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const navRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (!navRef.current) return;
			const navTop =
				navRef.current.getBoundingClientRect().top + window.scrollY;
			setIsSticky(window.scrollY > navTop);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleMenu = () => setMenuOpen((prev) => !prev);

	const navLinks = [
		{ href: "#about", label: "About" },
		{ href: "#background", label: "Background" },
		{ href: "#skills", label: "Skills" },
		{ href: "#projects", label: "Projects" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<nav
			ref={navRef}
			id="navbar"
			className={`max-w-[2200px] py-4 px-10 text-lg uppercase z-20 ${
				isSticky
					? "fixed top-0 left-0 w-full shadow-md bg-[#10101A]"
					: "relative"
			}`}>
			{/* Desktop links */}
			<div className="hidden md:flex gap-6 items-center justify-end">
				{navLinks.map(({ href, label }) => (
					<a key={href} href={href} className="hover:brightness-75">
						{label}
					</a>
				))}
			</div>

			{/* Mobile menu toggle */}
			<div className="flex md:hidden justify-end">
				<button
					onClick={toggleMenu}
					aria-label="Toggle menu"
					className="text-white focus:outline-none">
					{menuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile menu items */}
			{menuOpen && (
				<div className="flex flex-col mt-4 gap-4 md:hidden text-right">
					{navLinks.map(({ href, label }) => (
						<a
							key={href}
							href={href}
							className="hover:brightness-75">
							{label}
						</a>
					))}
				</div>
			)}
		</nav>
	);
};

export default NavBar;