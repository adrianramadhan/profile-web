"use client";

import { motion } from "framer-motion";
import {
  Code,
  Brain,
  Globe,
  Clock,
  DollarSign,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description:
      "Complete web application development using modern technologies like React, Next.js, Node.js, and Golang.",
    features: [
      "Responsive web design",
      "RESTful API development",
      "Database design & optimization",
      "Authentication & authorization",
      "Deployment & DevOps",
    ],
    pricing: "Starting from $200",
    duration: "2-8 weeks",
    popular: true,
  },
  {
    icon: Brain,
    title: "AI/ML Proof-of-Concept",
    description:
      "Develop AI and machine learning solutions for data analysis, pattern recognition, and predictive modeling.",
    features: [
      "Data preprocessing & analysis",
      "Machine learning model development",
      "Computer vision solutions",
      "Natural language processing",
      "Model deployment & integration",
    ],
    pricing: "Starting from $300",
    duration: "1-4 weeks",
    popular: false,
  },
  {
    icon: Globe,
    title: "GIS & IoT Early Warning Systems",
    description:
      "Build geographic information systems and IoT-based monitoring solutions for disaster management.",
    features: [
      "Real-time sensor monitoring",
      "Geographic data visualization",
      "Alert & notification systems",
      "Data logging & reporting",
      "Mobile-responsive dashboards",
    ],
    pricing: "Starting from $500",
    duration: "3-6 weeks",
    popular: false,
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We discuss your requirements, goals, and timeline to create a detailed project plan.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    description:
      "I create wireframes, system architecture, and technical specifications for your project.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Agile development process with regular updates and thorough testing at each milestone.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description:
      "Project deployment with documentation and ongoing support for smooth operation.",
  },
];

export default function ServicesPage() {
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
          <h1 className="text-5xl font-bold text-gradient mb-6">My Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I offer comprehensive development services to help bring your ideas
            to life with modern technologies and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`glass rounded-2xl p-8 relative ${
                  service.popular ? "ring-2 ring-blue-400/50 scale-105" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="glass p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-gray-800">
                        {service.pricing}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">{service.duration}</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-gradient mb-16">
            My Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="glass w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="glass p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Lets discuss your ideas and create a solution that meets your
              needs. Im here to help you bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:adrianramadhan881@gmail.com"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="/projects"
                className="glass px-8 py-4 rounded-full hover:bg-gray-600/20 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
