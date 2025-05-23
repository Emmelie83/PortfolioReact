import React from "react";
import type { FormFieldNames } from "../interfaces/types"; 

type Props = {
	as?: "input" | "textarea";
	type?: string;
	name: FormFieldNames;
	placeholder: string;
	value: string;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
};

const ContactInput: React.FC<Props> = ({
	as = "input",
	type = "text",
	name,
	placeholder,
	value,
	onChange,
}) => {
	const commonProps = {
		name,
		placeholder,
		required: true,
		value,
		onChange,
		className: `form-input border-b-2 py-2 outline-none font-sans px-4 transition-all duration-300 ${
			value ? "rounded" : ""
		}`,
	};

	return as === "textarea" ? (
		<textarea {...commonProps} rows={4} />
	) : (
		<input {...commonProps} type={type} />
	);
};

export default ContactInput;
