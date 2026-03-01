import type { Metadata } from "next";

import { PageTemplate } from "@/components/site/PageTemplate";
import { buildMetadata } from "@/lib/content";

export const metadata: Metadata = buildMetadata("research");

export default function ResearchPage() {
  return <PageTemplate slug="research" />;
}
