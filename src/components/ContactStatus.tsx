type Props = {
	message: string;
	success?: boolean;
};

export default function ContactStatus({ message, success = false }: Props) {
	return (
		<div
			className={`mt-2 px-4 py-2 text-center rounded ${
				success ? "text-[#E0E0E0]" : "text-[#D3929F]"
			}`}>
			{message}
		</div>
	);
}
