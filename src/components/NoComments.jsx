import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const NoComments = () => {
  return (
    <motion.div
      key="no-comments"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="text-center py-6 md:py-8"
    >
      <MessageSquare className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gray-600 mx-auto mb-3 md:mb-4" />
      <p className="text-gray-500 text-sm sm:text-base">
        No comments yet. Be the first to post!
      </p>
    </motion.div>
  );
};

export default NoComments;
