import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      description: 'Validates expertise in designing distributed applications and systems on the AWS platform.',
      skills: ['AWS Architecture', 'Security', 'Cost Optimization', 'Performance'],
      color: 'from-orange-500 to-orange-600',
      
    },
  ];

  return (
    <section
      id="certifications"
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
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in cloud technologies and software architecture.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 
                         border border-gray-100 dark:border-gray-700 
                         hover:shadow-xl transition-shadow mb-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center flex-shrink-0`}>
                  <Award className="w-10 h-10 text-white" />
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-50 dark:bg-gray-700 
                                   text-blue-700 dark:text-blue-300 
                                   text-sm rounded-full font-medium 
                                   border border-blue-200 dark:border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="https://www.credly.com/badges/56f8c821-f6d8-42d9-8183-a3db31b6e038/linked_in_profile"  // 👈 put your real link here
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
>
  <ExternalLink className="w-4 h-4" />
  View Certificate
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

export default Certifications;
