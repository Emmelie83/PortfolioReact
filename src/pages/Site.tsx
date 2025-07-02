import About from "../modules/About";
import Background from "../modules/Background";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
import Projects from "../modules/Projects";
import Skills from "../modules/Skills";
import ContactSection from "../modules/Contact";

export default function Site() {
  return (
		<div>
			<Header />
			<main className="max-w-screen-xl mx-auto xs:px-4 sm:px-6 lg:px-12 xl:px-16">
				<About />
				<Background />
				<Skills />
				<Projects />
				<ContactSection />
			</main>
			<div>
				<Footer />
			</div>
		</div>
  );
}