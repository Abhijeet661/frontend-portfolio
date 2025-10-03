import React, { useEffect, useState } from "react";

const API = "https://backend-portfolio-jlyx.onrender.com/api/projects/";

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        if (!isMounted) return;
        setList(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setError("Backend sleeping… click ‘Wake Backend’ once.");
        setLoading(false);
      });
    return () => (isMounted = false);
  }, []);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
        <a
          href={API}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-blue-400 hover:underline"
          title="Open API to wake backend"
        >
          Wake Backend
        </a>
      </div>

      {loading && (
        <p className="text-gray-400">Loading projects… ya koi project add nahi hai 😅</p>
      )}
      {error && <p className="text-red-400">{error}</p>}

      {!loading && list.length === 0 && !error && (
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <p className="text-gray-300">
            No projects found. Add from Django Admin later — they’ll show up here automatically.
          </p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((p) => (
          <article
            key={p.id}
            className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-gray-400 text-sm mt-2 line-clamp-3">{p.description}</p>
            <p className="text-xs text-gray-400 mt-3">Tech: {p.tech_stack}</p>

            <div className="mt-4 flex items-center justify-between">
              <a
                href={p.github_link}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-400 hover:underline"
              >
                View on GitHub →
              </a>
              <span className="text-xs text-gray-500">
                ❤️ {p.likes ?? 0}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}