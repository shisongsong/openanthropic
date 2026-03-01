import Link from "next/link";

const footerLinks: Array<{ heading: string; items: Array<{ label: string; href: string }> }> = [
  {
    heading: "Product",
    items: [
      { label: "Platform", href: "/platform" },
      { label: "Research", href: "/research" },
      { label: "News", href: "/news" }
    ]
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Safety", href: "/research" },
      { label: "Contact", href: "/about" }
    ]
  },
  {
    heading: "Resources",
    items: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Status", href: "#" }
    ]
  }
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-panel-a/60">
      <div className="mx-auto grid w-full max-w-[82rem] gap-10 px-4 py-12 md:grid-cols-[1.4fr,1fr,1fr,1fr] md:px-8">
        <div>
          <p className="text-xl font-semibold tracking-tight">Open Frontier</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Practical AI systems for real teams, designed with clear product narratives and a research-first lens.
          </p>
        </div>

        {footerLinks.map((group) => (
          <div key={group.heading}>
            <p className="text-sm font-medium text-ink">{group.heading}</p>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line/80">
        <div className="mx-auto flex w-full max-w-[82rem] items-center justify-between px-4 py-4 text-xs text-muted md:px-8">
          <span>(c) {new Date().getFullYear()} Open Frontier</span>
          <span>Independent project. Not affiliated with Anthropic PBC or OpenAI.</span>
        </div>
      </div>
    </footer>
  );
}
