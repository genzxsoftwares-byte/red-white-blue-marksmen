import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/** Project Amarjeet wordmark: PROJECT / AMAR◉JEET / विजय अमर है */
export function Logo({ tone = "navy", className }: { tone?: "navy" | "light"; className?: string }) {
  const light = tone === "light";
  return (
    <Link
      to="/"
      className={cn("group inline-flex flex-col items-center leading-none", className)}
      aria-label="Project Amarjeet home"
    >
      <span className={cn("text-[0.55rem] font-bold uppercase tracking-[0.5em]", light ? "text-on-navy-muted" : "text-muted-foreground")}>
        Project
      </span>
      <span
        className={cn(
          "mt-1 flex items-center gap-1.5 text-xl font-extrabold uppercase tracking-[0.18em]",
          light ? "text-on-navy" : "text-navy",
        )}
      >
        Amar
        <span className={cn("relative grid size-4 place-items-center rounded-full border-[1.5px]", light ? "border-signal" : "border-signal-ink")}>
          <span className="size-1.5 rounded-full bg-signal transition-transform duration-500 group-hover:scale-150" />
        </span>
        Jeet
      </span>
      <span className={cn("mt-1 flex w-full items-center gap-2 text-[0.62rem] font-medium", light ? "text-signal" : "text-signal-ink")}>
        <span className="h-px flex-1 bg-current opacity-50" />
        विजय अमर है
        <span className="h-px flex-1 bg-current opacity-50" />
      </span>
    </Link>
  );
}
