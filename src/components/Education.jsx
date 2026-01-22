import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mt-12 mx-4 sm:mx-6 md:mt-20 bg-gray-800/30 rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-700/50"
    >
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3 sm:mr-4">
          <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Education
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-500/30">
        {/* Static dot (no motion — cheaper) */}
        <div className="absolute -left-[7px] sm:-left-[9px] top-0 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full" />

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
  );
}
