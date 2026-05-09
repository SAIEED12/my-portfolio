"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/lib/skills";
import FramerReveal from "@/components/FramerReveal";

export default function SkillsSection() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} id="skills" className="section-padding relative overflow-hidden">
      <div className="container-main relative z-10">
        <div className="mb-14">
          <FramerReveal>
            <h2 className="section-heading">What I <span className="text-gradient-cyan">Work </span>With</h2>
          </FramerReveal>
        </div>

        <div className="space-y-28">
          {skillGroups.map((group, index) => (
            <FramerReveal key={group.title} delay={index * 0.2}>
              <div style={{ marginBottom: "6rem" }}>
                {/* Group Title with Line */}
                <div className="flex items-center gap-4" style={{ marginBottom: "1.5rem" }}>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-text)] whitespace-nowrap">
                    {group.title} {group.title === "Frontend" || group.title === "Backend" ? "Development" : ""}
                  </h3>
                  <div className="h-[1px] bg-white/[0.05] flex-grow" />
                </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {group.skills.map((skill) => {
                    const IconComp = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -5, borderColor: "rgba(0,229,255,0.2)", backgroundColor: "rgba(255,255,255,0.03)" }}
                        className="bg-white/[0.01] border border-white/[0.03] rounded-xl p-8 flex flex-col items-center justify-center gap-4 transition-colors duration-300"
                      >
                        <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                          <IconComp size={48} style={{ color: skill.color }} />
                        </div>
                        <span className="text-sm font-medium text-[var(--color-text-secondary)] text-center">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </FramerReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
