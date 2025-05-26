"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Golang",
      "PHP",
      "Laravel",
      "REST API",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    category: "AI/ML",
    items: [
      "Python",
      "Sklearn",
      "TensorFlow",
      "OpenCV",
      "Machine Learning",
      "Data Visualization",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "GCP", "Odoo", "Arduino"],
  },
];

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
                href="/services"
                className="group glass px-8 py-4 rounded-full hover:bg-blue-600/20 transition-all duration-300 flex items-center space-x-2"
              >
                <span className="font-semibold">Services</span>
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

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gradient mb-6">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I am currently a sixth-semester Associate Degree (D3) student in
            Informatics Engineering at Politeknik Negeri Cilacap, deeply
            passionate about Software Engineering and now focusing on AI
            Engineering.
          </p>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            Personal Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Cilacap, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  D3 Informatics Engineering Student
                </span>
              </div>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                Over the past year I worked as a Full-Stack Developer designing
                and delivering web-based applications using React JS, Next JS,
                Express JS, and Golang.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
            Experience Timeline
          </h2> */}
          {/* <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="glass p-3 rounded-full">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-800">
                          {exp.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.type === "Professional"
                              ? "bg-blue-100 text-blue-800"
                              : exp.type === "Education"
                              ? "bg-green-100 text-green-800"
                              : exp.type === "Organization"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-blue-600 font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                      <p className="text-gray-600 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div> */}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-lg font-bold mb-4 text-gray-800">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white/30 px-3 py-2 rounded-lg text-sm text-gray-700"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
            Notable Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl flex items-start space-x-4"
              >
                <Award className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}
