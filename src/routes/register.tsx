import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";

import heroRifle from "@/assets/hero-air-rifle.jpg";
import { AuthShell } from "@/components/academy/AuthShell";
import { Field, inputClass } from "@/components/academy/Field";
import { Reticle } from "@/components/academy/Reticle";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register for Trials — Lakshya Shooting Academy" },
      { name: "description", content: "Register for a supervised trial session in 10m air rifle or air pistol." },
      { property: "og:title", content: "Register for Trials — Lakshya Shooting Academy" },
      { property: "og:description", content: "Choose your discipline and book a trial lane for the 2027 batch." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RegisterPage,
});

const steps = ["Athlete", "Discipline", "Account"] as const;

const levels = [
  { id: "new", label: "Never shot", sub: "Complete beginner" },
  { id: "club", label: "Club / school", sub: "Some training" },
  { id: "state", label: "State level", sub: "Competed at state" },
  { id: "national", label: "National", sub: "Ranked shooter" },
];

type Form = {
  name: string;
  dob: string;
  city: string;
  guardian: string;
  discipline: "rifle" | "pistol" | "";
  level: string;
  email: string;
  phone: string;
  password: string;
  terms: boolean;
};

const initial: Form = {
  name: "",
  dob: "",
  city: "",
  guardian: "",
  discipline: "",
  level: "",
  email: "",
  phone: "",
  password: "",
  terms: false,
};

function RegisterPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = <K extends keyof Form>(k: K, v: Form[K]) => setForm((f) => ({ ...f, [k]: v }));

  const validate = (s: number) => {
    const e: typeof errors = {};
    if (s === 0) {
      if (form.name.trim().length < 2) e.name = "Enter the athlete's full name.";
      if (!form.dob) e.dob = "Date of birth is required.";
      if (!form.city.trim()) e.city = "Enter your city.";
    }
    if (s === 1) {
      if (!form.discipline) e.discipline = "Pick a discipline to continue.";
      if (!form.level) e.level = "Select your current level.";
    }
    if (s === 2) {
      if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
      if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter a 10-digit Indian mobile number.";
      if (form.password.length < 8) e.password = "Use at least 8 characters.";
      if (!form.terms) e.terms = "Please accept the range safety rules.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate(step)) return;
    if (step < 2) return setStep(step + 1);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 1500);
  };

  return (
    <AuthShell
      image={heroRifle}
      imageAlt="Indian air rifle shooter in a navy and white shooting jacket"
      imagePosition="object-[88%_center]"
      kicker="Trials · 2027 batch"
      statement={
        <>
          Every champion
          <br />
          started on
          <br />
          <span className="text-signal">lane one.</span>
        </>
      }
    >
      {done ? (
        <Success name={form.name} discipline={form.discipline} />
      ) : (
        <>
          <div className="animate-fade-up">
            <p className="eyebrow text-signal">Step {step + 1} of 3</p>
            <h1 className="mt-3 font-display text-5xl font-bold uppercase leading-none text-navy">Register</h1>
            <p className="mt-3 text-muted-foreground">Book a supervised trial session. Equipment is provided.</p>
          </div>

          {/* Stepper */}
          <ol className="mt-8 grid grid-cols-3 gap-2">
            {steps.map((label, i) => (
              <li key={label}>
                <div className="h-1 overflow-hidden rounded-full bg-border">
                  <div
                    className={cn("h-full bg-navy transition-[width] duration-700 ease-out", i === step && "bg-signal")}
                    style={{ width: i <= step ? "100%" : "0%" }}
                  />
                </div>
                <p className={cn("eyebrow mt-2 text-[0.62rem] transition-colors", i <= step ? "text-navy" : "text-muted-foreground")}>
                  {String(i + 1).padStart(2, "0")} {label}
                </p>
              </li>
            ))}
          </ol>

          <form onSubmit={next} noValidate className="mt-8">
            <div key={step} className="space-y-5 animate-fade-up">
              {step === 0 && (
                <>
                  <Field id="name" label="Athlete full name" error={errors.name}>
                    <Input id="name" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Aarav Sharma" aria-invalid={!!errors.name} className={inputClass} />
                  </Field>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="dob" label="Date of birth" error={errors.dob}>
                      <Input id="dob" type="date" value={form.dob} onChange={(e) => set("dob", e.target.value)} aria-invalid={!!errors.dob} className={inputClass} />
                    </Field>
                    <Field id="city" label="City" error={errors.city}>
                      <Input id="city" value={form.city} onChange={(e) => set("city", e.target.value)} placeholder="Pune" aria-invalid={!!errors.city} className={inputClass} />
                    </Field>
                  </div>
                  <Field id="guardian" label="Parent / guardian (if under 18)">
                    <Input id="guardian" value={form.guardian} onChange={(e) => set("guardian", e.target.value)} placeholder="Optional" className={inputClass} />
                  </Field>
                </>
              )}

              {step === 1 && (
                <>
                  <Field id="discipline" label="Choose your discipline" error={errors.discipline}>
                    <div id="discipline" role="radiogroup" className="grid grid-cols-2 gap-3">
                      {([
                        { id: "rifle", name: "Air Rifle", spec: "10m · two-handed" },
                        { id: "pistol", name: "Air Pistol", spec: "10m · one-handed" },
                      ] as const).map((d) => {
                        const active = form.discipline === d.id;
                        return (
                          <button
                            key={d.id}
                            type="button"
                            role="radio"
                            aria-checked={active}
                            onClick={() => set("discipline", d.id)}
                            className={cn(
                              "group relative overflow-hidden rounded-sm border-2 p-5 text-left transition-all duration-300",
                              active ? "border-navy bg-navy text-on-navy" : "border-border bg-card text-navy hover:border-navy/50",
                            )}
                          >
                            <div className={cn("size-10 transition-all duration-500", active ? "rotate-90 text-signal" : "text-navy/40 group-hover:text-navy")}>
                              <Reticle className="size-full" />
                            </div>
                            <p className="mt-5 font-display text-2xl font-bold uppercase">{d.name}</p>
                            <p className={cn("font-mono text-xs", active ? "text-on-navy-muted" : "text-muted-foreground")}>{d.spec}</p>
                            {active && (
                              <span className="absolute right-3 top-3 grid size-6 place-items-center rounded-full bg-signal text-signal-foreground animate-pellet-in">
                                <Check className="size-3.5" />
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </Field>

                  <Field id="level" label="Current level" error={errors.level}>
                    <div id="level" role="radiogroup" className="grid grid-cols-2 gap-2">
                      {levels.map((l) => {
                        const active = form.level === l.id;
                        return (
                          <button
                            key={l.id}
                            type="button"
                            role="radio"
                            aria-checked={active}
                            onClick={() => set("level", l.id)}
                            className={cn(
                              "flex items-center gap-3 rounded-sm border px-4 py-3 text-left transition-colors",
                              active ? "border-signal bg-signal/5" : "border-border bg-card hover:border-navy/40",
                            )}
                          >
                            <span className={cn("grid size-4 shrink-0 place-items-center rounded-full border-2", active ? "border-signal" : "border-navy/30")}>
                              {active && <span className="size-1.5 rounded-full bg-signal" />}
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-navy">{l.label}</span>
                              <span className="block text-xs text-muted-foreground">{l.sub}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </Field>
                </>
              )}

              {step === 2 && (
                <>
                  <Field id="email" label="Email" error={errors.email}>
                    <Input id="email" type="email" autoComplete="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@email.com" aria-invalid={!!errors.email} className={inputClass} />
                  </Field>
                  <Field id="phone" label="Mobile number" error={errors.phone}>
                    <div className="flex">
                      <span className="grid h-12 place-items-center rounded-l-sm border border-r-0 border-input bg-muted px-4 font-mono text-sm text-navy">+91</span>
                      <Input id="phone" inputMode="numeric" autoComplete="tel-national" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="98765 43210" aria-invalid={!!errors.phone} className={`${inputClass} rounded-l-none`} />
                    </div>
                  </Field>
                  <Field id="password" label="Create password" error={errors.password}>
                    <Input id="password" type="password" autoComplete="new-password" value={form.password} onChange={(e) => set("password", e.target.value)} placeholder="At least 8 characters" aria-invalid={!!errors.password} className={inputClass} />
                    <PasswordMeter value={form.password} />
                  </Field>
                  <div>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="terms"
                        checked={form.terms}
                        onCheckedChange={(v) => set("terms", v === true)}
                        className="mt-0.5 border-navy/40 data-[state=checked]:border-navy data-[state=checked]:bg-navy"
                      />
                      <label htmlFor="terms" className="text-sm leading-snug text-navy/80">
                        I agree to the range safety rules and the academy's code of conduct.
                      </label>
                    </div>
                    {errors.terms && <p className="mt-2 text-xs font-medium text-signal animate-fade-up">{errors.terms}</p>}
                  </div>
                </>
              )}
            </div>

            <div className="mt-8 flex gap-3">
              {step > 0 && (
                <Button type="button" variant="line" size="xl" onClick={() => { setErrors({}); setStep(step - 1); }} aria-label="Previous step">
                  <ArrowLeft />
                </Button>
              )}
              <Button type="submit" variant="signal" size="xl" className="group flex-1" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" /> Reserving your lane
                  </>
                ) : (
                  <>
                    {step < 2 ? "Continue" : "Complete registration"}
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already training with us?{" "}
            <Link to="/login" className="font-semibold text-navy underline-offset-4 hover:text-signal hover:underline">
              Log in
            </Link>
          </p>
        </>
      )}
    </AuthShell>
  );
}

function PasswordMeter({ value }: { value: string }) {
  const score = [value.length >= 8, /[A-Z]/.test(value), /\d/.test(value), /[^A-Za-z0-9]/.test(value)].filter(Boolean).length;
  const labels = ["Too short", "Fair", "Good", "Strong", "Inner ten"];
  return (
    <div className="pt-1">
      <div className="grid grid-cols-4 gap-1">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={cn("h-1 rounded-full transition-colors duration-300", i < score ? (score >= 3 ? "bg-navy" : "bg-signal") : "bg-border")} />
        ))}
      </div>
      <p className="mt-1.5 font-mono text-[0.68rem] text-muted-foreground">{value ? labels[score] : " "}</p>
    </div>
  );
}

function Success({ name, discipline }: { name: string; discipline: Form["discipline"] }) {
  return (
    <div className="text-center animate-fade-up">
      <div className="relative mx-auto size-40 text-navy">
        <div className="absolute inset-0 animate-intro-reticle">
          <Reticle className="size-full" dot={false} />
        </div>
        <span className="absolute left-1/2 top-1/2 -ml-2.5 -mt-2.5 size-5 rounded-full bg-signal animate-intro-dot" />
        <span className="absolute left-1/2 top-1/2 -ml-6 -mt-6 size-12 rounded-full border-2 border-signal animate-intro-flash" />
      </div>
      <p className="eyebrow mt-8 text-signal">Registration received</p>
      <h1 className="mt-3 font-display text-5xl font-bold uppercase leading-none text-navy">
        Welcome, {name.split(" ")[0] || "athlete"}.
      </h1>
      <p className="mx-auto mt-4 max-w-sm text-muted-foreground">
        Your {discipline === "pistol" ? "air pistol" : "air rifle"} trial request is in. Our range team will call you to confirm a lane and time.
      </p>
      <p className="mt-2 font-mono text-xs text-muted-foreground">Design preview — nothing has been saved.</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button asChild variant="signal" size="xl">
          <Link to="/login">Go to login</Link>
        </Button>
        <Button asChild variant="line" size="xl">
          <Link to="/">Back to academy</Link>
        </Button>
      </div>
    </div>
  );
}
