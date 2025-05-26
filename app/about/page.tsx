"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

// const experiences = [
//   {
//     title: "Laskar AI Scholarship Program",
//     company: "Lintasarta × Dicoding × NVIDIA",
//     period: "Feb 2025 - Jun 2025",
//     type: "Education",
//     description:
//       "AI Engineer Cohort - Completed all milestones ahead of schedule in this intensive digital-talent development track focused on AI Engineering",
//     icon: Brain,
//   },
//   {
//     title: "Fullstack Developer Intern",
//     company: "PT Tristar Surya Gemilang",
//     period: "Aug 2024 - Dec 2024",
//     type: "Professional",
//     description:
//       "Built internal Helpdesk app with Odoo and Next.js, developed Syariah-compliant LMS backend for Bank bjb using Golang REST APIs",
//     icon: Code,
//   },
//   {
//     title: "Software Developer",
//     company: "Teaching Factory Computer and Business Department",
//     period: "Aug 2023 - Apr 2024",
//     type: "Professional",
//     description:
//       "Developed Mini-ERP System securing IDR 36 million funding, contributed to Legal Permit System using Next.js",
//     icon: Code,
//   },
//   {
//     title: "Leader - PROTIC Programming Community",
//     company: "Politeknik Negeri Cilacap",
//     period: "Jul 2023 - Jun 2024",
//     type: "Organization",
//     description:
//       "Led 56 committee members and 170+ active community members, initiated JKB Learning Center program",
//     icon: Users,
//   },
//   {
//     title: "Research Assistant",
//     company: "Politeknik Negeri Cilacap",
//     period: "Jul 2023 - May 2024",
//     type: "Research",
//     description:
//       "Implemented K-Means and K-Medoid methods for e-criminal research, developed Early Warning System for Floods using React.js",
//     icon: Brain,
//   },
// ];

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

// const achievements = [
//   "Top 2 in KRENOVA Competition, Cilacap Regency Government (2024)",
//   "Top 16 Finalist in Indonesian Wheeled Soccer Robot Contest (National Level, 2023)",
//   "Top 6 Finalist in KRENOVA Competition, Cilacap Regency Government (2023)",
//   "National-level Championship in Robotics Competition with Logic Robotic Team",
// ];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 px-4">
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
