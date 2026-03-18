import { useEffect } from "react";

const DEFAULT_SITE_URL = "https://jonahanderson.me";
const DEFAULT_IMAGE_PATH = "/og-image.png";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

function getSiteUrl(): string {
  const configuredUrl = import.meta.env.VITE_SITE_URL;
  return (configuredUrl || DEFAULT_SITE_URL).replace(/\/$/, "");
}

function toAbsoluteUrl(value: string): string {
  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  const normalizedPath = value.startsWith("/") ? value : `/${value}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

export function usePageSeo({
  title,
  description,
  path,
  image = DEFAULT_IMAGE_PATH,
  type = "website",
  noindex = false,
}: SeoProps) {
  useEffect(() => {
    const canonicalUrl = toAbsoluteUrl(path || window.location.pathname);
    const imageUrl = toAbsoluteUrl(image);

    document.title = title;

    upsertCanonical(canonicalUrl);

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", imageUrl);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
  }, [title, description, path, image, type, noindex]);
}
