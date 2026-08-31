import { ShieldCheck, Lock, BadgeCheck, Clock4, Headset } from "lucide-react";

const signals = [
  { icon: ShieldCheck, label: "ISO-aligned delivery process" },
  { icon: Lock, label: "NDA & data confidentiality" },
  { icon: BadgeCheck, label: "GDPR-conscious engineering" },
  { icon: Clock4, label: "On-time delivery commitment" },
  { icon: Headset, label: "Dedicated account manager" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface/60">
      <div className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-5">
          {signals.map((s) => (
            <div key={s.label} className="flex items-center gap-2.5">
              <s.icon className="size-4 shrink-0 text-primary" strokeWidth={2.2} />
              <span className="text-xs font-medium text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
