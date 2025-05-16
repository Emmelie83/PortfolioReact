import React from "react";
import ContactForm from "../components/ContactForm";

const ContactSection: React.FC = () => {
	return (
		<section id="contact" className="my-40">
			<h2>Get in touch</h2>
			<div className="flex flex-col md:flex-row gap-30 md:justify-between mt-20">
				{/* Contact Info */}
				<div className="w-3/5">
					<p className="mb-2">
						Whether you’re interested in working together, have a
						question about my work, or just want to say hello — I’d
						love to hear from you. Feel free to reach out with
						ideas, opportunities, or anything else that’s on your
						mind.
					</p>
				</div>
				<div className="w-2/5">
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
