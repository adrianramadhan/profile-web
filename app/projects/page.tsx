"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Filter } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Internal Helpdesk System",
    description:
      "Built with Odoo backend (custom modules, ticket workflows, REST APIs) and Next.js frontend with responsive ticketing UI and admin dashboard, containerized via Docker.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Web",
    techStack: ["Next.js", "Odoo", "Docker", "REST API"],
    repoUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Syariah-compliant LMS Backend",
    description:
      "Developed for Bank bjb using Golang REST APIs, ensuring compliance with Islamic banking principles and modern web standards.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Web",
    techStack: ["Golang", "REST API", "PostgreSQL", "JWT"],
    repoUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Mini-ERP System",
    description:
      "Collaborative development for Politeknik Negeri Cilacap's Competitive Fund Project. Secured IDR 36 million funding from Ministry of Vocational Education.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Web",
    techStack: ["Laravel", "Livewire", "Tailwind CSS", "MySQL"],
    repoUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Legal Permit System",
    description:
      "Led client-side development for PT Solusi Bangun Indonesia using Next.js, enhancing permit management efficiency and compliance.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Web",
    techStack: ["Next.js", "React", "Tailwind CSS", "API Integration"],
    repoUrl: "#",
    liveUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "GIS-Based Early Warning System for Floods",
    description:
      "A web-based Geographic Information System that integrates IoT sensors and spatial data to monitor real-time flood conditions, visualize affected areas, and support decision-making for disaster mitigation.",
    image: "/placeholder.svg?height=300&width=400",
    category: "GIS",
    techStack: ["React.js", "PostGIS", "IoT", "Data Google Maps API"],
    repoUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 6,
    title: "E-Criminal Research ML Model",
    description:
      "Implemented K-Means and K-Medoid clustering methods using Sklearn for crime pattern analysis and data visualization.",
    image: "/placeholder.svg?height=300&width=400",
    category: "AI",
    techStack: ["Python", "Sklearn", "Google Colab", "Data Analysis"],
    repoUrl: "#",
    liveUrl: "#",
    featured: false,
  },
];

const categories = ["All", "Web", "AI", "GIS"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gradient mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of projects I worked on, ranging from full-stack web
            applications to AI/ML implementations and GIS solutions.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass p-2 rounded-full flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-600 ml-4" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "hover:bg-white/20 text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 ${
                  project.featured ? "ring-2 ring-blue-400/50" : ""
                }`}
              >
                {project.featured && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-medium">
                    Featured Project
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/40 px-3 py-1 rounded-full text-xs font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    <a
                      href={project.repoUrl}
                      className="flex items-center space-x-2 glass px-4 py-2 rounded-lg hover:bg-gray-600/20 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 glass px-4 py-2 rounded-lg hover:bg-blue-600/20 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 mb-16"
        >
          <div className="glass p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Im always open to discussing new opportunities and exciting
              projects. Lets create something amazing together!
            </p>
            <a
              href="/services"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300"
            >
              <span>View My Services</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
