const NowSection: React.FC = () => {
	return (
		<section className="p-6">
			<div className="space-y-6">
				<div>
					<p className="font-semibold flex items-center gap-2 border-b-2 border-[#848a96] pb-2 mb-2">
						📚 Books I'm reading
					</p>
					<p className="text-base">Clean Code, Robert C. Martin</p>
				</div>
				<div>
					<p className="font-semibold flex items-center gap-2 border-b-2 border-[#848a96] pb-2 mb-2">
						🎓 Courses I'm taking
					</p>
					<p className="text-base">
						The Complete Agentic AI Engineering Course (2025)
					</p>
				</div>
			</div>
		</section>
	);
};

export default NowSection;
