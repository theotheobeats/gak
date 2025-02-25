const DevotionCard = () => {
	return (
		<div className="flex flex-col md:lg:flex-row gap-8">
			<div className="relative bg-[#e2ff00] rounded-3xl p-1.5 min-w-[280px] min-h-[320px] shadow-lg">
				<div className="border-2 border-black rounded-2xl p-6 h-full">
					<div className="space-y-2">
						<h2 className="text-4xl font-bold leading-tight">
							Walking by Faith
						</h2>
						<p className="text-sm">Trusting God in certain times.</p>
					</div>
				</div>
			</div>

			<div className="relative bg-black text-white rounded-3xl p-1.5 min-w-[280px] min-h-[320px] shadow-lg">
				<div className="border-2 border-white rounded-2xl p-6 h-full">
					<div className="space-y-2">
						<h2 className="text-4xl font-bold leading-tight">
							God's grace in every day life
						</h2>
						<p className="text-sm mt-auto">Find</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DevotionCard;
