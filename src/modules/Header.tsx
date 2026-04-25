import SocialIcons from "../components/SocialIcons";
import profilePicture from "../assets/img/profile-picture.webp";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

export default function Header() {
	return (
		<div id="home" className="pt-10">
			<NavBar />
			<header className="flex flex-col lg:flex-row items-center justify-center max-w-screen-xl mx-auto lg:h-[600px] gap-10 px-4 md:px-14 lg:px-16 pt-20 md:pt-28 mb-12 sm:mb-20">
				<img
					className="w-[200px] sm:w-[220px] md:w-[240px] rounded-md"
					src={profilePicture}
					alt="Emmelie Johansson, a Java Developer in Leipzig"
					loading="lazy"
					width={240}
					height={240}
				/>

				<div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-left w-full lg:w-2/3">
					<div>
						<p className="text-[20px] md:text-[22px] text-[#E0E0E0] max-w-xl leading-relaxed">
							Hi, I'm
						</p>
						<h1 className="text-[42px] md:text-[56px] font-bold leading-tight tracking-normal normal-case">
							Emmelie Johansson
						</h1>

						<p className="mt-3 text-[20px] md:text-[22px] text-[#E0E0E0] max-w-xl leading-relaxed">
							a Junior Backend Developer specialising in Java and Agentic
							AI
						</p>
					</div>

					<div className="flex gap-2.5 md:gap-4 lg:my-2">
						<Button
							address="#projects"
							buttonText="See what I’ve built"
							variant="accent"
						/>
						<Button
							address="#contact"
							buttonText="Drop a Message"
						/>
					</div>
					<div className="mt-1">
						<SocialIcons />
					</div>
				</div>
			</header>
		</div>
	);
}
