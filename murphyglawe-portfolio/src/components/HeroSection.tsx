'use client';
import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import dynamic from 'next/dynamic';

const SiGithub = dynamic(() =>
  import('react-icons/si').then((mod) => mod.SiGithub)
);
const SiLinkedin = dynamic(() =>
  import('react-icons/si').then((mod) => mod.SiLinkedin)
);
export default function HeroSection() {
  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        className="text-5xl font-bold text-[color:var(--foreground)] mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Murphy Glawe
      </motion.h1>
      <motion.p
        className="text-xl text-[color:var(--foreground)] max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Cybersecurity Engineering student at Iowa State. Passionate about infrastructure, red/blue teaming, and leadership. Future CISO in the making.
      </motion.p>
      <div className="mt-6 flex gap-4">
        <a href="mailto:contact@murphyglawe.com" className="hover:text-cyan-400 transition">
          <Mail className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com/in/murphy-glawe" target="_blank" className="hover:text-cyan-400 transition">
            <SiLinkedin className="w-6 h-6" />        
        </a>
        <a href="https://github.com/lawofthedmz" target="_blank" className="hover:text-cyan-400 transition">
            <SiGithub className="w-6 h-6" />        
        </a>
        <a href="/resume.pdf" target="_blank" className="hover:text-cyan-400 transition">
          <FileText className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}