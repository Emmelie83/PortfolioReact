import React, { useState } from "react";

interface TimelineItemProps {
	date: string;
	title: string;
	company: string;
	children: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
	date,
	title,
	company,
	children,
}) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="timeline-item">
			<p className="timeline-date">{date}</p>
			<div className="timeline-content">
				<h3>{title}</h3>
				<p>{company}</p>
				<div className="toggle-container">
					<button
						className={`toggle-button ${open ? "active" : ""}`}
						aria-expanded={open}
						onClick={() => setOpen(!open)}>
						+
					</button>
					<div className={`toggle-content ${open ? "" : "hidden"}`}>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TimelineItem;
