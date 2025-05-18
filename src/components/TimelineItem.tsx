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
		<div className="relative mb-6 pl-2 md:pl-3 md:max-w-3/5 pt-3">
			<div className="absolute left-[-1px] top-4 md:top-3 w-2 h-2 md:w-3 md:h-3 bg-[#585C64] rounded-full" />
			<div className="mx-3 md:mx-4">
				<p className="font-bold text-sm sm:text-lg leading-tight">
					{date}
				</p>
				<h4 className="leading-tight">{title}</h4>
				<p className="text-sm font-semibold sm:text-lg leading-tight">
					{company}
				</p>
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
