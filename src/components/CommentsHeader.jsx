import React from 'react'
import { motion} from "framer-motion";
import {
  MessageSquare,

} from "lucide-react";

const CommentsHeader = ({ count }) => {
  return (
    <motion.h3
      initial={{ opacity: 0, y: -5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: 0.1 }}
      className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center"
    >
      <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-400 mr-2 sm:mr-3" />
      Previous Comments ({count})
    </motion.h3>
  );
};


export default CommentsHeader