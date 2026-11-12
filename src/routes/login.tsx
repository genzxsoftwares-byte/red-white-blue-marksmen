import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";

import airPistol from "@/assets/air-pistol.jpg";
import { AuthShell } from "@/components/academy/AuthShell";
import { Field, inputClass } from "@/components/academy/Field";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Student Login — Lakshya Shooting Academy" },
      { name: "description", content: "Log in to view your training schedule, scores and coach notes." },
      { property: "og:title", content: "Student Login — Lakshya Shooting Academy" },
      { property: "og:description", content: "Access your range bookings, series scores and coach feedback." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ id?: string; password?: string }>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const id = String(data.get("identifier") ?? "").trim();
    const password = String(data.get("password") ?? "");
    const next: typeof errors = {};
    if (!id) next.id = "Enter your email or student ID.";
    if (password.length < 6) next.password = "Password must be at least 6 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Welcome back to the range", {
        description: "This is a design preview — sign-in isn't connected yet.",
      });
    }, 1400);
  };

  return (
    <AuthShell
      image={airPistol}
      imageAlt="Indian air pistol shooter aiming on the range"
      imagePosition="object-[62%_center]"
      kicker="Student portal"
      statement={
        <>
          Same stance.
          <br />
          Same breath.
          <br />
          <span className="text-signal">Every shot.</span>
        </>
      }
    >
      <div className="animate-fade-up">
        <p className="eyebrow text-signal">Lane check-in</p>
        <h1 className="mt-3 font-display text-5xl font-bold uppercase leading-none text-navy">Log in</h1>
        <p className="mt-3 text-muted-foreground">Your schedule, scores and coach notes are waiting.</p>
      </div>

      <form onSubmit={onSubmit} noValidate className="mt-10 space-y-6">
        <div className="animate-fade-up [animation-delay:120ms]">
          <Field id="identifier" label="Email or student ID" error={errors.id}>
            <Input
              id="identifier"
              name="identifier"
              autoComplete="username"
              placeholder="LSA-2027-0142 or you@email.com"
              aria-invalid={!!errors.id}
              className={inputClass}
            />
          </Field>
        </div>

        <div className="animate-fade-up [animation-delay:220ms]">
          <Field
            id="password"
            label="Password"
            error={errors.password}
            hint={
              <button
                type="button"
                onClick={() => toast("Password reset", { description: "Reset emails will be enabled once sign-in is connected." })}
                className="text-xs font-medium text-navy/70 underline-offset-4 hover:text-signal hover:underline"
              >
                Forgot password?
              </button>
            }
          >
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={show ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                aria-invalid={!!errors.password}
                className={`${inputClass} pr-12`}
              />
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                aria-label={show ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm p-1.5 text-navy/60 hover:text-navy"
              >
                {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </Field>
        </div>

        <div className="flex items-center gap-3 animate-fade-up [animation-delay:320ms]">
          <Checkbox id="remember" className="border-navy/40 data-[state=checked]:border-navy data-[state=checked]:bg-navy" />
          <label htmlFor="remember" className="text-sm text-navy/80">
            Keep me signed in on this device
          </label>
        </div>

        <div className="animate-fade-up [animation-delay:420ms]">
          <Button type="submit" variant="signal" size="xl" className="group w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="animate-spin" /> Checking in
              </>
            ) : (
              <>
                Enter the range <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </div>
      </form>

      <div className="mt-10 flex items-center gap-4 animate-fade-up [animation-delay:520ms]">
        <span className="h-px flex-1 bg-border" />
        <span className="eyebrow text-muted-foreground">New to Lakshya?</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <Button asChild variant="line" size="xl" className="mt-6 w-full animate-fade-up [animation-delay:600ms]">
        <Link to="/register">Register for trials</Link>
      </Button>
    </AuthShell>
  );
}
