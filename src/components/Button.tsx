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
		"inline-block uppercase px-4 py-3 md:px-6 md:py-3 md:text-lg rounded-md cursor-pointer shadow-md hover:scale-110 hover:shadow-lg hover:brightness-125 transition duration-300";

	const variantClasses =
		variant === "accent"
			? "bg-[#D3929F] text-[#10101A] border-none"
			: "bg-background border-2";

	if (address) {
		return (
			<a id="button" href={address} className={`${baseClasses} ${variantClasses}`}>
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
