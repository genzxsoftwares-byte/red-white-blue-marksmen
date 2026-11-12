import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "./use-in-view";

type Discipline = "rifle" | "pistol";

const SERIES: Record<Discipline, { score: number; angle: number }[]> = {
  rifle: [
    { score: 10.6, angle: 40 },
    { score: 10.3, angle: 200 },
    { score: 10.9, angle: 120 },
    { score: 9.8, angle: 310 },
    { score: 10.4, angle: 75 },
    { score: 10.7, angle: 250 },
    { score: 10.1, angle: 160 },
    { score: 10.5, angle: 15 },
    { score: 10.8, angle: 285 },
    { score: 10.2, angle: 230 },
  ],
  pistol: [
    { score: 10.2, angle: 30 },
    { score: 9.6, angle: 210 },
    { score: 10.5, angle: 140 },
    { score: 9.9, angle: 300 },
    { score: 10.0, angle: 90 },
    { score: 9.4, angle: 250 },
    { score: 10.7, angle: 175 },
    { score: 9.8, angle: 340 },
    { score: 10.3, angle: 60 },
    { score: 9.1, angle: 195 },
  ],
};

const META: Record<Discipline, { label: string; aim: number; pellet: number; note: string }> = {
  rifle: { label: "10m Air Rifle", aim: 70, pellet: 6.5, note: "Aiming mark: rings 4–9 · 10-ring Ø 0.5 mm" },
  pistol: { label: "10m Air Pistol", aim: 40, pellet: 3.2, note: "Aiming mark: rings 7–10 · 10-ring Ø 11.5 mm" },
};

function position(score: number, angle: number) {
  const d = Math.max(0.6, (11 - score) * 10 - 0.5);
  const a = (angle * Math.PI) / 180;
  return { x: Math.cos(a) * d, y: Math.sin(a) * d };
}

export function LiveTarget() {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  const [discipline, setDiscipline] = useState<Discipline>("rifle");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const delay = count >= 10 ? 3200 : count === 0 ? 600 : 900;
    const t = setTimeout(() => setCount((c) => (c >= 10 ? 0 : c + 1)), delay);
    return () => clearTimeout(t);
  }, [inView, count]);

  const series = SERIES[discipline];
  const meta = META[discipline];
  const fired = series.slice(0, count);
  const total = fired.reduce((s, x) => s + x.score, 0);
  const last = fired.at(-1);

  const rings = useMemo(() => Array.from({ length: 10 }, (_, i) => i + 1), []);

  const switchTo = (d: Discipline) => {
    setDiscipline(d);
    setCount(0);
  };

  return (
    <div ref={ref} className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
      {/* Target */}
      <div className="relative mx-auto w-full max-w-[520px]">
        <div className="relative aspect-square rounded-sm bg-paper p-6 shadow-card sm:p-10">
          <div className="eyebrow absolute left-4 top-4 text-muted-foreground">ISSF · {meta.label}</div>
          <div className="eyebrow absolute right-4 top-4 flex items-center gap-2 text-signal">
            <span className="size-1.5 rounded-full bg-signal animate-blink" /> Live
          </div>
          <svg viewBox="-110 -110 220 220" className="size-full" role="img" aria-label={`${meta.label} target showing ${count} shots`}>
            <circle r="100" className="fill-card stroke-navy/30" strokeWidth="0.6" />
            <circle r={meta.aim} className="fill-navy-deep transition-all duration-700" />
            {rings.map((n) => {
              const r = (11 - n) * 10;
              const inside = r <= meta.aim;
              return (
                <circle
                  key={n}
                  r={r}
                  fill="none"
                  strokeWidth="0.5"
                  className={cn("transition-colors duration-700", inside ? "stroke-on-navy/60" : "stroke-navy/45")}
                />
              );
            })}
            <circle r="5" fill="none" strokeWidth="0.4" className="stroke-on-navy/60" />
            {rings.slice(0, 8).map((n) => {
              const r = (11 - n) * 10 - 5;
              const inside = r < meta.aim;
              return (
                <g key={`l${n}`} className={cn("font-mono transition-colors duration-700", inside ? "fill-on-navy/70" : "fill-navy/55")} fontSize="5.5" textAnchor="middle" dominantBaseline="central">
                  <text x={0} y={-r}>{n}</text>
                  <text x={0} y={r}>{n}</text>
                  <text x={-r} y={0}>{n}</text>
                  <text x={r} y={0}>{n}</text>
                </g>
              );
            })}
            {fired.map((s, i) => {
              const p = position(s.score, s.angle);
              const isLast = i === fired.length - 1;
              return (
                <g key={`${discipline}-${i}`} transform={`translate(${p.x} ${p.y})`}>
                  {isLast && <circle r={meta.pellet} fill="none" strokeWidth="1" className="stroke-signal animate-ring-out" />}
                  <circle
                    r={meta.pellet}
                    strokeWidth="0.8"
                    className={cn("animate-pellet-in", isLast ? "fill-signal stroke-card" : "fill-signal/75 stroke-card/80")}
                  />
                </g>
              );
            })}
          </svg>
        </div>
        <p className="mt-4 text-center font-mono text-xs text-on-navy-muted">{meta.note}</p>
      </div>

      {/* Scorecard */}
      <div className="text-on-navy">
        <div className="inline-flex rounded-sm border border-on-navy/20 p-1">
          {(["rifle", "pistol"] as Discipline[]).map((d) => (
            <button
              key={d}
              onClick={() => switchTo(d)}
              className={cn(
                "rounded-[2px] px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors",
                discipline === d ? "bg-on-navy text-navy" : "text-on-navy-muted hover:text-on-navy",
              )}
            >
              Air {d}
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-end gap-6">
          <div>
            <p className="eyebrow text-on-navy-muted">Last shot</p>
            <p key={`${discipline}-${count}`} className="font-display text-8xl font-bold leading-none text-signal animate-fade-up tabular-nums">
              {last ? last.score.toFixed(1) : "—"}
            </p>
          </div>
          <div className="pb-2">
            <p className="eyebrow text-on-navy-muted">Series total</p>
            <p className="font-display text-5xl font-semibold leading-none tabular-nums">{total.toFixed(1)}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-5 gap-px overflow-hidden rounded-sm bg-on-navy/15">
          {series.map((s, i) => {
            const shown = i < count;
            return (
              <div key={i} className={cn("bg-navy px-3 py-3 transition-colors duration-500", shown && i === count - 1 && "bg-navy-soft")}>
                <p className="font-mono text-[0.65rem] text-on-navy-muted">#{String(i + 1).padStart(2, "0")}</p>
                <p className={cn("mt-1 font-mono text-lg tabular-nums transition-opacity duration-300", shown ? "opacity-100" : "opacity-20")}>
                  {shown ? s.score.toFixed(1) : "0.0"}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-on-navy/15">
          <div className="h-full bg-signal transition-[width] duration-700 ease-out" style={{ width: `${count * 10}%` }} />
        </div>
        <p className="mt-3 font-mono text-xs text-on-navy-muted">
          Series 1 · {count}/10 shots · avg {count ? (total / count).toFixed(2) : "0.00"}
        </p>
      </div>
    </div>
  );
}
