import { motion } from "framer-motion";
import { Sparkles, Mail, Phone, Download, GraduationCap, Code } from "lucide-react";
import NodeNetwork from "./NodeNetwork";
import profilePic from "../assets/pp.png";

export default function Hero({ heroRef, scrollToSection, downloadCV }) {
  return (
    <section ref={heroRef} className="min-h-screen relative overflow-hidden flex items-center pt-16 md:pt-20">
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
                    className="px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base cursor-pointer"
                  >
                    View My Work
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={downloadCV}
                    className="px-4 py-2.5 md:px-6 md:py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800/50 transition-all duration-200 flex items-center text-sm md:text-base cursor-pointer"
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
  );
}
