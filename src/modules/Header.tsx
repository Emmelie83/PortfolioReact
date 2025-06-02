import React from "react";
import SocialIcons from "../components/SocialIcons";
import NavBar from "../components/NavBar";
import profilePicture from "../assets/img/profile-picture.jpg";
import Button from "../components/Button";
import { ChevronsDown } from "lucide-react";

const Header: React.FC = () => (
	<div id="start">
		<NavBar />
		<header className="flex flex-col lg:flex-row items-center justify-center max-w-screen-xl mx-auto lg:h-[600px] gap-10 px-4 md:px-14 lg:px-16 mt-10 lg:mt-7 md:mt-20 mb-10 sm:mb-20 lg:mb-0">
			<img
				className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[260px] rounded-md shadow-4xl"
				src={profilePicture}
				alt="Profile picture of Emmelie Johansson"
			/>

			<div className="flex flex-col gap-8 items-center text-center lg:items-start lg:text-left w-full lg:w-2/3">
				<div>
					<p className="text-lg sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[22px] leading-tight">
						Hi, I'm
					</p>
					<h1 className="leading-tight">Emmelie Johansson</h1>
					<p className="text-lg sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[22px] leading-tight">
						a full-stack Java developer based in Leipzig, Germany
					</p>
				</div>

				<div className="flex gap-2.5 md:gap-4 lg:my-3">
					<Button
						address="#projects"
						buttontext="See what I’ve built"
						variant="accent"
					/>
					<Button address="#contact" buttontext="Drop a Message" />
				</div>

				<SocialIcons />
			</div>
		</header>
		<a href="#about" className="hidden lg:flex flex-col items-center text-accent">
			<ChevronsDown size={40} strokeWidth={1} />
		</a>
	</div>
);

export default Header;
