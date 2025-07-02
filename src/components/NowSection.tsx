export default function NowSection() {
	return (
		<div className="lg:p-6 max-w-[300px] md:max-w-[400px]">
			<div className="space-y-6">
				<div>
					<p className="font-bold flex flex-col lg:flex-row lg:items-center gap-2 border-b-2 border-[#d5cfd1] pb-2 mb-2">
						Books I'm reading
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li>
							<em>Clean Code</em>, Robert C. Martin
						</li>
						<li>
							<em>
								AI Engineering — Building Applications with
								Foundation Models
							</em>
							, Chip Huyen.
						</li>
					</ul>
				</div>
				<div>
					<p className="font-bold flex flex-col lg:flex-row lg:items-center gap-2 border-b-2 border-[#d5cfd1] pb-2 mb-2">
						Courses I'm taking
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li>
							<em>The Complete Agentic AI Engineering Course</em>{" "}
							(2025)
						</li>
						<li>
							<em>Android Mobile App Development</em> (7.5 ECTS),
							Umeå University
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
