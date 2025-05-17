import React from "react";

interface ButtonProps {
	address?: string;
	buttontext: string;
	variant?: "transparent" | "accent";
	type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
	address,
	buttontext,
	variant = "transparent",
	type = "button",
}) => {
	const baseClasses =
		"uppercase px-4 py-3 text-xs sm:text-sm md:px-6 md:py-3 md:text-lg rounded-md cursor-pointer shadow-md hover:scale-110 hover:shadow-lg hover:brightness-125 transition duration-300";

	const variantClasses =
		variant === "accent"
			? "bg-[#D3929F] text-[#10101A] border-none"
			: "bg-background text-text border-2 border-text";

	if (address) {
		return (
			<a href={address} className={`${baseClasses} ${variantClasses}`}>
				{buttontext}
			</a>
		);
	}

	return (
		<button type={type} className={`${baseClasses} ${variantClasses}`}>
			{buttontext}
		</button>
	);
};

export default Button;
