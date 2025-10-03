import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
      <p className="text-gray-300 mb-6">
        Feel free to reach out for collaborations or just a friendly chat 😄
      </p>
      <div className="space-y-3">
        <p>📧 <a href="mailto:abhiwankhede661@gmail.com" className="hover:text-blue-400">abhiwankhede661@gmail.com</a></p>
        <p>🔗 <a href="https://github.com/Abhijeet661" target="_blank" rel="noreferrer" className="hover:text-blue-400">GitHub</a></p>
        <p>💼 <a href="https://www.linkedin.com/in/abhijit-wankhede/" target="_blank" rel="noreferrer" className="hover:text-blue-400">LinkedIn</a></p>
      </div>
    </section>
  );
}

export default Contact;