import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Code2,
  Cloud,
  Layers,
  BarChart3,
  Globe,
  ShieldCheck,
  Users,
  Rocket,
} from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Intigrityfactor Innovations — Digital Experiences, Engineered" },
      {
        name: "description",
        content:
          "Bangalore-based full-service IT company delivering comprehensive, scalable, and secure technology solutions since 2017.",
      },
      { property: "og:title", content: "Intigrityfactor Innovations — Digital Experiences, Engineered" },
      {
        property: "og:description",
        content:
          "Bangalore-based full-service IT company delivering comprehensive, scalable, and secure technology solutions since 2017.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "11-50", label: "IT Experts" },
  { value: "2017", label: "Founded" },
  { value: "99%", label: "Client Satisfaction" },
];

const capabilities = [
  {
    icon: Code2,
    title: "Custom Software",
    text: "Tailored platforms engineered around your exact operational workflows.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    text: "Fast, accessible, responsive applications built on modern frameworks.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    text: "Cloud-native architecture, migrations and resilient API ecosystems.",
  },
  {
    icon: Layers,
    title: "Enterprise Solutions",
    text: "ERP, CRM and internal systems that scale with organisational growth.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    text: "Pipelines, dashboards and insight tooling that turn data into decisions.",
  },
];

const why = [
  {
    icon: Users,
    title: "Client-Centric Approach",
    text: "Every engagement starts with your business objectives — not a template. We embed with your team, measure what matters and iterate transparently.",
  },
  {
    icon: Rocket,
    title: "Future-Ready Architecture",
    text: "Modular, cloud-native systems designed for the load you will have in five years, not just the one you have today.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Support",
    text: "From discovery and design through deployment, monitoring and managed security — a single accountable partner.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-hero opacity-80" />
        <div className="absolute inset-0 grid-lines opacity-25" />

        <div className="relative mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-primary">
            Bengaluru · Since 2017
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
            Transforming Ideas into <span className="text-gradient">Powerful Digital Experiences.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Bangalore-based full-service IT company delivering comprehensive, scalable, and secure
            technology solutions.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-opacity hover:opacity-90"
            >
              Explore Services <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/form"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
            >
              Join Our Program
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="px-2 py-10 text-center lg:py-12">
              <p className="font-display text-3xl font-semibold text-primary lg:text-4xl">{s.value}</p>
              <p className="mt-2 text-xs tracking-wide text-muted-foreground uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Core engineering strengths</h2>
          <p className="mt-4 text-muted-foreground">
            Five disciplines that cover the full lifecycle of a modern digital product.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <article key={c.title} className="card-surface p-7">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <c.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </article>
          ))}
          <article className="card-surface flex flex-col justify-between p-7">
            <h3 className="text-lg font-semibold">Need something specific?</h3>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Talk to our team <ArrowRight className="size-4" />
            </Link>
          </article>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <h2 className="text-3xl font-semibold sm:text-4xl">Why choose Intigrityfactor</h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {why.map((w) => (
              <div key={w.title} className="border-l-2 border-primary/40 pl-6">
                <w.icon className="size-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
