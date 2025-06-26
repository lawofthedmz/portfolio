'use client';

import { Mail, FileText } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ProjectMarquee from '@/components/ProjectMarquee';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <HeroSection />
      <AboutSection />
      {/* <ProjectsSection /> */}
      <ProjectMarquee />
      <ExperienceSection />
      <ContactSection />

      <footer className="border-t border-gray-700 py-6 px-6 text-[color:var(--foreground)] text-sm flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <p>© {new Date().getFullYear()} Murphy Glawe. All rights reserved.</p>
          <p className="mt-2">
            Built with <a className="underline hover:text-gray-400" href="https://react.dev/">React</a>,{' '}
            <a className="underline hover:text-gray-400" href="https://tailwindcss.com/">Tailwind</a>.{' '}
            Source available on <a className="underline hover:text-gray-400" href="https://github.com/lawofthedmz">GitHub</a>.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4">
          <a href="mailto:contact@murphyglawe.com" className="hover:text-cyan-400 transition">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/murphy-glawe" target="_blank" className="hover:text-cyan-400 transition">
              <SiLinkedin className="w-6 h-6" />        
          </a>
          <a href="https://github.com/lawofthedmz" target="_blank" className="hover:text-cyan-400 transition">
              <SiGithub className="w-6 h-6" />        
          </a>
          <a href="/resume.pdf" target="_blank" className="hover:text-cyan-400 transition">
            <FileText className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </main>
  );
}
