import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";
import BlogLink from "./BlogLink";

const HomeIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		viewBox="0 0 24 24">
		<path d="M3 9.5L12 3l9 6.5v11a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-11z" />
	</svg>
);

const navSections = [
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
		<header id="start" className="flex justify-center">
			<nav className="fixed text-md font-light top-0 w-full z-20 bg-[#10101A] text-white max-w-[1800px] p-2 md:pr-4 lg:pr-10">
				{/* Desktop */}
				<div className="hidden lg:flex px-10 py-2 md:gap-8 lg:gap-10 items-center justify-end uppercase">
					<a href="#home" aria-label="Home" className="mr-4">
						<HomeIcon />
					</a>
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
						<a
							href="#home"
							aria-label="Home"
							onClick={() => setMenuOpen(false)}
						>
							<HomeIcon />
						</a>
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
