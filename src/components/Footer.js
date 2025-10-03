import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-400 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Abhijit Wankhede</p>
        <p className="opacity-75">Built with Django + React + Tailwind</p>
      </div>
    </footer>
  );
}