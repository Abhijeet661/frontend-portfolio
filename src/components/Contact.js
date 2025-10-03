import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Contact</h2>

      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <p className="text-gray-300">
          Want to collaborate or hire me? Ping me on email or LinkedIn.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="mailto:your.email@example.com"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Abhijeet661"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}