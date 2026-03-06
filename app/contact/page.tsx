"use client";

import { useState } from "react";
import { socialLinks } from "../lib/config";
import { InView } from "../components/in-view";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const mailtoLink = `mailto:iromero.py@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto pt-0 pb-12">
      {/* Page Title */}
      <InView variants={fadeUp} transition={{ duration: 0.5 }}>
        <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-8">
          Contact
        </h2>
      </InView>

      {/* Get in Touch Section */}
      <InView variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
        <div className="mb-20">
          <p className="text-[15px] text-neutral-500 mb-8 leading-relaxed max-w-xl">
            I&apos;m always open to discussing new opportunities, creative projects, or partnerships.
          </p>

          {/* Email */}
          <div className="mb-6">
            <a
              href={socialLinks.email}
              className="text-base text-neutral-900 hover:text-neutral-500 transition-colors duration-200"
            >
              iromero.py@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 flex-wrap">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors duration-200 underline underline-offset-4 decoration-neutral-300"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors duration-200 underline underline-offset-4 decoration-neutral-300"
            >
              GitHub
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors duration-200 underline underline-offset-4 decoration-neutral-300"
            >
              Twitter
            </a>
            <a
              href="/cv-ivan-romero.pdf"
              download="cv-ivan-romero.pdf"
              className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors duration-200 underline underline-offset-4 decoration-neutral-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </InView>

      {/* Send a Message Section */}
      <InView variants={fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
        <div>
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-3">
            Send a message
          </h2>
          <p className="text-[15px] text-neutral-500 mb-10 leading-relaxed max-w-xl">
            Have a project in mind? Let me know what you&apos;re thinking.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-xs font-medium tracking-wider uppercase text-neutral-400 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-2 border-0 border-b border-neutral-200 focus:border-neutral-900 focus:ring-0 bg-transparent text-neutral-900 transition-colors duration-200 outline-none placeholder:text-neutral-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium tracking-wider uppercase text-neutral-400 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-2 border-0 border-b border-neutral-200 focus:border-neutral-900 focus:ring-0 bg-transparent text-neutral-900 transition-colors duration-200 outline-none placeholder:text-neutral-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-medium tracking-wider uppercase text-neutral-400 mb-3">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-0 py-2 border-0 border-b border-neutral-200 focus:border-neutral-900 focus:ring-0 bg-transparent text-neutral-900 transition-colors duration-200 outline-none placeholder:text-neutral-300"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium tracking-wider uppercase text-neutral-400 mb-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-0 py-2 border-0 border-b border-neutral-200 focus:border-neutral-900 focus:ring-0 bg-transparent text-neutral-900 transition-colors duration-200 resize-none outline-none placeholder:text-neutral-300"
                placeholder="Tell me about your project..."
              />
            </div>

            {submitStatus === "success" && (
              <div className="py-3">
                <p className="text-sm text-neutral-500">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="py-3">
                <p className="text-sm text-red-400">
                  There was an error sending your message. Please try again or email me directly.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium cursor-pointer transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-700 hover:gap-3"
            >
              <span>
                {isSubmitting ? "Sending..." : "Send message"}
              </span>
              {!isSubmitting && (
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </InView>
    </section>
  );
}
