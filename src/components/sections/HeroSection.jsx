"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { useLenis } from "@/components/SmoothScrollProvider";

const roles = ["Full Stack Developer", "React Enthusiast", "Next.js Builder"];

const stats = [
  { value: "4+", label: "Projects" },
  { value: "8+", label: "Technologies" },
  { value: "100%", label: "Dedication" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroSection() {
  const heroRef = useRef(null);
  const lenisRef = useLenis();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Typing animation
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 75;
    if (!isDeleting && displayText === current) {
      setTimeout(() => setIsDeleting(true), 2200);
      return;
    }
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }
    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? current.slice(0, displayText.length - 1)
          : current.slice(0, displayText.length + 1)
      );
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = useCallback(
    (id) => {
      const lenis = lenisRef?.current;
      if (lenis) {
        lenis.scrollTo(`#${id}`, { offset: -70, duration: 1.4 });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenisRef]
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-start lg:items-center overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] bg-[#00E5FF]/[0.04] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] bg-[#7B6EF6]/[0.04] blur-[100px] rounded-full" />
      </div>

      <div className="container-main relative z-10" style={isMobile ? { paddingTop: '100px' } : {}}>
        <div className="grid lg:grid-cols-[1.2fr_1fr] items-center gap-12 lg:gap-16">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-7"
          >

            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="font-bold leading-[1.1] tracking-[-0.03em] text-[clamp(2.5rem,5.5vw,4rem)]">
                Hi, I&apos;m{" "}
                <span className="text-[#00E5FF]">Abu Saieed.</span>
              </h1>
              <div className="h-7 flex items-center">
                <p className="font-mono text-base lg:text-lg text-[var(--color-text-muted)]">
                  {displayText}
                  <span className="inline-block w-[2px] h-[1em] bg-[#00E5FF] ml-1 animate-blink" />
                </p>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants}>
              <p className="text-base leading-[1.75] text-[var(--color-text-secondary)] max-w-lg">
                From prototypes to production-ready systems, I turn ideas into
                scalable, user-focused products that people love to use.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-1">
              <MagneticButton onClick={() => scrollTo("contact")}>
                <span className="cta-primary">Get In Touch</span>
              </MagneticButton>

              <MagneticButton onClick={() => scrollTo("projects")}>
                <span className="cta-outline">View Work</span>
              </MagneticButton>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-3">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  <div className="text-center min-w-[70px]">
                    <div className="text-2xl font-bold text-[#00E5FF]">
                      {stat.value}
                    </div>
                    <div className="text-[8px] uppercase tracking-[0.08em] text-[var(--color-text-muted)] mt-1">
                      {stat.label}
                    </div>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-[1px] h-8 bg-white/[0.08]" />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <div className="relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative w-[320px] h-[420px] sm:w-[360px] sm:h-[480px] lg:w-[420px] lg:h-[560px] rounded-[20px] overflow-hidden border border-white/[0.07]">
                <Image
                  src="/IMG_0989-Photoroom.png"
                  alt="Abu Saieed"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 520px"
                />
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-text-muted)] font-medium">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
