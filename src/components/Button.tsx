interface ButtonProps {
	address?: string;
	buttonText: string; // corrected camelCase
	variant?: "transparent" | "accent";
	type?: "button" | "submit";
	newTab?: boolean;
}

export default function Button({
	address,
	buttonText,
	variant = "transparent",
	type = "button",
	newTab = false,
}: ButtonProps) {
	const baseClasses =
		"inline-block uppercase px-4 py-3 md:px-6 md:py-3 md:text-lg rounded-md cursor-pointer hover:scale-110 transition duration-200";

	const variantClasses = {
		accent: "bg-[#D3929F] text-[#10101A] border lg:border-2 border-[#D3929F]",
		transparent: "border lg:border-2",
	}[variant];

	const className = `${baseClasses} ${variantClasses}`;

	return address ? (
		<a id="button"
			href={address}
			className={className}
			aria-label={
				newTab ? `${buttonText} (opens in a new tab)` : buttonText
			}
			{...(newTab && { target: "_blank", rel: "noopener noreferrer" })}>
			{buttonText}
		</a>
	) : (
		<button type={type} className={className}>
			{buttonText}
		</button>
	);
}