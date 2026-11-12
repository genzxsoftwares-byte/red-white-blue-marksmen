import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Mail } from "lucide-react";

import heroRifle from "@/assets/hero-air-rifle.jpg";
import airPistol from "@/assets/air-pistol.jpg";
import dishaMentoring from "@/assets/disha-mentoring.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/academy/CountUp";
import { IntroCurtain } from "@/components/academy/IntroCurtain";
import { LiveTarget } from "@/components/academy/LiveTarget";
import { Logo } from "@/components/academy/Logo";
import { Reticle } from "@/components/academy/Reticle";
import { Reveal } from "@/components/academy/Reveal";
import { ScopeView } from "@/components/academy/ScopeView";
import { SiteHeader } from "@/components/academy/SiteHeader";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Project Amarjeet — Free Shooting Coaching & Mentoring by Gagan Narang & Annu Raj Singh" },
      {
        name: "description",
        content:
          "A free coaching, mentoring and guidance program for anyone connected to the sport of shooting in India. No fees. No affiliations required.",
      },
      { property: "og:title", content: "Project Amarjeet — Victory that never dies" },
      {
        property: "og:description",
        content: "Disha, Pratibha and Udaan: free guidance, mentorship and camps for India's shooters, coaches, parents and academies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const programs = [
  {
    name: "Disha",
    meaning: "दिशा · direction",
    status: "open" as const,
    image: dishaMentoring,
    position: "object-[30%_center]",
    copy: "Structured guidance and expert support to help athletes, coaches and academies make informed decisions throughout their shooting journey.",
    get: [
      "Structured online counselling sessions",
      "Individual consultations",
      "Annual performance reviews",
      "Access to psychologists, physiotherapists and coaches",
    ],
    ideal: "Athletes, coaches & academies",
    note: "Need clarity and direction in your shooting journey?",
  },
  {
    name: "Pratibha",
    meaning: "प्रतिभा · talent",
    status: "closed" as const,
    image: airPistol,
    position: "object-[60%_20%]",
    copy: "Our flagship mentorship program, offering personalised guidance and long-term development support for promising athletes.",
    get: ["One-on-one mentorship", "Personalised development plans", "Remote and in-person guidance", "Active coach involvement"],
    ideal: "Athletes at all levels",
    note: "Only 10 athletes a year: 5 rifle · 5 pistol.",
  },
  {
    name: "Udaan",
    meaning: "उड़ान · flight",
    status: "closed" as const,
    image: heroRifle,
    position: "object-[82%_center]",
    copy: "Expert coaching delivered directly to academies through intensive training camps and educational workshops.",
    get: [
      "Expert-led 3–4 day training camps",
      "Small-group coaching sessions",
      "Facility management guidance",
      "Nutrition and sports science education",
    ],
    ideal: "Academies, applying on behalf of their athletes",
    note: "Bring high-quality coaching to your academy.",
  },
];

const audiences = [
  { title: "Shooting athletes", copy: "Structured, long-term guidance and mental and physical conditioning to elevate your sporting career." },
  { title: "Parents", copy: "A deeper understanding of the sport, so you can support and guide your child through every stage." },
  { title: "Coaches", copy: "Supplement technical coaching with lifestyle, mindset and physical conditioning strategies." },
  { title: "Academies", copy: "Build a stronger collaborative ecosystem and well-rounded programs for your enrolled athletes." },
];

const steps = [
  { n: "01", title: "Choose a program", tag: "Disha · Pratibha · Udaan", copy: "Pick the track that matches where you are — guidance, mentorship or a camp for your academy." },
  { n: "02", title: "Share your video", tag: "Google Drive link", copy: "Athletes send a 10-shot session, academies a facility walkthrough, coaches one full session." },
  { n: "03", title: "Read personally", tag: "By Gagan or Annu", copy: "Every application is read by one of the founders. No referrals, no federation card." },
  { n: "04", title: "We come to you", tag: "Range Partner network", copy: "At your own range, or one arranged through our partners — free of commercial charge." },
];

