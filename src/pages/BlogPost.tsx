import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import blogPosts from "../data/posts";

export default function BlogPost() {
	const { slug } = useParams<{ slug: string }>();
	const post = blogPosts.find((p) => p.slug === slug);

	if (!post) {
		return (
			<div className="max-w-screen-xl mx-auto p-4">
				<NavBar />
				<div className="pt-20">
					<h1 className="text-3xl font-bold">Post not found</h1>
				</div>
			</div>
		);
	}

	return (
		<div className="max-w-screen-xl mx-auto p-4">
			<NavBar />
			<div className="pt-20">
				<h1 className="text-3xl font-bold mb-4">{post.title}</h1>
				<p className="text-gray-500 text-sm mb-4">{post.date}</p>
				<p>{post.content}</p>
			</div>
		</div>
	);
}
