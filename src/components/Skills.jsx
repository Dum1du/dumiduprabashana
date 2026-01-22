import { motion } from "framer-motion";
import { skills } from "../data/skills.jsx";

export default function Skills({ skillsRef }) {
  return (
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
                
              </div>
    </section>
  );
}
