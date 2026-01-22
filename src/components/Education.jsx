import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <>
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
    </>
  );
}