const contribute = [
  {
    name: "Saathi",
    kicker: "Give your time",
    copy: "Experienced professionals and passionate contributors strengthening India's shooting ecosystem.",
    how: ["Share your expertise", "Support athlete development", "Host camps and workshops"],
    ideal: "Coaches, retired athletes, academies & sports scientists",
  },
  {
    name: "Sahyog",
    kicker: "Give funds",
    copy: "Every rupee goes to camps, mentoring and access for shooters — administered by GNSPF, a registered not-for-profit.",
    how: ["Donate online", "80G certificate for every contribution"],
    ideal: "Corporates & CSR, trusts, foundations, individuals",
  },
  {
    name: "Samarpan",
    kicker: "Give equipment",
    copy: "Donate new or usable shooting equipment, matched with deserving shooters and academies.",
    how: ["Rifles, pistols, SCATT or e-targets", "We review and coordinate collection"],
    ideal: "Families, clubs, CSR partners & manufacturers",
  },
];

const faqs = [
  {
    q: "What is Project Amarjeet?",
    a: "A free coaching, mentoring and guidance program run by Gagan Narang and Annu Raj Singh for anyone connected to the sport of shooting in India. No fees, no institutional structure, no affiliations required.",
  },
  {
    q: "Who is eligible to apply?",
    a: "Anyone connected to the sport of shooting in India — shooters, coaches, parents and academies. No federation card, affiliated academy or referral needed.",
  },
  {
    q: "Which program should I apply for?",
    a: "Udaan — if you are an underserved academy wanting a camp. Pratibha — if you are an individual athlete with exceptional potential seeking sustained mentoring. Disha — if you need structured guidance on what to do next and how.",
  },
  {
    q: "How can I contribute?",
    a: "Three ways — Saathi (volunteer your time and expertise), Sahyog (institutional or corporate funding) or Samarpan (donating shooting equipment).",
  },
  {
    q: "How do I submit my video?",
    a: "Upload your video to Google Drive, set sharing to “Anyone with the link can view”, then paste the link into the application form.",
  },
];

