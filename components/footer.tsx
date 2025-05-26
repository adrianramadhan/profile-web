"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUp,
  Github,
  Linkedin,
  MessageCircle,
  Heart,
  Mail,
} from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/adrianramadhan",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/adrian-ramadhan-0750541b7/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/6288225292279",
    icon: MessageCircle,
    label: "WhatsApp",
  },
  {
    href: "mailto:adrianramadhan881@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20">
      <div className="glass border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Adrian Ramadhan
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Full-Stack & AI Engineer passionate about building innovative
              solutions. Lets create something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-3 rounded-full hover:bg-blue-600/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>

            {/* Quick Contact */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600">Available for new projects</span>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-gray-600 text-sm"
              >
                <span>© 2025 Adrian Ramadhan. Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>using Next.js</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  Contact
                </Link>
                <button
                  onClick={scrollToTop}
                  className="glass p-2 rounded-full hover:bg-blue-600/20 transition-all duration-300 group"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
