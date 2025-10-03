import React from "react";

const LinkItem = ({ to, label }) => (
  <a
    href={to}
    className="px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-white/10 transition"
  >
    {label}
  </a>
);

export default function Navbar({ scrolled }) {
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition backdrop-blur ${
        scrolled ? "bg-[#0b0f16]/70 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="font-semibold tracking-wide hover:opacity-90">
          <span className="text-white">Abhijit</span>{" "}
          <span className="text-blue-400">Wankhede</span>
        </a>
        <div className="hidden sm:flex items-center">
          <LinkItem to="#home" label="Home" />
          <LinkItem to="#skills" label="Skills" />
          <LinkItem to="#projects" label="Projects" />
          <LinkItem to="#contact" label="Contact" />
        </div>
        <div className="sm:hidden text-sm text-gray-400">
          Scroll
        </div>
      </nav>
    </header>
  );
}