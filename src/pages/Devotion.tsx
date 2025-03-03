// import DevotionCard from "../components/DevotionCard";

const Devotion = () => {
	return (
		<div className="flex flex-col mt-24">
			<div className="text-[30px] md:lg:text-[80px] font-bold text-black bg-[#D6FF4D] w-fit px-15 text-left pl-24">
				Devotion & Reflection
			</div>
			<div className="flex flex-col md:lg:flex-row gap-8 px-4 md:lg:px-28 py-12">
				{/* <div className="w-full md:lg:w-1/2">
					<DevotionCard />
				</div> */}
				<div className="flex flex-col gap-4 w-full md:lg:w-full self-center mt-4">
					<div>
						<div className="flex justify-between">
							<div>
								<p className="text-xl md:lg:text-2xl font-bold">
									Walking by Faith: Trusting God in Uncertain Times
								</p>
								<span className="text-slate-500">Ps. Daniel Ferry</span>
							</div>
							<button className="bg-white text-black px-4 py-2 rounded-4xl border border-black cursor-pointer hover:bg-[#D6FF4D] transition-all duration-300">
								Renungkan
							</button>
						</div>
						<hr className="mt-4" />
					</div>
					<div>
						<div className="flex justify-between">
							<div>
								<p className="text-xl md:lg:text-2xl font-bold">
									Walking by Faith: Trusting God in Uncertain Times
								</p>
								<span className="text-slate-500">Ps. Daniel Ferry</span>
							</div>
							<button className="bg-white text-black px-4 py-2 rounded-4xl border border-black cursor-pointer hover:bg-[#D6FF4D] transition-all duration-300">
								Renungkan
							</button>
						</div>
						<hr className="mt-4" />
					</div>
					<div>
						<div className="flex justify-between">
							<div>
								<p className="text-xl md:lg:text-2xl font-bold">
									Walking by Faith: Trusting God in Uncertain Times
								</p>
								<span className="text-slate-500">Ps. Daniel Ferry</span>
							</div>
							<button className="bg-white text-black px-4 py-2 rounded-4xl border border-black cursor-pointer hover:bg-[#D6FF4D] transition-all duration-300">
								Renungkan
							</button>
						</div>
						<hr className="mt-4" />
					</div>
					<div>
						<div className="flex justify-between">
							<div>
								<p className="text-xl md:lg:text-2xl font-bold">
									Walking by Faith: Trusting God in Uncertain Times
								</p>
								<span className="text-slate-500">Ps. Daniel Ferry</span>
							</div>
							<button className="bg-white text-black px-4 py-2 rounded-4xl border border-black cursor-pointer hover:bg-[#D6FF4D] transition-all duration-300">
								Renungkan
							</button>
						</div>
						<hr className="mt-4" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Devotion;
