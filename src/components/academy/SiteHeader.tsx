import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#story", label: "Our story" },
  { href: "#founders", label: "Founders" },
  { href: "#contribute", label: "Contribute" },
  { href: "#abhyas", label: "Abhyas App" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-on-navy/10 bg-navy-deep/95 text-on-navy backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Logo tone="light" />
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[0.95rem] font-medium text-on-navy/85 transition-colors hover:text-signal"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden font-semibold text-on-navy hover:bg-on-navy/10 hover:text-on-navy sm:inline-flex">
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild variant="signal">
            <Link to="/register">Apply now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
