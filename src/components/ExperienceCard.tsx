import { MapPin, Calendar } from "lucide-react";
import { motion } from "motion/react";

interface Role {
  title: string;
  period: string;
  achievements?: string[];
}

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  roles?: Role[];
}

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
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sm:p-8 hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl text-gray-900 dark:text-white mb-1">{company}</h3>
          <p className="text-lg text-blue-600 dark:text-blue-400">{position}</p>
        </div>
        <div className="flex flex-col sm:items-end gap-1 text-sm text-gray-600 dark:text-gray-400">
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

      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{description}</p>

      {roles && roles.length > 0 ? (
        <div className="border-t border-gray-100 dark:border-gray-700 pt-4 space-y-6">
          {roles.map((role, roleIndex) => (
            <div key={roleIndex}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <p className="text-sm text-gray-900 dark:text-white">{role.title}</p>
                <span className="text-xs text-gray-500 dark:text-gray-400">{role.period}</span>
              </div>
              {role.achievements && role.achievements.length > 0 && (
                <ul className="space-y-2">
                  {role.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (roleIndex * role.achievements!.length + index) * 0.05 }}
                      className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ) : (
        achievements && achievements.length > 0 && (
          <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
            <p className="text-sm text-gray-900 dark:text-white mb-3">Key Achievements:</p>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"
                >
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )
      )}
    </motion.div>
  );
}
