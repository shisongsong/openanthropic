import { LinkButton } from "@/components/site/LinkButton";
import { SectionRenderer } from "@/components/site/SectionRenderer";
import { getPageContent } from "@/lib/content";
import type { PageSlug } from "@/types/content";

type PageTemplateProps = {
  slug: PageSlug;
};

export function PageTemplate({ slug }: PageTemplateProps) {
  const page = getPageContent(slug);

  return (
    <>
      <section className="mx-auto w-full max-w-[82rem] px-4 pb-12 pt-12 md:px-8 md:pb-16 md:pt-20">
        <div className="animate-fade-up rounded-[1.7rem] border border-line bg-gradient-to-br from-panel-a via-paper to-panel-b p-8 shadow-card md:p-14">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">{page.hero.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-ink md:text-6xl md:leading-[1.05]">
            {page.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{page.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {page.hero.ctaPrimary ? <LinkButton cta={page.hero.ctaPrimary} /> : null}
            {page.hero.ctaSecondary ? (
              <LinkButton cta={{ ...page.hero.ctaSecondary, style: page.hero.ctaSecondary.style ?? "secondary" }} />
            ) : null}
          </div>
        </div>
      </section>

      <SectionRenderer sections={page.sections} />
    </>
  );
}
