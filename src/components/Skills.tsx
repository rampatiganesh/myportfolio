import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      category: 'Backend & APIs',
      skills: ['Java', 'Spring Boot', 'REST', 'gRPC', 'GraphQL', 'Node.js'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      category: 'Frontend',
      skills: ['React', 'Angular', 'Redux', 'NgRx', 'HTML/CSS', 'TypeScript'],
      color: 'from-green-500 to-green-600',
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Cosmos DB', 'Oracle'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      category: 'Messaging & Streaming',
      skills: ['Apache Kafka', 'AWS SNS/SQS', 'RabbitMQ', 'Apache Pulsar'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins'],
      color: 'from-teal-500 to-teal-600',
    },
    {
      category: 'Security',
      skills: ['OAuth 2.1', 'JWT', 'RBAC', 'IAM', 'Okta', 'Keycloak'],
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-gray-900 transition-colors"
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
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build robust, scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 
                         border border-gray-100 dark:border-gray-700 
                         hover:shadow-xl transition-shadow"
            >
              <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full mb-6`}></div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-50 dark:bg-gray-700 
                               text-gray-700 dark:text-gray-300 
                               rounded-lg font-medium text-sm 
                               border border-gray-200 dark:border-gray-600 
                               hover:bg-gray-100 dark:hover:bg-gray-600 
                               hover:border-gray-300 dark:hover:border-gray-500 
                               transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
