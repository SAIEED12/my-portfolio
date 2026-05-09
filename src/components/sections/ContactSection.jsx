"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useState } from "react";
import FramerReveal from "@/components/FramerReveal";

const socials = [
  { name: "GitHub", href: "https://github.com/SAIEED12", icon: FiGithub },
  { name: "LinkedIn", href: "https://linkedin.com", icon: FiLinkedin },
  { name: "Twitter", href: "https://twitter.com", icon: FiTwitter },
];

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section ref={sectionRef} id="contact" className="section-padding relative overflow-hidden">
      <div className="container-main relative z-10">
        <div className="mb-14" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <FramerReveal>
            <h2 className="section-heading">Let&apos;s Work Together</h2>
          </FramerReveal>
          <FramerReveal delay={0.2}>
            <p className="text-[var(--color-text-secondary)]" style={{ maxWidth: "500px", textAlign: "center", marginBottom: "2.5rem" }}>
              Have a project in mind or just want to chat? I&apos;d love to hear from you!
            </p>
          </FramerReveal>
        </div>

        <FramerReveal delay={0.4}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%" }}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-20 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Message Sent!</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">Thank you! I&apos;ll get back to you shortly.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full"
                  style={{ margin: "0 auto", maxWidth: "500px" }}
                >
                  <div style={{ marginBottom: "1.5rem" }}>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      className="form-input"
                      {...register("name", { required: "Name is required" })}
                      id="contact-name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <input
                      type="email"
                      placeholder="Your Email *"
                      className="form-input"
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                      })}
                      id="contact-email"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <textarea
                      placeholder="Your Message *"
                      rows="5"
                      className="form-input resize-none"
                      {...register("message", { required: "Message is required" })}
                      id="contact-message"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <div className="pt-2 flex justify-center" style={{ marginBottom: "2rem" }}>
                    <button
                      type="submit"
                      className="submit-btn"
                    >
                      Send Message
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </FramerReveal>
      </div>
    </section>
  );
}
