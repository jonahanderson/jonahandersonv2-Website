import { personalInfo } from "../data/portfolio-data";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { MapPin, Mail, Heart } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn more about my journey, interests, and what drives me as a product manager
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="aspect-square w-full max-w-sm mx-auto lg:mx-0 mb-6">
                <ImageWithFallback
                  src="/jonahandersonabout.png"
                  alt="About"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 space-y-4">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Mail size={20} className="text-blue-600 dark:text-blue-400" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
              <h2 className="text-2xl text-gray-900 dark:text-white mb-6">My Story</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {personalInfo.aboutParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
              <div className="flex items-center gap-2 mb-6">
                <Heart size={24} className="text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl text-gray-900 dark:text-white">Interests & Passions</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {personalInfo.interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 sm:p-12"
        >
          <h2 className="text-3xl text-gray-900 dark:text-white mb-8 text-center">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🎯",
                circleBg: "bg-blue-600 dark:bg-blue-500",
                title: "User-Centric",
                description: "Putting user needs first in every decision, backed by research and empathy"
              },
              {
                emoji: "📊",
                circleBg: "bg-purple-600 dark:bg-purple-500",
                title: "Data-Driven",
                description: "Making informed decisions through metrics, testing, and continuous iteration"
              },
              {
                emoji: "🚀",
                circleBg: "bg-green-600 dark:bg-green-500",
                title: "Impact-Focused",
                description: "Prioritizing features and initiatives that deliver measurable business value"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${value.circleBg} text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}
                >
                  {value.emoji}
                </motion.div>
                <h3 className="text-xl text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
