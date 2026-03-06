"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/lib/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon, label }: { href: string; icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-neutral-400 hover:text-neutral-600 transition-colors duration-200"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="flex items-center justify-between lg:mt-24 mt-16 pt-8 border-t border-neutral-200 text-sm text-neutral-400">
      <div>
        <time>© {YEAR}</time>{" "}
        <a
          className="no-underline hover:text-neutral-700 transition-colors duration-200"
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          {metaData.title}
        </a>
      </div>
      <div className="flex items-center gap-3">
        <SocialLink href={socialLinks.twitter} icon={FaXTwitter} label="Twitter" />
        <SocialLink href={socialLinks.github} icon={FaGithub} label="GitHub" />
        <SocialLink href={socialLinks.instagram} icon={FaInstagram} label="Instagram" />
        <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} label="LinkedIn" />
        <SocialLink href={socialLinks.email} icon={TbMailFilled} label="Email" />
        <a
          href="/rss.xml"
          target="_self"
          aria-label="RSS Feed"
          className="text-neutral-400 hover:text-neutral-600 transition-colors duration-200"
        >
          <FaRss className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
}
