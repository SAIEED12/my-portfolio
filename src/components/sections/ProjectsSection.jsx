'use client'
import React from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";
import FramerReveal from "@/components/FramerReveal";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Ambient Glows */}
        <div 
          className="absolute"
          style={{
            top: '0%',
            left: '-15%',
            width: '700px',
            height: '700px',
            backgroundColor: 'rgba(0, 229, 255, 0.06)',
            filter: 'blur(140px)',
            borderRadius: '50%',
          }}
        />
        <div 
          className="absolute"
          style={{
            bottom: '5%',
            right: '-15%',
            width: '650px',
            height: '650px',
            backgroundColor: 'rgba(123, 110, 246, 0.05)',
            filter: 'blur(140px)',
            borderRadius: '50%',
          }}
        />
      </div>

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <FramerReveal>
            <h2 className="section-heading">
              Things I&apos;ve <span className="text-gradient-cyan">Built</span>
            </h2>
          </FramerReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FramerReveal key={project.id} delay={index * 0.1}>
              <div className="group flex flex-col bg-[#111111] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-[rgba(0,229,255,0.2)] transition-all duration-500 hover:shadow-[0_0_40px_-12px_rgba(0,229,255,0.15)] h-full">
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/10 to-transparent z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content — inline style guarantees padding regardless of Tailwind purging */}
                <div
                  style={{
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    flexGrow: 1,
                  }}
                >
                  {/* Title */}
                  <h3 className="text-xl font-bold group-hover:text-[#00E5FF] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed text-[var(--color-text-secondary)] line-clamp-3"
                    style={{ flexGrow: 1 }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.75rem",
                    }}
                  >
                    {" "}

                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] tracking-widest font-mono bg-white/[0.05] text-[var(--color-text-muted)] border border-white/[0.08] uppercase inline-flex items-center justify-center transition-colors hover:bg-white/[0.08]"
                        style={{
                          padding: "0.35rem 0.85rem", 
                          borderRadius: "6px", 
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                      paddingTop: "0.75rem",
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                      marginTop: "auto",
                    }}
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-[var(--color-text-muted)] hover:text-[#00E5FF] transition-colors uppercase tracking-widest py-1"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live
                    </a>
                    {Array.isArray(project.github) ? (
                      project.github.map((repo) => (
                        <a
                          key={repo.label}
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-[var(--color-text-muted)] hover:text-[#00E5FF] transition-colors uppercase tracking-widest py-1"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                          {repo.label}
                        </a>
                      ))
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold text-[var(--color-text-muted)] hover:text-[#00E5FF] transition-colors uppercase tracking-widest py-1"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FramerReveal>
          ))}
          
        </div>
        
      </div>
      {/* View All Button */}
 <FramerReveal delay={0.3}>
  <div 
    style={{ 
      marginTop: "4rem",    
      marginBottom: "2rem",  
      display: "flex", 
      justifyContent: "center" 
    }}
  >
    <a
      href="https://github.com/SAIEED12?tab=repositories"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.6rem",           
        padding: "0.6rem 1.5rem", 
        border: "1px solid #00E5FF",
        borderRadius: "9999px",
        textDecoration: "none",
        backgroundColor: "transparent",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(0, 229, 255, 0.05)";
        e.currentTarget.querySelector('span').style.color = "#00E5FF";

        e.currentTarget.querySelector('svg').style.color = "#00E5FF";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.querySelector('span').style.color = "#FFFFFF";
        e.currentTarget.querySelector('svg').style.color = "#FFFFFF";
      }}
    >
      <span 
        style={{ 
          color: "#FFFFFF", 
          fontSize: "0.7rem", 
          fontWeight: "900", 
          letterSpacing: "0.1em", 
          textTransform: "uppercase",
          transition: "color 0.3s ease",
        }}
      >
        View All Projects
      </span>

      <FaExternalLinkAlt
        size={12} 
        style={{ 
          color: "#FFFFFF", 
          transition: "color 0.3s ease" 
        }} 
      />
    </a>
  </div>
</FramerReveal>
    </section>
  );
}
