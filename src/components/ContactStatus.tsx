type Props = {
	message: string;
	success?: boolean;
};

const ContactStatus: React.FC<Props> = ({ message, success = false }) => (
	<div
		className={`mt-2 px-4 py-2 text-center ${
			success ? "text-[#E0E0E0]" : "text-[#D3929F] rounded"
		}`}>
		{message}
	</div>
);

export default ContactStatus;
