import { useState, useCallback, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navSections = ["about", "background", "skills", "projects", "contact"];

export default function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState<string>("");

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				rootMargin: "-50% 0px -50% 0px",
				threshold: 0,
			}
		);

		navSections.forEach((id) => {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, []);

	const navLinks = useCallback(
		(onLinkClick?: () => void) =>
			navSections.map((section) => (
				<a
					key={section}
					href={`#${section}`}
					onClick={onLinkClick}
					className={`relative w-full md:w-auto py-2 text-left md:text-center uppercase
                        md:before:content-[''] md:before:absolute md:before:bottom-0 md:before:left-0
                        md:before:h-[1px] md:before:w-0 md:before:bg-white md:before:transition-all md:before:duration-300
                        md:hover:before:w-full
                        ${
							activeSection === section
								? "border-b-2 border-gray-400"
								: ""
						}`}>
					{section.charAt(0).toUpperCase() + section.slice(1)}
				</a>
			)),
		[activeSection]
	);

	return (
		<header className="flex justify-center lg:hover:brightness-175">
			<nav
				id="navbar"
				className="fixed text-md font-light top-0 w-full z-20 bg-[#10101A] text-white max-w-[1800px] p-2">
				{/* Desktop */}
				<div className="hidden md:flex px-10 py-2 md:gap-8 lg:gap-12 items-center justify-end uppercase">
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
						className="flex flex-col gap-4 px-10 pb-10 md:hidden bg-[#10101A] text-left uppercase items-start w-full h-lvh transition-all duration-300 ease-in-out"
						tabIndex={0}>
						{navLinks(() => setMenuOpen(false))}
					</div>
				)}
			</nav>
		</header>
	);
}
