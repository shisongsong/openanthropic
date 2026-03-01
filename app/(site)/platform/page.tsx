import type { Metadata } from "next";

import { PageTemplate } from "@/components/site/PageTemplate";
import { buildMetadata } from "@/lib/content";

export const metadata: Metadata = buildMetadata("platform");

export default function PlatformPage() {
  return <PageTemplate slug="platform" />;
}
