import React from 'react';
import { motion } from 'framer-motion';

const SolarSystemBg = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-dark overflow-hidden pointer-events-none">
      {/* Background Deep Space */}
      <div className="absolute inset-0 bg-[#121214] opacity-90" />
      
      {/* Central Glowing Sun */}
      <motion.div
        className="absolute top-1/2 -right-32 md:-right-64 transform -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #ffcc00 0%, rgba(255, 204, 0, 0.4) 40%, transparent 70%)',
          boxShadow: '0 0 120px 40px rgba(255, 204, 0, 0.2)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Orbiting Planet 1 */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-[#1a1b1e] shadow-[inset_-2px_-2px_6px_rgba(255,204,0,0.8)] pointer-events-none"
        style={{ top: '30%', left: '40%' }}
        animate={{
          y: [-20, 20, -20],
          rotate: 360,
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 24, repeat: Infinity, ease: 'linear' },
        }}
      />

      {/* Orbiting Planet 2 */}
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-[#1a1b1e] shadow-[inset_-4px_-4px_10px_rgba(255,204,0,0.6)] pointer-events-none"
        style={{ top: '70%', left: '70%' }}
        animate={{
          y: [30, -30, 30],
          x: [-15, 15, -15],
          rotate: 360,
        }}
        transition={{
          y: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
        }}
      />

      {/* Orbiting Planet 3 */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-light opacity-50 shadow-md pointer-events-none"
        style={{ top: '20%', left: '20%' }}
        animate={{
          y: [-10, 10, -10],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default SolarSystemBg;
