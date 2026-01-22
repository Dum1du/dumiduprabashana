import React from 'react'
import { motion} from "framer-motion";
import {
  MessageSquare,

} from "lucide-react";

const CommentItem = ({ comment, index }) => {
  const avatarLetter = comment.name?.charAt(0).toUpperCase() || "U";

  const formatDate = (timestamp) => {
  if (!timestamp) return "Just now";

  const date = timestamp.toDate();
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};


  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false }}
      transition={{
        delay: index * 0.05,
        duration: 0.2,
      }}
      whileHover={{
        y: -2,
        transition: { duration: 0.15 },
      }}
      className="p-3 sm:p-4 rounded-lg bg-gray-800/50 border border-gray-700/50"
    >
      <div className="flex justify-between items-start mb-1.5 sm:mb-2">
        <div className="flex items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.05, duration: 0.15 }}
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-2 sm:mr-3 overflow-hidden"
          >
            {comment.photo ? (
              <img
                src={comment.photo}
                alt={comment.name}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <span className="text-xs font-bold">{avatarLetter}</span>
            )}
          </motion.div>

          <span className="text-xs sm:text-sm text-gray-400">
            {comment.name || "Anonymous"}
          </span>
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          className="text-xs text-gray-500"
        >
          {formatDate(comment.createdAt)}
        </motion.span>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.15 }}
        className="text-gray-300 text-sm sm:text-base ml-9 sm:ml-11"
      >
        {comment.text}
      </motion.p>
    </motion.div>
  );
};



export default CommentItem