import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Site from "./pages/Site";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Site />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:slug" element={<BlogPost />} />
			</Routes>
		</Router>
	);
}
