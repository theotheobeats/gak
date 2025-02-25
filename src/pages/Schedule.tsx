const Schedule = () => {
	return (
		<div className="relative flex flex-col w-full overflow-hidden">
			<div className="mx-auto text-4xl font-bold text-black mt-24 max-w-[400px]">
				Join us for an intimate connection with{" "}
				<span className="text-[#0C4651]">Christ</span>
			</div>
			<div className="relative flex justify-center my-24">
				<img src="/img/schedule_card.png" width={600} />
			</div>

			{/* Background Decorative Images */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<img
					src="/img/ellips.png"
					className="absolute -top-[0%] -left-[20%] w-[800px] opacity-50"
				/>
				<img
					src="/img/ellips.png"
					className="absolute -top-[-20%] -right-[20%] w-[800px] opacity-50"
				/>
			</div>
		</div>
	);
};

export default Schedule;
