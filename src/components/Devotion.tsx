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

  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="section">
      <div className="page-container">
        <div className="mb-6 md:mb-8 max-w-3xl mx-auto">
          <div className="chip inline-block">Journal Prompts</div>
          <h3 className="font-serif text-3xl md:text-5xl mt-2">Words To Ground Your Mind</h3>
        </div>

        <div className="card max-w-3xl mx-auto p-4 md:p-5 mb-6">
          <div className="flex flex-col md:flex-row items-stretch gap-3">
            <input
              type="text"
              placeholder="Have a different question"
              className="flex-1 subtle-border rounded-lg p-3 bg-white"
            />
            <button className="btn btn-primary pill w-full md:w-auto">Ask Something</button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto grid gap-3">
          {isLoading ? (
            <div className="text-center py-8">Loading reflections...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">{error}</div>
          ) : reflections.length === 0 ? (
            <div className="text-center py-8">No reflections available</div>
          ) : (
            reflections.map((reflection) => {
              const isOpen = expandedId === reflection.id;
              return (
                <div key={reflection.id} className="card">
                  <button
                    className="w-full flex items-center justify-between p-4 text-left"
                    onClick={() => setExpandedId(isOpen ? null : reflection.id)}
                  >
                    <span className="text-base md:text-lg font-semibold">{reflection.title}</span>
                    <span className={`pill px-3 py-1 subtle-border text-sm ${isOpen ? "bg-[color:var(--accent)]" : "bg-white"}`}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 -mt-2">
                      <div className="text-sm text-[color:var(--muted-ink)] mb-3">{reflection.author.name}</div>
                      <button
                        className="btn btn-outline pill"
                        onClick={() => (window.location.href = `/devotion/${reflection.id}`)}
                      >
                        Read
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Devotion;
