'use client';

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen px-6 py-24 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Experience</h2>
      <ul className="space-y-4 text-gray-300">
        <li>
          <strong>Kohler Co. – IT Intern</strong><br />
          Summer 2025 | Worked on Workday and ServiceNow integration within Enterprise Platforms.
        </li>
        <li>
          <strong>Cretex – Cybersecurity Intern</strong><br />
          Deployed MDM using Intune, configured SAML/SSO, supported small IT/security team.
        </li>
        <li>
          <strong>ISU Solution Center – IT Support</strong><br />
          Assisted faculty/staff and resolved tickets using ServiceNow.
        </li>
      </ul>
    </section>
  );
}