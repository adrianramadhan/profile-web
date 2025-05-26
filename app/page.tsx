"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen lg:pt-8 pt-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-gradient">Adrian</span>
              <br />
              <span className="text-gray-800">Ramadhan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              Full-Stack & AI Engineer passionate about building innovative web
              applications and AI solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700">Cilacap, Indonesia</span>
              </div>
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-gray-700">Available for work</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/about"
                className="group glass px-8 py-4 rounded-full hover:bg-blue-600/20 transition-all duration-300 flex items-center space-x-2"
              >
                <span className="font-semibold">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/projects"
                className="glass px-8 py-4 rounded-full hover:bg-purple-600/20 transition-all duration-300 font-semibold"
              >
                View Projects
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex space-x-4 justify-center lg:justify-start mt-8"
            >
              <a
                href="https://github.com/adrianramadhan"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-full hover:bg-gray-600/20 transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/adrian-ramadhan-0750541b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-full hover:bg-blue-600/20 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:adrianramadhan881@gmail.com"
                className="glass p-3 rounded-full hover:bg-red-600/20 transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 glass rounded-full"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-1">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/hero-image.jpeg"
                    alt="Adrian Putra Ramadhan"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="glass p-8 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-gradient mb-2">2+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="glass p-8 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-gradient mb-2">10+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
