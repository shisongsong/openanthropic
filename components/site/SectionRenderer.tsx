import type { ReactNode } from "react";

import { LinkButton } from "@/components/site/LinkButton";
import type { PageSection } from "@/types/content";

type SectionRendererProps = {
  sections: PageSection[];
};

function sectionFrame(children: ReactNode, className?: string) {
  return (
    <section className={`mx-auto w-full max-w-[82rem] px-4 py-12 md:px-8 md:py-16 ${className ?? ""}`.trim()}>
      {children}
    </section>
  );
}

export function SectionRenderer({ sections }: SectionRendererProps) {
  return (
    <>
      {sections.map((section, index) => {
        const delay = `${Math.min(index * 70, 280)}ms`;

        if (section.type === "featureGrid") {
          return (
            <div
              key={`${section.type}-${index}`}
              className="animate-fade-up"
              style={{ animationDelay: delay }}
            >
              {sectionFrame(
                <>
                  <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">{section.heading}</h2>
                  {section.intro ? (
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{section.intro}</p>
                  ) : null}
                  <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {section.items.map((item) => (
                      <article
                        key={item.title}
                        className="group rounded-2xl border border-line bg-white/75 p-6 shadow-card transition hover:-translate-y-0.5 hover:bg-white"
                      >
                        {item.tag ? (
                          <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">{item.tag}</p>
                        ) : null}
                        <h3 className="mt-2 text-xl font-medium tracking-tight text-ink">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                      </article>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        }

        if (section.type === "split") {
          return (
            <div
              key={`${section.type}-${index}`}
              className="animate-fade-up"
              style={{ animationDelay: delay }}
            >
              {sectionFrame(
                <>
                  {section.heading ? (
                    <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">{section.heading}</h2>
                  ) : null}
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {section.panels.map((panel) => (
                      <article key={panel.title} className="rounded-2xl border border-line bg-panel-b/80 p-7">
                        {panel.eyebrow ? (
                          <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">{panel.eyebrow}</p>
                        ) : null}
                        <h3 className="mt-2 text-2xl font-medium tracking-tight text-ink">{panel.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted">{panel.body}</p>
                        {panel.bullets?.length ? (
                          <ul className="mt-4 space-y-2">
                            {panel.bullets.map((bullet) => (
                              <li key={bullet} className="flex items-start gap-2 text-sm text-ink">
                                <span className="mt-1.5 size-1.5 rounded-full bg-accent" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {panel.cta ? (
                          <div className="mt-5">
                            <LinkButton cta={{ ...panel.cta, style: panel.cta.style ?? "secondary" }} />
                          </div>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        }

        if (section.type === "logoWall") {
          return (
            <div
              key={`${section.type}-${index}`}
              className="animate-fade-up"
              style={{ animationDelay: delay }}
            >
              {sectionFrame(
                <>
                  <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">{section.heading}</h2>
                  <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
                    {section.logos.map((logo) => (
                      <div
                        key={logo.name}
                        className="rounded-xl border border-line bg-white/70 px-4 py-5 text-center text-xs font-medium uppercase tracking-[0.1em] text-muted"
                      >
                        {logo.name}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        }

        if (section.type === "quote") {
          return (
            <div
              key={`${section.type}-${index}`}
              className="animate-fade-up"
              style={{ animationDelay: delay }}
            >
              {sectionFrame(
                <blockquote className="rounded-3xl border border-line bg-white/80 p-8 md:p-12">
                  <p className="text-2xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
                    &quot;{section.quote}&quot;
                  </p>
                  <footer className="mt-6 border-t border-line/80 pt-4">
                    <p className="text-sm font-medium text-ink">{section.author}</p>
                    <p className="text-sm text-muted">{section.role}</p>
                  </footer>
                </blockquote>
              )}
            </div>
          );
        }

        if (section.type === "newsList") {
          return (
            <div
              key={`${section.type}-${index}`}
              className="animate-fade-up"
              style={{ animationDelay: delay }}
            >
              {sectionFrame(
                <>
                  <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">{section.heading}</h2>
                  {section.intro ? (
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{section.intro}</p>
                  ) : null}
                  <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-white/80">
                    {section.items.map((item) => (
                      <article key={`${item.title}-${item.dateISO}`} className="p-6 md:p-7">
                        <p className="text-xs uppercase tracking-[0.11em] text-muted">{item.dateISO}</p>
                        <h3 className="mt-2 text-2xl font-medium tracking-tight text-ink">{item.title}</h3>
                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{item.excerpt}</p>
                        <p className="mt-4 text-sm font-medium text-accent">Read more {"->"}</p>
                      </article>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        }

        if (section.type === "cta") {
          return (
            <div
              key={`${section.type}-${index}`}
              className="animate-fade-up"
              style={{ animationDelay: delay }}
            >
              {sectionFrame(
                <div className="rounded-3xl border border-line bg-gradient-to-r from-panel-a to-panel-b p-8 md:p-12">
                  <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                    {section.heading}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{section.text}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <LinkButton cta={section.action} />
                    {section.secondaryAction ? (
                      <LinkButton
                        cta={{ ...section.secondaryAction, style: section.secondaryAction.style ?? "secondary" }}
                      />
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          );
        }

        if (section.type === "text") {
          return (
            <div
              key={`${section.type}-${index}`}
              className="animate-fade-up"
              style={{ animationDelay: delay }}
            >
              {sectionFrame(
                <>
                  <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">{section.heading}</h2>
                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="max-w-3xl text-base leading-relaxed text-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        }

        const exhaustiveCheck: never = section;
        return exhaustiveCheck;
      })}
    </>
  );
}
