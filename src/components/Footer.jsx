import React from "react";
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Code,
  ArrowUp,
} from "lucide-react";

const Footer = ({scrollToSection}) => {
  const currentYear = new Date().getFullYear();

  const contactLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:dumidu.prabashana01@gmail.com",
      color: "group-hover:text-red-400",
      borderColor: "group-hover:border-red-400/30",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      href: "https://wa.me/94712287707",
      color: "group-hover:text-green-400",
      borderColor: "group-hover:border-green-400/30",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dumidu-prabashana-6bab75286/",
      color: "group-hover:text-blue-400",
      borderColor: "group-hover:border-blue-400/30",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/Dum1du",
      color: "group-hover:text-gray-100",
      borderColor: "group-hover:border-gray-400/30",
    },
  ];

  const navLinks = [
    { label: "Home", href: "home" },
    { label: "Projects", href: "projects" },
    { label: "Skills", href: "skills" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <footer className="relative bg-[#030712] text-gray-400 py-12 border-t border-gray-800/60 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Feel free to reach out for collaborations or opportunities
          </p>
        </div>

        {/* Contact Grid - Centered */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 rounded-2xl bg-gray-900/40 border border-gray-800/50 hover:bg-gray-800/60 hover:border-gray-700 transition-all duration-300"
              >
                <div
                  className={`p-4 rounded-xl bg-gray-950 border border-gray-800 group-hover:scale-110 transition-transform duration-300 ${link.color}`}
                >
                  {link.icon}
                </div>
                <span className="mt-4 text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Brand & Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-t border-gray-800/50">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <Code className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Dumidu Prabashana</h3>
              <p className="text-sm text-gray-500 mt-1">
                Software Engineering Student
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 cursor-pointer">
            {navLinks.map((nav, idx) => (
              <a
                key={idx}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                onClick={() => scrollToSection(nav.href)}
              >
                {nav.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({top:0, behavior:"smooth"})}
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            Back to top
            <div className="p-2 rounded-full border border-gray-800 hover:border-gray-600 transition-colors">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800/50 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Dumidu Prabashana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;