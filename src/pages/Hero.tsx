import { useEffect, useState } from "react";

const Hero = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
	});

	useEffect(() => {
		// Get next Sunday
		const getNextSunday = () => {
			const now = new Date();
			const nextSunday = new Date();
			nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7));
			nextSunday.setHours(10, 0, 0, 0); // Set to 10 AM
			return nextSunday;
		};

		const timer = setInterval(() => {
			const now = new Date();
			const nextService = getNextSunday();
			const diff = nextService.getTime() - now.getTime();

			setTimeLeft({
				days: Math.floor(diff / (1000 * 60 * 60 * 24)),
				hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
				minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
			});
		}, 1000);

		return () => clearInterval(timer);
	}, []);
	return (
		<div className="w-full text-white h-screen">
			<div className="bg-[#0C4651] pb-16">
				<div className="flex justify-between px-12 pt-12 pb-4">
					<div className="flex justify-center items-center">
						<img src="/public/img/logo.png" alt="logo" className="m-auto" />
					</div>
					<div className="flex gap-8 items-center justify-center">
						<a href="">Community</a>
						<a href="">Devotions</a>
						<a
							href=""
							className="py-2 px-8 text-center w-full bg-[#E8F967] rounded-sm text-black hover:opacity-90 transition-all">
							Connect
						</a>
					</div>
				</div>
				<div className="flex justify-between pl-20">
					<div className="w-1/2 flex flex-col px-4 pt-4 self-center">
						<div className="flex flex-col font-bold leading-33 gap-8">
							<span className="text-[175px]">Welcome</span>
							<span className="text-[175px] text-[#E8F967]">Home,</span>
							<span className="text-[175px]">Church.</span>
						</div>

						<a
							href=""
							className="py-4 mt-8 text-center w-full bg-[#E8F967] rounded-sm text-black hover:opacity-90 transition-all">
							Visit Us
						</a>
					</div>

					<div className="w-1/2 flex justify-items-center">
						<img
							className="mx-auto my-auto leading-none"
							width={550}
							src="/public/img/hero.png"
						/>
					</div>
				</div>
			</div>
			<div className="flex px-28 pt-12 align-bottom text-black">
				<div className="text-2xl italic w-1/2 self-center">
					"But seek first the Kingdom of God and his righteousness, and all
					these things will be added to you".
				</div>
				<div className="flex w-1/2 justify-end gap-14">
					<div className="flex flex-col gap-y-1 self-center">
						<span className="leading-none text-2xl">NEXT</span>
						<span className="leading-none text-2xl">SUNDAY</span>
						<span className="leading-none text-2xl">SERVICE IN</span>
					</div>
					<div className="flex gap-8 text-center">
						<div className="bg-[#D6FF4D] p-4 w-28">
							<div className="text-4xl font-bold">{timeLeft.days}</div>
							<div className="text-sm">DAYS</div>
						</div>
						<div className="bg-[#D6FF4D] p-4 w-28">
							<div className="text-4xl font-bold">{timeLeft.hours}</div>
							<div className="text-sm">HOURS</div>
						</div>
						<div className="bg-[#D6FF4D] p-4 w-28">
							<div className="text-4xl font-bold">{timeLeft.minutes}</div>
							<div className="text-sm">MINUTES</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
