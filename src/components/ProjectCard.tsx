import { motion } from "motion/react";
import { ExternalLink, FileText } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  caseStudyUrl?: string;
};

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  caseStudyUrl,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <ImageWithFallback src={image} alt={title} className="h-full w-full object-cover" />
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl text-gray-900 dark:text-white">{title}</h3>
        <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">{description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-3 border-t border-gray-100 pt-4 dark:border-gray-700">
          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <ExternalLink size={16} />
              View Product
            </a>
          ) : null}

          {caseStudyUrl ? (
            <a
              href={caseStudyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <FileText size={16} />
              Case Study
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
