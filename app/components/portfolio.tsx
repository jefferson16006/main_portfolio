"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
  Send,
  Twitter,
  Instagram,
  Menu,
  X,
  Download,
} from "lucide-react"
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiGit,
  } from "react-icons/si"
  

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState<Partial<Record<string, boolean>>>({})
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    })
  }


  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="w-6 h-6" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" /> },
    { name: "React", icon: <SiReact className="w-6 h-6" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="w-6 h-6" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6" /> },
    { name: "Express.js", icon: <SiExpress className="w-6 h-6" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6" /> },
    { name: "Docker", icon: <SiDocker className="w-6 h-6" /> },
    { name: "Git", icon: <SiGit className="w-6 h-6" /> },
  ]
  

  const projects = [
    {
      title: "Wordweb",
      description:
        "An intelligent web app that allows users to input a meaning or description and returns the most relevant word using AI inference. Built with the MERN stack and styled with TailwindCSS, it offers real-time suggestions powered by language models.",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      github: "https://github.com/jefferson16006/worldweb",
      demo: "https://worldweb-pied.vercel.app/",
    },
    {
      title: "First Bank API",
      description:
        "A secure and modular banking API built to simulate core financial operations such as account creation, fund transfers, transaction history, and authentication. Designed with RESTful principles, role-based access control, and proper error handling for production readiness.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Mongoose"],
      github: "https://github.com/jefferson16006/firstbank_api",
    },
    {
      title: "Jobs API",
      description:
        "A RESTful API for managing job listings and applications. Features include user authentication, role-based access control, job posting, search, filtering, and CRUD operations. Designed for scalability and built following industry best practices.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Mongoose"],
      github: "https://github.com/jefferson16006/jobs_api",
    },
    {
      title: "Smart Collaboration API",
      description:
        "An advanced collaboration backend inspired by platforms like Notion. Supports real-time document editing, user workspaces, nested pages, shared access, and role-based permissions. Built for extensibility and collaborative productivity.",
      tech: ["Node.js", "Express", "MongoDB", "RabbitMQ", "JWT", "Mongoose"],
      github: "https://github.com/jefferson16006/smart_collaborations",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <style jsx>{`
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`}</style>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Jefferson
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-purple-400 ${
                    activeSection === item.id ? "text-purple-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-gray-950/95 backdrop-blur-sm border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-200 hover:text-purple-400 hover:bg-gray-800/50 rounded-md transform hover:translate-x-1 ${
                      activeSection === item.id ? "text-purple-400 bg-gray-800/30" : "text-gray-300"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMobileMenuOpen ? `slideInLeft 0.3s ease-out forwards` : "none",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-blue-900/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Jefferson
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              A Backend-Focused Full Stack Javascript Developer
            </p>
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </Button>
            <a
              href="/JEFFERSON_NNAMDI_CHUKWU_CV.pdf"
              download
              className="inline-block ml-4"
            >
              <Button
                  size="lg"
                  variant="outline"
                  className="flex items-center gap-2 border-none bg-purple-600 hover:bg-purple-700 hover:text-white text-white px-4 py-2 rounded-lg shadow-md text-sm transition-all hover:scale-105"
              >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
              </Button>
            </a>

          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    I'm Jefferson — a backend-focused full stack JavaScript developer with 3+ years of 
                    experience and a strong passion for building scalable systems, efficient APIs, and anything involving servers and infrastructure. I
                    enjoy working under the hood, solving tough backend challenges, and making sure the engine of any
                    application runs smoothly and securely. I'm currently studying Physics at the University of Ibadan,
                    though my real love lies in technology and software engineering. Outside of code, I'm a thinker at
                    heart — I play chess to sharpen my mind, unwind with anime for creative escape, and spend hours
                    exploring new backend tools or architectures. Whether I'm designing a robust authentication flow or
                    learning Rust to level up my systems knowledge, I'm always driven by curiosity and a desire to
                    create things that work — and work well. I believe great backend systems are like great chess
                    strategies: invisible, quiet, but game-changing. Let's build something that lasts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Experience Section */}
      <section id="skills" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Experience
            </h2>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mb-12 sm:mb-16">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group bg-gray-800/30 border border-gray-700/50 rounded-lg p-3 sm:p-4 text-center hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 delay-${index * 50}`}
                >
                  <div className="text-purple-400 mb-2 flex justify-center group-hover:text-purple-300 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="font-medium text-white text-xs sm:text-sm">{skill.name}</h3>
                </div>
              ))}
            </div>

            {/* Experience Timeline */}
            <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-200">Experience</h3>
            <div className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                    <CardTitle className="text-purple-400">Intern – DISC Innovation Hub</CardTitle>
                    <CardDescription className="text-gray-400">Ibadan, Nigeria • 3 Months</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-300">
                    <p>
                    Gained hands-on experience in full-stack web development, building both frontend and backend components with a focus on interactive UI and robust database management.
                    </p>
                    <ul className="list-disc list-inside pl-2 space-y-1 text-sm text-gray-400">
                    <li>Enhanced JavaScript proficiency through real-world applications and self-directed learning via YouTube and SoloLearn.</li>
                    <li>Collaborated with a team of developers using React.js, Node.js, and Express.js to develop functional web applications.</li>
                    <li>Implemented Agile methodologies including daily stand-ups, code reviews, and sprint planning.</li>
                    </ul>
                </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                    <CardTitle className="text-purple-400">IT Intern – Lotus Bank</CardTitle>
                    <CardDescription className="text-gray-400">Lagos, Nigeria • 6 Weeks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-300">
                    <p>
                    Completed a rotational internship across departments in the IT unit, gaining insight into the infrastructure powering modern banking systems.
                    </p>
                    <ul className="list-disc list-inside pl-2 space-y-1 text-sm text-gray-400">
                    <li><strong>Application Support:</strong> Helped resolve technical issues and tracked incidents through internal systems.</li>
                    <li><strong>Core Banking Systems:</strong> Observed system integration, transaction processing, and uptime maintenance.</li>
                    <li><strong>Database Management:</strong> Supported SQL querying, data backup, and observed data security protocols.</li>
                    <li><strong>Networking:</strong> Shadowed engineers to learn IP addressing, routing, and firewall basics.</li>
                    <li><strong>IT Infrastructure:</strong> Gained exposure to server setup, diagnostics, and virtual machine environments.</li>
                    <li><strong>Software Development:</strong> Participated in Agile processes and code reviews, learning SDLC and version control practices.</li>
                    <li><strong>Cybersecurity:</strong> Studied data protection strategies including encryption, access control, and real-time threat monitoring.</li>
                    </ul>
                </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                    <CardTitle className="text-purple-400">Physics Student</CardTitle>
                    <CardDescription className="text-gray-400">University of Ibadan • 2022 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-300">
                    Pursuing a degree in Physics while actively engaging in software development. Balancing academic responsibilities with backend engineering practice and self-guided learning in full-stack technologies.
                    </p>
                </CardContent>
                </Card>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div
            className={`transition-all duration-1000 delay-400 ${isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  className={`bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 delay-${index * 100}`}
                >
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="text-white text-lg sm:text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400 text-sm sm:text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-purple-900/50 text-purple-300 border-purple-700 text-xs sm:text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <a href={project.github}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="bg-gray-700/50 border border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white transition-all duration-200 w-full sm:w-auto"
                        >
                          <Github className="w-4 h-4 mr-2" />
                            GitHub
                        </Button>
                      </a>
                      { project.demo ? 
                        (<a href={project.demo}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="bg-gray-700/50 border border-gray-600 text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-200 w-full sm:w-auto"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        </a>) : ''
                      }
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6 sm:p-8">
                  <form
                    className="space-y-4 sm:space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
                      const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
                      const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

                      const subject = encodeURIComponent(`Message from ${name}`);
                      const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
                      const mailtoLink = `mailto:jeffersonchukwu2006@gmail.com?subject=${subject}&body=${body}`;

                      window.location.href = mailtoLink;
                    }}
                  >
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        required
                        className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 h-12"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-12"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>

                  <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700">
                    <a href='https://github.com/jefferson16006'>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-purple-400 text-xs sm:text-sm"
                      >
                        <Github className="w-4 h-4 mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">GitHub</span>
                      </Button>
                    </a>
                    <a href='https://linkedin.com/in/jeffersonchukwu'>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm">
                        <Linkedin className="w-4 h-4 mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">LinkedIn</span>
                      </Button>
                    </a>
                    <a href='https://x.com/Jefferson2k6'>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-500 text-xs sm:text-sm">
                        <Twitter className="w-4 h-4 mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">Twitter</span>
                      </Button>
                    </a>
                    <a href='https://www.instagram.com/jefferson18006?igsh=Yzd6ZTFubDkxN294'>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-pink-400 text-xs sm:text-sm">
                        <Instagram className="w-4 h-4 mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">Instagram</span>
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Jefferson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
