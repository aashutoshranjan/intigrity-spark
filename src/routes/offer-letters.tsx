import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FileText, Download, AlertCircle } from "lucide-react";
import { OFFER_LETTERS } from "@/lib/offer-letters";

export const Route = createFileRoute("/offer-letters")({
  head: () => ({
    meta: [
      { title: "Internship Offer Letters — Intigrityfactor Innovations" },
      {
        name: "description",
        content:
          "Download your Intigrityfactor Innovations internship offer letter as a PDF document.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Internship Offer Letters — Intigrityfactor Innovations" },
      {
        property: "og:description",
        content: "Secure download area for internship offer letter PDFs.",
      },
    ],
  }),
  component: OfferLetters;
});

function OfferLetters() {
  const [missing, setMissing] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      OFFER_LETTERS.map(async (l) => {
        try {
          const res = await fetch(l.file, { method: "HEAD" });
          return [l.id, !res.ok] as const;
        } catch {
          return [l.id, true] as const;
        }
      }),
    ).then((pairs) => {
      if (!cancelled) setMissing(Object.fromEntries(pairs));
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative">
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Documents</p>
        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Internship Offer Letters</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Find your offer letter below and click download — the PDF is saved to your device
          automatically.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OFFER_LETTERS.map((letter) => {
            const unavailable = missing[letter.id];
            return (
              <article key={letter.id} className="card-surface flex flex-col p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <FileText className="size-5" />
                </span>
                <h2 className="mt-4 text-base font-semibold">{letter.title}</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">{letter.description}</p>

                {unavailable ? (
                  <span className="mt-6 inline-flex items-center gap-2 rounded-lg border border-dashed border-border px-4 py-2.5 text-xs font-medium text-muted-foreground">
                    <AlertCircle className="size-4" /> PDF Not Available
                  </span>
                ) : (
                  <a
                    href={letter.file}
                    download={`${letter.id}.pdf`}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-accent-gradient px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <Download className="size-4" /> Download PDF
                  </a>
                )}
              </article>
            );
          })}
        </div>

        <p className="mt-12 rounded-xl border border-primary/30 bg-primary/[0.07] p-6 text-sm leading-relaxed">
          <span className="font-semibold">Note:</span> If your offer letter is not listed or shows as
          unavailable, please contact our support team and we will share it directly.
        </p>
      </div>
    </section>
  );
}
