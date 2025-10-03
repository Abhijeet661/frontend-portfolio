import React, { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://backend-portfolio-jlyx.onrender.com/api/projects/")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <section id="projects" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">My Projects</h2>
      {projects.length === 0 ? (
        <p className="text-gray-500">Loading projects or none available 😅</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {projects.map((p) => (
            <div
              key={p.id}
              className="border rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-600 mb-3">{p.description}</p>
              <p className="text-sm mb-3">
                <b>Tech:</b> {p.tech_stack}
              </p>
              <a
                href={p.github_link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                🔗 View on GitHub
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;