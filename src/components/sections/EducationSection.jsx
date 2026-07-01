"use client";

import React from "react";
import FramerReveal from "@/components/FramerReveal";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
    institution: "American International University - Bangladesh (AIUB)",
    period: "2023 — Present",
    details: "Focused on Software Engineering, Object-Oriented Design, Database Management, and Full-Stack Development. Maintaining a strong academic record while building production-grade web applications.",
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <FramerReveal>
            <h2 className="section-heading">
              My <span className="text-gradient-cyan">Education</span>
            </h2>
          </FramerReveal>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/[0.08] ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {educationData.map((item, index) => (
            <FramerReveal key={index} delay={index * 0.15}>
              <div className="relative group">
                {/* Timeline node dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-[#00E5FF] bg-[#0a0a0a] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(0,229,255,0.4)]" />

                {/* Timeline node line pointer */}
                <div className="absolute -left-[23px] md:-left-[39px] top-3.5 w-4 h-[1px] bg-white/[0.08]" />

                {/* Content Card */}
                <div className="bg-[#111111] border border-white/[0.07] p-6 md:p-8 rounded-2xl hover:border-[rgba(0,229,255,0.2)] transition-all duration-500 hover:shadow-[0_0_40px_-12px_rgba(0,229,255,0.1)]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider bg-[#00E5FF]/5 border border-[#00E5FF]/10 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors duration-300 mb-2">
                    {item.degree}
                  </h3>
                  
                  <h4 className="text-sm font-semibold text-[var(--color-text-secondary)] mb-4">
                    {item.institution}
                  </h4>

                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] transition-colors duration-300">
                    {item.details}
                  </p>
                </div>
              </div>
            </FramerReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
