import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";

type Role = {
  title: string;
  period: string;
  achievements?: string[];
};

type ExperienceCardProps = {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  roles?: Role[];
};

export function ExperienceCard({
  company,
  position,
  period,
  location,
  description,
  achievements,
  roles,
}: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8"
    >
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="mb-1 text-xl text-gray-900 dark:text-white">{company}</h3>
          <p className="text-lg text-blue-600 dark:text-blue-400">{position}</p>
        </div>

        <div className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400 sm:items-end">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>

      {roles?.length ? (
        <div className="space-y-6 border-t border-gray-100 pt-4 dark:border-gray-700">
          {roles.map((role, roleIndex) => (
            <section key={role.title}>
              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{role.title}</p>
                <span className="text-xs text-gray-500 dark:text-gray-400">{role.period}</span>
              </div>

              <ul className="space-y-2">
                {role.achievements?.map((achievement, achievementIndex) => (
                  <motion.li
                    key={achievement}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: (roleIndex + achievementIndex) * 0.04,
                    }}
                    className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <span className="mt-1 text-blue-600 dark:text-blue-400">•</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : achievements.length ? (
        <div className="border-t border-gray-100 pt-4 dark:border-gray-700">
          <p className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Key Achievements</p>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <motion.li
                key={achievement}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"
              >
                <span className="mt-1 text-blue-600 dark:text-blue-400">•</span>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      ) : null}
    </motion.article>
  );
}
