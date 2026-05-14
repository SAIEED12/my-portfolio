"use client";

import { useRef } from "react";
import Image from "next/image";
import FramerReveal from "@/components/FramerReveal";

const journey = [
  {
    year: "2024",
    title: "Started Web Development",
    desc: "Began learning HTML, CSS, and JavaScript fundamentals through self-study and online courses.",
  },
  {
    year: "2024",
    title: "React & Tailwind",
    desc: "Built first interactive projects with React, Tailwind CSS, and modern component architecture.",
  },
  {
    year: "2025",
    title: "Next.js & Full Stack",
    desc: "Expanded into server-side rendering, authentication, database design, and API development.",
  },
  {
    year: "2025",
    title: "Building Real Products",
    desc: "Shipping production-ready apps and growing as a professional developer every day.",
  },
];

const marqueeItems = [
  "React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS",
  "Node.js", "MongoDB", "GSAP", "Framer Motion", "Git", "Vercel",
];

export default function AboutSection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding relative overflow-hidden"
    >
      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20 lg:items-center">
          {/* Left: Sticky text */}
          <div>
            <FramerReveal>
              <h2 className="section-heading">
                About <span className="text-gradient-cyan">Me</span>
              </h2>
            </FramerReveal>
            
            <FramerReveal delay={0.2}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-secondary)] leading-[1.75]">
                  I&apos;m{" "}
                  <span className="text-gradient-cyan font-medium">
                    Abu Saieed
                  </span>
                  , an aspiring full-stack developer from Bangladesh with a deep
                  passion for crafting beautiful, functional, and performant web
                  experiences. Currently pursuing BSc. in Computer Science and Engineering in American International University - Bangladesh (AIUB), I specialize in React, Next.js, and the modern JavaScript
                  ecosystem. Every project I build is an opportunity to push my
                  skills further — from responsive layouts and smooth animations
                  to authentication flows and database design.
                </p>
              </div>
            </FramerReveal>
          </div>

          {/* Right: Image */}
          <FramerReveal delay={0.4}>
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] h-[400px] md:h-[600px] rounded-2xl overflow-hidden border border-white/[0.05] bg-[#111111]/50">
                <Image
                  src="/IMG_0989.jpg"
                  alt="Abu Saieed"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </FramerReveal>
        </div>
      </div>
    </section>
  );
}
