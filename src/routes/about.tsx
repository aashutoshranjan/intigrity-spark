import { createFileRoute } from "@tanstack/react-router";
import { Building2, Users, CalendarDays, MapPin, Lightbulb, Target, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Intigrityfactor Innovations" },
      {
        name: "description",
        content:
          "Founded in 2017, Intigrityfactor Innovations is a Bangalore-based full-service IT company of 11-50 specialists serving businesses of all sizes.",
      },
      { property: "og:title", content: "About Us — Intigrityfactor Innovations" },
      {
        property: "og:description",
        content: "Company profile, headquarters details, vision and values.",
      },
    ],
  }),
  component: About,
});

const details = [
  { icon: Building2, label: "Industry", value: "IT System Custom Software Development" },
  { icon: Users, label: "Company Size", value: "11-50 employees" },
  { icon: CalendarDays, label: "Founded", value: "2017" },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "E89, Smondoville Road, Neotown, Electronic City, Bengaluru, Karnataka 560100, IN",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We explore emerging technology deliberately, adopting what creates real leverage for our clients rather than what is merely fashionable.",
  },
  {
    icon: Target,
    title: "Precision",
    text: "Clear scope, disciplined engineering and measurable outcomes. Every deliverable is reviewed against the business result it was meant to create.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    text: "Architecture decisions are made with growth in mind, so the platform we ship today still serves you at ten times the volume.",
  },
];

function About() {
  return (
    <>
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">About Us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">
            A technology partner built on <span className="text-gradient">integrity</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold">Company Profile</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Intigrityfactor Innovations is a Bangalore-based full-service IT company delivering
              comprehensive and innovative technology solutions to businesses of all sizes. We
              specialize in transforming ideas into powerful digital experiences that drive
              efficiency, growth, and measurable success.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Since 2017 our teams have delivered custom software, enterprise web platforms, cloud
              integrations and analytics systems across industries — combining rigorous engineering
              practice with a genuinely client-centric way of working. From the first discovery
              workshop to long-term managed support, we operate as an accountable extension of your
              organisation.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="card-surface p-7">
              <h2 className="text-lg font-semibold">Company Details</h2>
              <dl className="mt-6 space-y-6">
                {details.map((d) => (
                  <div key={d.label} className="flex gap-3.5">
                    <d.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                        {d.label}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed">{d.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <h2 className="text-3xl font-semibold sm:text-4xl">Vision &amp; Values</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Our vision is to be the most dependable engineering partner for growing businesses —
            guided by three principles.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {values.map((v) => (
              <article key={v.title} className="card-surface p-7">
                <v.icon className="size-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
