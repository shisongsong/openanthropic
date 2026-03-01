import type { Metadata } from "next";

import { PageTemplate } from "@/components/site/PageTemplate";
import { buildMetadata } from "@/lib/content";

export const metadata: Metadata = buildMetadata("news");

export default function NewsPage() {
  return <PageTemplate slug="news" />;
}
