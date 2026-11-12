import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Logo } from "./Logo";
import { Reticle } from "./Reticle";

export function AuthShell({
  image,
  imageAlt,
  imagePosition = "object-center",
  kicker,
  statement,
  children,
}: {
  image: string;
  imageAlt: string;
  imagePosition?: string;
  kicker: string;
  statement: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="grid min-h-screen bg-background lg:grid-cols-[1fr_1.05fr]">
      {/* Visual panel */}
      <aside className="relative isolate hidden overflow-hidden bg-navy-deep text-on-navy lg:flex lg:flex-col lg:justify-between">
        <img
          src={image}
          alt={imageAlt}
          width={1200}
          height={1500}
          className={`absolute inset-0 -z-20 size-full object-cover animate-[fade-up_1.2s_ease-out_both] ${imagePosition}`}
        />
        <div className="absolute inset-0 -z-10 bg-navy-veil" />
        <div className="absolute inset-x-0 top-0 h-1 bg-signal" />

        <div className="flex items-center justify-between p-10">
          <Logo tone="light" />
          <span className="eyebrow flex items-center gap-2 text-on-navy-muted">
            <span className="size-1.5 rounded-full bg-signal animate-blink" /> Disha applications open
          </span>
        </div>

        <div className="relative p-10 xl:p-14">
          <div className="absolute -top-36 right-10 size-28 text-on-navy/70">
            <div className="size-full animate-hold">
              <div className="size-full animate-lock [--navy:var(--on-navy)]">
                <Reticle className="size-full" />
              </div>
            </div>
          </div>
          <p className="eyebrow flex items-center gap-3 text-on-navy animate-fade-up [animation-delay:200ms]"><span className="h-0.5 w-8 bg-signal" />{kicker}</p>
          <h2 className="mt-4 max-w-md font-display text-5xl font-extrabold leading-[1.02] xl:text-6xl">
            {statement}
          </h2>
          <div className="mt-10 h-px w-full bg-on-navy/20">
            <div className="h-px w-1/3 bg-signal animate-grow-x [animation-delay:600ms]" />
          </div>
          <p className="mt-4 font-mono text-xs text-on-navy-muted">Disha · Pratibha · Udaan · Avsar</p>
        </div>
      </aside>

      {/* Form panel */}
      <main className="relative flex flex-col">
        <div className="h-1 bg-signal lg:hidden" />
        <div className="flex items-center justify-between px-6 py-6 sm:px-10">
          <div className="lg:hidden">
            <Logo />
          </div>
          <Link
            to="/"
            className="group ml-auto inline-flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-signal-ink"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" /> Back to Project Amarjeet
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center px-6 pb-16 sm:px-10">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </main>
    </div>
  );
}
