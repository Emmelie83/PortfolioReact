import React from "react";
import SocialIcons from "../components/SocialIcons";
import NavBar from "../components/NavBar";
import profilePicture from "../assets/img/profile-picture.jpg";
import Button from "../components/Button";

const Header: React.FC = () => {
	return (
		<div>
			<NavBar />
			<header className="flex flex-col lg:flex-row items-center justify-center max-w-screen-xl mx-auto lg:h-[600px] gap-10 px-4 md:px-14 lg:px-16 mt-10 md:mt-20 md:mb-30 lg:mt-0 mb-20 lg:mb-0">
				<div>
					<img
						className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[260px] rounded-md shadow-4xl md:mb-10 lg:mb-0"
						src={profilePicture}
						alt="Profile picture of Emmelie Johansson"
					/>
				</div>

				<div className="flex flex-col gap-8 items-center text-center lg:items-start lg:text-left w-full lg:w-2/3">
					<div>
						<p className="text-lg md:text-[22px] leading-tight">
							Hi, I'm
						</p>
						<h1 className="leading-tight">Emmelie Johansson</h1>
						<p className="text-lg md:text-[22px] leading-tight">
							a full-stack Java developer based in Leipzig,
							Germany
						</p>
					</div>

					<div className="flex gap-2.5 md:gap-4 lg:my-3">
						<Button
							address="#projects"
							buttontext="See what I’ve built"
							variant="accent"
						/>
						<Button
							address="#contact"
							buttontext="Drop a Message"
						/>
					</div>

					<SocialIcons />
				</div>
			</header>
		</div>
	);
};

export default Header;
