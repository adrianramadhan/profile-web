"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";

// This would typically come from a CMS or API
const blogPost = {
  id: 1,
  title: "Building Scalable Web Applications with Next.js and Golang",
  content: `
# Introduction

Building modern web applications requires careful consideration of both frontend and backend technologies. In this article, I'll share my experience building scalable applications using Next.js for the frontend and Golang for the backend.

## Why Next.js and Golang?

### Next.js Benefits
- **Server-Side Rendering (SSR)**: Improved SEO and initial page load times
- **Static Site Generation (SSG)**: Perfect for content-heavy applications
- **API Routes**: Built-in API functionality
- **Automatic Code Splitting**: Better performance out of the box

### Golang Benefits
- **High Performance**: Compiled language with excellent concurrency
- **Simple Syntax**: Easy to learn and maintain
- **Strong Standard Library**: Comprehensive built-in packages
- **Excellent for APIs**: Fast HTTP servers and JSON handling

## Architecture Overview

When building full-stack applications, I typically use this architecture:

1. **Frontend**: Next.js with TypeScript
2. **Backend**: Golang with Gin framework
3. **Database**: PostgreSQL
4. **Deployment**: Docker containers on cloud platforms

## Implementation Example

Here's a simple example of how I structure my projects:

### Backend API (Golang)
\`\`\`go
package main

import (
    "github.com/gin-gonic/gin"
    "net/http"
)

func main() {
    r := gin.Default()
    
    r.GET("/api/users", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{
            "users": []string{"Adrian", "John", "Jane"},
        })
    })
    
    r.Run(":8080")
}
\`\`\`

### Frontend (Next.js)
\`\`\`typescript
// pages/users.tsx
import { GetServerSideProps } from 'next'

interface User {
  name: string
}

interface Props {
  users: User[]
}

export default function Users({ users }: Props) {
  return (
    <div>
      <h1>Users</h1>
      {users.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:8080/api/users')
  const data = await res.json()
  
  return {
    props: {
      users: data.users.map((name: string) => ({ name }))
    }
  }
}
\`\`\`

## Best Practices

### 1. Error Handling
Always implement proper error handling on both frontend and backend:

- Use try-catch blocks in JavaScript/TypeScript
- Implement middleware for error handling in Golang
- Return meaningful error messages to the client

### 2. Authentication
Implement secure authentication using:

- JWT tokens for stateless authentication
- Secure HTTP-only cookies
- Proper token refresh mechanisms

### 3. Database Optimization
- Use connection pooling
- Implement proper indexing
- Use prepared statements to prevent SQL injection

## Conclusion

The combination of Next.js and Golang provides a powerful foundation for building scalable web applications. The key is to leverage the strengths of each technology while maintaining clean, maintainable code.

In my recent projects at PT Tristar Surya Gemilang, I've successfully used this stack to build internal tools and customer-facing applications that handle thousands of users efficiently.

## Real-World Performance

In production environments, this combination has delivered:

- **Response times**: Under 100ms for API calls
- **Scalability**: Handles 10,000+ concurrent users
- **Reliability**: 99.9% uptime with proper monitoring

## Next Steps

If you're interested in implementing this architecture in your projects, I recommend:

1. Start with a simple CRUD application
2. Implement authentication early
3. Set up proper logging and monitoring
4. Use Docker for consistent deployments

Feel free to reach out if you have questions about implementing these technologies in your projects!
  `,
  image: "/placeholder.svg?height=400&width=800",
  date: "2024-12-15",
  readTime: "8 min read",
  tags: ["Next.js", "Golang", "Web Development", "Architecture"],
  author: "Adrian Putra Ramadhan",
};

export default function BlogPostPage({ }: { params: { id: string } }) {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-lg hover:bg-gray-600/20 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl overflow-hidden mb-8"
        >
          <div className="relative">
            <Image
              src={blogPost.image || "/placeholder.svg"}
              alt={blogPost.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {blogPost.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogPost.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>By {blogPost.author}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tags and Share */}
          <div className="p-6 border-b border-white/20">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/40 px-3 py-1 rounded-full text-sm font-medium text-gray-700 flex items-center space-x-1"
                  >
                    <Tag className="w-3 h-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
              <button className="flex items-center space-x-2 glass px-4 py-2 rounded-lg hover:bg-blue-600/20 transition-all duration-300">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-8">
            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: blogPost.content
                    .split("\n")
                    .map((line) => {
                      if (line.startsWith("# ")) {
                        return `<h1 class="text-3xl font-bold text-gradient mb-6 mt-8">${line.substring(
                          2
                        )}</h1>`;
                      } else if (line.startsWith("## ")) {
                        return `<h2 class="text-2xl font-bold text-gray-800 mb-4 mt-6">${line.substring(
                          3
                        )}</h2>`;
                      } else if (line.startsWith("### ")) {
                        return `<h3 class="text-xl font-bold text-gray-800 mb-3 mt-4">${line.substring(
                          4
                        )}</h3>`;
                      } else if (line.startsWith("- ")) {
                        return `<li class="mb-2">${line.substring(2)}</li>`;
                      } else if (line.startsWith("```")) {
                        return line.includes("```") && !line.startsWith("```")
                          ? "</code></pre>"
                          : '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4"><code>';
                      } else if (line.trim() === "") {
                        return "<br>";
                      } else {
                        return `<p class="mb-4">${line}</p>`;
                      }
                    })
                    .join(""),
                }}
              />
            </div>
          </div>
        </motion.article>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-6 rounded-2xl mb-8"
        >
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-1">
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Adrian Putra Ramadhan"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Adrian Putra Ramadhan
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Full-Stack & AI Engineer passionate about building innovative
                web applications and AI solutions. Currently studying
                Informatics Engineering at Politeknik Negeri Cilacap and
                participating in the Laskar AI Scholarship Program.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gradient mb-6">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/blog/2"
              className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                AI Engineering Best Practices
              </h3>
              <p className="text-gray-600 text-sm">
                Learn essential practices for deploying ML models in
                production...
              </p>
            </Link>
            <Link
              href="/blog/3"
              className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Modern Development Workflow
              </h3>
              <p className="text-gray-600 text-sm">
                A comprehensive guide to Git, Docker, and CI/CD pipelines...
              </p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
