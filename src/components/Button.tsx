import React from "react";

interface ButtonProps {
	address?: string;
	buttontext: string;
	variant?: "transparent" | "accent";
	type?: "button" | "submit";
	newTab?: boolean; // ← NEW prop
}

const Button: React.FC<ButtonProps> = ({
	address,
	buttontext,
	variant = "transparent",
	type = "button",
	newTab = false, // ← default false
}) => {
	const baseClasses =
		"inline-block uppercase px-4 py-3 md:px-6 md:py-3 md:text-lg rounded-md cursor-pointer shadow-md hover:scale-110 hover:shadow-lg hover:brightness-125 transition duration-300";

	const variantClasses = {
		accent: "bg-[#D3929F] text-[#10101A] border-none",
		transparent: "bg-background border-2",
	}[variant];

	const className = `${baseClasses} ${variantClasses}`;

	return address ? (
		<a
			id="button"
			href={address}
			className={className}
			{...(newTab && { target: "_blank", rel: "noopener noreferrer" })}>
			{buttontext}
		</a>
	) : (
		<button type={type} className={className}>
			{buttontext}
		</button>
	);
};

export default Button;