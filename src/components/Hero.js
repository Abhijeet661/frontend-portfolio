import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-black text-white px-4"
    >
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        Hi, I’m <span className="text-blue-400">Abhijit Wankhede</span>
      </h1>
      <p className="text-gray-300 max-w-2xl">
        I’m a passionate <span className="text-blue-300">Full Stack Developer</span> who loves creating clean,
        modern web applications using Django, React, and Python.
      </p>
      <div className="mt-6">
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}