import { useEffect, useState } from "react";

const Hero = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
	});

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		const getNextSunday = () => {
			const now = new Date();
			const nextSunday = new Date();
			nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7));
			nextSunday.setHours(10, 0, 0, 0);
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
		<div className="text-white w-full">
			<div className="relative bg-gradient-to-br from-[#0C4651]/75 to-[#0A3B45]/75 pb-16 md:sm:pt-0 pt-16 w-full rounded-b-[100px] before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[url('/img/hero.jpg')] before:bg-cover before:bg-center before:rounded-b-[100px]">
				{/* Navigation */}
				<div className="hidden lg:flex justify-between px-4 md:px-12 pt-6 md:pt-12 pb-4 w-full">
					<div className="flex justify-center items-center md:lg:gap-4">
						<img src="/img/logo.png" alt="logo" className="m-auto" />
						<div className="text-white">Gereja Anugerah Kristus</div>
					</div>
					<div className="flex gap-8 items-center justify-center">
						<button
							onClick={() => scrollToSection("schedule")}
							className="hover:text-[#E8F967] transition-colors cursor-pointer">
							Schedule
						</button>
						<button
							onClick={() => scrollToSection("devotion")}
							className="hover:text-[#E8F967] transition-colors cursor-pointer">
							Devotions
						</button>
						<button
							onClick={() => scrollToSection("documentation")}
							className="hover:text-[#E8F967] transition-colors cursor-pointer">
							Documentation
						</button>
						<button
							onClick={() => scrollToSection("cta")}
							className="py-2 px-8 text-center bg-[#E8F967] rounded-sm text-black hover:opacity-90 transition-all cursor-pointer">
							Connect
						</button>
					</div>
				</div>

				{/* Hero Content */}
				<div className="flex flex-col lg:flex-row lg:justify-between lg:pl-20 max-w-3/4 mx-auto">
					<div className="md:lg:w-full flex flex-col px-4 md:px-6 pt-4 self-center">
						<div className="flex flex-col font-bold gap-2 lg:gap-2 text-center lg:text-left pt-8 lg:pt-0">
							<span className="text-6xl sm:text-7xl lg:text-[160px] leading-none mx-auto">
								Welcome
							</span>
							<span className="text-6xl sm:text-7xl lg:text-[160px] leading-none mx-auto text-[#E8F967]">
								Home,
							</span>
							<span className="text-6xl sm:text-7xl lg:text-[160px] leading-none mx-auto">
								Church!
							</span>
						</div>

						<a
							href=""
							className="py-4 mt-8 text-center w-1/2 rounded-4xl bg-[#E8F967] text-[#0C4651] hover:opacity-90 transition-all font-bold mx-auto">
							Visit Us
						</a>
					</div>

					{/* <div className="lg:w-1/2 justify-items-center self-center mt-8 lg:mt-0">
						<img
							className="mx-auto my-auto leading-none md:lg:w-[550px] hidden md:block"
							src="/img/hero.png"
							alt="Church hero image"
						/>
					</div> */}
				</div>
			</div>

			{/* Countdown Section */}
			<div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-4 md:px-8 lg:px-28 pt-12 text-black w-full">
				<div className="text-xl lg:text-2xl italic lg:w-1/2 self-center mx-auto text-center lg:text-left">
					"But seek first the Kingdom of God and his righteousness, and all
					these things will be added to you".
				</div>

				<div className="flex flex-col lg:flex-row lg:justify-end lg:w-1/2 mx-auto lg:gap-14">
					<div className="flex lg:flex-col gap-4 lg:gap-0 self-center mx-auto text-center lg:text-left mb-4 lg:mb-0">
						<span className="leading-none font-bold text-xl lg:text-2xl">
							NEXT
						</span>
						<span className="leading-none font-bold text-xl lg:text-2xl">
							SUNDAY
						</span>
						<span className="leading-none font-bold text-xl lg:text-2xl">
							SERVICE IN
						</span>
					</div>

					<div className="flex flex-wrap justify-center gap-4 lg:gap-8">
						<div className="bg-[#D6FF4D] p-4 w-24 lg:w-28">
							<div className="text-3xl lg:text-4xl font-bold text-center">
								{timeLeft.days}
							</div>
							<div className="text-sm self-center text-center">DAYS</div>
						</div>
						<div className="bg-[#D6FF4D] p-4 w-24 lg:w-28">
							<div className="text-3xl lg:text-4xl font-bold text-center">
								{timeLeft.hours}
							</div>
							<div className="text-sm self-center text-center">HOURS</div>
						</div>
						<div className="bg-[#D6FF4D] p-4 w-24 lg:w-28">
							<div className="text-3xl lg:text-4xl font-bold text-center">
								{timeLeft.minutes}
							</div>
							<div className="text-sm self-center text-center">MINUTES</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
