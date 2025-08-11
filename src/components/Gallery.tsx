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
        <section className="section">
            <div className="page-container flex flex-col gap-8">
                <div className="grid md:grid-cols-2 gap-8 items-end">
                    <div>
                        <div className="chip inline-block">Documentation</div>
                        <h3 className="font-serif text-3xl md:text-5xl mt-2">Gallery</h3>
                
                    </div>
                  
                </div>
                <div className="text-xl md:text-2xl font-semibold">Highlighted</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <img src="/img/gallery_2.png" alt="gallery highlight 1" className="w-full h-[240px] md:h-[260px] object-cover card md:col-span-2" />
                    <img src="/img/gallery_3.png" alt="gallery highlight 2" className="w-full h-[240px] md:h-[260px] object-cover card" />
                </div>
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
                <div className="flex flex-col gap-6" id="albums-section">
                    <h2 className="font-serif text-2xl md:text-4xl">All Albums</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {albums.map((album) => (
                            <Link
                                key={album.id}
                                to="/documentation/$id"
                                params={{ id: album.id }}
                                className="card overflow-hidden group">
                                <div className="aspect-[4/3] overflow-hidden">
                                    {album.images[0] && (
                                        <img
                                            src={album.images[0].url}
                                            alt={album.name}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    )}
                                </div>
                                <div className="p-4 flex items-start justify-between gap-3">
                                    <div>
                                        <h4 className="text-base md:text-lg font-semibold">{album.name}</h4>
                                        <p className="text-sm text-[color:var(--muted-ink)]">{new Date(album.date).toLocaleDateString()}</p>
                                    </div>
                                    <span className="btn btn-outline pill whitespace-nowrap">View</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="flex justify-center pt-2">
                        <button className="btn btn-primary pill">See More</button>
                    </div>
                </div>
			)}
            </div>
        </section>
    );
};

export default Gallery;
