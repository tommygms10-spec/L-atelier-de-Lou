"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Petal {
  id: number;
  size: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

const colors = ["#D8A2A8", "#D4B483", "#E8D5C4", "#C8B8A6"];

function generatePetals(count: number): Petal[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: 10 + Math.random() * 22,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 6,
    duration: 14 + Math.random() * 12,
    color: colors[i % colors.length],
  }));
}

export default function AmbientScene() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setPetals(generatePetals(18));

    function handleMove(e: MouseEvent) {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Silk ribbon — pure CSS/SVG, no WebGL */}
      <motion.svg
        viewBox="0 0 800 300"
        className="absolute top-1/4 left-1/2 w-[140%] sm:w-[90%] max-w-3xl opacity-70"
        style={{ transform: `translate(-50%, -50%)` }}
        animate={{
          x: mouse.x * 14,
          y: mouse.y * 10,
          rotate: mouse.x * 2,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      >
        <defs>
          <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D8A2A8" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#E8D5C4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D4B483" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <motion.path
          d="M40,150 C160,40 280,260 400,150 C520,40 640,260 760,150"
          fill="none"
          stroke="url(#ribbonGradient)"
          strokeWidth="38"
          strokeLinecap="round"
          animate={{
            d: [
              "M40,150 C160,40 280,260 400,150 C520,40 640,260 760,150",
              "M40,150 C160,260 280,40 400,150 C520,260 640,40 760,150",
              "M40,150 C160,40 280,260 400,150 C520,40 640,260 760,150",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* Floating petals */}
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full blur-[0.5px]"
          style={{
            width: p.size,
            height: p.size * 0.7,
            top: `${p.top}%`,
            left: `${p.left}%`,
            background: p.color,
            opacity: 0.55,
          }}
          animate={{
            y: [0, -26, 0],
            x: [0, 12, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Soft light glow following the cursor */}
      <motion.div
        className="absolute w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,180,131,0.22), transparent 70%)",
        }}
        animate={{
          x: `calc(50% + ${mouse.x * 40}px)`,
          y: `calc(40% + ${mouse.y * 40}px)`,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 18 }}
      />
    </div>
  );
}
