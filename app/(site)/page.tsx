import type { Metadata } from "next";

import { PageTemplate } from "@/components/site/PageTemplate";
import { buildMetadata } from "@/lib/content";

export const metadata: Metadata = buildMetadata("home");

export default function HomePage() {
  return <PageTemplate slug="home" />;
}
