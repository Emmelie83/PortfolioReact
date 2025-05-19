const NowSection: React.FC = () => {
	return (
		<div className="lg:p-6 max-w-[300px] md:max-w-[400px]">
			<div className="space-y-6">
				<div>
					<p className="font-semibold flex lg:items-center gap-2 border-b-2 border-[#848a96] pb-2 mb-2">
						Books I'm reading
					</p>
					<p>Clean Code, Robert C. Martin</p>
				</div>
				<div>
					<p className="font-semibold flex lg:items-center gap-2 border-b-2 border-[#848a96] pb-2 mb-2">
						Courses I'm taking
					</p>
					<p>The Complete Agentic AI Engineering Course (2025)</p>
				</div>
			</div>
		</div>
	);
};

export default NowSection;
