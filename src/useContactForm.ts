import { useState, useEffect } from "react";
import HttpService from "./services/HttpService";
import type { FormData } from "./interfaces/types";

const stripTags = (input: string) => input.replace(/<\/?[^>]+(>|$)/g, "");

const useContactForm = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});

	const [statusMessage, setStatusMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setStatusMessage("");

		const sanitizedData = {
			name: stripTags(formData.name),
			email: stripTags(formData.email),
			message: stripTags(formData.message),
		};

		const result = await HttpService.request(
			"/contact.php",
			"POST",
			sanitizedData
		);
		const success = result !== null;

		setStatusMessage(
			success
				? "Thank you! Your message has been sent."
				: "Oops! Something went wrong. Please try again."
		);

		setIsSubmitting(false);

		if (success) {
			setFormData({ name: "", email: "", message: "" });
		}
	};

	useEffect(() => {
		if (statusMessage.includes("Thank you")) {
			const timer = setTimeout(() => setStatusMessage(""), 4000);
			return () => clearTimeout(timer);
		}
	}, [statusMessage]);

	return {
		formData,
		handleChange,
		handleSubmit,
		isSubmitting,
		statusMessage,
	};
};

export default useContactForm;