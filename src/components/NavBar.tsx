import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";
import BlogLink from "./BlogLink";

const navSections = [
	"home",
	"about",
	"background",
	"skills",
	"projects",
	"contact",
];

export default function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState<string>("");

	const toggleMenu = () => setMenuOpen((prev) => !prev);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActiveSection(entry.target.id);
				});
			},
			{ rootMargin: "-50% 0px -50% 0px", threshold: 0 }
		);

		navSections.forEach((id) => {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<header id="start"  className="flex justify-center">
			<nav className="fixed text-md font-light top-0 w-full z-20 bg-[#10101A] text-white max-w-[1800px] p-2 md:pr-4 lg:pr-10">
				{/* Desktop */}
				<div className="hidden lg:flex px-10 py-2 md:gap-8 lg:gap-10 items-center justify-end uppercase">
					<NavLinks
						navSections={navSections}
						activeSection={activeSection}
					/>
					<span>|</span>
					<BlogLink />
				</div>

				{/* Mobile Toggle */}
				<div className="flex lg:hidden justify-end p-3">
					<button
						onClick={toggleMenu}
						aria-label="Toggle menu"
						aria-expanded={menuOpen}>
						{menuOpen ? <X size={30} /> : <Menu size={30} />}
					</button>
				</div>

				{/* Mobile Menu */}
				{menuOpen && (
					<div className="flex flex-col gap-4 px-10 pb-10 lg:hidden bg-[#10101A] text-left uppercase items-start w-full h-lvh transition-all duration-300 ease-in-out">
						<NavLinks
							navSections={navSections}
							activeSection={activeSection}
							onLinkClick={() => setMenuOpen(false)}
						/>
						<BlogLink />
					</div>
				)}
			</nav>
		</header>
	);
}
