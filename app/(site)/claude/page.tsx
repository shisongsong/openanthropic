import { permanentRedirect } from "next/navigation";

export default function LegacyClaudePage() {
  permanentRedirect("/platform");
}
