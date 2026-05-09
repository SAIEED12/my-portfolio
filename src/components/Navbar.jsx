"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@/components/SmoothScrollProvider";

const navLinks = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "skills", label: "Skills" },
  { href: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const lenisRef = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].href);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(navLinks[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback(
    (id) => {
      setIsOpen(false);
      const lenis = lenisRef?.current;
      if (lenis) {
        lenis.scrollTo(`#${id}`, { offset: -70, duration: 1.4 });
      } else {
        // Fallback
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenisRef]
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "navbar-scrolled"
            : "bg-transparent"
        }`}
      >
        <div className="container-main flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 cursor-pointer select-none group"
            role="button"
            tabIndex={0}
          >
            <div className="w-8 h-8 rounded-lg bg-[#00E5FF] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300">
              <span className="text-[#0a0a0a] font-black text-sm leading-none">
                AS
              </span>
            </div>
            <span className="text-lg font-bold tracking-[0.08em] text-white/90 group-hover:text-white transition-colors">
              SAIEED
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Nav Links */}
            <div className="flex items-center gap-x-6">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`nav-link relative py-1 text-[13px] font-medium transition-all duration-300 cursor-pointer whitespace-nowrap flex-none ${
                    active === link.href
                      ? "text-white"
                      : "text-white/40 hover:text-white/70"
                  }`}
                  role="button"
                  tabIndex={0}
                >
                  {active === link.href && (
                    <motion.div
                      layoutId="nav-line"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#00E5FF]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div
              onClick={() => scrollTo("contact")}
              className="ml-3 cta-primary text-[13px] !py-2 !px-5"
              role="button"
              tabIndex={0}
            >
              Let&apos;s Talk
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center cursor-pointer rounded-lg hover:bg-white/[0.05] transition-colors"
            role="button"
            tabIndex={0}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[1.5px] bg-white/80 origin-center"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-[1.5px] bg-white/80"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={
                  isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                className="block w-5 h-[1.5px] bg-white/80 origin-center"
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay + Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e0e]/98 backdrop-blur-xl border-b border-white/[0.06]"
            >
              {/* Drawer header - mirrors navbar */}
              <div className="container-main flex items-center justify-between h-[72px]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#00E5FF] flex items-center justify-center">
                    <span className="text-[#0a0a0a] font-black text-sm leading-none">
                      AS
                    </span>
                  </div>
                  <span className="text-lg font-bold tracking-[0.08em] text-white/90">
                    SAIEED
                  </span>
                </div>
                <div
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-lg hover:bg-white/[0.05] transition-colors"
                  role="button"
                  tabIndex={0}
                  aria-label="Close menu"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>

              {/* Drawer links */}
              <div className="px-6 pb-8 pt-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06 }}
                  >
                    <div
                      onClick={() => scrollTo(link.href)}
                      className={`flex items-center justify-between py-4 border-b border-white/[0.04] cursor-pointer transition-colors ${
                        active === link.href
                          ? "text-[#00E5FF]"
                          : "text-white/50 hover:text-white/80"
                      }`}
                      role="button"
                      tabIndex={0}
                    >
                      <span className="text-lg font-medium">{link.label}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="opacity-30"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="pt-6"
                >
                  <div
                    onClick={() => scrollTo("contact")}
                    className="submit-btn !w-full !text-center !block"
                    role="button"
                    tabIndex={0}
                  >
                    Let&apos;s Work Together
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
