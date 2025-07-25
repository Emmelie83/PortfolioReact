import ContactForm from "../components/ContactForm";

export default function ContactSection() {
	return (
		<div id="contact" className="pt-8">
			<section>
				<h2>Get in touch</h2>
				<div className="flex flex-col lg:flex-row gap-20 lg:gap-30 md:justify-between my-10">
					<div className="lg:w-1/2">
						<p>info@emmeliejohansson.com</p>
						<p className="pt-1">+49 151 6772 5898</p>
					</div>
					<div className="md:w-3/4 lg:w-1/2 xl:w-2/3">
						<ContactForm />
					</div>
				</div>
			</section>
			<hr className="border-t border-[#d5cfd1] mx-auto brightness-50" />
		</div>
	);
}