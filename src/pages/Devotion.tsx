import DevotionCard from "../components/DevotionCard";

const Devotion = () => {
	return (
		<div className="flex flex-col mt-24">
			<div className="text-[80px] font-bold text-black bg-[#D6FF4D] w-fit px-15 text-left pl-24">
				Devotion
			</div>
			<div className="flex gap-8 px-28 py-12">
				<div className="w-1/2">
					<DevotionCard />
				</div>
				<div className="flex flex-col gap-4 w-1/2 self-center">
					<div>
						<p className="text-2xl font-bold">Walking by Faith: Trusting God in Uncertain Times</p>
						<span className="text-slate-500">Ps. Daniel Ferry</span>
						<hr className="mt-4" />
					</div>
					<div>
						<p className="text-2xl font-bold">Walking by Faith: Trusting God in Uncertain Times</p>
						<span className="text-slate-500">Ps. Daniel Ferry</span>
						<hr className="mt-4" />
					</div>
					<div>
						<p className="text-2xl font-bold">Walking by Faith: Trusting God in Uncertain Times</p>
						<span className="text-slate-500">Ps. Daniel Ferry</span>
						<hr className="mt-4" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Devotion;
