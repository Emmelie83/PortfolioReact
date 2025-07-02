import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import blogPosts from "../data/posts";

export default function Blog() {
	return (
		<div className="max-w-screen-xl mx-auto p-4">
			<NavBar />
			<div className="pt-30">
				<h1 className="text-3xl font-bold mb-8">Blog</h1>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{blogPosts.map((post) => (
						<Link
							to={`/blog/${post.slug}`}
							key={post.id}
							className="block bg-[#1d1d29] p-6 rounded-lg hover:backdrop-brightness-200 transition overflow-hidden">
							<img
								src={post.image}
								alt={post.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<p className="mb-1">{post.date}</p>
								<h4 className="mb-2">{post.title}</h4>
								<p>{post.summary}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
