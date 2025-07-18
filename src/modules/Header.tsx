import SocialIcons from "../components/SocialIcons";
import profilePicture from "../assets/img/profile-picture.webp";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

export default function Header() {
	return (
    <div id="home" className="pt-10">
      <NavBar />
			<header className="flex flex-col lg:flex-row items-center justify-center max-w-screen-xl mx-auto lg:h-[600px] gap-10 px-4 md:px-14 lg:px-16 pt-20 lg:pt-12 md:pt-28 mb-12 sm:mb-20 lg:mb-0">
				<img
					className="w-[220px] sm:w-[260px] md:w-[300px] rounded-md"
					src={profilePicture}
					alt="Emmelie Johansson, Full-stack Java Developer in Leipzig"
					loading="lazy"
					width={300}
					height={300}
				/>

				<div className="flex flex-col gap-8 items-center text-center lg:items-start lg:text-left w-full lg:w-2/3">
					<div>
						<p className="text-lg sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[22px] leading-tight">
							Hi, I'm
						</p>
						<h1 className="leading-tight">Emmelie Johansson</h1>
						<p className="text-lg sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[22px] leading-tight mt-1">
							a full-stack Java developer based in Leipzig,
							Germany.
						</p>
					</div>

					<div className="flex gap-2.5 md:gap-4 lg:my-3">
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
          <div className="mt-2">
            <SocialIcons />
          </div>
				</div>
			</header>
		</div>
	);
}
