'use client';

export default function AboutSection() {
  return (
    <section id="about" className=" px-6 py-24 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="text-[color:var(--foreground)] leading-relaxed">
        I’m currently a Cybersecurity Engineering student at Iowa State. I work part-time at the ISU Solution Center, help run hackathons, and am studying for security certifications. I've interned at Kohler and Cretex, and love learning by building.
      </p>
    </section>
  );
}