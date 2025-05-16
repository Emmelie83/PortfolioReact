type Props = {
	message: string;
	success?: boolean;
};

const ContactStatus: React.FC<Props> = ({ message, success = false }) => (
	<div
		className={`mt-2 px-4 py-2 text-center ${
			success ? "text-[#E0E0E0]" : "text-red-800 bg-[#e8f0fd] rounded"
		}`}>
		{message}
	</div>
);

export default ContactStatus;