const ticker = ["Disha", "Pratibha", "Udaan", "Avsar", "Abhyas", "Saathi", "Sahyog", "Samarpan", "विजय अमर है"];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <IntroCurtain />
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-on-navy">
        <img
          src={heroRifle}
          alt="Indian air rifle shooter aiming in standing position on an indoor range"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-20 size-full object-cover object-[75%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-navy-deep/85 lg:bg-transparent lg:bg-hero-veil" />
        <div className="absolute inset-0 -z-10 hidden lane-grid opacity-40 [--line:oklch(0.99_0.002_250/6%)] lg:block" />

        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.3fr_1fr] lg:px-8">
          <div>
            <p className="eyebrow flex items-center gap-3 text-signal animate-fade-up [animation-delay:1900ms]">
              <span className="h-px w-10 bg-signal" /> By Gagan Narang & Annu Raj Singh
            </p>
            <h1 className="mt-6 font-display text-6xl font-extrabold leading-[0.95] sm:text-7xl xl:text-[6.5rem]">
              <span className="line-mask"><span className="block animate-rise [animation-delay:2000ms]">Victory that</span></span>
              <span className="line-mask">
                <span className="block animate-rise text-signal [animation-delay:2140ms]">never dies.</span>
              </span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-on-navy-muted animate-fade-up [animation-delay:2400ms]">
              A free coaching, mentoring & guidance program for anyone connected to the sport of shooting in India.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 animate-fade-up [animation-delay:2500ms]">
              {["No fees", "No affiliations", "No referral"].map((t) => (
                <li key={t} className="flex items-center gap-2 rounded-full border border-on-navy/20 px-3.5 py-1.5 text-sm font-medium">
                  <Check className="size-3.5 text-signal" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3 animate-fade-up [animation-delay:2600ms]">
              <Button asChild variant="signal" size="xl">
                <Link to="/register">
                  Apply to a program <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <a href="#contribute">Support the project</a>
              </Button>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-on-navy/15 pt-6 animate-fade-up [animation-delay:2750ms]">
              {[
                { v: 2, pre: "", l: "Olympian founders" },
                { v: 10, pre: "", l: "Pratibha places a year" },
                { v: 0, pre: "₹", l: "Program fees" },
              ].map((x) => (
                <div key={x.l}>
                  <dd className="font-display text-4xl font-extrabold text-on-navy">
                    {x.pre}
                    <CountUp to={x.v} duration={2200} />
                  </dd>
                  <dt className="mt-1 text-xs font-semibold uppercase tracking-wider text-on-navy-muted">{x.l}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="hidden justify-end self-end pb-10 lg:flex animate-fade-up [animation-delay:2600ms]">
            <ScopeView />
          </div>
        </div>
        <div className="h-1 w-full bg-signal" />
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-b border-border bg-paper py-4 text-navy">
        <div className="flex w-max animate-marquee">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-8 pr-8 font-display text-2xl font-bold">
              {t}
              <span className="size-2 rounded-full bg-signal" />
            </span>
          ))}
        </div>
      </div>

      {/* STORY */}
      <section id="story" className="mx-auto grid max-w-7xl scroll-mt-24 gap-14 px-5 py-24 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-32">
        <Reveal>
          <p className="eyebrow text-signal-ink">Our story</p>
          <h2 className="mt-4 font-display text-5xl font-extrabold leading-[1.02] text-navy md:text-6xl">
            Named for one mother. Belonging to all of them.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-navy/75">
            Project Amarjeet is the two of us making ourselves available for camps, mentoring and guidance to any individual who needs structured help in the sport of shooting — and has the sincerity to ask for it.
          </p>
          <p className="mt-4 leading-relaxed text-navy/75">
            It belongs to no academy, state body or organisation. A junior in a small town and a national-level athlete can both reach us.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
            {[
              ["अमर", "Amar", "immortal"],
              ["जीत", "Jeet", "victory"],
            ].map(([hi, en, m]) => (
              <div key={en} className="bg-card p-6">
                <dt className="font-display text-4xl font-bold text-navy">{hi}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">
                  <span className="font-semibold text-navy">{en}</span> — {m}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150} className="relative">
          <figure className="relative h-full overflow-hidden rounded-xl bg-navy p-8 text-on-navy shadow-card sm:p-12">
            <Reticle className="pointer-events-none absolute -bottom-24 -right-24 size-80 text-on-navy/[0.06]" />
            <span className="font-display text-8xl leading-none text-signal">“</span>
            <blockquote className="-mt-8 space-y-5 text-lg leading-relaxed text-on-navy/90">
              <p>
                My mother's name was Amarjeet. In Hindi, her name means one whose victory never dies.
              </p>
              <p>
                But Project Amarjeet is not a tribute to one mother alone. It belongs to all of them. Every mother who drove to a range at five in the morning. Every mother who held her breath until the last shot was taken.
              </p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4 border-t border-on-navy/15 pt-6">
              <Monogram initials="GN" />
              <span>
                <span className="block font-bold">Shri. Gagan Narang</span>
                <span className="text-sm text-on-navy-muted">Olympic Bronze Medallist</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="scroll-mt-20 border-y border-border bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-signal-ink">What we offer</p>
              <h2 className="mt-4 max-w-xl font-display text-5xl font-extrabold leading-[1.02] text-navy md:text-6xl">
                Three programs. One purpose.
              </h2>
            </div>
            <p className="max-w-sm text-navy/70">
              Guidance, mentorship and camps — each built around what an athlete, coach or academy actually needs next.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.name} delay={i * 140}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-card shadow-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.name} program`}
                      loading="lazy"
                      width={1200}
                      height={750}
                      className={cn("size-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105", p.position)}
                    />
                    <div className="absolute inset-0 bg-navy-veil opacity-70" />
                    <span
                      className={cn(
                        "absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold",
                        p.status === "open" ? "bg-signal text-signal-foreground" : "bg-navy-deep/80 text-on-navy backdrop-blur-sm",
                      )}
                    >
                      {p.status === "open" ? "Applications open" : "Registration closed"}
                    </span>
                    <div className="absolute bottom-4 left-5 text-on-navy">
                      <h3 className="font-display text-4xl font-extrabold">{p.name}</h3>
                      <p className="text-sm font-medium text-signal">{p.meaning}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="mb-5 block h-1 w-10 rounded-full bg-signal transition-all duration-500 group-hover:w-24" />
                    <p className="text-navy/75">{p.copy}</p>
                    <p className="eyebrow mt-6 text-[0.66rem] text-navy">What you get</p>
                    <ul className="mt-3 space-y-2 text-sm text-navy/80">
                      {p.get.map((g) => (
                        <li key={g} className="flex gap-2.5">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-[1px] bg-signal" /> {g}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 rounded-lg bg-muted px-4 py-3 text-sm">
                      <span className="font-bold text-navy">Ideal for · </span>
                      <span className="text-navy/75">{p.ideal}</span>
                    </div>
                    <p className="mt-4 text-sm italic text-muted-foreground">{p.note}</p>
                    <div className="mt-auto pt-6">
                      {p.status === "open" ? (
                        <Button asChild variant="navy" size="lg" className="w-full">
                          <Link to="/register">
                            Register for {p.name} <ArrowRight />
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="line" size="lg" className="w-full" disabled>
                          Opens next cycle
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6">
            <article className="grid items-center gap-6 rounded-xl bg-navy p-7 text-on-navy sm:p-9 md:grid-cols-[auto_1fr_auto]">
              <span className="grid size-16 place-items-center rounded-full border-2 border-signal text-signal">
                <Reticle className="size-9" />
              </span>
              <div>
                <h3 className="font-display text-3xl font-extrabold">
                  Avsar <span className="text-base font-medium text-signal">अवसर · opportunity</span>
                </h3>
                <p className="mt-2 max-w-2xl text-on-navy-muted">
                  Helping athletes, coaches, academies and clubs access essential training resources — starting with pellet assistance, so deserving shooters can keep practising.
                </p>
              </div>
              <Button asChild variant="signal" size="lg">
                <Link to="/register">Apply for support</Link>
              </Button>
            </article>
          </Reveal>
        </div>
      </section>

      {/* WHO CAN APPLY */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:py-32">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <img src={airPistol} alt="Indian air pistol shooter aiming" loading="lazy" width={1200} height={1500} className="size-full object-cover object-[60%_center]" />
            <div className="absolute inset-0 bg-navy-veil" />
            <p className="absolute bottom-6 left-6 right-6 font-display text-2xl font-bold leading-snug text-on-navy">
              “A junior in a small town can reach us.”
            </p>
          </div>
          <div className="absolute -right-4 -top-4 hidden size-28 text-signal-ink lg:block">
            <div className="size-full animate-[spin_40s_linear_infinite]">
              <Reticle className="size-full" />
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow text-signal-ink">Who can apply</p>
            <h2 className="mt-4 font-display text-7xl font-extrabold leading-none text-navy md:text-8xl">
              Anyone<span className="text-signal">.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg text-navy/75">
              Not restricted to any level, state or institution. No affiliated academy needed. No federation card. No referral required.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 100} className="bg-card p-6 transition-colors hover:bg-paper">
                <p className="font-mono text-xs text-signal-ink">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-lg font-bold text-navy">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">{a.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABHYAS — LIVE TARGET */}
      <section id="abhyas" className="relative scroll-mt-20 overflow-hidden bg-navy-deep py-24 lg:py-32">
        <div className="absolute inset-0 lane-grid opacity-[0.07] [--line:var(--on-navy)]" />
        <Reticle className="pointer-events-none absolute -right-40 -top-40 size-[520px] text-on-navy/5" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow text-signal">Abhyas · अभ्यास · Shooting diary</p>
              <h2 className="mt-4 font-display text-5xl font-extrabold leading-[1.02] text-on-navy md:text-6xl">
                Every shot recorded. Every session clearer.
              </h2>
              <p className="mt-5 text-on-navy-muted">
                Abhyas helps shooters and coaches record training, reflect on sessions and build a clearer picture of progress. Be first to hear when it launches.
              </p>
            </div>
            <Button asChild variant="signal" size="xl">
              <a href="https://abhyas.projectamarjeet.in/" target="_blank" rel="noreferrer">
                Get early access <ArrowUpRight />
              </a>
            </Button>
          </Reveal>
          <LiveTarget />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <p className="eyebrow text-signal-ink">How it works</p>
          <h2 className="mt-4 max-w-2xl font-display text-5xl font-extrabold leading-[1.02] text-navy md:text-6xl">
            From your application to the range.
          </h2>
        </Reveal>
        <StepsTrack />
      </section>

      {/* FOUNDERS */}
      <section id="founders" className="scroll-mt-20 bg-navy py-24 text-on-navy lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-signal">Who will read your application</p>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-[1.02] md:text-6xl">Meet the founders.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <FounderCard
                initials="GN"
                name="Shri. Gagan Narang"
                title="Olympic Bronze Medallist · London 2012"
                groups={[
                  { label: "Career", items: ["5× Olympian (2004–2016)", "Khel Ratna & Padma Shri (2011)", "10 Commonwealth Games medals", "5 Asian Games medals", "World No. 1, 600/600 record"] },
                  { label: "Roles", items: ["Founder – Gun for Glory", "Founder – GNSPF", "Vice President – Indian Olympic Association", "Chef-de-Mission – Paris 2024"] },
                ]}
              />
            </Reveal>
            <Reveal delay={150}>
              <FounderCard
                initials="AR"
                name="Annu Raj Singh"
                title="Olympian & Arjuna Awardee"
                highlight="First Indian woman pistol shooter at the Olympics (London 2012)"
                groups={[
                  { label: "Career", items: ["Olympian – 2012", "First Olympic quota (2011)", "Commonwealth Games Gold – 2010", "Asian Games Silver – 2010", "South Asian Gold – 2019"] },
                  { label: "About", items: ["From Aligarh, UP", "27 national medals", "Started at age 13", "Coach & mentor"] },
                ]}
              />
            </Reveal>
          </div>
          <Reveal className="mt-14 border-l-4 border-signal pl-6 sm:pl-10">
            <p className="max-w-4xl font-display text-2xl font-bold leading-snug sm:text-3xl">
              Every application will be read personally by Gagan or Annu Raj Singh. Every athlete we sit with will receive the same focus we would give an Olympic finalist.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTRIBUTE */}
      <section id="contribute" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8 lg:py-32">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-signal-ink">Give back</p>
            <h2 className="mt-4 max-w-xl font-display text-5xl font-extrabold leading-[1.02] text-navy md:text-6xl">
              Contribute to Project Amarjeet.
            </h2>
          </div>
          <p className="max-w-sm text-navy/70">Time, funds or equipment — every contribution reaches a shooter who needs it.</p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {contribute.map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-signal">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-signal transition-transform duration-500 group-hover:scale-x-100" />
                <p className="eyebrow text-[0.66rem] text-signal-ink">{c.kicker}</p>
                <h3 className="mt-3 font-display text-4xl font-extrabold text-navy">{c.name}</h3>
                <p className="mt-4 text-navy/75">{c.copy}</p>
                <ul className="mt-6 space-y-2 text-sm text-navy/80">
                  {c.how.map((h) => (
                    <li key={h} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-signal-ink" /> {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-6 text-sm text-muted-foreground">
                  <span className="font-bold text-navy">Ideal for · </span>
                  {c.ideal}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 border-t border-border bg-paper py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.5fr] lg:px-8">
          <Reveal>
            <p className="eyebrow text-signal-ink">FAQ</p>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-[1.02] text-navy">Got questions? We have answers.</h2>
            <a href="mailto:connect@projectamarjeet.in" className="mt-8 inline-flex items-center gap-2 font-semibold text-navy hover:text-signal-ink">
              <Mail className="size-4 text-signal-ink" /> connect@projectamarjeet.in
            </a>
          </Reveal>
          <Reveal delay={120}>
            <Accordion type="single" collapsible defaultValue="faq-0" className="rounded-xl border border-border bg-card px-6">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger className="py-5 text-left text-base font-bold text-navy hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-navy/75">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-navy-deep py-24 text-on-navy">
        <div className="absolute left-1/2 top-1/2 -z-10 size-[760px] -translate-x-1/2 -translate-y-1/2 text-on-navy/[0.06]">
          <div className="size-full animate-[spin_60s_linear_infinite]">
            <Reticle className="size-full" />
          </div>
        </div>
        <Reveal className="mx-auto max-w-3xl px-5 text-center">
          <p className="eyebrow text-signal">Get started</p>
          <h2 className="mt-5 font-display text-6xl font-extrabold leading-[0.98] md:text-7xl">Ready to take your shot?</h2>
          <p className="mx-auto mt-6 max-w-xl text-on-navy-muted">
            Whether you're a shooter, a coach, a parent or an academy — if you're genuinely trying and we can genuinely help, there is a place for you in Project Amarjeet.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild variant="signal" size="xl">
              <Link to="/register">
                Register now <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="onNavy" size="xl">
              <Link to="/login">Applicant login</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}

function Monogram({ initials, size = "md" }: { initials: string; size?: "md" | "lg" }) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-full border-2 border-signal font-display font-extrabold text-signal",
        size === "lg" ? "size-20 text-2xl" : "size-12 text-base",
      )}
    >
      {initials}
    </span>
  );
}

function FounderCard({
  initials,
  name,
  title,
  highlight,
  groups,
}: {
  initials: string;
  name: string;
  title: string;
  highlight?: string;
  groups: { label: string; items: string[] }[];
}) {
  return (
    <article className="h-full rounded-xl border border-on-navy/12 bg-navy-deep/60 p-7 sm:p-9">
      <div className="flex items-center gap-5">
        <Monogram initials={initials} size="lg" />
        <div>
          <h3 className="font-display text-3xl font-extrabold">{name}</h3>
          <p className="mt-1 text-sm font-semibold text-signal">{title}</p>
        </div>
      </div>
      {highlight && <p className="mt-6 rounded-lg bg-on-navy/[0.06] px-4 py-3 text-sm text-on-navy/90">★ {highlight}</p>}
      <div className="mt-7 grid gap-7 sm:grid-cols-2">
        {groups.map((g) => (
          <div key={g.label}>
            <p className="eyebrow text-[0.66rem] text-on-navy-muted">{g.label}</p>
            <ul className="mt-3 space-y-2 text-sm text-on-navy/85">
              {g.items.map((it) => (
                <li key={it} className="flex gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-[1px] bg-signal" /> {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

function StepsTrack() {
  return (
    <div className="relative mt-16">
      <Reveal className="absolute left-0 right-0 top-[2.1rem] hidden md:block">
        <div className="h-px w-full bg-border">
          <div className="h-0.5 w-full origin-left -translate-y-px scale-x-0 bg-signal transition-transform delay-300 duration-[1.8s] ease-out in-data-[in=true]:scale-x-100" />
        </div>
      </Reveal>
      <div className="grid gap-10 md:grid-cols-4 md:gap-6">
        {steps.map((p, i) => (
          <Reveal key={p.n} delay={i * 180} className="group relative">
            <span className="relative z-10 grid size-[4.25rem] place-items-center rounded-full border-2 border-navy bg-background font-mono text-sm font-medium text-navy transition-colors duration-300 group-hover:border-signal group-hover:bg-signal group-hover:text-signal-foreground">
              {p.n}
            </span>
            <p className="eyebrow mt-6 text-signal-ink">{p.tag}</p>
            <h3 className="mt-2 font-display text-2xl font-extrabold text-navy">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy/70">{p.copy}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-on-navy">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 md:flex-row md:items-start md:justify-between lg:px-8">
        <div className="max-w-xs">
          <Logo tone="light" />
          <p className="mt-5 text-sm text-on-navy-muted">
            A free coaching, mentoring and guidance program for India's shooting community. Contributions administered by GNSPF.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
          <div>
            <p className="eyebrow text-signal">Programs</p>
            <ul className="mt-4 space-y-2 text-on-navy-muted">
              {["Disha", "Pratibha", "Udaan", "Avsar"].map((p) => (
                <li key={p}><a href="#programs" className="hover:text-on-navy">{p}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-signal">Contribute</p>
            <ul className="mt-4 space-y-2 text-on-navy-muted">
              {["Saathi", "Sahyog", "Samarpan"].map((p) => (
                <li key={p}><a href="#contribute" className="hover:text-on-navy">{p}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-signal">Contact</p>
            <ul className="mt-4 space-y-2 text-on-navy-muted">
              <li><a href="mailto:connect@projectamarjeet.in" className="hover:text-on-navy">connect@projectamarjeet.in</a></li>
              <li><Link to="/login" className="hover:text-on-navy">Applicant login</Link></li>
              <li><Link to="/register" className="hover:text-on-navy">Apply now</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-on-navy/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-xs text-on-navy-muted lg:px-8">
          <span>© 2026 Project Amarjeet · विजय अमर है</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-5 rounded-full bg-on-navy" />
            <span className="h-2 w-5 rounded-full bg-signal" />
          </span>
        </div>
      </div>
    </footer>
  );
}
