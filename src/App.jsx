// App.jsx - Updated with optimized animations and mobile fixes
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
  Calendar,
  Terminal,
  Sparkles,
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
  MessageCircle,
  Instagram,
  Twitter,
  FileText,
} from "lucide-react";

import profilePic from "./assets/pp.png";
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isNavOpen && !event.target.closest("nav")) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isNavOpen]);

  // Improved skills data
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
      github: "https://github.com/Dum1du/kinetown",
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
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Found You - Parental Control App",
      description:
        "Android application for real-time location tracking and parental control with Google Maps integration.",
      tech: ["Java", "Android Studio", "Firebase", "Google Maps API"],
      github: "https://github.com/Dum1du/Fy-FoundYou.the.parent.controller",
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

  // LocalStorage operations
  useEffect(() => {
    const savedComments = localStorage.getItem("portfolioComments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolioComments", JSON.stringify(comments));
  }, [comments]);

  // Terminal handler
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
      setTimeout(() => scrollToSection("projects"), 300);
    } else if (input.toLowerCase() === "skills") {
      setTerminalHistory((prev) => [
        ...prev,
        { type: "system", text: "Opening skills section..." },
      ]);
      setTimeout(() => scrollToSection("skills"), 300);
    } else if (input.toLowerCase() === "contact") {
      setTerminalHistory((prev) => [
        ...prev,
        { type: "system", text: "Opening contact section..." },
      ]);
      setTimeout(() => scrollToSection("contact"), 300);
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

  // Scroll function with mobile menu close
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

  // CV download function
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 overflow-x-hidden">
      {/* Navigation Bar - Fixed for mobile */}
      <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-3"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold">
                Dumidu Prabashana
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <FolderOpen className="h-4 w-4" />
                <span>Projects</span>
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <User className="h-4 w-4" />
                <span>Skills</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-md text-sm sm:text-base"
              >
                <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Download CV
              </motion.button>
            </div>

            {/* Mobile menu button - Always visible */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
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
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 pb-3 space-y-2"
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
                className="flex items-center justify-center space-x-2 w-full p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section - Optimized for mobile */}
      <section
        ref={heroRef}
        className="min-h-screen relative overflow-hidden flex items-center pt-16 md:pt-20"
      >
        <NodeNetwork />

        {/* 2. THE DIMMER: This sits between the background and your content */}
        <div className="absolute inset-0 bg-slate-950/40 pointer-events-none z-[1]" />

        {/* Background gradients - optimized */}
        {/* Enhanced gradients with better blending */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-900/40 via-purple-900/20 to-transparent mix-blend-overlay"></div>
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full -translate-x-1/4 -translate-y-1/4 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>

          {/* Enhanced glow effects that work with binary background */}
          <div
            className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-blue-500/10 rounded-full -translate-x-1/4 -translate-y-1/4 blur-3xl"
            style={{
              animation: "pulse 8s ease-in-out infinite alternate",
            }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-purple-500/10 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"
            style={{
              animation: "pulse 12s ease-in-out infinite alternate-reverse",
            }}
          ></div>

          {/* Particle effect overlay */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-px bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content Column - Now with specific background glow */}
            <div className="relative">
              {/* GLOW BACKGROUND: 
          Adjust 'opacity-40' or 'blur-[100px]' to control the intensity 
      */}
              <div
                className="absolute -inset-10 md:-inset-20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-[50px] md:blur-[80px] rounded-full z-0 pointer-events-none"
                aria-hidden="true"
              />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="text-left relative z-10" // z-10 keeps text above the glow
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="inline-flex items-center space-x-2 mb-4 md:mb-6 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-800/50 backdrop-blur-sm"
                >
                  <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-blue-400" />
                  <span className="text-xs md:text-sm font-medium text-blue-400">
                    Software Engineering Student
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight"
                  style={{
                    // Stacked shadows: 1st is tight/dark, 2nd is soft/broad
                    textShadow: " 0 4px 20px rgba(0,0,0,0.4)",
                  }}
                >
                  <span className="block text-gray-300">Hello, I'm</span>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Dumidu Prabashana
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-3xl leading-relaxed z-10"
                  style={{
                    textShadow:
                      "0 4px 20px rgba(0,0,0,0.9), 0 8px 30px rgba(0,0,0,0.4)",
                  }}
                >
                  Full-stack developer crafting innovative solutions with modern
                  technologies. Currently pursuing Bachelor's in Software
                  Engineering at The Open University of Sri Lanka.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection("projects")}
                    className="px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base"
                  >
                    View My Work
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={downloadCV}
                    className="px-4 py-2.5 md:px-6 md:py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800/50 transition-all duration-200 flex items-center text-sm md:text-base"
                  >
                    <Download className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                    Download CV
                  </motion.button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="flex flex-wrap gap-4 md:gap-6"
                >
                  <div className="flex items-center space-x-2 text-sm md:text-base text-gray-400">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                    <span>dumidu.prabhasan@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm md:text-base text-gray-400">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                    <span>+94 71 228 7770</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Profile Picture Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex justify-center mt-8 md:mt-0 mb-8 md:mb-0 sm:mb-0"
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 z-10"></div>
                  <img
                    src={profilePic}
                    alt="Dumidu Prabashana"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gray-800 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-xl border border-gray-700"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs sm:text-sm md:text-base">
                        B.Sc. (Hons)
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        Software Engineering
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-gray-800 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-xl border border-gray-700"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Code className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs sm:text-sm md:text-base">
                        Full-Stack
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        Developer
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section - Optimized */}
      <section ref={skillsRef} className="py-12 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
              Technical Skills
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: idx * 0.05, duration: 0.2 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all duration-200 h-full">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-200">
                      <div className="text-blue-400">{skill.icon}</div>
                    </div>
                    <span className="text-sm sm:text-lg font-medium text-center">
                      {skill.name}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400 mt-1">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section - Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-12 md:mt-20 bg-gray-800/30 rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-gray-700/50"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3 sm:mr-4">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Education
              </h2>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-500/30">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="absolute -left-[7px] sm:-left-[9px] top-0 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full"
              ></motion.div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                  Bachelor of Software Engineering (Honors)
                </h3>
                <p className="text-gray-400 mb-3">
                  The Open University of Sri Lanka
                </p>
                <div className="flex items-center text-gray-400 mb-1">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-blue-400" />
                  <span className="text-sm sm:text-base">
                    June 2023 - May 2027 (Expected)
                  </span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-blue-400" />
                  <span className="text-sm sm:text-base">
                    Colombo, Sri Lanka
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Optimized */}
      <section
        ref={projectsRef}
        className="py-12 md:py-20 px-4 sm:px-6 bg-gray-900/50"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Showcasing my technical expertise and creativity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-gray-800/30 rounded-xl md:rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all duration-200 h-full">
                  {/* Project Cover Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}
                    ></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.status && (
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2, duration: 0.2 }}
                        className="absolute top-3 right-3 px-2 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm"
                      >
                        {project.status}
                      </motion.span>
                    )}
                  </div>

                  <div className="p-4 sm:p-6 md:p-8">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.1 }}
                      className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-blue-400 transition-colors"
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.15 }}
                      className="text-sm sm:text-base text-gray-400 mb-4 md:mb-6 leading-relaxed"
                    >
                      {project.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 md:mb-6"
                    >
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs sm:text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.ul
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.25 }}
                      className="space-y-1.5 sm:space-y-2 mb-6 md:mb-8"
                    >
                      {project.features.map((feature, featureIdx) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -5 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.25 + featureIdx * 0.05 }}
                          className="flex items-center text-sm sm:text-base text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>

                    {project.github && (
                      <motion.a
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-200 group-hover:text-blue-400 text-sm sm:text-base"
                      >
                        <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
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

      {/* Terminal Comments Section - Optimized */}
      <section ref={contactRef} className="py-12 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="flex items-center justify-center mb-3 md:mb-4"
            >
              <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mr-2 sm:mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Terminal Comments
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.15 }}
              className="text-base sm:text-lg md:text-xl text-gray-400"
            >
              Leave a message in the terminal interface
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Terminal Interface */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-lg md:rounded-xl border border-gray-700 overflow-hidden"
            >
              <div className="bg-gray-800 px-3 py-2 md:px-4 md:py-3 border-b border-gray-700 flex items-center">
                <div className="flex space-x-1.5 sm:space-x-2">
                  {["bg-red-500", "bg-amber-500", "bg-green-500"].map(
                    (color, idx) => (
                      <motion.div
                        key={color}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: idx * 0.05, duration: 0.15 }}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${color}`}
                      ></motion.div>
                    ),
                  )}
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.15 }}
                  className="ml-3 text-xs sm:text-sm text-gray-400"
                >
                  terminal — bash
                </motion.span>
              </div>

              <div className="p-3 md:p-4 font-mono text-xs sm:text-sm">
                <div className="h-48 sm:h-64 overflow-y-auto mb-3 md:mb-4">
                  <AnimatePresence>
                    {terminalHistory.map((line, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: idx * 0.02 }}
                        className={`mb-0.5 ${
                          line.type === "system"
                            ? "text-gray-400"
                            : "text-blue-400"
                        }`}
                      >
                        {line.text}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center mt-2"
                  >
                    <span className="text-green-400 mr-2">
                      visitor@portfolio:~$
                    </span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="text-blue-300"
                    >
                      ▋
                    </motion.span>
                  </motion.div>
                </div>

                <motion.form
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                  onSubmit={handleTerminalSubmit}
                  className="flex"
                >
                  <div className="flex-1 bg-gray-800 rounded-l-lg border border-gray-700 px-3 py-1.5 md:px-4 md:py-2 flex items-center">
                    <span className="text-green-400 mr-2">$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      className="flex-1 bg-transparent outline-none text-gray-300 placeholder-gray-500"
                      placeholder="Type your message or command..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 px-3 md:px-6 rounded-r-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-semibold"
                  >
                    ↵
                  </motion.button>
                </motion.form>
              </div>
            </motion.div>

            {/* Previous Comments */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-gray-800/30 rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 backdrop-blur-sm border border-gray-700/50"
            >
              <motion.h3
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 }}
                className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center"
              >
                <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-400 mr-2 sm:mr-3" />
                Previous Comments ({comments.length})
              </motion.h3>

              <div className="space-y-3 sm:space-y-4 max-h-96 overflow-y-auto pr-1 sm:pr-2">
                <AnimatePresence mode="wait">
                  {comments.length === 0 ? (
                    <motion.div
                      key="no-comments"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-6 md:py-8"
                    >
                      <MessageSquare className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gray-600 mx-auto mb-3 md:mb-4" />
                      <p className="text-gray-500 text-sm sm:text-base">
                        No comments yet. Be the first to post!
                      </p>
                    </motion.div>
                  ) : (
                    comments.map((comment, index) => (
                      <motion.div
                        key={comment.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: index * 0.05,
                          duration: 0.2,
                        }}
                        whileHover={{
                          y: -2,
                          transition: { duration: 0.15 },
                        }}
                        className="p-3 sm:p-4 rounded-lg bg-gray-800/50 border border-gray-700/50"
                      >
                        <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                          <div className="flex items-center">
                            <motion.div
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: false }}
                              transition={{ delay: 0.05, duration: 0.15 }}
                              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-2 sm:mr-3"
                            >
                              <span className="text-xs font-bold">U</span>
                            </motion.div>
                            <span className="text-xs sm:text-sm text-gray-400">
                              Anonymous User
                            </span>
                          </div>
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.1 }}
                            className="text-xs text-gray-500"
                          >
                            {comment.date}
                          </motion.span>
                        </div>
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.15 }}
                          className="text-gray-300 text-sm sm:text-base ml-9 sm:ml-11"
                        >
                          {comment.text}
                        </motion.p>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-8 md:mt-12"
          >
            {/* Glass Container with Gradient Border */}
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden group">
              {/* Main Glass Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-900/30 to-gray-900/20 backdrop-blur-lg border border-gray-700/30 shadow-2xl"></div>

              {/* Animated Gradient Border */}
              <div
                className="absolute inset-0 rounded-xl md:rounded-2xl p-[1px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                }}
              ></div>

              {/* Inner Fade Effects */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-900/60 to-transparent rounded-t-xl md:rounded-t-2xl"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-900/60 to-transparent rounded-b-xl md:rounded-b-2xl"></div>

              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-xl md:rounded-2xl">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-[1px] h-[1px] bg-blue-400/20 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>

              {/* Content Container */}
              <div className="relative z-10 p-6 md:p-8">
                <motion.h3
                  initial={{ opacity: 0, y: -5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.1 }}
                  className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center"
                >
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Connect With Me
                  </span>
                </motion.h3>

                {/* Social Media Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                  {[
                    {
                      icon: MessageCircle, // Make sure to import this icon
                      label: "WhatsApp",
                      value: "Message me",
                      href: "https://wa.me/94712287770",
                      gradient: "from-green-500/20 to-green-600/20",
                      border: "border-green-500/30",
                      textColor: "text-green-400",
                      hoverGradient:
                        "hover:from-green-600/30 hover:to-green-700/30",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      value: "Connect",
                      href: "https://linkedin.com/in/dumidu-prabhasan",
                      gradient: "from-blue-500/20 to-blue-600/20",
                      border: "border-blue-500/30",
                      textColor: "text-blue-400",
                      hoverGradient:
                        "hover:from-blue-600/30 hover:to-blue-700/30",
                    },
                    {
                      icon: Github,
                      label: "GitHub",
                      value: "Code",
                      href: "https://github.com/yourusername", // Replace with your GitHub
                      gradient: "from-gray-700/20 to-gray-800/20",
                      border: "border-gray-600/30",
                      textColor: "text-gray-300",
                      hoverGradient:
                        "hover:from-gray-800/30 hover:to-gray-900/30",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "Send Email",
                      href: "mailto:dumidu.prabhasan@gmail.com",
                      gradient: "from-red-500/20 to-red-600/20",
                      border: "border-red-500/30",
                      textColor: "text-red-400",
                      hoverGradient:
                        "hover:from-red-600/30 hover:to-red-700/30",
                    },
                    {
                      icon: MessageSquare, // For Telegram or general chat
                      label: "Telegram",
                      value: "Message",
                      href: "https://t.me/yourusername", // Replace with your Telegram
                      gradient: "from-blue-400/20 to-blue-500/20",
                      border: "border-blue-400/30",
                      textColor: "text-blue-300",
                      hoverGradient:
                        "hover:from-blue-500/30 hover:to-blue-600/30",
                    },
                    {
                      icon: Instagram,
                      label: "Instagram",
                      value: "Follow",
                      href: "https://instagram.com/yourusername", // Replace with your Instagram
                      gradient: "from-pink-500/20 to-purple-500/20",
                      border: "border-pink-500/30",
                      textColor: "text-pink-400",
                      hoverGradient:
                        "hover:from-pink-600/30 hover:to-purple-600/30",
                    },
                    {
                      icon: Twitter,
                      label: "Twitter",
                      value: "Tweet",
                      href: "https://twitter.com/yourusername", // Replace with your Twitter
                      gradient: "from-sky-500/20 to-sky-600/20",
                      border: "border-sky-500/30",
                      textColor: "text-sky-400",
                      hoverGradient:
                        "hover:from-sky-600/30 hover:to-sky-700/30",
                    },
                    {
                      icon: FileText, // For portfolio/blog
                      label: "Portfolio",
                      value: "Website",
                      href: "https://yourwebsite.com", // Replace with your website
                      gradient: "from-purple-500/20 to-pink-500/20",
                      border: "border-purple-500/30",
                      textColor: "text-purple-400",
                      hoverGradient:
                        "hover:from-purple-600/30 hover:to-pink-600/30",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      viewport={{ once: false }}
                      transition={{
                        delay: 0.1 + index * 0.05,
                        duration: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className={`flex flex-col items-center p-4 rounded-xl backdrop-blur-sm border ${social.border} ${social.gradient} ${social.hoverGradient} transition-all duration-300 group cursor-pointer`}
                    >
                      {/* Icon Container with Pulse Effect */}
                      <motion.div
                        whileHover={{ rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${social.gradient} border ${social.border} flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        {/* Pulsing Glow Effect */}
                        <div
                          className={`absolute inset-0 rounded-full bg-gradient-to-br ${social.gradient.replace("/20", "/40")} animate-ping opacity-20`}
                        ></div>
                        <social.icon
                          className={`h-5 w-5 md:h-6 md:w-6 ${social.textColor}`}
                        />
                      </motion.div>

                      {/* Platform Name */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        className={`text-xs md:text-sm font-semibold ${social.textColor} mb-1`}
                      >
                        {social.label}
                      </motion.p>

                      {/* Action Text */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.25 + index * 0.05 }}
                        className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        {social.value}
                      </motion.p>

                      {/* Hover Indicator */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: "60%" }}
                        className="h-0.5 bg-gradient-to-r from-transparent via-current to-transparent mt-2"
                      ></motion.div>
                    </motion.a>
                  ))}
                </div>

                {/* Quick Contact Note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-700/30"
                >
                  <p className="text-center text-sm md:text-base text-gray-400">
                    Feel free to reach out for collaborations, opportunities, or
                    just to say hi! 👋
                  </p>

                  {/* Quick Links Row */}
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-3 mt-4"
                  >
                    <a
                      href="https://wa.me/+94712287770"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-green-900/30 border border-green-700/30 rounded-lg hover:bg-green-900/50 transition-all duration-200 group"
                    >
                      <MessageCircle className="h-3 w-3 text-green-400" />
                      <span className="text-xs text-green-300 group-hover:text-green-200">
                        Quick Chat on WhatsApp
                      </span>
                    </a>
                    <a
                      href="mailto:dumidu.prabhasan@gmail.com"
                      className="flex items-center gap-2 px-3 py-1.5 bg-blue-900/30 border border-blue-700/30 rounded-lg hover:bg-blue-900/50 transition-all duration-200 group"
                    >
                      <Mail className="h-3 w-3 text-blue-400" />
                      <span className="text-xs text-blue-300 group-hover:text-blue-200">
                        Send Email
                      </span>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <style jsx>{`
            @keyframes float {
              0%,
              100% {
                transform: translateY(0) translateX(0);
                opacity: 0.2;
              }
              33% {
                transform: translateY(-3px) translateX(2px);
                opacity: 0.3;
              }
              66% {
                transform: translateY(-6px) translateX(-1px);
                opacity: 0.2;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Footer - Optimized for mobile */}
      <footer className="py-8 md:py-12 px-4 sm:px-6 bg-gradient-to-r from-gray-900 to-black border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <Code className="h-5 w-5 text-blue-400" />
                <h3 className="text-xl font-bold">Dumidu Prabashana</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Full-Stack Developer & Software Engineering Student
              </p>
            </div>

            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/dumidu-prabhasan-6bab75286"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:dumidu.prabhasan@gmail.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Dumldu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Dumidu Prabashana. All rights
              reserved.
            </p>
            <p className="mt-1 text-xs">
              Built with React, Vite & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
