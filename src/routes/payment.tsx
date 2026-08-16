import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Mail, MessageCircle, ScanLine } from "lucide-react";
import { QR_CODE_URL } from "@/lib/site-config";
import { COMPANY } from "@/components/site/Footer";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Payment Confirmation — Intigrity Factor Systems" },
      {
        name: "description",
        content: "Complete your internship enrollment payment and share the required confirmation details.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Payment Confirmation — Intigrity Factor Systems" },
      {
        property: "og:description",
        content: "UPI payment and enrollment confirmation instructions.",
      },
    ],
  }),
  component: Payment,
});

const detailsToShare = [
  "Payment Screenshot",
  "Full Name",
  "Email ID",
  "Contact Number",
  "Internship Position Applied For",
  "Cohort Date",
  "Batch Code (Mentioned in Offer Letter)",
];

function Payment() {
  const [qrMissing, setQrMissing] = useState(false);

  return (
    <section className="relative">
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Enrollment</p>
        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Complete Your Payment</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Scan the UPI QR code to pay your internship enrollment fee, then share your confirmation
          details with our support team.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* QR card */}
          <div className="lg:col-span-2">
            <div className="card-surface sticky top-24 p-8 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary">
                <ScanLine className="size-3.5" /> UPI Payment
              </span>
              <div className="mx-auto mt-7 w-fit rounded-xl bg-primary/10 p-3">
                {qrMissing ? (
                  <div className="flex size-56 items-center justify-center rounded-lg border border-dashed border-primary/40 bg-background/60 px-4 text-center text-sm font-medium text-muted-foreground">
                    QR Code Not Available
                  </div>
                ) : (
                  <img
                    src={QR_CODE_URL}
                    alt="UPI payment QR code for Intigrity Factor Systems enrollment fee"
                    width={768}
                    height={768}
                    loading="lazy"
                    onError={() => setQrMissing(true)}
                    className="size-56 rounded-lg object-cover"
                  />
                )}
              </div>

              <p className="mt-6 text-sm font-semibold">Intigrity Factor Systems</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Scan with any UPI app · Enrollment fee as per your Welcome Letter
              </p>

              <div className="mt-7 space-y-3 border-t border-border pt-6 text-left text-sm">
                <a href={`mailto:${COMPANY.email}`} className="flex gap-2.5 hover:text-primary">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                  {COMPANY.email}
                </a>
                <a href={COMPANY.whatsappHref} className="flex gap-2.5 hover:text-primary">
                  <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                  WhatsApp {COMPANY.whatsapp}
                </a>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-3">
            <article className="card-surface p-8">
              <h2 className="text-xl font-semibold">Important Notice – Enrollment Confirmation</h2>

              <h3 className="mt-8 text-base font-semibold text-primary">Confirm Your Participation:</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                To secure your place in the program, please complete the enrolment process by paying
                the internship enrollment fee as specified in your Welcome Letter.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                After completion of your enrollment process, please share the required details as
                mentioned and send your payment screenshot to our support team at{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">
                  {COMPANY.email}
                </a>{" "}
                / or At WhatsApp (
                <a href={COMPANY.whatsappHref} className="text-primary hover:underline">
                  {COMPANY.whatsapp}
                </a>
                ). If You have any queries feel free to write us on{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">
                  {COMPANY.email}
                </a>
                . Sending these details via Email and via WhatsApp both are mandatory.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Once we receive your details, we will proceed with sending your confirmation email,
                login credentials, and the WhatsApp number of your dedicated mentor.
              </p>

              <h3 className="mt-8 text-sm font-semibold tracking-[0.15em] uppercase">
                Details to Share:
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {detailsToShare.map((d) => (
                  <li key={d} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>

              <p className="mt-8 rounded-lg border border-primary/30 bg-primary/[0.07] p-5 text-sm leading-relaxed">
                <span className="font-semibold">Note:</span> The confirmation email will be shared
                within one hour, while the login credentials will be delivered by End of Day (Till
                10:00 PM today).
              </p>
            </article>
          </div>
        </div>

        <div className="mt-12 flex items-start gap-3 rounded-xl border border-border bg-surface/60 p-6 text-sm">
          <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="leading-relaxed">
            <span className="font-semibold">Address:</span> {COMPANY.address}
          </p>
        </div>
      </div>
    </section>
  );
}
