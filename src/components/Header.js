import React from "react";

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">🌐 Abhijit Wankhede</h1>
        <nav>
          <a href="#about" className="px-3 hover:text-blue-400">About</a>
          <a href="#skills" className="px-3 hover:text-blue-400">Skills</a>
          <a href="#projects" className="px-3 hover:text-blue-400">Projects</a>
          <a href="#contact" className="px-3 hover:text-blue-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;