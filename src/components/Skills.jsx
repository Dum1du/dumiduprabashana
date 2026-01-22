import { motion } from "framer-motion";
import { skills } from "../data/skills.jsx";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
};

export default function Skills({ skillsRef }) {
  return (
    <section ref={skillsRef} className="py-12 md:py-20 px-4 sm:px-6">
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
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
                delay: idx * 0.03,
              }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="group"
              style={{ willChange: "transform" }}
            >
              <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-200 h-full">
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
      </div>
    </section>
  );
}
