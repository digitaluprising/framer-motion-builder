'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = "w-6 h-6", width = 24, height = 24 }: LogoProps) {
  return (
    <motion.div
      className={className}
      animate={{ rotateY: 360 }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        transformStyle: "preserve-3d"
      }}
    >
      <Image
        src="/logo.png"
        alt="Framer Motion Builder Logo"
        width={width}
        height={height}
        className="w-full h-full"
      />
    </motion.div>
  );
}
