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
		<div className="w-full text-white min-h-screen overflow-hidden">
			<div className="bg-[#0C4651] pb-16">
				<div className="hidden lg:flex justify-between px-4 md:px-12 pt-6 md:pt-12 pb-4">
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
				<div className="flex flex-col md:lg:flex md:lg:flex-row md:lg:justify-between md:lg:pl-20 ">
					<div className="md:lg:w-1/2 flex flex-col px-4 pt-4 self-center">
						<div className="flex flex-col font-bold md:lg:leading-33 md:lg:gap-8 text-center md:lg:text-left pt-8 md:lg:pt-0">
							<span className="lg:text-[175px] md:text-[100px] text-[100px] items-center">
								Welcome
							</span>
							<span className="lg:text-[175px] md:text-[100px] text-[100px] items-center text-[#E8F967]">
								Home,
							</span>
							<span className="lg:text-[175px] md:text-[100px] text-[100px] items-center">
								Church.
							</span>
						</div>

						<a
							href=""
							className="py-4 mt-8 text-center w-full bg-[#E8F967] rounded-sm text-black hover:opacity-90 transition-all">
							Visit Us
						</a>
					</div>

					<div className="md:lg:w-1/2 justify-items-center self-center">
						<img
							className="mx-auto my-auto leading-none md:lg:w-[550px] w-[250px] hidden md:lg:block"
							src="/img/hero.png"
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:lg:flex-row gap-16 px-28 pt-12 align-bottom text-black">
				<div className="text-2xl italic md:lg:w-1/2 self-center mx-auto text-center md:lg:text-left">
					"But seek first the Kingdom of God and his righteousness, and all
					these things will be added to you".
				</div>
				<div className="flex flex-col md:lg:flex-row md:lg:justify-end md:lg:w-1/2 mx-auto md:lg:gap-14">
					<div className="flex md:lg:flex-col md:lg:gap-0 gap-4 gap-y-1 self-center mx-auto">
						<span className="leading-none text-2xl">NEXT</span>
						<span className="leading-none text-2xl">SUNDAY</span>
						<span className="leading-none text-2xl">SERVICE IN</span>
					</div>
					<div className="flex gap-8 text-center mt-4 md:lg:mt-0">
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
