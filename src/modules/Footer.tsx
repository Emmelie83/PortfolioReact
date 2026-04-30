import { ChevronsUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
		<footer className="flex flex-col items-center gap-4 my-10">
			<a href="#home" className="flex flex-col items-center text-accent">
				<ChevronsUp size={40} strokeWidth={1} />
			</a>
			<p>
				Copyright © {year} Emmelie Johansson
			</p>
			<p className="text-sm mb-4">
				Built with React and lots of ☕
			</p>
		</footer>
  );
}