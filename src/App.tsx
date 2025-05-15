import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";


const App: React.FC = () => {
	return (
		<div>
			<Header />
			<main className="max-w-screen-lg m-auto">
				<About />
				<Background />
        <Skills />
        <Projects />
			</main>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default App;
