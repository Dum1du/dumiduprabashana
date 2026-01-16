// App.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  MapPin,
  Phone,
  GraduationCap,
  Code,
  Download,
  MessageSquare,
  ExternalLink,
  Calendar,
  Terminal,
  Sparkles,
  FileText,
  Github,
  Globe,
  Database,
  Server,
  Smartphone,
  Cloud,
  GitBranch,
  Cpu,
  Layers,
  Home,
  FolderOpen,
  User,
} from "lucide-react";

import profilePic from './assets/pp.png';
import NodeNetwork from "./components/NodeNetwork";

function App() {
  const [comments, setComments] = useState([]);
  const [terminalHistory, setTerminalHistory] = useState([
    { type: "system", text: "Welcome to the comment terminal." },
    { type: "system", text: "Type your message and press Enter to submit." },
    { type: "system", text: 'Type "clear" to clear the terminal.' },
    { type: "system", text: 'Type "help" for commands.' },
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const skills = [
    { name: "Java", icon: <Cpu className="h-5 w-5" />, category: "backend" },
    {
      name: "React",
      icon: <Layers className="h-5 w-5" />,
      category: "frontend",
    },
    { name: "Python", icon: <Cpu className="h-5 w-5" />, category: "backend" },
    {
      name: "JavaScript",
      icon: <Code className="h-5 w-5" />,
      category: "frontend",
    },
    {
      name: "Node.js",
      icon: <Server className="h-5 w-5" />,
      category: "backend",
    },
    {
      name: "Firebase",
      icon: <Cloud className="h-5 w-5" />,
      category: "cloud",
    },
    {
      name: "MySQL",
      icon: <Database className="h-5 w-5" />,
      category: "database",
    },
    { name: "AWS", icon: <Cloud className="h-5 w-5" />, category: "cloud" },
    {
      name: "Git/GitHub",
      icon: <GitBranch className="h-5 w-5" />,
      category: "tools",
    },
    {
      name: "Android Studio",
      icon: <Smartphone className="h-5 w-5" />,
      category: "mobile",
    },
  ];

  const projects = [
    {
      title: "KineTown - Sinhala Subtitle Platform",
      description:
        "Full-stack web application for multilingual subtitle search, download, and translation with custom batch translation engine and real-time WebSocket updates.",
      tech: ["React", "Node.js", "Firebase", "WebSocket", "Puppeteer"],
      github: "https://github.com/Dumldu/kinetown",
      features: [
        "10x faster subtitle processing",
        "Real-time updates",
        "Google Drive integration",
      ],
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Study Mate - Collaborative Learning Platform",
      description:
        "Full-stack platform for university students with meeting scheduling, discussion forums, and centralized study resources.",
      tech: ["React", "Node.js", "Express", "Firebase", "Socket.IO"],
      features: [
        "Real-time collaboration",
        "Secure file uploads",
        "Firebase Authentication",
      ],
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w-800&auto=format&fit=crop",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Found You - Parental Control App",
      description:
        "Android application for real-time location tracking and parental control with Google Maps integration.",
      tech: ["Java", "Android Studio", "Firebase", "Google Maps API"],
      github: "https://github.com/Dumldu/Fy-FoundYou.the.parent.controller",
      features: [
        "Live location tracking",
        "Secure access control",
        "Privacy-focused",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Yamuda Machan - Transportation App",
      description:
        "Android application for transportation and trip management with ride booking and in-app messaging.",
      tech: ["Java", "Android Studio", "Firebase", "Google Maps API"],
      features: ["Ride booking", "Local caching", "Multithreaded operations"],
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop",
      color: "from-orange-500 to-red-500",
      status: "Under Development",
    },
  ];

  useEffect(() => {
    const savedComments = localStorage.getItem("portfolioComments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolioComments", JSON.stringify(comments));
  }, [comments]);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const input = terminalInput.trim();

    // Add user input to history
    setTerminalHistory((prev) => [
      ...prev,
      { type: "user", text: `$ ${input}` },
    ]);

    // Handle commands
    if (input.toLowerCase() === "clear") {
      setTerminalHistory([{ type: "system", text: "Terminal cleared." }]);
    } else if (input.toLowerCase() === "help") {
      setTerminalHistory((prev) => [
        ...prev,
        { type: "system", text: "Available commands:" },
        { type: "system", text: "  clear - Clear terminal" },
        { type: "system", text: "  help - Show this help" },
        { type: "system", text: "  projects - View my projects" },
        { type: "system", text: "  skills - View my skills" },
        { type: "system", text: "  contact - Get contact info" },
      ]);
    } else if (input.toLowerCase() === "projects") {
      setTerminalHistory((prev) => [
        ...prev,
        { type: "system", text: "Opening projects section..." },
      ]);
      setTimeout(() => scrollToSection("projects"), 500);
    } else if (input.toLowerCase() === "skills") {
      setTerminalHistory((prev) => [
        ...prev,
        { type: "system", text: "Opening skills section..." },
      ]);
      setTimeout(() => scrollToSection("skills"), 500);
    } else if (input.toLowerCase() === "contact") {
      setTerminalHistory((prev) => [
        ...prev,
        { type: "system", text: "Opening contact section..." },
      ]);
      setTimeout(() => scrollToSection("contact"), 500);
    } else {
      // Add as regular comment
      const commentWithDate = {
        id: Date.now(),
        text: input,
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setComments([commentWithDate, ...comments]);
      setTerminalHistory((prev) => [
        ...prev,
        { type: "system", text: "✓ Comment posted successfully!" },
        {
          type: "system",
          text: 'Type another message or use "help" for commands.',
        },
      ]);
    }

    setTerminalInput("");
  };

  const scrollToSection = (section) => {
    const sections = {
      home: heroRef,
      projects: projectsRef,
      skills: skillsRef,
      contact: contactRef,
    };
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
    setIsNavOpen(false);
  };

  const downloadCV = () => {
    // Replace with your actual CV URL
    const cvUrl = "https://example.com/your-cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Dumidu_Prabhasan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Dumidu Prabashana</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FolderOpen className="h-4 w-4" />
                <span>Projects</span>
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Skills</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md"
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isNavOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isNavOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 space-y-4"
            >
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors w-full p-2 hover:bg-gray-800 rounded-lg"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors w-full p-2 hover:bg-gray-800 rounded-lg"
              >
                <FolderOpen className="h-4 w-4" />
                <span>Projects</span>
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors w-full p-2 hover:bg-gray-800 rounded-lg"
              >
                <User className="h-4 w-4" />
                <span>Skills</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors w-full p-2 hover:bg-gray-800 rounded-lg"
              >
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </button>
              <button
                onClick={downloadCV}
                className="flex items-center space-x-2 w-full p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
<section
  ref={heroRef}
  className="min-h-screen relative overflow-hidden flex items-center pt-20"
>
  {/* Node Network Background */}
  <NodeNetwork />
  
  {/* Animated background - Adjusted for better visibility */}
  <div className="absolute inset-0">
    {/* Top gradient - stronger at top */}
    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-900/40 via-purple-900/20 to-transparent"></div>
    
    {/* Middle/bottom gradient - very subtle */}
    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
    
    {/* Radial gradients for depth */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-gray-900/20 to-gray-900/50"></div>
    
    {/* Light spots */}
    <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-blue-500/5 rounded-full -translate-x-1/4 -translate-y-1/4 blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-purple-500/5 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-left"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-blue-400" />
          <span className="text-sm font-medium text-blue-400">
            Software Engineering Student
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-gray-300">Hello, I'm</span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dumidu Prabashana
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl leading-relaxed">
          Full-stack developer crafting innovative solutions with modern
          technologies. Currently pursuing Bachelor's in Software
          Engineering at The Open University of Sri Lanka.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadCV}
            className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800/50 transition-all duration-300 flex items-center"
          >
            <Download className="h-4 w-4 mr-2" />
            Download CV
          </motion.button>
        </motion.div>

        <div className="flex flex-wrap gap-6">
          <div className="flex items-center space-x-2 text-gray-400">
            <Mail className="h-5 w-5 text-blue-400" />
            <span>dumidu.prabhasan@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Phone className="h-5 w-5 text-blue-400" />
            <span>+94 71 228 7770</span>
          </div>
        </div>
      </motion.div>

      {/* Profile Picture */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <div className="relative">
          {/* Profile Picture Container */}
          <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl relative group">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 z-10"></div>

            {/* Placeholder or Actual Picture */}
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <img 
                src={profilePic} 
                alt="Dumidu Prabashana" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -bottom-4 -right-4 bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold">B.Sc. (Hons)</p>
                <p className="text-sm text-gray-400">
                  Software Engineering
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 -left-4 bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold">Full-Stack</p>
                <p className="text-sm text-gray-400">Developer</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30">
                      <div className="text-blue-400">{skill.icon}</div>
                    </div>
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-400 mt-1">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <div className="relative pl-8 border-l-2 border-blue-500/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Bachelor of Software Engineering (Honors)
                </h3>
                <p className="text-gray-400 mb-3">
                  The Open University of Sri Lanka
                </p>
                <div className="flex items-center text-gray-400 mb-1">
                  <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                  <span>June 2023 - May 2027 (Expected)</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing my technical expertise and creativity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gray-800/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                  {/* Project Cover Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}
                    ></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {project.status && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium backdrop-blur-sm">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2 mb-8">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-gray-300"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700 transition-all group-hover:text-blue-400"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View on GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Comments Section */}
      <section ref={contactRef} className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Terminal className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Terminal Comments
              </h2>
            </div>
            <p className="text-xl text-gray-400">
              Leave a message in the terminal interface
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Terminal Interface */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden"
            >
              <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-sm text-gray-400">
                  terminal — bash
                </span>
              </div>

              <div className="p-4 font-mono text-sm">
                <div className="h-64 overflow-y-auto mb-4">
                  {terminalHistory.map((line, idx) => (
                    <div
                      key={idx}
                      className={`mb-1 ${
                        line.type === "system"
                          ? "text-gray-400"
                          : "text-blue-400"
                      }`}
                    >
                      {line.text}
                    </div>
                  ))}
                  <div className="flex items-center mt-2">
                    <span className="text-green-400 mr-2">
                      visitor@portfolio:~$
                    </span>
                    <span className="text-blue-300 animate-pulse">▋</span>
                  </div>
                </div>

                <form onSubmit={handleTerminalSubmit} className="flex">
                  <div className="flex-1 bg-gray-800 rounded-l-lg border border-gray-700 px-4 py-2 flex items-center">
                    <span className="text-green-400 mr-2">$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      className="flex-1 bg-transparent outline-none text-gray-300"
                      placeholder="Type your message or command..."
                  
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 rounded-r-lg hover:from-blue-600 hover:to-purple-600 transition-all"
                  >
                    ↵
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Previous Comments */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 text-blue-400 mr-3" />
                Previous Comments ({comments.length})
              </h3>

              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                <AnimatePresence>
                  {comments.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-8"
                    >
                      <MessageSquare className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-500">
                        No comments yet. Be the first to post!
                      </p>
                    </motion.div>
                  ) : (
                    comments.map((comment) => (
                      <motion.div
                        key={comment.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="p-4 rounded-lg bg-gray-800/50 border border-gray-700/50"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3">
                              <span className="text-sm font-bold">U</span>
                            </div>
                            <span className="text-gray-400">
                              Anonymous User
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">
                            {comment.date}
                          </span>
                        </div>
                        <p className="text-gray-300 ml-11">{comment.text}</p>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50"
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/30">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p>dumidu.prabhasan@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/30">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p>+94 71 228 7770</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/30">
                <MapPin className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p>Colombo, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/30">
                <Linkedin className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p>linkedin.com/in/dumidu-prabhasan</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-r from-gray-900 to-black border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-3 mb-3">
                <Code className="h-6 w-6 text-blue-400" />
                <h3 className="text-2xl font-bold">Dumidu Prabashana</h3>
              </div>
              <p className="text-gray-400">
                Full-Stack Developer & Software Engineering Student
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/dumidu-prabhasan-6bab75286"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:dumidu.prabhasan@gmail.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Dumldu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>
              © {new Date().getFullYear()} Dumidu Prabashana. All rights
              reserved.
            </p>
            <p className="mt-2 text-sm">
              Built with React, Vite & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
