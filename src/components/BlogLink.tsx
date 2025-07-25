import { Link, useLocation } from "react-router-dom";

export default function BlogLink() {
	const location = useLocation();

	return (
		<Link
			to="/blog"
			className={`relative w-full md:w-auto py-2 text-left md:text-center md:text-[.9em] uppercase
        md:before:content-[''] md:before:absolute md:before:bottom-0 md:before:left-0
        md:before:h-[1px] md:before:w-0 md:before:bg-white md:before:transition-all md:before:duration-300
        md:hover:before:w-full
        ${location.pathname === "/blog" ? "border-b-1 border-gray-400" : ""}`}>
			Blog
		</Link>
	);
}
