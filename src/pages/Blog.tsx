import NavBar from "../components/NavBar";

export default function Blog() {
	return (
    <div className="max-w-screen-xl mx-auto p-4">
      <NavBar />
			<h1 className="text-3xl font-bold mb-4">My Blog</h1>
			<p>Here are my blog posts!</p>
		</div>
	);
}
