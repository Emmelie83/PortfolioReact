import { useState, useEffect } from "react";

const useContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [statusMessage, setStatusMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setStatusMessage("");

		try {
			const response = await fetch("/contact.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setStatusMessage("Thank you! Your message has been sent.");
				setFormData({ name: "", email: "", message: "" });
			} else {
				setStatusMessage("Oops! Something went wrong. Please try again.");
			}
		} catch {
			setStatusMessage("Oops! Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	useEffect(() => {
		if (statusMessage.includes("Thank you")) {
			const timer = setTimeout(() => {
				setStatusMessage("");
			}, 4000);
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
