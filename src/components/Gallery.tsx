import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

interface User {
	id: string;
	name: string;
	image: string | null;
}

interface Image {
	id: string;
	url: string;
	albumId: string;
}

interface Album {
	id: string;
	name: string;
	date: string;
	images: Image[];
	uploadedBy: User;
}

const Gallery = () => {
	const [albums, setAlbums] = useState<Album[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchAlbums = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_BACKEND_URL}/api/albums`
				);
				if (!response.ok) {
					throw new Error("Failed to fetch albums");
				}
				const data = await response.json();
				setAlbums(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred");
			} finally {
				setIsLoading(false);
			}
		};

		fetchAlbums();
	}, []);

	return (
		<div className="flex flex-col mt-8 md:mt-12 lg:mt-16 px-8 sm:px-8 md:px-16 lg:px-24 gap-8">
			<div className="flex flex-col md:flex-row w-full gap-8 md:gap-12 lg:gap-16">
				<div className="flex flex-col w-full">
					<span className="text-3xl sm:text-4xl md:text-5xl lg:text-[75px] font-bold">
						Gallery
					</span>
					<span className="text-3xl sm:text-4xl md:text-5xl lg:text-[75px] font-bold bg-[#E8F967]">
						Documentation
					</span>
					<button
						onClick={() =>
							document
								.getElementById("albums-section")
								?.scrollIntoView({ behavior: "smooth" })
						}
						className="w-full md:w-2/3 lg:w-full mt-4 px-4 py-2 rounded-lg bg-white border border-black text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0C4651] focus:ring-offset-2 cursor-pointer hover:opacity-80">
						View All Albums
					</button>
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
			<img
				src="/img/gallery_2.png"
				alt="gallery"
				className="max-w-full h-auto"
			/>
			<img
				src="/img/gallery_3.png"
				alt="gallery"
				className="max-w-full h-auto"
			/>
			{/* {isLoading ? (
				<div className="text-center py-8">Loading albums...</div>
			) : error ? (
				<div className="text-center py-8 text-red-500">{error}</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{albums.slice(0, 3).map((album) => (
						<Link
							key={album.id}
							to="/documentation/$id"
							params={{ id: album.id }}
							className="group cursor-pointer">
							<div className="relative aspect-square overflow-hidden rounded-lg">
								{album.images[0] && (
									<img
										src={album.images[0].url}
										alt={album.name}
										className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
									/>
								)}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
									<div className="p-4 text-white">
										<h3 className="text-xl font-bold mb-2">{album.name}</h3>
										<div className="flex items-center gap-2">
											{album.uploadedBy.image && (
												<img
													src={album.uploadedBy.image}
													alt={album.uploadedBy.name}
													className="w-6 h-6 rounded-full"
												/>
											)}
											<span className="text-sm opacity-90">
												{album.uploadedBy.name}
											</span>
										</div>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			)} */}

			{/* Documentation Timeline */}
			{isLoading ? (
				<div className="text-center py-8">Loading albums...</div>
			) : error ? (
				<div className="text-center py-8 text-red-500">{error}</div>
			) : (
				<div className="flex flex-col gap-8" id="albums-section">
					<h2 className="text-4xl font-bold">All Albums</h2>

					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-4">
							{albums.map((album) => (
								<div className="flex items-center gap-4">
									<div className="w-24 h-24 rounded-lg overflow-hidden">
										{album.images[0] && (
											<img
												src={album.images[0].url}
												alt={album.name}
												className="w-full h-full object-cover"
											/>
										)}
									</div>
									<div className="flex-1 flex justify-between items-center">
										<div className="flex flex-col">
											<h4 className="text-xl font-bold">{album.name}</h4>
											<p className="text-gray-600">
												{new Date(album.date).toLocaleDateString()}
											</p>
										</div>
										<Link
											to="/documentation/$id"
											params={{ id: album.id }}
											className="px-6 py-2 border border-black rounded-full hover:bg-[#E8F967] transition-colors">
											Lihat
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* See More Button */}
					<div className="flex justify-center">
						<button className="px-6 py-2 border border-black rounded-full hover:bg-[#E8F967] transition-colors">
							See More
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Gallery;
