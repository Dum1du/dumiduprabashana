import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db, provider } from "../firebase";
import CommentsHeader from "./CommentsHeader";
import NoComments from "./NoComments";
import CommentsList from "./CommentsList";

function CommentArea({ scrollToSection, contactRef }) {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);

  const [terminalHistory, setTerminalHistory] = useState([
    { type: "system", text: "Welcome to the comment terminal." },
    { type: "system", text: "Type your message and press Enter to submit." },
    { type: "system", text: 'Type "clear" to clear the terminal.' },
    { type: "system", text: 'Type "help" for commands.' },
  ]);
  const [terminalInput, setTerminalInput] = useState("");

  // Auth listener
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, setUser);
    return () => unSub();
  }, []);

  // Load comments
  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setComments(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  // Terminal submit handler
  const handleTerminalSubmit = async (e) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const input = terminalInput.trim();

    // Add user input to history
    setTerminalHistory((prev) => [...prev, { type: "user", text: `$ ${input}` }]);

    // Commands
    const cmd = input.toLowerCase();
    if (["clear", "help", "projects", "skills", "contact"].includes(cmd)) {
      if (cmd === "clear") setTerminalHistory([{ type: "system", text: "Terminal cleared." }]);
      else if (cmd === "help") {
        setTerminalHistory((prev) => [
          ...prev,
          { type: "system", text: "Available commands:" },
          { type: "system", text: "  clear - Clear terminal" },
          { type: "system", text: "  help - Show this help" },
          { type: "system", text: "  projects - View my projects" },
          { type: "system", text: "  skills - View my skills" },
          { type: "system", text: "  contact - Get contact info" },
        ]);
      } else {
        setTerminalHistory((prev) => [
          ...prev,
          { type: "system", text: `Opening ${cmd} section...` },
        ]);
        setTimeout(() => scrollToSection(cmd), 300);
      }
      setTerminalInput("");
      return;
    }

    // Regular comment submission
    try {
      if (!user) {
        const result = await signInWithPopup(auth, provider);
        setUser(result.user);
      }

      const normalizedPhotoURL = user?.photoURL?.replace(/=s\d+-c/, "=s200") || null;

      await addDoc(collection(db, "comments"), {
        text: input,
        name: user?.displayName || "Anonymous",
        photo: normalizedPhotoURL,
        uid: user?.uid,
        createdAt: serverTimestamp(),
      });

      setTerminalHistory((prev) => [
        ...prev,
        { type: "system", text: "Comment submitted successfully!" },
        { type: "system", text: 'Type another message or use "help" for commands.' },
      ]);
    } catch (error) {
      console.error(error);
      setTerminalHistory((prev) => [
        ...prev,
        { type: "system", text: "Error submitting comment. Please try again." },
      ]);
    } finally {
      setTerminalInput("");
    }
  };

  return (
    <section ref={contactRef} className="py-12 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="flex items-center justify-center mb-3 md:mb-4">
            <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mr-2 sm:mr-3" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Terminal Comments
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">
            Leave a message in the terminal interface
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 rounded-lg md:rounded-xl border border-gray-700 overflow-hidden"
          >
            <div className="bg-gray-800 px-3 py-2 md:px-4 md:py-3 border-b border-gray-700 flex items-center">
              <div className="flex space-x-1.5 sm:space-x-2">
                {["bg-red-500", "bg-amber-500", "bg-green-500"].map((color) => (
                  <div key={color} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${color}`}></div>
                ))}
              </div>
              <span className="ml-3 text-xs sm:text-sm text-gray-400">
                terminal — dumidu@portfolio:~ 
              </span>
            </div>

            <div className="p-3 md:p-4 font-mono text-xs sm:text-sm">
              <div className="h-48 sm:h-94 overflow-y-auto mb-3 md:mb-4">
                {terminalHistory.map((line, idx) => (
                  <div
                    key={idx}
                    className={`mb-0.5 ${
                      line.type === "system" ? "text-gray-400" : "text-blue-400"
                    }`}
                  >
                    {line.text}
                  </div>
                ))}
                {/* Blinking cursor */}
                <div className="flex items-center mt-2">
                  <span className="text-green-400 mr-2">visitor@portfolio:~$</span>
                  <span className="text-blue-300 animate-pulse">▋</span>
                </div>
              </div>

              <form onSubmit={handleTerminalSubmit} className="flex">
                <div className="flex-1 bg-gray-800 rounded-l-lg border border-gray-700 px-3 py-1.5 md:px-4 md:py-2 flex items-center">
                  <span className="text-green-400 mr-2">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-gray-300 placeholder-gray-500"
                    placeholder="Type your message or command..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 px-3 md:px-6 rounded-r-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-semibold"
                >
                  ↵
                </button>
              </form>
            </div>
          </motion.div>

          {/* Comments */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-gray-800/30 md:bg-gray-800/30 rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 border border-gray-700/50"
          >
            <CommentsHeader count={comments.length} />
            <div className="space-y-3 sm:space-y-4 max-h-96 overflow-y-auto pr-1 sm:pr-2">
              <AnimatePresence mode="wait">
                {comments.length === 0 ? <NoComments /> : <CommentsList comments={comments} />}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CommentArea;
