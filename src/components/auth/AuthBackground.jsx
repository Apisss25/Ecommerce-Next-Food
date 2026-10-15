"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

// Setiap bentuk punya warna, ukuran, posisi, dan gerakan sendiri.
// Hijau mudanya dibedakan: mint, tosca, hijau pastel, dan lime lembut.
const BLOBS = [
  {
    pos: "-left-32 -top-32",
    size: "h-[520px] w-[560px]",
    color: "#12B985",
    opacity: 0.95,
    blur: 120,
    move: { x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.12, 1] },
    duration: 22,
  },
  {
    pos: "left-[22%] -top-40",
    size: "h-[380px] w-[480px]",
    color: "#5EEAD4",
    opacity: 0.85,
    blur: 110,
    move: { x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.15, 1] },
    duration: 26,
  },
  {
    pos: "-left-40 top-[38%]",
    size: "h-[520px] w-[520px]",
    color: "#2ed2a0",
    opacity: 0.9,
    blur: 130,
    move: { x: [0, 70, 0], y: [0, -40, 0], scale: [1, 1.1, 1] },
    duration: 28,
  },
  {
    pos: "left-[18%] -bottom-48",
    size: "h-[440px] w-[560px]",
    color: "#10B981",
    opacity: 0.85,
    blur: 140,
    move: { x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.12, 1] },
    duration: 24,
  },
  {
    pos: "left-[48%] -bottom-36",
    size: "h-[340px] w-[440px]",
    color: "#86EFAC",
    opacity: 0.8,
    blur: 120,
    move: { x: [0, -60, 0], y: [0, -30, 0], scale: [1, 1.18, 1] },
    duration: 30,
  },
  {
    pos: "right-[6%] top-[22%]",
    size: "h-[360px] w-[360px]",
    color: "#99F6E4",
    opacity: 0.7,
    blur: 110,
    move: { x: [0, -40, 0], y: [0, 60, 0], scale: [1, 1.2, 1] },
    duration: 20,
  },
  {
    pos: "-right-28 -top-28",
    size: "h-[420px] w-[500px]",
    color: "#A7F3D0",
    opacity: 0.9,
    blur: 110,
    move: { x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.1, 1] },
    duration: 25,
  },
  {
    pos: "-right-32 bottom-[-10%]",
    size: "h-[460px] w-[520px]",
    color: "#34D399",
    opacity: 0.8,
    blur: 130,
    move: { x: [0, -60, 0], y: [0, -40, 0], scale: [1, 1.14, 1] },
    duration: 27,
  },
  {
    pos: "right-[30%] top-[8%]",
    size: "h-[240px] w-[300px]",
    color: "#BBF7D0",
    opacity: 0.6,
    blur: 90,
    move: { x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.25, 1] },
    duration: 18,
  },
];

export const AuthBackground = ({ children }) => {
  const reduceMotion = useReducedMotion();

  return (
    // Tepat setinggi layar dan tidak bisa di-scroll
    <div className="fixed inset-0 h-dvh w-full overflow-hidden bg-white p-3 sm:p-5">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[28px] bg-[linear-gradient(125deg,#12B985_0%,#2ed2a0_28%,#5EEAD4_55%,#86EFAC_78%,#A7F3D0_100%)] sm:rounded-[32px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {BLOBS.map((b, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${b.pos} ${b.size}`}
              style={{
                backgroundColor: b.color,
                opacity: b.opacity,
                filter: `blur(${b.blur}px)`,
              }}
              animate={reduceMotion ? undefined : b.move}
              transition={{
                duration: b.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          {/* Sorot putih tipis di tengah supaya ada area lebih terang */}
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-[120px]" />
        </div>

        <Link
          href="/"
          className="absolute left-5 top-5 z-20 flex items-center gap-1 text-sm font-semibold text-white drop-shadow-sm hover:opacity-80 sm:left-12 sm:top-7"
        >
          <ChevronLeft size={16} />
          Home page
        </Link>

        <div className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden px-4 py-14">
          {children}
        </div>
      </div>
    </div>
  );
};
