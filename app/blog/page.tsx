"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js and Golang",
    excerpt:
      "Learn how to create high-performance web applications using Next.js for the frontend and Golang for the backend, with real-world examples from my recent projects.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["Next.js", "Golang", "Web Development"],
    featured: true,
  },
  {
    id: 2,
    title: "AI Engineering Best Practices: From Model to Production",
    excerpt:
      "Discover the essential practices for deploying machine learning models in production environments, including monitoring, versioning, and performance optimization.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2024-12-10",
    readTime: "12 min read",
    tags: ["AI", "Machine Learning", "MLOps"],
    featured: true,
  },
  {
    id: 3,
    title: "Modern Development Workflow: Git, Docker, and CI/CD",
    excerpt:
      "A comprehensive guide to setting up an efficient development workflow using Git for version control, Docker for containerization, and automated CI/CD pipelines.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2024-12-05",
    readTime: "10 min read",
    tags: ["DevOps", "Docker", "CI/CD"],
    featured: false,
  },
  {
    id: 4,
    title: "Building IoT Early Warning Systems with React and Thingspeak",
    excerpt:
      "Step-by-step tutorial on creating real-time monitoring dashboards for IoT sensors using React.js and Thingspeak API for disaster management applications.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2024-11-28",
    readTime: "15 min read",
    tags: ["IoT", "React", "GIS"],
    featured: false,
  },
  {
    id: 5,
    title: "Leading a Programming Community: Lessons Learned",
    excerpt:
      "Insights from leading PROTIC programming community with 170+ members, including strategies for community growth, event organization, and knowledge sharing.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2024-11-20",
    readTime: "6 min read",
    tags: ["Leadership", "Community", "Career"],
    featured: false,
  },
  {
    id: 6,
    title: "Database Design Patterns for Modern Web Applications",
    excerpt:
      "Explore essential database design patterns and optimization techniques for building scalable web applications with PostgreSQL and MySQL.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2024-11-15",
    readTime: "9 min read",
    tags: ["Database", "PostgreSQL", "Architecture"],
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

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
          <h1 className="text-5xl font-bold text-gradient mb-6">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sharing insights about web development, AI engineering, and best
            practices from my journey as a full-stack developer.
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gradient mb-8">
              Featured Articles
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-white/40 px-3 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center space-x-1"
                        >
                          <Tag className="w-3 h-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium group"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Posts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gradient mb-8">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white/40 px-2 py-1 rounded-full text-xs font-medium text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="bg-white/40 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium group text-sm"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="glass p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to get notified about new articles on web development,
              AI engineering, and technology insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 glass px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
