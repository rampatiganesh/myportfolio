 import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, BarChart3, Cloud, ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Secure API Gateway',
      description:
        'Enterprise-grade API gateway with comprehensive security features including OAuth 2.1, JWT authentication, and PCI-DSS compliance.',
      technologies: ['Java', 'Spring Boot', 'OAuth 2.1', 'JWT', 'Okta', 'PCI-DSS'],
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      
    },
    {
      title: 'Real-Time Analytics Platform',
      description:
        'High-performance analytics platform processing millions of events with Kafka and microservices architecture.',
      technologies: ['Kafka', 'Spring Boot', 'Microservices', 'React', 'PostgreSQL'],
      icon: BarChart3,
      color: 'from-green-500 to-green-600',
      
    },
    {
      title: 'Cloud-Native Migration',
      description:
        'Complete infrastructure modernization to multi-cloud architecture with automated deployment pipelines.',
      technologies: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Docker', 'Helm'],
      icon: Cloud,
      color: 'from-purple-500 to-purple-600',
      
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Here are some of my key projects that demonstrate my expertise in building scalable, secure enterprise applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full 
                              border border-gray-100 dark:border-gray-700 
                              hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 
                                 text-gray-700 dark:text-gray-300 
                                 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  {project.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 
                               text-gray-700 dark:text-gray-300 
                               rounded-lg font-medium text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
