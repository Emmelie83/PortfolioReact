import React from "react";
import Header from "./modules/Header";
import About from "./modules/About";
import Background from "./modules/Background";
import Skills from "./modules/Skills";
import Footer from "./modules/Footer";
import Projects from "./modules/Projects";
import Contact from "./modules/Contact";

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<main className="max-w-screen-xl mx-auto sm:px-14 lg:px-16">
				<About />
				<Background />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default App;
