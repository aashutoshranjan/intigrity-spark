const steps = [
  {
    no: "01",
    title: "Discovery & Scoping",
    text: "Structured workshops to map objectives, constraints and success metrics before a line of code is written.",
  },
  {
    no: "02",
    title: "Architecture & Design",
    text: "Solution architecture, security model and interface design documented and signed off with your stakeholders.",
  },
  {
    no: "03",
    title: "Agile Delivery",
    text: "Two-week sprints, demo-driven reviews and a shared board so progress is never a black box.",
  },
  {
    no: "04",
    title: "Launch & Managed Support",
    text: "Hardened deployment, monitoring, documentation handover and an SLA-backed support window.",
  },
];

export function Process() {
  return (
    <section className="bg-ink-gradient text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="text-[0.7rem] font-bold tracking-[0.22em] text-primary uppercase">
          How We Work
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
          A delivery process built for accountability
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-foreground/70">
          The same four-stage method on every engagement — so you always know what happens next, who
          owns it, and when it lands.
        </p>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.no} className="border-t border-ink-foreground/15 pt-6">
              <span className="font-display text-sm font-semibold text-primary">{s.no}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-foreground/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
