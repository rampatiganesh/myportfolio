import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden
                 bg-white dark:bg-gray-900 transition-colors"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <div className="absolute inset-0 
          bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] 
          opacity-20 dark:opacity-10">
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium 
                 text-gray-600 dark:text-gray-300 mb-2">
              Hi, I'm Vijaya R
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 
                 bg-clip-text text-transparent">
              Java Full Stack & Backend Engineer
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Designing and modernizing secure, scalable enterprise applications with 4 years of experience
            in Java, Spring Boot, microservices, and cloud technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              <Eye className="w-5 h-5" />
              View My Work
            </motion.button>

           <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="/resume.pdf"
  download="Vijaya_R_Resume.pdf"
  className="flex items-center gap-2 bg-white dark:bg-gray-800 text-blue-600 px-8 py-4 rounded-lg font-medium text-lg shadow-lg border-2 border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
>
  <Download className="w-5 h-5" />
  Download Resume
</motion.a>

          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-500 dark:text-gray-400 text-sm">Scroll down</span>
          <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
