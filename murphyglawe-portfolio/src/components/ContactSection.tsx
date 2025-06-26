'use client';

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      variants={fadeInUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.0 }}
      className="flex items-center justify-center px-6 py-32"
    >
      <div className="relative w-full max-w-5xl text-center rounded-3xl px-8 py-16 overflow-hidden text-[color:var(--foreground)]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Let's work together
        </h2>
        <p className="text-lg mb-6 text-[color:var(--foreground)]">
          I'm open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <motion.a
          href="mailto:contact@murphyglawe.com"
          className="inline-flex items-center px-10 py-4 bg-cyan-400 text-black rounded-full text-lg font-semibold hover:bg-cyan-300 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="mr-2" size={24} />
          Get in Touch
        </motion.a>
      </div>
    </motion.section>
  );
}
