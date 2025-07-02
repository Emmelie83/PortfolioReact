interface SocialIconProps {
	address: string;
	path: string;
	alt: string;
}

export default function SocialIcon({ address, path, alt }: SocialIconProps) {
	return (
		<a href={address} target="_blank" rel="noopener noreferrer">
			<img
				className="w-8 md:w-10 transition duration-200 hover:brightness-150 hover:scale-120"
				src={path}
				alt={alt}
			/>
		</a>
	);
}
