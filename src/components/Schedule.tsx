const Schedule = () => {
	return (
		<div className="relative flex flex-col w-full overflow-hidden">
			<div className="mx-auto text-2xl md:lg:text-4xl font-bold text-black md:lg:mt-24 text-center">
				Join us for an intimate connection with{" "}
				<span className="text-[#0C4651]">Christ</span>
			</div>
			<div className="flex flex-wrap justify-center gap-4 px-4 md:px-8 py-16">
				<img src="/img/schedule/card_1.png" className="w-[400px] rounded-lg" />
				<img src="/img/schedule/card_2.png" className="w-[400px] rounded-lg" />
				<img src="/img/schedule/card_3.png" className="w-[400px] rounded-lg" />
				<img src="/img/schedule/card_4.png" className="w-[400px] rounded-lg" />
				<img src="/img/schedule/card_5.png" className="w-[400px] rounded-lg" />
				<img src="/img/schedule/card_6.png" className="w-[400px] rounded-lg" />
				<img src="/img/schedule/card_7.png" className="w-[400px] rounded-lg" />
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
