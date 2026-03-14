import { motion } from "motion/react";
import { Heart, Mail, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { personalInfo } from "../data/portfolio-data";

const values = [
  {
    icon: "01",
    title: "User-Centric",
    description: "Putting user needs first in every decision, grounded in empathy, research, and useful feedback loops.",
    tone: "blue",
  },
  {
    icon: "02",
    title: "Data-Driven",
    description: "Making informed decisions through metrics, testing, and iteration instead of relying on instinct alone.",
    tone: "violet",
  },
  {
    icon: "03",
    title: "Impact-Focused",
    description: "Prioritizing work that creates measurable business value while staying practical about delivery.",
    tone: "emerald",
  },
];

export function About() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl text-gray-900 dark:text-white sm:text-5xl">About Me</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Learn more about my journey, interests, and what drives me as a product manager.
          </p>
        </motion.div>

        <div className="mb-20 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="mx-auto mb-6 aspect-square w-full max-w-sm lg:mx-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760536928911-40831dacdbc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MzEwMDIwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Workspace portrait"
                  className="h-full w-full rounded-[2rem] object-cover shadow-lg"
                />
              </div>

              <div className="space-y-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Mail size={20} className="text-blue-600 dark:text-blue-400" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-6 text-2xl text-gray-900 dark:text-white">My Story</h2>
              <div className="space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                {personalInfo.aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-6 flex items-center gap-2">
                <Heart size={24} className="text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl text-gray-900 dark:text-white">Interests & Passions</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {personalInfo.interests.map((interest) => (
                  <div
                    key={interest}
                    className="flex items-center gap-2 rounded-2xl bg-gray-50 px-4 py-3 dark:bg-gray-900/50"
                  >
                    <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300">{interest}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-gradient-to-br from-blue-50 to-violet-50 p-8 dark:from-gray-900 dark:to-gray-800 sm:p-12"
        >
          <h2 className="mb-8 text-center text-3xl text-gray-900 dark:text-white">Core Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-sm font-bold text-white ${toneClass(
                    value.tone,
                  )}`}
                >
                  {value.icon}
                </motion.div>
                <h3 className="mb-2 text-xl text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

function toneClass(tone: string) {
  if (tone === "violet") {
    return "bg-violet-600 dark:bg-violet-500";
  }

  if (tone === "emerald") {
    return "bg-emerald-600 dark:bg-emerald-500";
  }

  return "bg-blue-600 dark:bg-blue-500";
}
