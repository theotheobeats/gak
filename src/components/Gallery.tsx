const Gallery = () => {
	return (
		<div className="flex flex-col mt-8 md:mt-12 lg:mt-16 px-4 sm:px-8 md:px-16 lg:px-24 gap-8">
			<div className="flex flex-col md:flex-row w-full gap-8 md:gap-12 lg:gap-16">
				<div className="flex flex-col w-full">
					<span className="text-3xl sm:text-4xl md:text-5xl lg:text-[75px] font-bold">
						Gallery
					</span>
					<span className="text-3xl sm:text-4xl md:text-5xl lg:text-[75px] font-bold bg-[#E8F967]">
						Documentation
					</span>
					<input
						type="text"
						placeholder="Search"
						className="w-full md:w-2/3 lg:w-1/2 mt-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0C4651] focus:border-transparent"
					/>
				</div>
				<div className="w-full md:w-auto justify-center md:justify-end items-center md:items-end hidden md:lg:block">
					<img
						src="/img/gallery.png"
						alt="gallery"
						className="max-w-full h-auto"
					/>
				</div>
			</div>
			<div className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8 md:mt-12 lg:mt-16">
				Highlighted
			</div>
			<img src="/img/gallery_2.png" alt="gallery" className="w-full" />
			<img src="/img/gallery_3.png" alt="gallery" className="w-full" />

			{/* Documentation Timeline */}
			<div className="flex flex-col gap-8">
				<h2 className="text-4xl font-bold">2025</h2>

				{/* January Section */}
				<div className="flex flex-col gap-6">
					<h3 className="text-xl">January</h3>
					<div className="flex flex-col gap-4">
						{/* Documentation Item */}
						<div className="flex items-center gap-4">
							<div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
							<div className="flex-1 flex justify-between items-center">
								<div className="flex flex-col">
									<h4 className="text-xl font-bold">
										Judul Dokumentasi Disini
									</h4>
									<p className="text-gray-600">14 Februari 2025</p>
								</div>
								<button className="px-6 py-2 border border-black rounded-full hover:bg-[#E8F967] transition-colors">
									Lihat
								</button>
							</div>
						</div>

						{/* Duplicate Documentation Item */}
						<div className="flex items-center gap-4">
							<div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
							<div className="flex-1 flex justify-between items-center">
								<div className="flex flex-col">
									<h4 className="text-xl font-bold">
										Judul Dokumentasi Disini
									</h4>
									<p className="text-gray-600">14 Februari 2025</p>
								</div>
								<button className="px-6 py-2 border border-black rounded-full hover:bg-[#E8F967] transition-colors">
									Lihat
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* February Section */}
				<div className="flex flex-col gap-6">
					<h3 className="text-xl">February</h3>
					<div className="flex flex-col gap-4">
						{/* Documentation Item */}
						<div className="flex items-center gap-4">
							<div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
							<div className="flex-1 flex justify-between items-center">
								<div className="flex flex-col">
									<h4 className="text-xl font-bold">
										Judul Dokumentasi Disini
									</h4>
									<p className="text-gray-600">14 Februari 2025</p>
								</div>
								<button className="px-6 py-2 border border-black rounded-full hover:bg-[#E8F967] transition-colors">
									Lihat
								</button>
							</div>
						</div>

						{/* Duplicate Documentation Item */}
						<div className="flex items-center gap-4">
							<div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
							<div className="flex-1 flex justify-between items-center">
								<div className="flex flex-col">
									<h4 className="text-xl font-bold">
										Judul Dokumentasi Disini
									</h4>
									<p className="text-gray-600">14 Februari 2025</p>
								</div>
								<button className="px-6 py-2 border border-black rounded-full hover:bg-[#E8F967] transition-colors">
									Lihat
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* See More Button */}
				<div className="flex justify-center">
					<button className="px-6 py-2 border border-black rounded-full hover:bg-[#E8F967] transition-colors">
						See More
					</button>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
