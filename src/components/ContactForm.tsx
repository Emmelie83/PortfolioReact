import React from "react";
import Button from "./Button";
import ContactInput from "./ContactInput";
import ContactStatus from "./ContactStatus";
import useContactForm from "../useContactForm";

const ContactForm: React.FC = () => {
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
				<form className="contact-form" onSubmit={handleSubmit}>
					<div className="flex flex-col gap-4 flex-2">
						<ContactInput
							type="text"
							name="name"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChange}
						/>
						<ContactInput
							type="email"
							name="email"
							placeholder="Your Email"
							value={formData.email}
							onChange={handleChange}
						/>
						<ContactInput
							as="textarea"
							name="message"
							placeholder="Your Message"
							value={formData.message}
							onChange={handleChange}
						/>
						{statusMessage && (
							<ContactStatus message={statusMessage} />
						)}
						<div className="self-end">
							<Button
								buttontext={
									isSubmitting ? "Sending..." : "Submit"
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
};

export default ContactForm;
