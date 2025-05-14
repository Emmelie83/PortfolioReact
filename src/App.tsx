import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Footer from "./components/Footer";


const App: React.FC = () => {
	return (
		<div>
			<Header />
			<main className="">
				<About />
				<Background />
				<Skills />
			</main>
			<div className="w-3xl m-auto">
				<Footer />
			</div>
		</div>
	);
};

export default App;
