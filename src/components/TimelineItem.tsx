import React, { useState } from "react";
import { Plus } from "lucide-react";

interface TimelineItemProps {
	date: string;
	title: string;
	company: string;
	children: React.ReactNode;
	defaultOpen?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
	date,
	title,
	company,
	children,
	defaultOpen = false,
}) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	return (
		<div className="relative mb-6 pl-1 md:pl-3 lg:max-w-3/5 pt-3">
			<div className="absolute left-[-1px] top-5 w-2 h-2 md:w-3 md:h-3 bg-[#848a96] rounded-full" />
			<div className="mx-3 md:mx-4">
				<p className="font-bold">{date}</p>
				<h4>{title}</h4>
				<p className="italic mb-1">{company}</p>
			</div>

			<div className="w-full h-full ml-4">
				<button
					onClick={() => setIsOpen(!isOpen)}
					aria-expanded={isOpen}
					className="w-4 h-4 flex items-center justify-center transition-transform duration-300">
					<Plus
						className={`transition-transform my-3 duration-300 text-accent ${
							isOpen ? "rotate-45" : ""
						}`}
						size={24}
						strokeWidth={2}
					/>
				</button>

				{/* Toggle Content */}
				<div
					className={`transition-all mt-2 overflow-hidden ${
						isOpen
							? "max-h-[1000px] opacity-100"
							: "max-h-0 opacity-0"
					}`}>
					<div className="">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default TimelineItem;
