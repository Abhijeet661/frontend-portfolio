import React from "react";

function Skills() {
  const skills = ["Python", "Django", "React", "SQL", "HTML", "CSS", "GitHub"];

  return (
    <section id="skills" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white shadow-md rounded-xl px-6 py-3 text-gray-700 font-medium hover:bg-blue-50 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;