import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Crosshair, MapPin } from "lucide-react";

import heroRifle from "@/assets/hero-air-rifle.jpg";
import airPistol from "@/assets/air-pistol.jpg";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/academy/CountUp";
import { IntroCurtain } from "@/components/academy/IntroCurtain";
import { LiveTarget } from "@/components/academy/LiveTarget";
import { Logo } from "@/components/academy/Logo";
import { Reticle } from "@/components/academy/Reticle";
import { Reveal } from "@/components/academy/Reveal";
import { ScopeView } from "@/components/academy/ScopeView";
import { SiteHeader } from "@/components/academy/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lakshya Shooting Academy — 10m Air Rifle & Air Pistol Training" },
      {
        name: "description",
        content:
          "Train in 10m air rifle and air pistol with national-level coaches on electronic scoring lanes. Trials open for the 2027 batch.",
      },
      { property: "og:title", content: "Lakshya Shooting Academy — Breathe. Hold. Hit the 10." },
      {
        property: "og:description",
        content: "Precision shooting training in 10m air rifle and air pistol, from first pellet to national selection.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const disciplines = [
  {
    name: "10m Air Rifle",
    tag: "AR",
    image: heroRifle,
    position: "object-[82%_center]",
    copy: "Standing position, 60 shots, decimal scoring. Built on stillness, posture and a trigger you barely feel.",
    specs: [
      ["Distance", "10 m"],
      ["Calibre", "4.5 mm"],
      ["10-ring", "0.5 mm"],
      ["Max weight", "5.5 kg"],
    ],
  },
  {
    name: "10m Air Pistol",
    tag: "AP",
    image: airPistol,
    position: "object-[60%_20%]",
    copy: "One hand, one sight picture. Grip, alignment and a calm follow-through, shot after shot.",
    specs: [
      ["Distance", "10 m"],
      ["Calibre", "4.5 mm"],
      ["10-ring", "11.5 mm"],
      ["Max weight", "1.5 kg"],
    ],
  },
];

const pathway = [
  { n: "01", title: "Foundation", age: "Ages 10–14", copy: "Safety, stance, breathing and dry-firing. Your first scored series." },
  { n: "02", title: "Development", age: "District & state", copy: "Structured training cycles, match routines and first competitions." },
  { n: "03", title: "Performance", age: "National ranking", copy: "Shot analysis, mental conditioning and selection-trial preparation." },
  { n: "04", title: "Elite", age: "India squad pathway", copy: "Individual coaching, sports science and international match exposure." },
];

