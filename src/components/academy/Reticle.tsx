import { cn } from "@/lib/utils";

/** Precision sight reticle. Inherits color from `currentColor`. */
export function Reticle({ className, dot = true }: { className?: string; dot?: boolean }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={cn("block", className)} aria-hidden="true">
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="58" stroke="currentColor" strokeWidth="1" strokeDasharray="2 5" />
      <circle cx="100" cy="100" r="22" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M100 0v66M100 134v66M0 100h66M134 100h66"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {[30, 42, 54].map((o) => (
        <g key={o} stroke="currentColor" strokeWidth="1">
          <path d={`M${100 - o} 96v8M${100 + o} 96v8M96 ${100 - o}h8M96 ${100 + o}h8`} />
        </g>
      ))}
      {dot && <circle cx="100" cy="100" r="3" fill="currentColor" />}
    </svg>
  );
}
