import React from "react";
import SocialIcons from "./SocialIcons";
import NavBar from "./NavBar";
import profilePicture from "../assets/img/profile-picture.jpg";
import Button from "./Button";

const Header: React.FC = () => {
	return (
		<div>
			<NavBar />
			<header className="flex flex-col md:flex-row items-center gap-22 max-w-screen-lg m-auto h-[90vh]">
				<div>
					<img
						className="w-[280px] rounded-md shadow-2xl"
						src={profilePicture}
						alt="Profile picture of Emmelie Johansson"
					/>
				</div>

				<div className="flex flex-col gap-8 text-center md:text-left">
					<div className="flex flex-col m-0 p-0">
						<p className="text-2xl pt-6">Hi, I'm</p>
						<h1 className="leading-none">Emmelie Johansson</h1>
						<p className="text-2xl mt-1">
							a full-stack Java developer based in Leipzig,
							Germany
						</p>
					</div>

					<div className="flex gap-4 justify-center mt-4 md:justify-start">
						<Button
							address="#projects"
							buttontext="See my projects"
							variant="accent"
						/>
						<Button address="#contact" buttontext="Say Hi! 👋" />
					</div>

					<SocialIcons />
				</div>
			</header>
		</div>
	);
};

export default Header;
