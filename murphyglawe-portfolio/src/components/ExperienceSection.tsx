'use client';

import Image from 'next/image';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Information Technology Intern (Security Focused)",
    company: "Kohler Co.",
    location: "Kohler, WI",
    date: "May 2025 – Aug 2025",
    logo: "/logos/kohler.png",
    bullets: [
      "Collaborated with the HR IT team to implement the Workday Human Capital Management (HCM) platform for ~30,000 employees",
      "Configured Workday security policies, including role-based access control (RBAC) and domain security policies",
      "Set up security policies for integrations between Workday and third-party systems by defining access scopes and connection rules",
      "Performed unit testing on Workday business processes and integrations to validate correct functionality and access control"
    ],
  },
  {
    role: "IBM Z Student Ambassador",
    company: "IBM",
    location: "Remote",
    date: "Aug 2024 – January 2025",
    logo: "/logos/ibm.png",
    bullets: [
      "Promote IBM Z technologies and educate peers through workshops and presentations at Iowa State",
      "Demonstrate leadership by organizing and leading technical events",
      "Enhance technical skills by engaging with IBM Z resources and tools",
      "Foster a community of innovation and collaboration among students"
    ],
  },
  {
    role: "Cybersecurity Intern",
    company: "Cretex",
    location: "Minneapolis, MN",
    date: "May 2024 – Aug 2024",
    logo: "/logos/cretex.png",
    bullets: [
      "Implemented many extensible scripts in PowerShell to automate common IT tasks",
      "Developed CretexGPT, a secure internal AI assistant built with TypeScript, Next.js, Chakra UI, and Auth0, designed to replace public LLM tools like ChatGPT for safer enterprise use",
      "Conducted an internal audit of the company's active directory using PingCastle and Bloodhound",
      "Responded to security events and alerts using Arctic Wolf (MDR) and SentinelOne, contributing to threat triage and containment efforts",
      "Configured SAML (Security Assertion Markup Language) and SSO integrations for enterprise SaaS tools to improve identity federation and user experience",
      "Contributed to the implementation of MS Intune for mobile device management and configured Intune policies to manage mobile devices across the organization securely"
    ],
  },
  {
    role: "Information Technology Specialist",
    company: "ISU Solution Center",
    location: "Ames, IA",
    date: "Sep 2023 – Present",
    logo: "/logos/isu.png",
    bullets: [
      "Provided technical support to faculty, staff, and students, responding to IT emergencies.",
      "Delivered issue resolution via ServiceNow and trained users as needed.",
      "Collaborated with internal teams to resolve complex problems.",
      "Maintained IT documentation and upheld security protocols."
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen px-6 py-24 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 flex items-center gap-3 text-white">
        <Briefcase className="w-7 h-7" />
        Experience
      </h2>
      <div className="space-y-14">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start gap-6">
            {/* Logo */}
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full overflow-hidden ${
                exp.company === 'Kohler Co.' ? 'bg-white' : ''
              }`}
            >              
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <span className="text-base text-gray-400 mt-1 sm:mt-0">{exp.date}</span>
              </div>
              <p className="text-gray-400 text-base mb-3">
                {exp.company} – {exp.location}
              </p>
              <ul className="list-disc ml-5 space-y-2 text-gray-300 text-base">
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
