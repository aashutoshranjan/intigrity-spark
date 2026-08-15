import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MessageCircle, MapPin, Navigation, Send } from "lucide-react";
import { toast } from "sonner";
import { COMPANY } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Intigrityfactor Innovations" },
      {
        name: "description",
        content:
          "Contact Intigrityfactor Innovations in Gachibowli, Hyderabad by email, WhatsApp or the enquiry form.",
      },
      { property: "og:title", content: "Contact — Intigrityfactor Innovations" },
      {
        property: "og:description",
        content: "Reach our Hyderabad team for project enquiries and support.",
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(10, "Please add at least 10 characters").max(1000),
});

const MAPS_QUERY = encodeURIComponent(
  "45E/3, Behind Vyshnavi Cynosure, Telecom Nagar, Gachibowli, Hyderabad, Telangana (500032)",
);

function Contact() {
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
    e.currentTarget.reset();
    toast.success("Message sent", {
      description: "Our team will get back to you shortly.",
    });
  }

  const field =
    "mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-ring/30";

  return (
    <>
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">Let&apos;s talk about your project</h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Tell us what you are building and we will come back with a considered response — usually
            within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-5">
          <form onSubmit={handleSubmit} noValidate className="card-surface p-8 lg:col-span-3">
            <h2 className="text-xl font-semibold">Send us a message</h2>
            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <input id="name" name="name" maxLength={100} className={field} placeholder="Your name" />
                {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={255}
                  className={field}
                  placeholder="you@company.com"
                />
                {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                maxLength={150}
                className={field}
                placeholder="How can we help?"
              />
              {errors.subject && <p className="mt-1.5 text-xs text-destructive">{errors.subject}</p>}
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                maxLength={1000}
                className={field}
                placeholder="Share a few details about your requirement..."
              />
              {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send Message <Send className="size-4" />
            </button>
          </form>

          <div className="space-y-6 lg:col-span-2">
            <div className="card-surface p-7">
              <h2 className="text-lg font-semibold">Contact Details</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3.5">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs tracking-wide text-muted-foreground uppercase">Email</p>
                    <a href={`mailto:${COMPANY.email}`} className="mt-1 block hover:text-primary">
                      {COMPANY.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3.5">
                  <MessageCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs tracking-wide text-muted-foreground uppercase">WhatsApp</p>
                    <a href={COMPANY.whatsappHref} className="mt-1 block hover:text-primary">
                      {COMPANY.whatsapp}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3.5">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs tracking-wide text-muted-foreground uppercase">Address</p>
                    <p className="mt-1 leading-relaxed text-muted-foreground">{COMPANY.address}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card-surface overflow-hidden">
              <iframe
                title="Intigrityfactor Innovations office location"
                src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-5">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  Get Directions <Navigation className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
