import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "They rebuilt our internal operations platform end to end. Delivery was predictable, communication was honest, and the system has scaled without a single re-architecture.",
    name: "Operations Director",
    org: "Logistics group, Hyderabad",
  },
  {
    quote:
      "What stood out was the engineering discipline — documented decisions, clean handover and a support team that actually answers. Rare in this market.",
    name: "Head of Technology",
    org: "Financial services firm",
  },
  {
    quote:
      "Our analytics migration finished ahead of schedule. Dashboards our leadership actually uses every morning, built in under three months.",
    name: "Founder",
    org: "Healthcare SaaS company",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="eyebrow">Client Voices</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Trusted by teams that cannot afford downtime
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-surface flex h-full flex-col p-7">
              <Quote className="size-7 text-primary/40" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.org}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
