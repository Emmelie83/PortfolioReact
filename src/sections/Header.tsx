import React from "react";
import SocialIcons from "../components/SocialIcons";
import NavBar from "../components/NavBar";
import profilePicture from "../assets/img/profile-picture.jpg";
import Button from "../components/Button";

const Header: React.FC = () => {
	return (
		<div>
			<NavBar />
			<header className="flex flex-col lg:flex-row items-center justify-center max-w-screen-xl mx-auto lg:h-[90vh] gap-7 lg:gap-14 px-8 md:px-0 mt-10 mb-20 lg:my-0">
				{/* Image Section */}
				<div>
					<img
						className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300] rounded-md shadow-2xl"
						src={profilePicture}
						alt="Profile picture of Emmelie Johansson"
					/>
				</div>
				{/* Text Section */}
				<div className="flex flex-col gap-8 items-center text-center lg:items-start lg:text-left w-full lg:w-1/2">
					<div>
						<p className="text-lg sm:text-xl mt-10">Hi, I'm</p>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
							Emmelie Johansson
						</h1>
						<p className="text-lg sm:text-xl mt-2">
							A full-stack Java developer based in Leipzig,
							Germany
						</p>
					</div>

					<div className="flex gap-4 lg:mt-4">
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
