const About = () => {
	return (
		<div className="relative flex flex-col items-center justify-center h-screen leading-none top-[-50px]">
			{/* Background Image */}
			<img
				src="/public/img/about.png"
				alt="About"
				className="absolute mx-auto object-cover leading-none grayscale"
				width={1650}
			/>

			{/* Content */}
			<div className="relative text-black top-[-150px] left-[-550px]">
				<h1 className="text-[100px] font-bold leading-tight">
					Let's connect
					<br />
					<span className="inline-block bg-[#D6FF4D] px-2 py-1 text-black">
						with Jesus
					</span>
				</h1>
			</div>

			{/* Button Overlay */}
			<button className="relative mt-10 text-2xl bg-[#D6FF4D] text-black hover:bg-[#c1e645] px-8 py-6 bottom-[-220px] right-[-690px] w-[250px] rounded-xl cursor-pointer">
				Schedules
			</button>
			
		</div>
	);
};

export default About;
