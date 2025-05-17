import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Background from "./sections/Background";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<main className="max-w-screen-lg m-auto">
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
