'use client';

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen px-6 py-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <ul className="grid md:grid-cols-2 gap-6 text-gray-300">
        <li className="border border-gray-600 rounded-lg p-4 hover:bg-gray-800 transition">
          <h3 className="text-xl font-semibold">Therabot</h3>
          <p>AI mental health assistant developed at a hackathon using Flutter + Python + Gemini API.</p>
        </li>
        <li className="border border-gray-600 rounded-lg p-4 hover:bg-gray-800 transition">
          <h3 className="text-xl font-semibold">CyBot Navigator</h3>
          <p>UART-controlled robot w/ Python GUI + IR/PING sensor mapping for CPR E 288 final.</p>
        </li>
      </ul>
    </section>
  );
}