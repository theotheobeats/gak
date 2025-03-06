import { useEffect, useState } from "react";
import { useParams, Link } from "@tanstack/react-router";
import { ArrowLeft, Share } from "lucide-react";

interface Author {
	id: string;
	name: string;
	image: string | null;
}

interface Tag {
	id: string;
	name: string;
}

interface ReflectionTag {
	tag: Tag;
}

interface FeaturedImage {
	id: string;
	url: string;
}

interface Reflection {
	id: string;
	title: string;
	content: string;
	status: "DRAFT" | "PUBLISHED";
	createdAt: string;
	author: Author;
	tags: ReflectionTag[];
	featuredImage: FeaturedImage | null;
}

const DevotionDetail = () => {
	const { id } = useParams({ from: "/devotion/$id" });
	const [reflection, setReflection] = useState<Reflection | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchReflection = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_BACKEND_URL}/api/reflections/get/${id}`
				);
				if (!response.ok) {
					throw new Error("Failed to fetch reflection");
				}
				const data = await response.json();
				setReflection(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred");
			} finally {
				setIsLoading(false);
			}
		};

		fetchReflection();
	}, [id]);

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-xl">Loading reflection...</div>
			</div>
		);
	}

	if (error || !reflection) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-xl text-red-500">
					{error || "Reflection not found"}
				</div>
			</div>
		);
	}

	const formattedDate = new Date(reflection.createdAt).toLocaleDateString(
		"en-US",
		{
			year: "numeric",
			month: "long",
			day: "numeric",
		}
	);

	return (
		<div className="min-h-screen bg-white">
			{/* Back Button */}
			<div className="fixed top-8 left-8 z-10">
				<Link to="/" className="flex items-center gap-2 text-white hover:text-[#E8F967] transition-colors">
					<ArrowLeft size={24} />
					<span>Back to Home</span>
				</Link>
			</div>

			{/* Hero Section with Featured Image */}
			<div className="relative h-[50vh] w-full">
				{reflection.featuredImage ? (
					<img
						src={reflection.featuredImage.url}
						alt={reflection.title}
						className="w-full h-full object-cover"
					/>
				) : (
					<div className="w-full h-full bg-gradient-to-br from-[#0C4651] to-[#0A3B45]" />
				)}
				<div className="absolute inset-0 bg-black/40 flex items-end">
					<div className="container mx-auto px-4 py-12 text-white">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
							{reflection.title}
						</h1>
						<div className="flex items-center gap-4">
							{reflection.author.image && (
								<img
									src={reflection.author.image}
									alt={reflection.author.name}
									className="w-12 h-12 rounded-full"
								/>
							)}
							<div>
								<div className="font-medium">{reflection.author.name}</div>
								<div className="text-sm opacity-75">{formattedDate}</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className="container mx-auto px-4 py-12">
				<div className="max-w-3xl mx-auto">
					{/* Tags */}
					{reflection.tags.length > 0 && (
						<div className="flex gap-2 mb-8 flex-wrap">
							{reflection.tags.map(({ tag }) => (
								<span
									key={tag.id}
									className="px-3 py-1 bg-[#E8F967] text-sm rounded-full">
									{tag.name}
								</span>
							))}
						</div>
					)}

					{/* Main Content */}
					<div className="prose prose-lg max-w-none">
						<div dangerouslySetInnerHTML={{ __html: reflection.content }} />
					</div>

					{/* Share Section */}
					<div className="mt-12 pt-8 border-t">
						<h3 className="text-xl font-semibold mb-4">
							Share this reflection
						</h3>
						<div className="flex gap-4">
							<button
								onClick={() =>
									window.open(
										`https://api.whatsapp.com/send?text=${encodeURIComponent(
											`${reflection.title}\n\n${window.location.href}`
										)}`,
										"_blank"
									)
								}
								className="px-4 py-2 bg-[#25D366] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 cursor-pointer">
								<Share size={20} />
								Share on WhatsApp
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DevotionDetail;
