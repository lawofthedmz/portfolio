// ProjectMarquee.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
const projects = [
    { name: 'Therabot', image: '/projects/therabot.PNG' },
    { name: 'CDC', image: '/projects/cdc.png' },
    { name: 'Football Game', image: '/projects/isu.png' },
    { name: 'Yale', image: '/projects/yale.png' },
    { name: 'YHack', image: '/projects/yhack.png' },
    { name: 'NYC', image: '/projects/nyc.png' },
    { name: 'Cybot', image: '/projects/cybot.png' },
];

export default function ProjectMarquee() {
  const doubled = [...projects, ...projects];
  const totalWidth = doubled.length * 384;

  return (
    <div className="overflow-hidden w-full relative px-4 py-10">
      <div className="marquee-mask">
        {[0, 1].map((index) => (
          <motion.div
            key={index}
            className="flex space-x-4 mb-4"
            animate={{ x: index === 0 ? [-totalWidth, 0] : [0, -totalWidth] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
            style={{ width: `${totalWidth}px` }}
          >
            {doubled.map((project, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-96 h-64 rounded-lg overflow-hidden group"
                style={{ transform: `translateX(${index * 192}px)` }}
              >
                <div className="absolute inset-0 rounded-lg pointer-events-none" />
                <Image
                    src={project.image}
                    alt={project.name}
                    width={384}
                    height={256}
                    className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
