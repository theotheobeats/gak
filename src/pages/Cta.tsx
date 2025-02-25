const Cta = () => {
	return (
		<div className="flex justify-center items-center h-screen flex-col relative">
			<div className="relative">
				{/* Circle Stroke Image */}
				<img
					className="absolute inset-0 mx-auto z-[1]"
					src="/img/circle.png"
					alt="Circle Stroke"
				/>
				{/* Heading */}
				<h1 className="text-4xl md:lg:text-[90px] font-bold relative z-[2]">Get In Touch</h1>
			</div>

			{/* Form Section */}
			<div className="md:lg:w-[525px] px-4 mt-4">
				<input
					type="text"
					placeholder="Your email"
					className="p-2 border border-gray-300 rounded-md w-full py-4"
				/>
				<div className="flex gap-2 mt-4">
					<input
						type="text"
						placeholder="First Name"
						className="p-2 border border-gray-300 rounded-md w-full py-4"
					/>
					<input
						type="text"
						placeholder="Last Name"
						className="p-2 border border-gray-300 rounded-md w-full py-4"
					/>
				</div>
				<button className="mt-4 bg-[#D6FF4D] text-black py-2 px-4 rounded-md w-full">
					Submit
				</button>
			</div>
		</div>
	);
};

export default Cta;
