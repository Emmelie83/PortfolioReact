import { useState, useEffect } from "react";
import HttpService from "./services/HttpService";
import type { ContactFormData } from "./interfaces/types";

const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
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

		const result = await HttpService.request(
			"/contact.php",
			"POST",
			formData
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
