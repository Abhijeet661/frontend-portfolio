import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* 🧭 Navigation Header */}
      <Header />

      {/* 🧑‍💻 About Section */}
      <About />

      {/* ⚙️ Skills Section */}
      <Skills />

      {/* 💼 Projects Section */}
      <Projects />

      {/* 📬 Contact Section */}
      <Contact />

      {/* 👣 Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-4 mt-8">
        <p>© {new Date().getFullYear()} Abhijit Wankhede | Built with Django & React ⚡</p>
      </footer>
    </div>
  );
}

export default App;