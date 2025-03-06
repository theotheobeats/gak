import { useEffect, useState } from "react";

interface Author {
	id: string;
	name: string;
	image: string | null;
}

interface Reflection {
	id: string;
	title: string;
	author: Author;
	status: "DRAFT" | "PUBLISHED";
	createdAt: string;
}

const Devotion = () => {
	const [reflections, setReflections] = useState<Reflection[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchReflections = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_BACKEND_URL}/api/reflections/get`
				);
				if (!response.ok) {
					throw new Error("Failed to fetch reflections");
				}
				const data = await response.json();
				setReflections(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred");
			} finally {
				setIsLoading(false);
			}
		};

		fetchReflections();
	}, []);

	return (
		<div className="flex flex-col mt-24">
			<div className="text-[30px] md:lg:text-[50px] max-w-full font-bold text-black bg-[#D6FF4D] w-fit mx-auto md:lg:mx-0 md:lg:pl-24">
				Devotion & Reflection
			</div>
			<div className="px-4">
				<div className="flex flex-col md:lg:flex-row gap-8 px-4 md:lg:px-28 py-12">
					<div className="flex flex-col gap-4 w-full md:lg:w-full self-center mt-4">
						{isLoading ? (
							<div className="text-center py-8">Loading reflections...</div>
						) : error ? (
							<div className="text-center py-8 text-red-500">{error}</div>
						) : reflections.length === 0 ? (
							<div className="text-center py-8">No reflections available</div>
						) : (
							reflections.map((reflection) => (
								<div key={reflection.id}>
									<div className="flex justify-between">
										<div>
											<p className="text-xl md:lg:text-2xl font-bold">
												{reflection.title}
											</p>
											<span className="text-slate-500">
												{reflection.author.name}
											</span>
										</div>
										<button
											className="bg-white text-black px-4 py-2 rounded-4xl border border-black cursor-pointer hover:bg-[#D6FF4D] transition-all duration-300"
											onClick={() =>
												(window.location.href = `/devotion/${reflection.id}`)
											}>
											Renungkan
										</button>
									</div>
									<hr className="mt-4" />
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Devotion;
