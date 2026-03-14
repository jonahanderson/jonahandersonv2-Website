import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { personalInfo } from "../data/portfolio-data";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "4", label: "Companies" },
  { value: "53%", label: "Decline Rate Reduced" },
  { value: "30%", label: "Integration Growth" },
];

const capabilities = [
  {
    title: "Product Strategy",
    description:
      "Defining product vision, roadmaps, and go-to-market strategies that align with business goals and user needs.",
    accent: "blue",
  },
  {
    title: "Cross-Functional Leadership",
    description:
      "Leading designers, engineers, and stakeholders toward ambitious launches with clear alignment and strong execution.",
    accent: "violet",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Using analytics, experimentation, and research to turn product direction into measurable business impact.",
    accent: "emerald",
  },
];

const socialLinks = [
  { icon: Github, url: personalInfo.social.github, label: "GitHub" },
  { icon: Linkedin, url: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, url: personalInfo.social.twitter, label: "Twitter" },
  { icon: Mail, url: `mailto:${personalInfo.email}`, label: "Email" },
];

export function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="hero-grid" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-32 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  {personalInfo.title}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-xl text-4xl text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
              >
                Hi, I&apos;m{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  {personalInfo.name.split(" ")[0]}
                </span>
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
              className="max-w-xl text-lg leading-relaxed text-gray-700 dark:text-gray-300"
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
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                View My Work
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
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
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target={social.label === "Email" ? undefined : "_blank"}
                  rel={social.label === "Email" ? undefined : "noreferrer"}
                  aria-label={social.label}
                  className="rounded-full p-2 text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square max-w-lg">
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-violet-400 blur-3xl"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1516889454133-d3cd87326a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBlbnZpcm9ubWVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzExMTc1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Profile"
                className="relative h-full w-full rounded-[2rem] object-cover shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + 0.15, type: "spring" }}
                className="text-3xl text-blue-600 dark:text-blue-400 sm:text-4xl"
              >
                {stat.value}
              </motion.div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl text-gray-900 dark:text-white sm:text-4xl">What I Do</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Driving product success through strategic vision, user-centered design, and data-informed execution.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${accentClass(
                    item.accent,
                  )}`}
                >
                  <div className="h-5 w-5 rounded-full bg-current opacity-90" />
                </div>
                <h3 className="mb-3 text-xl text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function accentClass(accent: string) {
  if (accent === "violet") {
    return "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400";
  }

  if (accent === "emerald") {
    return "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400";
  }

  return "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400";
}
