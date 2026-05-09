"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    // Hide on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        setHovered(true);
      }
    };

    const handleOut = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [cursorX, cursorY, visible]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: hovered ? 40 : 10,
        height: hovered ? 40 : 10,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        width: { type: "spring", stiffness: 400, damping: 25 },
        height: { type: "spring", stiffness: 400, damping: 25 },
        opacity: { duration: 0.2 },
      }}
      className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full bg-white mix-blend-difference"
    />
  );
}
