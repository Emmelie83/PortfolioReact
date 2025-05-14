import React from "react";
import SocialIcons from "./SocialIcons";
import NavBar from "./NavBar";
import profilePicture from "../assets/img/profile-picture.jpg";

const Header: React.FC = () => {
	return (
		<div>
			<NavBar />
			<header className="flex flex-col md:flex-row items-center gap-24 max-w-screen-xl mx-auto px-24 h-[90vh]">
				<div>
					<img
						className="w-[300px] rounded shadow-2xl"
						src={profilePicture}
						alt="Profile picture of Emmelie Johansson"
					/>
				</div>

				<div className="flex flex-col gap-8 text-center md:text-left">
					<div className="flex flex-col m-0 p-0">
						<p className="text-2xl mb-1 pt-6">Hi, I'm</p>
						<h1 className="text-[54px] text-[#D3929F] font-bold uppercase my-4 font-exo leading-none">
							Emmelie Johansson
						</h1>
						<p className="text-2xl mt-1">
							a full-stack Java developer based in Leipzig,
							Germany
						</p>
					</div>

					<div className="flex gap-4 justify-center mt-4 md:justify-start">
						<a
							href="#contact"
							className="uppercase px-6 py-3 text-lg font-pt rounded border-2 border-[#E0E0E0] text-[#E0E0E0] bg-[#10101A] shadow-md hover:scale-110 hover:shadow-lg hover:brightness-125 transition duration-300">
							Contact me
						</a>
						<a
							href="#projects"
							className="uppercase px-6 py-3 text-lg font-pt rounded bg-[#D3929F] text-[#10101A] border-none shadow-md hover:scale-110 hover:shadow-lg hover:brightness-125 transition duration-300">
							See my work
						</a>
					</div>

					<SocialIcons />
				</div>
			</header>
		</div>
	);
};

export default Header;
