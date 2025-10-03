import React from "react";

const skills = [
  { name: "Python", level: "Intermediate" },
  { name: "Django REST", level: "Intermediate" },
  { name: "React + Vite/CRA", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "SQLite / Postgres Basics", level: "Beginner+" },
  { name: "Git & Deploy (Vercel/Render)", level: "Working" },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Skills</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((s) => (
          <div
            key={s.name}
            className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{s.name}</span>
              <span className="text-xs text-gray-400">{s.level}</span>
            </div>
            <div className="mt-3 h-2 w-full bg-white/10 rounded">
              <div
                className="h-2 rounded bg-gradient-to-r from-blue-500 to-purple-500"
                style={{ width: `${Math.min(95, 60 + Math.random() * 35)}%` }}
                aria-hidden
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}