import React from "react";
import Button from "./Button";

const ContactSection: React.FC = () => {
	return (
		<section id="contact" className="my-20">
			<h2>Get in touch</h2>
			<div className="flex flex-col md:flex-row gap-20 md:justify-between">
				{/* Contact Info */}
				<div>
					<p id="phone" className="mb-2">
						+49 151 677 25 898
					</p>
					<p id="mail" className="mb-2">
						info@emmeliejohansson.com
					</p>
				</div>

				{/* Contact Form */}
				<form className="flex flex-col gap-4 flex-2 w-full max-w-md min-w-[300px]">
					<input
						type="text"
						name="name"
						placeholder="Your Name"
						required
						className="bg-transparent border-b-2 border-gray-300 py-2 font-sans"
					/>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						required
						className="bg-transparent border-b-2 border-gray-300 py-2 outline-none font-sans"
					/>
					<textarea
						name="message"
						rows={4}
						placeholder="Your Message"
						required
						className="bg-transparent border-b-2 border-gray-300 py-2 placeholder-gray-500 outline-none font-sans"></textarea>
					<div className="self-end pt-2">
						<Button address="#" buttontext="Submit" />
					</div>
				</form>
			</div>
		</section>
	);
};

export default ContactSection;
