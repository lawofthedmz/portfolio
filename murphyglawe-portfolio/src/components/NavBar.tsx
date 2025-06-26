'use client';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const sections = ['home', 'about', 'projects', 'experience', 'contact'];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty('--background', '#0a0a0a');
      root.style.setProperty('--foreground', '#ededed');
    } else {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#171717');
    }
  }, [darkMode]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(section);
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const handleClick = (section: string) => {
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-neutral-800/80 rounded-full px-4 py-2 backdrop-blur border border-neutral-700">
      <ul className="flex space-x-1 relative items-center">
        {sections.map((section) => {
          const isActive = activeSection === section;
          return (
            <li key={section}>
              <button
                onClick={() => handleClick(section)}
                className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                  isActive
                    ? 'text-black bg-cyan-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          );
        })}
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 p-2 text-white hover:text-cyan-400 transition rounded-full"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </li>
      </ul>
    </div>
  );
}
