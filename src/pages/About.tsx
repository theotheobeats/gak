const About = () => {
	return (
		<div className="relative flex flex-col items-center justify-center my-24 leading-none w-full md:lg:my-52">
			{/* Background Image */}
			<img
				src="/img/about.png"
				alt="About"
				className="absolute mx-auto object-cover leading-none grayscale md:lg:w-[1650px] w-[1000px]"
				width={1650}
			/>

			{/* Content */}
			<div className="relative text-black md:lg:top-[-50px] md:lg:left-[-600px]">
				<h1 className="md:lg:text-[100px] text-[25px] font-bold leading-tight">
					Let's connect
					<br />
					<span className="inline-block bg-[#D6FF4D] px-2 py-1 text-black">
						with Jesus
					</span>
				</h1>
			</div>

			{/* Button Overlay */}
			<button className="relative mt-16 md:lg:mt-10 px-4 py-4 md:lg:text-2xl bg-[#D6FF4D] text-black hover:bg-[#c1e645] md:lg:px-8 md:lg:py-6 md:lg:bottom-[-220px] md:lg:right-[-690px] md:lg:w-[250px] rounded-xl cursor-pointer">
				Schedules
			</button>
			
		</div>
	);
};

export default About;
