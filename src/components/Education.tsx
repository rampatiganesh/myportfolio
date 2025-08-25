import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'M.S. Computer Science (Cybersecurity)',
      school: 'University of Central Missouri',
      period: 'Aug 2023 – May 2025',
      location: 'Warrensburg, Missouri',
      description:
        'Advanced studies in computer science with specialization in cybersecurity, focusing on secure software development, network security, and risk assessment.',
      relevantCourses: [
        'Advanced Software Engineering',
        'Network Security',
        'Cryptography',
        'Secure Coding Practices',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      degree: 'B.Tech. Electronics & Communication Engineering',
      school: 'Tirumala Engineering College',
      period: '2018 – 2022',
      location: 'Narsaraopeta, India',
      description:
        'Strong foundation in electronics and communication engineering with emphasis on digital systems, programming, and system design.',
      relevantCourses: [
        'Data Structures',
        'Digital Signal Processing',
        'Microprocessors',
        'Computer Networks',
      ],
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section
      id="education"
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
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            My educational journey has provided a strong foundation in computer science, engineering principles, and specialized cybersecurity knowledge.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 
                         border border-gray-100 dark:border-gray-700 
                         hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center flex-shrink-0`}
                >
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>

                <div className="flex-grow">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      {edu.school}
                    </h4>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Relevant Coursework
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-gray-50 dark:bg-gray-700 
                                     text-gray-700 dark:text-gray-300 
                                     text-sm rounded-full font-medium 
                                     border border-gray-200 dark:border-gray-600"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
