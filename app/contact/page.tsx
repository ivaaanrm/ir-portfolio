"use client";

import { useState } from "react";
import { socialLinks } from "../lib/config";
import { InView } from "../components/in-view";
import { Mail, Send } from "lucide-react";

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
      <InView
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        viewOptions={{ amount: 0.3 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h2 className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider mb-6 text-neutral-600 dark:text-neutral-400">
          <Mail className="h-4 w-4" />
          Contact
        </h2>
      </InView>

      {/* Get in Touch Section */}
      <InView
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        viewOptions={{ amount: 0.3 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
      >
        <div className="mb-24">
          <p className="text-base text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed max-w-xl">
            I'm always open to discussing new opportunities, creative projects, or partnerships.
          </p>

          {/* Email */}
          <div className="mb-6">
            <a 
              href={socialLinks.email}
              className="text-base text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 inline-flex items-center gap-2"
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
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-400 transition-colors duration-200 underline underline-offset-4"
            >
              Twitter
            </a>
            <a
              href="/cv-ivan-romero.pdf"
              download
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 underline underline-offset-4"
            >
              Download CV
            </a>
          </div>
        </div>
      </InView>

      {/* Send a Message Section */}
      <InView
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        viewOptions={{ amount: 0.2 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
      >
        <div>
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-4 text-neutral-600 dark:text-neutral-400">
            <Send className="h-4 w-4" />
            Send a message
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed max-w-xl">
            Have a project in mind? Let me know what you're thinking.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-2 border-0 border-b-2 border-neutral-300 dark:border-neutral-600 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-0 bg-transparent text-black dark:text-white transition-colors duration-200 outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-2 border-0 border-b-2 border-neutral-300 dark:border-neutral-600 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-0 bg-transparent text-black dark:text-white transition-colors duration-200 outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-0 py-2 border-0 border-b-2 border-neutral-300 dark:border-neutral-600 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-0 bg-transparent text-black dark:text-white transition-colors duration-200 outline-none"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-0 py-2 border-0 border-b-2 border-neutral-300 dark:border-neutral-600 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-0 bg-transparent text-black dark:text-white transition-colors duration-200 resize-none outline-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {submitStatus === "success" && (
              <div className="py-3">
                <p className="text-sm text-green-600 dark:text-green-400">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="py-3">
                <p className="text-sm text-red-600 dark:text-red-400">
                  There was an error sending your message. Please try again or email me directly.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:gap-3"
            >
              <span className="relative z-10">
                {isSubmitting ? "Sending..." : "Send message"}
              </span>
              {!isSubmitting && (
                <svg 
                  className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
              <span className="absolute inset-0 bg-blue-600 dark:bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </form>
        </div>
      </InView>
    </section>
  );
}
