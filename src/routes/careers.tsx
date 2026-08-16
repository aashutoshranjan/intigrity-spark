import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Users, Sparkles, Code2, BarChart3, Cloud, Bug } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers & Internships — Intigrity Factor Systems" },
      {
        name: "description",
        content:
          "Internship domains in full-stack development, data analytics, cloud engineering and software testing with structured mentorship in Hyderabad.",
      },
      { property: "og:title", content: "Careers & Internships — Intigrity Factor Systems" },
      {
        property: "og:description",
        content: "Grow with mentorship, real projects and structured learning at Integrity Factor.",
      },
    ],
  }),
  component: Careers,
});

const pillars = [
  {
    icon: GraduationCap,
    title: "Structured Learning",
    text: "A guided curriculum with weekly milestones, code reviews and practical assignments modelled on live client work.",
  },
  {
    icon: Users,
    title: "Dedicated Mentorship",
    text: "Every participant is paired with an experienced engineer who reviews progress and unblocks you throughout the program.",
  },
  {
    icon: Sparkles,
    title: "Real Growth",
    text: "Work on production-grade problems, build a portfolio you can defend in interviews, and receive completion documentation.",
  },
];

const domains = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    text: "React, TypeScript, Node.js, REST APIs and relational databases.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    text: "SQL, Python, visualisation and reporting for business decisions.",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    text: "Deployment pipelines, containers, infrastructure and monitoring.",
  },
  {
    icon: Bug,
    title: "Software Testing",
    text: "Manual and automated QA, test strategy and defect lifecycle.",
  },
];

function Careers() {
  return (
    <>
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Careers &amp; Internships
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Build your career on <span className="text-gradient">real engineering work</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Our internship program is designed for people who want to learn by shipping — supported by
            mentors, structured reviews and clear outcomes.
          </p>
          <Link
            to="/form"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-opacity hover:opacity-90"
          >
            Apply / Enroll for Internship <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.title} className="card-surface p-7">
              <p.icon className="size-6 text-primary" />
              <h2 className="mt-4 text-lg font-semibold">{p.title}</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <h2 className="text-3xl font-semibold sm:text-4xl">Open Internship Domains</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {domains.map((d) => (
              <article key={d.title} className="card-surface flex gap-5 p-7">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <d.icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start gap-5 rounded-xl border border-primary/30 bg-primary/[0.07] p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Ready to begin?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Complete the enrollment form and our team will guide you through the next steps.
              </p>
            </div>
            <Link
              to="/form"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Apply / Enroll for Internship <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
