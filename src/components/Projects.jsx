import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "../data/projects.jsx";

export default function Projects({ projectsRef }) {
  return (
    <section ref={projectsRef} className="py-12 md:py-20 px-4 sm:px-6 bg-gray-900/50">
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
  );
}
