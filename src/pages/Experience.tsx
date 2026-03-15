import { useState } from "react";
import { experience, projects, skills, education } from "../data/portfolio-data";
import { ProjectCard } from "../components/ProjectCard";
import { ExperienceCard } from "../components/ExperienceCard";
import { Download } from "lucide-react";
import { motion } from "motion/react";

type TabType = "experience" | "projects" | "skills";

export function Experience() {
  const [activeTab, setActiveTab] = useState<TabType>("experience");

  const tabs = [
    { id: "experience" as TabType, label: "Work Experience" },
    { id: "projects" as TabType, label: "Projects" },
    { id: "skills" as TabType, label: "Skills" },
  ];

  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">Experience & Work</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A showcase of my professional journey, products, and PM expertise
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Jonah-Anderson-Resume.pdf"
            download="Jonah-Anderson-Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex w-full sm:w-auto overflow-x-auto bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 sm:flex-none whitespace-nowrap px-4 sm:px-6 py-3 rounded-md text-sm transition-colors relative ${
                  activeTab === tab.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white dark:bg-gray-700 shadow-sm rounded-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {activeTab === "experience" && (
            <div className="space-y-6">
              <div className="space-y-6">
                {experience.map((exp) => (
                  <ExperienceCard key={exp.id} {...exp} />
                ))}
              </div>

              <div className="mt-12">
                <h2 className="text-2xl text-gray-900 dark:text-white mb-6">Education</h2>
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sm:p-8"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <h3 className="text-xl text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400">{edu.institution}</p>
                        {edu.honors && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{edu.honors}</p>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{edu.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="space-y-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
                  <h2 className="text-xl text-gray-900 dark:text-white mb-6">{category}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {skillList.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center px-4 py-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8">
                <h3 className="text-xl text-gray-900 dark:text-white mb-4">Continuous Learning</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm constantly expanding my product management toolkit by staying current with
                  industry trends, best practices, and emerging technologies. Currently exploring
                  AI/ML integration in products, advanced analytics frameworks, and platform product strategies.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
