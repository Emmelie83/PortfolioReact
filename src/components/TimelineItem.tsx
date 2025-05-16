import React, { useState } from "react";

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
		<div className="relative mb-6 pl-3 max-w-3/5 pt-3">
			<div className="absolute left-[-1px] top-2 w-3 h-3 bg-[#585C64] rounded-full" />
			<div className="ml-4">
				<p className="font-bold text-lg leading-1">{date}</p>
				<h3 className="background-title">{title}</h3>
				<p className="leading-5">{company}</p>
			</div>
			{/* Toggle Button */}
			<div className="w-full max-w-xl ml-4">
				<button
					className={`leading-1 text-2xl mb-4 transition-transform ${
						isOpen ? "rotate-45" : ""
					}`}
					onClick={() => setIsOpen(!isOpen)}
					aria-expanded={isOpen}>
					+
				</button>

				{/* Toggle Content */}
				<div
					className={`transition-all overflow-hidden ${
						isOpen
							? "max-h-[1000px] opacity-100"
							: "max-h-0 opacity-0"
					}`}>
					<div className="mb-4">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default TimelineItem;
