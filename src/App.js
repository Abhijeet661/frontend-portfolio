import React, { useEffect, useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://backend-portfolio-jlyx.onrender.com/api/projects/")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Poppins, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>🌐 Abhijit Wankhede</h1>
      <h2 style={{ textAlign: "center", color: "#666" }}>My Projects</h2>

      {projects.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "40px" }}>
          Loading projects ya koi project add nahi hai 😅
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {projects.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <p>
                <b>Tech Stack:</b> {p.tech_stack}
              </p>
              <a href={p.github_link} target="_blank" rel="noreferrer">
                🔗 View on GitHub
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;