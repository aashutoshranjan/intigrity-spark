import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Layers, Cloud, BarChart3, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "IT Services — Intigrity Factor Systems" },
      {
        name: "description",
        content:
          "Custom software development, web & enterprise applications, cloud systems, data analytics and managed IT security services.",
      },
      { property: "og:title", content: "IT Services — Intigrity Factor Systems" },
      {
        property: "og:description",
        content: "End-to-end IT capabilities from a Hyderabad-based full-service technology partner.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    text: "Purpose-built systems engineered around your operations, from discovery to long-term evolution.",
    features: [
      "Requirement discovery & solution architecture",
      "Product engineering with modern stacks",
      "Automated testing & CI/CD pipelines",
      "Post-launch iteration and support",
    ],
  },
  {
    icon: Layers,
    title: "Web & Enterprise Applications",
    text: "Responsive portals, intranets and enterprise platforms built for scale, speed and accessibility.",
    features: [
      "Progressive web & responsive applications",
      "ERP, CRM and workflow platforms",
      "Role-based access & audit trails",
      "Performance and accessibility engineering",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Systems & API Integrations",
    text: "Cloud-native design, migration and integration work that connects your entire tooling estate.",
    features: [
      "Cloud migration & infrastructure as code",
      "Microservices & serverless architecture",
      "Third-party & internal API integrations",
      "Observability, scaling and cost control",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Digital Transformation",
    text: "Turn scattered operational data into governed pipelines, dashboards and decision intelligence.",
    features: [
      "Data warehousing & ETL pipelines",
      "Executive dashboards & reporting",
      "Process automation & digitisation",
      "Predictive and diagnostic analysis",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Managed IT Services & Security",
    text: "Continuous monitoring, hardening and support so your systems stay available and compliant.",
    features: [
      "24/7 monitoring & incident response",
      "Security audits & vulnerability management",
      "Backup, DR and business continuity",
      "Dedicated managed support desk",
    ],
  },
];

function Services() {
  return (
    <>
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Comprehensive IT capabilities, delivered end to end
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Whether you need a single product team or a full technology partner, our practices cover
            engineering, cloud, data and operations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="card-surface flex flex-col p-8">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <s.icon className="size-6" />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                Inquire Now <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
