import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Internship Enrollment Form — Intigrityfactor Innovations" },
      {
        name: "description",
        content: "Fill in your details to proceed with your Intigrityfactor internship enrollment.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Internship Enrollment Form — Intigrityfactor Innovations" },
      {
        property: "og:description",
        content: "Enrollment form for the Intigrityfactor Innovations internship program.",
      },
    ],
  }),
  component: Membership,
});

const schema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  position: z
    .string()
    .trim()
    .min(2, "Position applying for is required")
    .max(100, "Position must be 100 characters or less"),
  location: z.string().trim().min(2, "Location is required").max(120),
  startDate: z.string().trim().min(1, "Select a preferred starting date"),
});

function Membership() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    navigate({ to: "/payment" });
  }

  const field =
    "mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-ring/30";

  return (
    <section className="relative">
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="relative mx-auto max-w-2xl px-5 py-20 lg:py-28">
        <h1 className="text-3xl font-semibold sm:text-4xl">Internship Enrollment Form</h1>
        <p className="mt-3 text-muted-foreground">
          Fill in your details below to proceed with your enrollment.
        </p>

        <form onSubmit={handleSubmit} noValidate className="card-surface mt-10 p-8">
          <div>
            <label htmlFor="fullName" className="text-sm font-medium">
              Full Name
            </label>
            <input id="fullName" name="fullName" maxLength={100} className={field} placeholder="Your full name" />
            {errors.fullName && <p className="mt-1.5 text-xs text-destructive">{errors.fullName}</p>}
          </div>

          <div className="mt-6">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              maxLength={255}
              className={field}
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="mt-6">
            <label htmlFor="position" className="text-sm font-medium">
              Internship Position Applied For
            </label>
            <select id="position" name="position" defaultValue="" className={field}>
              <option value="" disabled>
                Select a position
              </option>
              {positions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            {errors.position && <p className="mt-1.5 text-xs text-destructive">{errors.position}</p>}
          </div>

          <div className="mt-6">
            <label htmlFor="location" className="text-sm font-medium">
              Location
            </label>
            <input id="location" name="location" maxLength={120} className={field} placeholder="City, State" />
            {errors.location && <p className="mt-1.5 text-xs text-destructive">{errors.location}</p>}
          </div>

          <div className="mt-6">
            <label htmlFor="startDate" className="text-sm font-medium">
              Preferred Starting Date
            </label>
            <input id="startDate" name="startDate" type="date" className={field} />
            {errors.startDate && <p className="mt-1.5 text-xs text-destructive">{errors.startDate}</p>}
          </div>

          <button
            type="submit"
            className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-opacity hover:opacity-90"
          >
            Proceed to Payment <ArrowRight className="size-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
