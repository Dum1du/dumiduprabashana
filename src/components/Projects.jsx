import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "../data/projects.jsx";

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects({ projectsRef }) {
  return (
    <section
      ref={projectsRef}
      className="py-12 md:py-20 px-4 sm:px-6 bg-gray-900/50"
    >
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Showcasing my technical expertise and creativity
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: idx * 0.05,
              }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="bg-gray-800/30 rounded-xl md:rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-200 h-full">
                {/* Cover image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}
                  />

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {project.status && (
                    <span className="absolute top-3 right-3 px-2 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs sm:text-sm font-medium">
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Card body */}
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-400 mb-4 md:mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 md:mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 sm:space-y-2 mb-6 md:mb-8">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm sm:text-base text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* GitHub link */}
                  {project.github && (
                    <motion.a
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