const ticker = ["10m Air Rifle", "10m Air Pistol", "Junior Programme", "Women's Squad", "Selection Trials", "Electronic Scoring", "Mental Conditioning", "Sports Science"];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <IntroCurtain />
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroRifle}
          alt="Indian air rifle shooter aiming in standing position on an indoor range"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-20 size-full object-cover object-[75%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-background/85 lg:bg-hero-veil" />
        <div className="absolute inset-0 -z-10 hidden lane-grid opacity-60 lg:block" />

        <div className="mx-auto grid min-h-[calc(100svh-4.75rem)] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.25fr_1fr] lg:px-8">
          <div>
            <p className="eyebrow flex items-center gap-3 text-signal animate-fade-up [animation-delay:1900ms]">
              <span className="h-px w-10 bg-signal" /> Precision shooting · Est. 2011
            </p>
            <h1 className="mt-6 font-display text-7xl font-extrabold uppercase leading-[0.86] text-navy sm:text-8xl xl:text-[9.5rem]">
              <span className="line-mask"><span className="block animate-rise [animation-delay:2000ms]">Breathe.</span></span>
              <span className="line-mask"><span className="block animate-rise [animation-delay:2120ms]">Hold.</span></span>
              <span className="line-mask">
                <span className="block animate-rise text-signal [animation-delay:2240ms]">Hit the 10.</span>
              </span>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-navy/75 animate-fade-up [animation-delay:2450ms]">
              Training India's next generation of air rifle and air pistol shooters — from the first pellet to national selection.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 animate-fade-up [animation-delay:2600ms]">
              <Button asChild variant="signal" size="xl">
                <Link to="/register">
                  Book a trial session <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="line" size="xl" className="bg-background/70">
                <a href="#scoring">
                  <Crosshair /> Watch a live series
                </a>
              </Button>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-navy/15 pt-6 animate-fade-up [animation-delay:2750ms]">
              {[
                { v: 48, s: "", l: "National medals" },
                { v: 24, s: "", l: "Electronic lanes" },
                { v: 1200, s: "+", l: "Students trained" },
              ].map((x) => (
                <div key={x.l}>
                  <dd className="font-display text-4xl font-bold text-navy">
                    <CountUp to={x.v} suffix={x.s} duration={2200} />
                  </dd>
                  <dt className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{x.l}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="hidden justify-end self-end pb-10 lg:flex animate-fade-up [animation-delay:2600ms]">
            <ScopeView />
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-navy-deep bg-navy py-4 text-on-navy">
        <div className="flex w-max animate-marquee">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-8 pr-8 font-display text-2xl font-semibold uppercase tracking-[0.08em]">
              {t}
              <span className="size-2 rounded-full bg-signal" />
            </span>
          ))}
        </div>
      </div>

      {/* DISCIPLINES */}
      <section id="disciplines" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8 lg:py-32">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-signal">Disciplines</p>
            <h2 className="mt-4 max-w-xl font-display text-5xl font-bold uppercase leading-[0.92] text-navy md:text-6xl">
              Two disciplines. One Olympic standard.
            </h2>
          </div>
          <p className="max-w-sm text-navy/70">
            Every programme follows ISSF rules, equipment and scoring — so our students train for the match they'll actually shoot.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {disciplines.map((d, i) => (
            <Reveal key={d.name} delay={i * 150}>
              <article className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-sm text-on-navy">
                <img
                  src={d.image}
                  alt={`${d.name} shooter training`}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className={`absolute inset-0 -z-20 size-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105 ${d.position}`}
                />
                <div className="absolute inset-0 -z-10 bg-navy-veil" />
                <span className="absolute right-6 top-6 font-display text-7xl font-extrabold text-on-navy/15">{d.tag}</span>
                <div className="p-7 sm:p-9">
                  <span className="mb-5 block h-1 w-12 bg-signal transition-all duration-500 group-hover:w-28" />
                  <h3 className="font-display text-4xl font-bold uppercase sm:text-5xl">{d.name}</h3>
                  <p className="mt-3 max-w-sm text-on-navy-muted">{d.copy}</p>
                  <dl className="mt-7 grid grid-cols-4 gap-px overflow-hidden rounded-sm bg-on-navy/15">
                    {d.specs.map(([k, v]) => (
                      <div key={k} className="bg-navy-deep/80 px-3 py-3 backdrop-blur-sm">
                        <dt className="font-mono text-[0.6rem] uppercase tracking-wider text-on-navy-muted">{k}</dt>
                        <dd className="mt-1 font-mono text-sm">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LIVE RANGE */}
      <section id="scoring" className="relative scroll-mt-20 overflow-hidden bg-navy-deep py-24 lg:py-32">
        <div className="absolute inset-0 lane-grid opacity-[0.07] [--line:var(--on-navy)]" />
        <Reticle className="pointer-events-none absolute -right-40 -top-40 size-[520px] text-on-navy/5" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow text-signal">Live range</p>
            <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.92] text-on-navy md:text-6xl">
              Watch a series land, shot by shot.
            </h2>
            <p className="mt-5 text-on-navy-muted">
              Every lane at Lakshya is electronically scored to a tenth of a point. Students see each shot, every group and every trend — instantly.
            </p>
          </Reveal>
          <LiveTarget />
        </div>
      </section>

      {/* PATHWAY */}
      <section id="pathway" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <p className="eyebrow text-signal">Athlete pathway</p>
          <h2 className="mt-4 max-w-2xl font-display text-5xl font-bold uppercase leading-[0.92] text-navy md:text-6xl">
            From first pellet to the national camp.
          </h2>
        </Reveal>

        <PathwayTrack />
      </section>

      {/* FACILITY */}
      <section id="facility" className="scroll-mt-20 border-y border-border bg-paper">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
          <div className="grid grid-cols-2 border-border lg:border-r">
            {[
              { v: 24, s: "", l: "Electronic scoring lanes" },
              { v: 6, s: ":1", l: "Student–coach ratio" },
              { v: 310, s: "", l: "Range days a year" },
              { v: 14, s: "", l: "Certified coaches" },
            ].map((x, i) => (
              <Reveal key={x.l} delay={i * 100} className="border-b border-r border-border p-8 sm:p-12 [&:nth-child(2n)]:border-r-0">
                <p className="font-display text-6xl font-bold text-navy sm:text-7xl">
                  <CountUp to={x.v} suffix={x.s} />
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">{x.l}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <span className="font-display text-8xl leading-none text-signal">“</span>
            <blockquote className="-mt-6 font-display text-3xl font-semibold uppercase leading-tight text-navy sm:text-4xl">
              A ten is not luck. It is the same shot, repeated until it becomes the only shot you know.
            </blockquote>
            <p className="mt-6 eyebrow text-muted-foreground">Head Coach · Lakshya Shooting Academy</p>
            <p className="mt-10 flex items-center gap-2 text-sm text-navy/70">
              <MapPin className="size-4 text-signal" /> Balewadi Sports Complex Road, Pune, Maharashtra
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-navy py-24 text-on-navy">
        <div className="absolute left-1/2 top-1/2 -z-10 size-[760px] -translate-x-1/2 -translate-y-1/2 text-on-navy/[0.06]">
          <div className="size-full animate-[spin_60s_linear_infinite]">
            <Reticle className="size-full" />
          </div>
        </div>
        <Reveal className="mx-auto max-w-3xl px-5 text-center">
          <p className="eyebrow text-signal">Trials open · 2027 batch</p>
          <h2 className="mt-5 font-display text-6xl font-extrabold uppercase leading-[0.9] md:text-7xl">
            Your lane is waiting.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-on-navy-muted">
            Register for a supervised trial session. All equipment, safety briefing and coaching included.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild variant="signal" size="xl">
              <Link to="/register">
                Register now <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="onNavy" size="xl">
              <Link to="/login">Student login</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}

function PathwayTrack() {
  return (
    <div className="relative mt-16">
      <Reveal className="absolute left-0 right-0 top-[2.1rem] hidden md:block">
        <div className="h-px w-full bg-border" />
      </Reveal>
      <div className="grid gap-10 md:grid-cols-4 md:gap-6">
        {pathway.map((p, i) => (
          <Reveal key={p.n} delay={i * 180} className="group relative">
            <div className="relative z-10 flex items-center gap-4">
              <span className="grid size-[4.25rem] place-items-center rounded-full border-2 border-navy bg-background font-mono text-sm font-medium text-navy transition-colors duration-300 group-hover:border-signal group-hover:bg-signal group-hover:text-signal-foreground">
                {p.n}
              </span>
            </div>
            <p className="eyebrow mt-6 text-signal">{p.age}</p>
            <h3 className="mt-2 font-display text-3xl font-bold uppercase text-navy">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy/70">{p.copy}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 md:flex-row md:items-start md:justify-between lg:px-8">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-5 text-sm text-muted-foreground">
            A precision shooting academy following ISSF and NRAI competition standards.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
          <div>
            <p className="eyebrow text-navy">Train</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li><a href="#disciplines" className="hover:text-navy">Air Rifle</a></li>
              <li><a href="#disciplines" className="hover:text-navy">Air Pistol</a></li>
              <li><a href="#pathway" className="hover:text-navy">Pathway</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-navy">Students</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li><Link to="/login" className="hover:text-navy">Log in</Link></li>
              <li><Link to="/register" className="hover:text-navy">Register</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-navy">Range</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Mon–Sat · 6:00–20:00</li>
              <li>Pune, Maharashtra</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-xs text-muted-foreground lg:px-8">
          <span>© 2026 Lakshya Shooting Academy</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-5 bg-navy" />
            <span className="h-2 w-5 bg-card ring-1 ring-border" />
            <span className="h-2 w-5 bg-signal" />
          </span>
        </div>
      </div>
    </footer>
  );
}
