import React from "react";

interface ButtonProps {
	address: string;
	buttontext: string;
	variant?: "transparent" | "accent";
}

const Button: React.FC<ButtonProps> = ({
	address,
	buttontext,
	variant = "transparent",
}) => {
	const baseClasses =
		"uppercase px-6 py-3 text-lg font-pt rounded-md cursor-pointer shadow-md hover:scale-110 hover:shadow-lg hover:brightness-125 transition duration-300";

	const variantClasses =
		variant === "accent"
			? "bg-[#D3929F] text-[#10101A] border-none"
			: "bg-background text-text border-2 border-text";

	return (
		<a href={address} className={`${baseClasses} ${variantClasses}`}>
			{buttontext}
		</a>
	);
};

export default Button;
