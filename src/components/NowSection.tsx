export default function NowSection() {
	return (
		<div className="lg:p-6 max-w-[300px] md:max-w-[400px]">
			<div className="space-y-6">
				<div>
					<p className="font-semibold flex lg:items-center gap-2 border-b-2 border-[#848a96] pb-2 mb-2">
						Books I'm reading
					</p>
					<ul>
						<li>Clean Code, Robert C. Martin</li>
					</ul>
				</div>
				<div>
					<p className="font-semibold flex lg:items-center gap-2 border-b-2 border-[#848a96] pb-2 mb-2">
						Courses I'm taking
					</p>
					<ul>
						<li>
							The Complete Agentic AI Engineering Course (2025)
						</li>
						<li>
							Android Mobile App Development (7.5 ETCS), Umeå
							University
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
