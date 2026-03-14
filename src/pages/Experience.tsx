import { useState } from "react";
import { motion } from "motion/react";
import { Download } from "lucide-react";
import { ExperienceCard } from "../components/ExperienceCard";
import { ProjectCard } from "../components/ProjectCard";
import { education, experience, projects, skills } from "../data/portfolio-data";

type TabType = "experience" | "projects" | "skills";

const tabs: { id: TabType; label: string }[] = [
  { id: "experience", label: "Work Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export function Experience() {
  const [activeTab, setActiveTab] = useState<TabType>("experience");

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl text-gray-900 dark:text-white sm:text-5xl">Experience & Work</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            A showcase of my professional journey, products, and product management expertise.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Jonah-Anderson-Resume.txt"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        <div className="mb-12 flex justify-center">
          <div className="inline-flex w-full overflow-x-auto rounded-2xl bg-gray-100 p-1 dark:bg-gray-800 sm:w-auto">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 whitespace-nowrap rounded-xl px-4 py-3 text-sm transition-colors sm:flex-none sm:px-6 ${
                  activeTab === tab.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {activeTab === tab.id ? (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-xl bg-white shadow-sm dark:bg-gray-700"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                ) : null}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          {activeTab === "experience" ? (
            <div className="space-y-6">
              {experience.map((item) => (
                <ExperienceCard key={item.id} {...item} />
              ))}

              <div className="mt-12">
                <h2 className="mb-6 text-2xl text-gray-900 dark:text-white">Education</h2>
                {education.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-8"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="mb-1 text-xl text-gray-900 dark:text-white">{item.degree}</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400">{item.institution}</p>
                        {item.honors ? (
                          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.honors}</p>
                        ) : null}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{item.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {activeTab === "projects" ? (
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          ) : null}

          {activeTab === "skills" ? (
            <div className="space-y-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <section
                  key={category}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <h2 className="mb-6 text-xl text-gray-900 dark:text-white">{category}</h2>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {skillList.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center justify-center rounded-2xl bg-gray-50 px-4 py-3 text-center text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:bg-gray-900/50 dark:text-gray-300 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </section>
              ))}

              <section className="rounded-3xl bg-gradient-to-br from-blue-50 to-violet-50 p-8 dark:from-gray-900 dark:to-gray-800">
                <h3 className="mb-4 text-xl text-gray-900 dark:text-white">Continuous Learning</h3>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  I keep expanding my product toolkit by staying current with industry trends, best practices, and
                  emerging technologies, especially AI integrations, platform strategy, and analytics frameworks.
                </p>
              </section>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
