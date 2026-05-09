"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable hook that fades up all [data-reveal] elements
 * within a given container ref using GSAP ScrollTrigger.
 */
export default function useGSAPReveal(containerRef, deps = []) {
  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const elements = container.querySelectorAll("[data-reveal]");

      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
