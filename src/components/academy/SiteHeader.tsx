import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const links = [
  { href: "#disciplines", label: "Disciplines" },
  { href: "#scoring", label: "Live range" },
  { href: "#pathway", label: "Pathway" },
  { href: "#facility", label: "Facility" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="h-1 w-full bg-signal" />
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-navy/80 transition-colors hover:text-navy"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden font-semibold text-navy sm:inline-flex">
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild variant="signal" size="lg" className="rounded-sm">
            <Link to="/register">Enrol</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
