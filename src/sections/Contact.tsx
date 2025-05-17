import React from "react";
import ContactForm from "../components/ContactForm";

const ContactSection: React.FC = () => {
	return (
		<section id="contact" className="mx-auto px-8 lg:px-0 lg:py-12 mb-20">
			<h2 className="text-3xl md:text-5xl font-bold mb-6">
				Get in touch
			</h2>
			<div className="flex flex-col md:flex-row gap-30 md:justify-between mt-20">
				{/* Contact Info */}
				<div className="md:w-1/2">
					<p>info@emmeliejohansson.com</p>
					<p>+49 151 677 25 898</p>
				</div>
				<div className="md:w-1/2">
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
