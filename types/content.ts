export type Cta = {
  label: string;
  href: string;
  style?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
};

export type HeroBlock = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaPrimary?: Cta;
  ctaSecondary?: Cta;
};

export type FeatureItem = {
  title: string;
  description: string;
  link?: string;
  tag?: string;
};

export type FeatureGridSection = {
  type: "featureGrid";
  heading: string;
  intro?: string;
  items: FeatureItem[];
};

export type SplitPanel = {
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
  cta?: Cta;
};

export type SplitSection = {
  type: "split";
  heading?: string;
  panels: SplitPanel[];
};

export type LogoWallSection = {
  type: "logoWall";
  heading: string;
  logos: Array<{ name: string }>;
};

export type QuoteSection = {
  type: "quote";
  quote: string;
  author: string;
  role: string;
};

export type NewsSection = {
  type: "newsList";
  heading: string;
  intro?: string;
  items: Array<{
    title: string;
    dateISO: string;
    excerpt: string;
    href: string;
  }>;
};

export type CtaSection = {
  type: "cta";
  heading: string;
  text: string;
  action: Cta;
  secondaryAction?: Cta;
};

export type TextSection = {
  type: "text";
  heading: string;
  paragraphs: string[];
};

export type PageSection =
  | FeatureGridSection
  | SplitSection
  | LogoWallSection
  | QuoteSection
  | NewsSection
  | CtaSection
  | TextSection;

export type PageContent = {
  slug: "home" | "platform" | "research" | "news" | "about";
  seo: {
    title: string;
    description: string;
  };
  hero: HeroBlock;
  sections: PageSection[];
};

export type PageSlug = PageContent["slug"];
