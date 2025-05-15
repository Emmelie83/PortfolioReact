import React, { useState, useEffect } from "react";

const NavBar: React.FC = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const navbar = document.getElementById("navbar") as HTMLElement;

		const getNavPos = () =>
			navbar.getBoundingClientRect().top + window.scrollY;
		let navPos = getNavPos();

		const handleScroll = () => {
			const scrollPos = window.scrollY;
			if (scrollPos > navPos && !isSticky) {
				setIsSticky(true);
			} else if (scrollPos <= navPos && isSticky) {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
	
		window.addEventListener("load", () => {
			navPos = getNavPos();
		});

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("load", () => {
				navPos = getNavPos();
			});
		};
	}, [isSticky]);

	return (
		<div className="mr-6">
			<nav
				id="navbar"
				className={`flex gap-6 items-center justify-end py-4 px-4 text-lg uppercase ${
					isSticky
						? "fixed top-0 left-0 w-full shadow-md z-10 px-10 bg-[#101010] hover:bg-[#181828]"
						: ""
				}`}>
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
			</nav>
		</div>
	);
};

export default NavBar;
