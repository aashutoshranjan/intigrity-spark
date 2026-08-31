import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="card-static relative overflow-hidden p-9 lg:p-14">
          <div className="absolute inset-0 grid-lines opacity-[0.35]" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Let&rsquo;s scope your next engagement
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Share your requirement and a senior engineer — not a sales script — will respond
                within one business day with an honest assessment.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Talk to our team <ArrowRight className="size-4" />
              </Link>
              <Link to="/services" className="btn-ghost">
                View services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
