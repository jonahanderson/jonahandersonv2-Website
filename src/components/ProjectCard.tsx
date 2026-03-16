import { ExternalLink, FileText } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  demoLabel?: string;
  writeUpUrl?: string;
  writeUpLabel?: string;
}

function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  demoLabel = "View Product",
  writeUpUrl,
  writeUpLabel = "Post",
}: ProjectCardProps) {
  const navigate = useNavigate();
  const cardDestination = writeUpUrl && !isExternalUrl(writeUpUrl) ? writeUpUrl : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onClick={(event) => {
        if (!cardDestination) return;

        const target = event.target as HTMLElement;
        if (target.closest("a, button")) return;

        navigate(cardDestination);
      }}
      onKeyDown={(event) => {
        if (!cardDestination) return;
        if (event.key !== "Enter" && event.key !== " ") return;

        event.preventDefault();
        navigate(cardDestination);
      }}
      role={cardDestination ? "link" : undefined}
      tabIndex={cardDestination ? 0 : undefined}
      aria-label={cardDestination ? `Open project post: ${title}` : undefined}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow ${
        cardDestination ? "cursor-pointer" : ""
      }`}
    >
      <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover" />
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
          {demoUrl && (
            isExternalUrl(demoUrl) ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                <ExternalLink size={16} />
                {demoLabel}
              </a>
            ) : (
              <Link
                to={demoUrl}
                className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                <ExternalLink size={16} />
                {demoLabel}
              </Link>
            )
          )}
          {writeUpUrl && (
            isExternalUrl(writeUpUrl) ? (
              <a
                href={writeUpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <FileText size={16} />
                {writeUpLabel}
              </a>
            ) : (
              <Link
                to={writeUpUrl}
                className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <FileText size={16} />
                {writeUpLabel}
              </Link>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
}
