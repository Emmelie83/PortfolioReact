import React from "react";
import ContactForm from "../components/ContactForm";

const ContactSection: React.FC = () => {
	return (
		<section
			id="contact">
			<h2>Get in touch</h2>
			<div className="flex flex-col lg:flex-row gap-20 lg:gap-30 md:justify-between mt-8 mt-10">
			
				<div className="lg:w-1/2">
					<p>info@emmeliejohansson.com</p>
					<p className="pt-1">+49 151 677 25 898</p>
				</div>
				<div className="sm:w-4/5 lg:w-1/2 xl:w-2/3">
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
