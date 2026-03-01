import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { getNav } from "@/lib/content";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const navItems = getNav();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,#fdf7ed_0%,#f3ecde_35%,#ece2cf_100%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-[12rem] -z-10 mx-auto h-[34rem] w-[80rem] rounded-full bg-[radial-gradient(circle,rgba(214,112,36,0.12)_0%,rgba(214,112,36,0)_65%)] blur-3xl" />
      <SiteHeader navItems={navItems} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
