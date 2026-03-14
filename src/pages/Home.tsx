import { Link } from "react-router";
import { Github, Linkedin, Twitter, ArrowRight, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { motion } from "motion/react";

const headshot =
  "https://images.unsplash.com/photo-1645134711019-29fe79dd27c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900";

export function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {personalInfo.title}
                  </span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white"
                >
                  Hi, I'm{" "}
                  <span className="text-blue-600 dark:text-blue-400">{personalInfo.name.split(" ")[0]}</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl text-gray-600 dark:text-gray-300"
                >
                  {personalInfo.tagline}
                </motion.p>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl"
              >
                {personalInfo.bio}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                >
                  View My Work
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Get In Touch
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-4 pt-4"
              >
                {[
                  { icon: Github, url: personalInfo.social.github, label: "GitHub" },
                  { icon: Linkedin, url: personalInfo.social.linkedin, label: "LinkedIn" },
                  { icon: Twitter, url: personalInfo.social.twitter, label: "Twitter" },
                  { icon: Mail, url: `mailto:${personalInfo.email}`, label: "Email" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob" />
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000" />

              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[85%] rounded-2xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.6)] border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1516889454133-d3cd87326a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBlbnZpcm9ubWVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzExMTc1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-blue-600/10 dark:from-gray-900/40 dark:to-transparent" />
                </div>
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[85%] rounded-2xl"
                  style={{ clipPath: "inset(-50% 1px 1px 1px round 1rem)" }}
                >
                  <img
                    src={headshot}
                    alt="Jonah Anderson"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[88%] object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 py-16 border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "4", label: "Companies" },
              { value: "53%", label: "Decline Rate Reduced" },
              { value: "30%", label: "Integration Growth" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-3xl sm:text-4xl text-blue-600 dark:text-blue-400"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Driving product success through strategic vision, user-centered design,
              and data-driven execution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
                iconBg: "bg-blue-100 dark:bg-blue-900/30",
                iconText: "text-blue-600 dark:text-blue-400",
                title: "Product Strategy",
                description: "Defining product vision, roadmaps, and go-to-market strategies that align with business goals and user needs"
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                iconBg: "bg-purple-100 dark:bg-purple-900/30",
                iconText: "text-purple-600 dark:text-purple-400",
                title: "Cross-Functional Leadership",
                description: "Leading diverse teams of designers, engineers, and stakeholders to deliver exceptional products on time"
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                iconBg: "bg-green-100 dark:bg-green-900/30",
                iconText: "text-green-600 dark:text-green-400",
                title: "Data-Driven Decisions",
                description: "Leveraging analytics, A/B testing, and user research to make informed product decisions that drive growth"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 ${item.iconBg} ${item.iconText} rounded-lg flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
