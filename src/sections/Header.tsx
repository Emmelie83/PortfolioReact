import React from "react";
import SocialIcons from "../components/SocialIcons";
import NavBar from "../components/NavBar";
import profilePicture from "../assets/img/profile-picture.jpg";
import Button from "../components/Button";

const Header: React.FC = () => {
	return (
		<div>
			<NavBar />
			<header className="flex flex-col md:flex-row items-center gap-22 max-w-screen-lg m-auto h-[90vh]">
				<div>
					<img
						className="w-[280px] rounded-md shadow-2xl mt-10"
						src={profilePicture}
						alt="Profile picture of Emmelie Johansson"
					/>
				</div>

				<div className="flex flex-col gap-8 items-center text-center md:items-start md:text-left">
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
