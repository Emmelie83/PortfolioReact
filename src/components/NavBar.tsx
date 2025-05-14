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
				className={`flex gap-6 items-center justify-end py-6 px-4 text-lg uppercase text-[#E0E0E0] ${
					isSticky
						? "fixed top-0 left-0 w-full bg-[#10101A] shadow-md z-10 px-10"
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
				<a
					id="contactButton"
					href="#contact"
					className="px-6 py-3 rounded bg-[#D3929F] text-[#10101A] border-none shadow-md hover:shadow-lg hover:brightness-125 hover:scale-110">
					Contact
				</a>
			</nav>
		</div>
	);
};

export default NavBar;
