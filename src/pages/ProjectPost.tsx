import { Fragment, type ReactNode } from "react";
import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { getProjectPostBySlug } from "../data/project-posts";
import { NotFound } from "./NotFound";

type ParsedContentBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

const HEADING_PATTERN = /^(#{2,3})\s+(.+)$/;
const IMAGE_PATTERN = /^!\[(.*?)\]\((\S+?)(?:\s+"(.*?)")?\)$/;
const INLINE_PATTERN = /(\*\*([^*]+)\*\*|\[([^\]]+)\]\((https?:\/\/[^\s)]+)\))/g;

function renderInlineText(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = INLINE_PATTERN.exec(text)) !== null) {
    const [fullMatch, , boldText, linkText, linkUrl] = match;
    const matchStart = match.index;

    if (matchStart > lastIndex) {
      nodes.push(<Fragment key={`text-${key++}`}>{text.slice(lastIndex, matchStart)}</Fragment>);
    }

    if (boldText) {
      nodes.push(
        <strong key={`bold-${key++}`} className="text-gray-900 dark:text-white">
          {boldText}
        </strong>,
      );
    } else if (linkText && linkUrl) {
      nodes.push(
        <a
          key={`link-${key++}`}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          {linkText}
        </a>,
      );
    } else {
      nodes.push(<Fragment key={`raw-${key++}`}>{fullMatch}</Fragment>);
    }

    lastIndex = matchStart + fullMatch.length;
  }

  if (lastIndex < text.length) {
    nodes.push(<Fragment key={`tail-${key++}`}>{text.slice(lastIndex)}</Fragment>);
  }

  INLINE_PATTERN.lastIndex = 0;
  return nodes;
}

function isStructuralLine(line: string): boolean {
  return HEADING_PATTERN.test(line) || IMAGE_PATTERN.test(line) || line.startsWith("- ");
}

function parsePostContent(content: string): ParsedContentBlock[] {
  const lines = content.split(/\r?\n/);
  const blocks: ParsedContentBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    const imageMatch = line.match(IMAGE_PATTERN);
    if (imageMatch) {
      blocks.push({
        type: "image",
        alt: imageMatch[1] || "Project image",
        src: imageMatch[2],
        caption: imageMatch[3],
      });
      index += 1;
      continue;
    }

    const headingMatch = line.match(HEADING_PATTERN);
    if (headingMatch) {
      blocks.push({
        type: "heading",
        level: headingMatch[1].length === 2 ? 2 : 3,
        text: headingMatch[2].trim(),
      });
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];

      while (index < lines.length) {
        const itemLine = lines[index].trim();
        if (!itemLine.startsWith("- ")) {
          break;
        }

        items.push(itemLine.slice(2).trim());
        index += 1;
      }

      blocks.push({ type: "list", items });
      continue;
    }

    const paragraphLines = [line];
    index += 1;

    while (index < lines.length) {
      const nextLine = lines[index].trim();

      if (!nextLine) {
        index += 1;
        break;
      }

      if (isStructuralLine(nextLine)) {
        break;
      }

      paragraphLines.push(nextLine);
      index += 1;
    }

    blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
  }

  return blocks;
}

export function ProjectPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getProjectPostBySlug(slug) : undefined;
  const blocks = post ? parsePostContent(post.content) : [];

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/experience?tab=projects"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Experience
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <div className="aspect-video w-full bg-gray-100 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
            <ImageWithFallback
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          <header className="p-8 sm:p-10 border-b border-gray-100 dark:border-gray-700">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              {post.articleTitle ?? post.title}
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {post.summary}
            </p>

            <a
              href={post.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              <ExternalLink size={16} />
              {post.productLabel ?? "View Product"}
            </a>
          </header>

          <div className="p-8 sm:p-10 space-y-6">
            {blocks.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className={`text-gray-900 dark:text-white pt-3 ${
                      block.level === 2 ? "text-3xl" : "text-2xl"
                    }`}
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "paragraph") {
                return (
                  <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {renderInlineText(block.text)}
                  </p>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={index} className="space-y-3 pl-5 list-disc text-gray-700 dark:text-gray-300">
                    {block.items.map((item, itemIndex) => (
                      <li key={`${item}-${itemIndex}`} className="leading-relaxed marker:text-blue-500 dark:marker:text-blue-400">
                        {renderInlineText(item)}
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <figure key={index} className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                  <ImageWithFallback src={block.src} alt={block.alt} className="w-full h-auto" />
                  {block.caption && (
                    <figcaption className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </div>
        </motion.article>
      </div>
    </div>
  );
}
