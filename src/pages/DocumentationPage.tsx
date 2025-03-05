import { useEffect, useState } from "react";
import { useParams, Link } from "@tanstack/react-router";
import {
	ArrowLeft,
	ArrowLeftCircle,
	ArrowRightCircle,
	Download,
	Expand,
	X,
} from "lucide-react";

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
	title: string;
	date: string;
	images: Image[];
	uploadedBy: User;
}

const DocumentationPage = () => {
	const { id } = useParams({ from: "/documentation/$id" });
	const [album, setAlbum] = useState<Album | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
		null
	);
	const imagesPerPage = 10;

	useEffect(() => {
		const fetchAlbum = async () => {
			try {
				const response = await fetch(`http://localhost:3001/api/albums/${id}`);
				if (!response.ok) {
					throw new Error("Failed to fetch album");
				}
				const data = await response.json();
				setAlbum(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred");
			} finally {
				setIsLoading(false);
			}
		};

		fetchAlbum();
	}, [id]);

	const handleKeyPress = (e: KeyboardEvent) => {
		if (selectedImageIndex === null || !album) return;

		if (e.key === "ArrowLeft") {
			setSelectedImageIndex((prev) =>
				prev !== null ? Math.max(0, prev - 1) : null
			);
		} else if (e.key === "ArrowRight") {
			setSelectedImageIndex((prev) =>
				prev !== null ? Math.min(album.images.length - 1, prev + 1) : null
			);
		} else if (e.key === "Escape") {
			setSelectedImageIndex(null);
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, [selectedImageIndex, album]);

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-xl">Loading album...</div>
			</div>
		);
	}

	if (error || !album) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-xl text-red-500">{error || "Album not found"}</div>
			</div>
		);
	}

	const totalPages = Math.ceil(album.images.length / imagesPerPage);
	const currentImages = album.images.slice(
		(currentPage - 1) * imagesPerPage,
		currentPage * imagesPerPage
	);

	const downloadImage = async (url: string, filename: string) => {
		const response = await fetch(url);
		const blob = await response.blob();
		const objectUrl = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = objectUrl;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(objectUrl);
	};

	const downloadAllImages = () => {
		album.images.forEach((image, index) => {
			setTimeout(() => {
				downloadImage(image.url, `${album.title}-${index + 1}.jpg`);
			}, index * 500); // Stagger downloads to prevent browser issues
		});
	};

	return (
		<div className="min-h-screen bg-white pb-12">
			{/* Back Button */}
			<div className="fixed top-8 left-8 z-10">
				<Link
					to="/"
					className="flex items-center gap-2 text-[#0C4651] hover:text-[#0A3B45] transition-colors">
					<ArrowLeft size={24} />
					<span>Back to Home</span>
				</Link>
			</div>

			{/* Album Header */}
			<div className="pt-24 px-4 sm:px-8 md:px-16 lg:px-24">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-4xl font-bold mb-4">{album.title}</h1>
					<div className="flex items-center justify-between mb-8">
						<div className="flex items-center gap-4">
							{album.uploadedBy.image && (
								<img
									src={album.uploadedBy.image}
									alt={album.uploadedBy.name}
									className="w-10 h-10 rounded-full"
								/>
							)}
							<div>
								<div className="font-medium">{album.uploadedBy.name}</div>
								<div className="text-sm text-gray-500">
									{new Date(album.date).toLocaleDateString()}
								</div>
							</div>
						</div>
						<button
							onClick={downloadAllImages}
							className="flex items-center gap-2 px-4 py-2 bg-[#0C4651] text-white rounded-lg hover:bg-[#0A3B45] transition-colors">
							<Download size={20} />
							Download All
						</button>
					</div>
				</div>
			</div>

			{/* Image Grid */}
			<div className="px-4 sm:px-8 md:px-16 lg:px-24">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{currentImages.map((image, index) => (
							<div key={image.id} className="relative group">
								<img
									src={image.url}
									alt=""
									className="w-full aspect-square object-cover rounded-lg"
								/>
								<div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
									<button
										onClick={() =>
											setSelectedImageIndex(
												(currentPage - 1) * imagesPerPage + index
											)
										}
										className="p-2 bg-white rounded-full hover:bg-[#E8F967] transition-colors cursor-pointer">
										<Expand className="text-black" size={24} />
									</button>
									<button
										onClick={() =>
											downloadImage(image.url, `${album.title}-${image.id}.jpg`)
										}
										className="p-2 bg-white rounded-full hover:bg-[#E8F967] transition-colors cursor-pointer">
										<Download className="text-black" size={24} />
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Image Modal */}
			{selectedImageIndex !== null && album && (
				<div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
					<button
						onClick={() => setSelectedImageIndex(null)}
						className="absolute top-4 right-4 text-white hover:text-[#E8F967] transition-colors">
						<X size={32} />
					</button>

					<button
						onClick={() =>
							setSelectedImageIndex(Math.max(0, selectedImageIndex - 1))
						}
						className="absolute left-4 text-white hover:text-[#E8F967] transition-colors disabled:opacity-50"
						disabled={selectedImageIndex === 0}>
						<ArrowLeftCircle size={32} />
					</button>

					<div className="max-w-[90vw] max-h-[90vh]">
						<img
							src={album.images[selectedImageIndex].url}
							alt=""
							className="max-w-full max-h-[90vh] object-contain"
						/>
					</div>

					<button
						onClick={() =>
							setSelectedImageIndex(
								Math.min(album.images.length - 1, selectedImageIndex + 1)
							)
						}
						className="absolute right-4 text-white hover:text-[#E8F967] transition-colors disabled:opacity-50"
						disabled={selectedImageIndex === album.images.length - 1}>
						<ArrowRightCircle size={32} />
					</button>
				</div>
			)}

			{/* Pagination */}
			{totalPages > 1 && (
				<div className="flex justify-center gap-2 mt-8">
					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
						<button
							key={page}
							onClick={() => setCurrentPage(page)}
							className={`px-4 py-2 rounded-lg ${
								currentPage === page
									? "bg-[#0C4651] text-white"
									: "bg-gray-100 hover:bg-gray-200"
							}`}>
							{page}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default DocumentationPage;
