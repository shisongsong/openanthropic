import type { Metadata } from "next";

import { PageTemplate } from "@/components/site/PageTemplate";
import { buildMetadata } from "@/lib/content";

export const metadata: Metadata = buildMetadata("about");

export default function AboutPage() {
  return <PageTemplate slug="about" />;
}
