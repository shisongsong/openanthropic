"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import type { NavItem } from "@/types/content";

type SiteHeaderProps = {
  navItems: NavItem[];
};

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[82rem] items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="group inline-flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="inline-block size-2 rounded-full bg-accent transition-transform group-hover:scale-125" />
          Open Frontier
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${active ? "text-ink" : "text-muted hover:text-ink"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex rounded-full border border-line bg-white/80 px-3 py-1.5 text-xs font-medium text-ink md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-nav" className="border-t border-line/80 bg-paper px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm ${
                    active ? "bg-accent-soft text-ink" : "text-muted hover:bg-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
