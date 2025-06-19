import React from "react";
import Header from "./modules/Header";
import About from "./modules/About";
import Background from "./modules/Background";
import Skills from "./modules/Skills";
import Footer from "./modules/Footer";
import Projects from "./modules/Projects";
import Contact from "./modules/Contact";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
	return (
		<div>
			<NavBar />
			<Header />
			<main className="max-w-screen-xl mx-auto xs:px-4 sm:px-6 lg:px-12 xl:px-16">
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
