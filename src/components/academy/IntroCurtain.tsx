import { Reticle } from "./Reticle";

/** Plays once on landing: reticle closes in, a shot lands, the curtain lifts. CSS only. */
export function IntroCurtain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] grid place-items-center bg-navy-deep animate-intro-curtain"
    >
      <div className="relative flex flex-col items-center">
        <div className="relative size-44 text-on-navy">
          <div className="absolute inset-0 animate-intro-reticle">
            <Reticle dot={false} className="size-full" />
          </div>
          <span className="absolute left-1/2 top-1/2 -ml-2 -mt-2 size-4 rounded-full bg-signal animate-intro-dot" />
          <span className="absolute left-1/2 top-1/2 -ml-6 -mt-6 size-12 rounded-full border-2 border-signal animate-intro-flash" />
        </div>
        <div className="mt-10 overflow-hidden">
          <p className="eyebrow text-on-navy-muted animate-fade-up [animation-delay:500ms]">
            Amar · Jeet · Victory that never dies
          </p>
        </div>
      </div>
    </div>
  );
}
