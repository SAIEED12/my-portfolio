"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { useLenis } from "@/components/SmoothScrollProvider";
import { MdOutlineFileDownload } from "react-icons/md";

const roles = ["MERN Stack Developer", "React Developer", "Next.js Builder"];

export default function HeroSection() {
  const heroRef = useRef(null);
  const lenisRef = useLenis();
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation logic
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
      setDisplayText(isDeleting ? current.slice(0, displayText.length - 1) : current.slice(0, displayText.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = useCallback((id) => {
    const lenis = lenisRef?.current;
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: -70, duration: 1.4 });
    }
  }, [lenisRef]);

  return (
    <section
      ref={heroRef}
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Glows */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ 
          position: "absolute", top: "-15%", right: "-10%", 
          width: "500px", height: "500px", 
          backgroundColor: "rgba(0, 229, 255, 0.04)", 
          filter: "blur(120px)", borderRadius: "50%" 
        }} />
      </div>

      {/* Main Container with Navbar-safe Padding */}
      <div 
        className="container-main"
        style={{ 
          position: "relative", 
          zIndex: 10,
          paddingTop: "160px", // Fixed: Added safe space for the 72px navbar
        }}
      >
        <div className="grid lg:grid-cols-[1.2fr_1fr] items-center gap-12 lg:gap-16" style={{ paddingBottom: "4rem" }}>
          
          {/* Content Column */}
          <motion.div className="flex flex-col items-start gap-7">
            <div style={{ marginBottom: "1.5rem" }}>
              <h1 
                style={{ 
                  fontWeight: "bold", 
                  lineHeight: "1.1", 
                  letterSpacing: "-0.03em", 
                  fontSize: "clamp(2.5rem, 5.5vw, 4rem)",
                  color: "#FFFFFF"
                }}
              >
                Hi, I&apos;m <span style={{ color: "#00E5FF" }}>Abu Saieed.</span>
              </h1>
              <div style={{ height: "1.75rem", display: "flex", alignItems: "center", marginTop: "0.75rem" }}>
                <p style={{ fontFamily: "monospace", fontSize: "1.125rem", color: "#9CA3AF" }}>
                  {displayText}
                  <span style={{ display: "inline-block", width: "2px", height: "1.2em", backgroundColor: "#00E5FF", marginLeft: "4px" }} />
                </p>
              </div>
            </div>

            <p style={{ fontSize: "1rem", lineHeight: "1.75", color: "#9CA3AF", maxWidth: "32rem" }}>
              From prototypes to production-ready systems, I turn ideas into scalable, user-focused products that people love to use.
            </p>


<div 
  style={{ 
    display: "flex", 
    flexWrap: "wrap", 
    alignItems: "center", 
    gap: "1rem", 
    paddingTop: "0.25rem" 
  }}
>
  {/* Get In Touch - Primary Button */}
  <MagneticButton onClick={() => scrollTo("contact")}>
    <span 
      className="cta-primary"
      style={{
        display: "inline-block",
        backgroundColor: "#00E5FF",
        color: "#0a0a0a",
        padding: "0.75rem 1.5rem",
        borderRadius: "9999px",
        fontWeight: "bold",
        fontSize: "0.875rem",
        transition: "all 0.3s ease",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = "#00E5FF";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 229, 255, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#00E5FF";
        e.currentTarget.style.color = "#0a0a0a";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      Get In Touch
    </span>
  </MagneticButton>

  {/* View Work - Outline Button */}
  <MagneticButton onClick={() => scrollTo("projects")}>
    <span 
      className="cta-outline"
      style={{
        display: "inline-block",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        color: "#FFFFFF",
        padding: "0.75rem 1.5rem",
        borderRadius: "9999px",
        fontWeight: "bold",
        fontSize: "0.875rem",
        transition: "all 0.3s ease",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#00E5FF";
        e.currentTarget.style.color = "#00E5FF";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
        e.currentTarget.style.color = "#FFFFFF";
      }}
    >
      View Work
    </span>
  </MagneticButton>

  {/* Resume Button */}
  <MagneticButton>
    <a 
      href="/Abu_Saieed_resume.pdf" 
      style={{ 
        display: "inline-flex", 
        alignItems: "center", 
        gap: "0.5rem", 
        padding: "0.75rem 1.5rem", 
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "9999px",
        color: "#FFFFFF",
        textDecoration: "none",
        fontSize: "0.875rem",
        fontWeight: "bold",
        transition: "all 0.3s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#00E5FF";
        e.currentTarget.style.color = "#00E5FF";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
        e.currentTarget.style.color = "#FFFFFF";
      }}
    >
      <MdOutlineFileDownload size={20} /> 
      <span>Resume</span>
    </a>
  </MagneticButton>
</div>
          </motion.div>

          {/* Image Column */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{ 
                position: "relative", 
                width: "min(420px, 90vw)", 
                height: "min(560px, 120vw)", 
                borderRadius: "24px", 
                overflow: "hidden", 
                border: "1px solid rgba(255, 255, 255, 0.07)",
                backgroundColor: "#111111"
              }}
            >
              <Image
                src="/Cross Armed.png"
                alt="Abu Saieed"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority
              />
              <div style={{ 
                position: "absolute", inset: "0 0 0 0", 
                background: "linear-gradient(to top, #0a0a0a, transparent 25%)" 
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}