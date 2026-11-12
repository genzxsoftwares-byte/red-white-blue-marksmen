import { Reticle } from "./Reticle";

/** Circular "scope" inset: the hold wobbles, locks red, a shot lands, score pops. Loops every 6s. */
export function ScopeView() {
  return (
    <div className="relative">
      <div className="relative">
      <div className="relative size-56 overflow-hidden rounded-full border-[6px] border-navy-deep bg-card shadow-card xl:size-64">
        {/* mini target */}
        <svg viewBox="-50 -50 100 100" className="absolute inset-0 size-full" aria-hidden="true">
          {[46, 40, 34, 28, 22, 16, 10, 4].map((r, i) => (
            <circle
              key={r}
              r={r}
              strokeWidth="0.4"
              className={r <= 28 ? "fill-navy-deep stroke-on-navy/50" : "fill-card stroke-navy/40"}
              style={{ opacity: i === 0 ? 0.9 : 1 }}
            />
          ))}
        </svg>
        {/* shot */}
        <span className="absolute left-1/2 top-1/2 -ml-1.5 -mt-1.5 size-3 rounded-full bg-signal animate-chip-in" />
        <span className="absolute left-1/2 top-1/2 -ml-3 -mt-3 size-6 rounded-full border-2 border-signal animate-shot-ping" />
        {/* reticle */}
        <div className="absolute inset-0 animate-hold">
          <div className="size-full animate-lock">
            <Reticle className="size-full" dot={false} />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_40px_var(--navy-deep)]" />
      </div>
      <div className="absolute left-1/2 top-[calc(100%-1.5rem)] -translate-x-1/2 animate-chip-in xl:top-[calc(100%-1.5rem)]">
        <div className="flex items-center gap-2 whitespace-nowrap rounded-sm bg-signal px-3 py-1.5 font-mono text-sm text-signal-foreground shadow-signal">
          <span className="font-semibold">10.9</span>
          <span className="opacity-75">· inner ten</span>
        </div>
      </div>
      </div>
      <p className="eyebrow mt-12 text-center text-navy/70">Scope view · lane 07</p>
    </div>
  );
}
