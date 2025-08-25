import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      company: 'Apple',
      position: 'Senior Software Engineer',
      period: 'Nov 2024 – Present',
      achievements: [
        'Built Java 17 + Spring Boot + gRPC/REST microservices on Azure AKS with Terraform',
        'Secured APIs with OAuth 2.1, JWT, RBAC implementation',
        'Automated deployments with Kubernetes, Helm, Docker',
        'Designed Kafka + AWS SNS/SQS event-driven pipelines',
        'Boosted operational efficiency by 28%'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      company: 'R Financial',
      position: 'Software Engineer',
      period: 'Aug 2020 – Jul 2023',
      achievements: [
        'Developed Spring Boot + Node.js microservices with Okta SSO integration',
        'Migrated infrastructure to AWS EKS & Azure AKS achieving 20% cost savings',
        'Built responsive dashboards serving 5M+ users using React/Angular',
        'Improved system latency by 60% and throughput by 4× with Kafka implementation',
        'Deployed ELK Stack reducing MTTR by 40%'
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section
      id="experience"
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
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full hidden md:block"></div>

                <div className="md:ml-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 
                                border border-gray-100 dark:border-gray-700 
                                hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.company}
                        </h3>
                      </div>
                      <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.position}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + achIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
