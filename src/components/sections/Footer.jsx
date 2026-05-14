"use client";

import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import Link from "next/link";

const socials = [
  { name: "GitHub", href: "https://github.com/SAIEED12", icon: FiGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/mdabusaieed", icon: FiLinkedin },
  { name: "Facebook", href: "https://www.facebook.com/abu.saieed.90", icon: FiFacebook },
];

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black/20 mt-16 pt-16 pb-16">
      <div className="container-main">
        {/* Top Section with 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center border border-[var(--color-accent)]/20">
              <span className="text-xl font-bold text-[var(--color-accent)]">AS</span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-sm">
              Professional Full Stack Developer dedicated to crafting immersive, high-performance digital experiences with cutting-edge technology.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[#00E5FF] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Connect</h4>
            <div className="flex flex-col gap-2 text-sm text-[var(--color-text-secondary)]">
              <a href="mailto:abusaieed0@gmail.com" className="hover:text-[#00E5FF] transition-colors">
                abusaieed0@gmail.com
              </a>
              <a href="tel:+8801719036590" className="text-[var(--color-text-muted)] hover:text-[#00E5FF] transition-colors">
                +880 17190-36590
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-white/[0.05] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-colors"
                    aria-label={s.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Credit */}
        <div className="border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 pt-12">
          <p className="text-xs text-[var(--color-text-muted)]">
            © 2026 Abu Saieed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
