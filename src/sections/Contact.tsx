import React from "react";
import ContactForm from "../components/ContactForm";

const ContactSection: React.FC = () => {
	return (
		<section
			id="contact">
			<h2>Get in touch</h2>
			<div className="flex flex-col lg:flex-row gap-20 lg:gap-30 md:justify-between">
				{/* Contact Info */}
				<div className="lg:w-1/2">
					<p>info@emmeliejohansson.com</p>
					<p>+49 151 677 25 898</p>
				</div>
				<div className="lg:w-1/2">
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
