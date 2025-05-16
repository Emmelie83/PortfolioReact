import React from "react";
import ContactForm from "../components/ContactForm";

const ContactSection: React.FC = () => {
	return (
		<section id="contact" className="my-20">
			<h2>Get in touch</h2>
			<div className="flex flex-col md:flex-row gap-20 md:justify-between">
				{/* Contact Info */}
        <div className="w-1/2">
          <p className="font-bold">
            Let's connect
          </p>
					<p className="mb-2">
						Whether you’re interested in working together, have a
						question about my work, or just want to say hello — I’d
						love to hear from you. Feel free to reach out with
						ideas, opportunities, or anything else that’s on your
						mind.
					</p>
				</div>
				<ContactForm />
			</div>
		</section>
	);
};

export default ContactSection;
