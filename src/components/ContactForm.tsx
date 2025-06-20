import Button from "./Button";
import ContactInput from "./ContactInput";
import ContactStatus from "./ContactStatus";
import useContactForm from "../useContactForm";
import type { FormFieldNames } from "../interfaces/types";

const inputFields: {
	as?: "textarea";
	type?: string;
	name: FormFieldNames;
	placeholder: string;
}[] = [
	{ type: "text", name: "name", placeholder: "Your Name" },
	{ type: "email", name: "email", placeholder: "Your Email" },
	{ as: "textarea", name: "message", placeholder: "Your Message" },
];

export default function ContactForm() {
	const {
		formData,
		handleChange,
		handleSubmit,
		isSubmitting,
		statusMessage,
	} = useContactForm();

	return (
		<>
			{statusMessage.includes("Thank you") ? (
				<ContactStatus message={statusMessage} success />
			) : (
				<form
					className="contact-form md:min-w-[400px]"
					onSubmit={handleSubmit}>
					<div className="flex flex-col gap-4 flex-2">
						{inputFields.map(({ as, type, name, placeholder }) => (
							<ContactInput
								key={name}
								as={as}
								type={type}
								name={name}
								placeholder={placeholder}
								value={formData[name]}
								onChange={handleChange}
							/>
						))}

						{statusMessage && (
							<ContactStatus message={statusMessage} />
						)}

						<div className="self-end">
							<Button
								buttonText={
									isSubmitting ? "Sending..." : "Send Message"
								}
								type="submit"
								variant="transparent"
							/>
						</div>
					</div>
				</form>
			)}
		</>
	);
}
