import type { ReactNode } from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function Field({
  id,
  label,
  error,
  hint,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  hint?: ReactNode;
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-baseline justify-between">
        <Label htmlFor={id} className="eyebrow text-[0.66rem] text-navy">
          {label}
        </Label>
        {hint}
      </div>
      {children}
      {error && <p className="text-xs font-medium text-signal animate-fade-up">{error}</p>}
    </div>
  );
}

export const inputClass =
  "h-12 rounded-sm border-input bg-card px-4 text-base text-navy shadow-none transition-[border-color,box-shadow] focus-visible:border-navy focus-visible:ring-2 focus-visible:ring-navy/15 aria-[invalid=true]:border-signal";
