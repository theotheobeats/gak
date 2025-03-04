const Cta = () => {
	return (
		<div className="flex justify-center items-center h-screen flex-col relative gap-8">
			<h1 className="text-4xl md:lg:text-[90px] font-bold relative z-[2]">
				Get In <span className="bg-[#D6FF4D]">Touch</span>
			</h1>

			{/* Form Section */}
			<div className="md:lg:w-[525px] px-4 mt-4">
				<input
					type="text"
					placeholder="Your Name"
					className="p-2 border border-gray-300 rounded-md w-full py-4"
				/>
				<div className="flex gap-2 mt-4">
					<select className="p-2 border border-gray-300 rounded-md w-full py-4">
						<option value="">I&apos;m a ...</option>
						<option value="christian">I'm a Christian/Catholic</option>
						<option value="non-christian">I'm a Non Christian</option>
					</select>
					<input
						type="text"
						placeholder="Your WhatsApp Number"
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
