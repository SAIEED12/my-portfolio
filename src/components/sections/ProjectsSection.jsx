"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/lib/projects";
import FramerReveal from "@/components/FramerReveal";

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      <div className="container-main relative z-10 ">
        {/* Header */}
        <div className="mb-14">
          <FramerReveal>
            <h2 className="section-heading">
              Things I&apos;ve  <span className="text-gradient-cyan">Built</span>
            </h2>
          </FramerReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {projects.map((project, index) => (
            <FramerReveal key={project.id} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(0,229,255,0.15)" }}
                transition={{ duration: 0.35 }}
                className="project-card group"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden rounded-t-[16px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", height: "100%" }}>
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
                    {project.title}
                  </h3>
                  <p style={{ marginBottom: "2rem" }} className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div style={{ marginBottom: "2rem" }} className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{ padding: "0.4rem 1rem" }}
                        className="text-[10px] font-mono uppercase tracking-wider rounded-full bg-white/[0.04] border border-white/[0.06] text-[var(--color-text-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-6 pt-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[#00E5FF] transition-colors"
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <FiExternalLink size={15} />
                      <span className="text-xs font-medium">Live</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[#00E5FF] transition-colors"
                      aria-label={`Source code of ${project.title}`}
                    >
                      <FiGithub size={15} />
                      <span className="text-xs font-medium">Source</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </FramerReveal>
          ))}
        </div>

        {/* View All Button */}
        <FramerReveal delay={0.4}>
          <div style={{ marginTop: "4rem" }} className="flex justify-center">
            <a
              href="https://github.com/SAIEED12?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-outline"
            >
              <span className="flex items-center gap-2 justify-center">
                View All Projects
                <FiGithub size={16} />
              </span>
            </a>
          </div>
        </FramerReveal>
      </div>
    </section>
  );
}
