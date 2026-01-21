import { motion } from "framer-motion";
import { Code, Home, FolderOpen, User, Mail, Download } from "lucide-react";

export default function Navbar({ isNavOpen, setIsNavOpen, scrollToSection, downloadCV }) {
  return (
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
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{ opacity: 1, maxHeight: 500 }}
              exit={{ opacity: 0, maxHeight: 0 }}
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
  );
}
