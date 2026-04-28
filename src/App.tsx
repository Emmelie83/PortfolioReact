import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Site from "./pages/Site";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CareerBot from "./components/CareerBot.tsx";

export default function App() {
	return (
		<Router>
			 <CareerBot />
			<Routes>
				<Route path="/" element={<Site />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:slug" element={<BlogPost />} />
			</Routes>
		</Router>
	);
}
