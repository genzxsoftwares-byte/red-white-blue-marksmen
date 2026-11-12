import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ tone = "navy", className }: { tone?: "navy" | "light"; className?: string }) {
  const light = tone === "light";
  return (
    <Link to="/" className={cn("group flex items-center gap-3", className)} aria-label="Lakshya Shooting Academy home">
      <span
        className={cn(
          "relative grid size-10 place-items-center rounded-full border-2",
          light ? "border-on-navy" : "border-navy",
        )}
      >
        <span className={cn("absolute inset-[7px] rounded-full border", light ? "border-on-navy/50" : "border-navy/40")} />
        <span className="size-2.5 rounded-full bg-signal transition-transform duration-500 group-hover:scale-150" />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-2xl font-extrabold uppercase tracking-[0.06em]",
            light ? "text-on-navy" : "text-navy",
          )}
        >
          Lakshya
        </span>
        <span className={cn("eyebrow mt-1 block text-[0.6rem]", light ? "text-on-navy-muted" : "text-muted-foreground")}>
          Shooting Academy
        </span>
      </span>
    </Link>
  );
}
