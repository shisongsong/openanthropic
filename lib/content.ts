import type { Metadata } from "next";

import aboutJson from "@/content/site/about.json";
import homeJson from "@/content/site/home.json";
import navJson from "@/content/site/nav.json";
import newsJson from "@/content/site/news.json";
import platformJson from "@/content/site/platform.json";
import researchJson from "@/content/site/research.json";
import type { NavItem, PageContent, PageSlug } from "@/types/content";

const pageMap: Record<PageSlug, PageContent> = {
  home: homeJson as PageContent,
  platform: platformJson as PageContent,
  research: researchJson as PageContent,
  news: newsJson as PageContent,
  about: aboutJson as PageContent
};

export function getNav(): NavItem[] {
  return navJson as NavItem[];
}

export function getPageContent(slug: PageSlug): PageContent {
  return pageMap[slug];
}

export function buildMetadata(slug: PageSlug): Metadata {
  const page = getPageContent(slug);
  const siteBase = "https://ai.openanthropic.com";

  return {
    title: page.seo.title,
    description: page.seo.description,
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      type: "website",
      url: slug === "home" ? siteBase : `${siteBase}/${slug}`
    }
  };
}
