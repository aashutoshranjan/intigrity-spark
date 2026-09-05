import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertTriangle,
  Check,
  Clipboard,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import { QR_CODE_URL } from "@/lib/site-config";
import { COMPANY } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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
  "Batch Code (Mentioned in welcome letter)",
];

const PAYMENT_AMOUNT = "As per Offer Letter";
const UPI_ID = "paytm.s11ah8u@pta";
const PAYMENT_EMAIL = "support@enerzcloud.com";
const PAYMENT_WHATSAPP = "+917209493680";
const PAYMENT_WHATSAPP_HREF = "https://wa.me/917209493680";

function Payment() {
  const [qrMissing, setQrMissing] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyUpiId() {
    try {
      await navigator.clipboard.writeText(UPI_ID);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = UPI_ID;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  }

  return (
    <section className="relative">
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Enrollment</p>
        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Scan QR to Pay</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Complete your enrollment payment securely, then share the required confirmation details
          with our support team.
        </p>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-5">
          {/* QR card */}
          <div className="lg:col-span-2">
            <div className="card-static overflow-hidden">
              <div className="border-b border-border bg-primary/[0.07] px-5 py-5 text-center sm:px-7">
                <p className="text-xs font-semibold uppercase text-muted-foreground">Fixed Payment</p>
                <p className="mt-1 font-display text-2xl font-semibold text-primary">{PAYMENT_AMOUNT}</p>
                <p className="mt-1 text-xs text-muted-foreground">Exact amount: please check your Offer Letter</p>
              </div>

              <div className="m-4 rounded-lg border border-gold/40 bg-gold/10 p-4 text-left sm:m-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 size-5 shrink-0 text-gold" />
                  <div className="min-w-0">
                    <h2 className="text-sm font-semibold">IMPORTANT PAYMENT INSTRUCTION</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Please do <strong className="text-foreground">not</strong> take a screenshot of
                      this QR code or use “Pay from Gallery” to scan it.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      If you are paying from a mobile phone, open this page on a laptop, desktop, or
                      another mobile phone and scan the QR using your UPI app. This helps avoid payment
                      delays or Pending status.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-4 pb-6 text-center sm:px-7 sm:pb-8">
                <div className="inline-flex items-center gap-2 text-base font-semibold">
                  <ScanLine className="size-5 text-primary" /> Scan QR to Pay
                </div>
                <div className="mx-auto mt-4 w-fit rounded-lg border border-border bg-background p-2.5 shadow-sm">
                {qrMissing ? (
                  <div className="flex size-64 max-w-full items-center justify-center rounded-md border border-dashed border-primary/40 bg-background px-4 text-center text-sm font-medium text-muted-foreground">
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
                    className="size-64 max-w-full rounded-md object-contain"
                  />
                )}
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  PhonePe • Google Pay • Paytm • BHIM • Other UPI Apps
                </p>

                <div className="my-6 flex items-center gap-3" aria-hidden="true">
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-xs font-semibold text-muted-foreground">OR</span>
                  <span className="h-px flex-1 bg-border" />
                </div>

                <h2 className="text-base font-semibold">Pay Using UPI ID</h2>
                <div className="mt-3 rounded-lg border border-border bg-surface p-3">
                  <code className="block select-all break-all text-sm font-semibold text-foreground">{UPI_ID}</code>
                </div>
                <Button type="button" size="lg" onClick={copyUpiId} className="mt-3 min-h-11 w-full">
                  {copied ? <Check /> : <Clipboard />}
                  {copied ? "UPI ID copied ✓" : "Copy UPI ID"}
                </Button>
                <p className="mt-4 text-left text-xs leading-relaxed text-muted-foreground">
                  Open your UPI app → select Pay/Send Money → paste the UPI ID → enter the exact
                  payment amount → verify the recipient name → complete the payment.
                </p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="min-w-0 space-y-5 lg:col-span-3">
            <aside className="rounded-lg border border-primary/30 bg-primary/[0.07] p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <h2 className="text-base font-semibold">Verify the recipient name</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Before completing payment, please verify the recipient name displayed in your UPI app.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Depending on the UPI app, the payment screen may display
                    <strong className="text-foreground"> ENERZCLOUD INNOVATIONS</strong> or the name of an
                    authorized person associated with our business. Both are valid.
                  </p>
                </div>
              </div>
            </aside>

            <aside className="rounded-lg border border-gold/40 bg-gold/10 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-gold" />
                <div className="min-w-0">
                  <h2 className="text-base font-semibold">PAYMENT SHOWING “PENDING”?</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Please <strong className="text-foreground">do not make another payment</strong> if
                    your first payment is showing Pending. Wait for the payment status to update or
                    contact our support team with your transaction/reference ID.
                  </p>
                </div>
              </div>
            </aside>

            <article className="card-static p-5 sm:p-8">
              <h2 className="text-xl font-semibold">📢 Important Notice – Enrollment Confirmation</h2>

              <h3 className="mt-8 text-base font-semibold text-primary">Confirm Your Participation:</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                To secure your place in the program, please complete the enrolment process by{" "}
                <strong className="font-semibold text-foreground">
                  paying the internship enrollment fee as specified in your Offer Letter.
                </strong>
              </p>

              <h3 className="mt-8 text-base font-semibold">After Payment</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                After completion of your enrollment process, please share the required details as mentioned
                and send your payment screenshot to our support team at:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a href={`mailto:${PAYMENT_EMAIL}`} className="flex min-w-0 items-center gap-2.5 rounded-lg border border-border bg-surface p-3 text-sm hover:border-primary/40 hover:text-primary">
                  <Mail className="size-4 shrink-0 text-primary" />
                  <span className="min-w-0 break-all">{PAYMENT_EMAIL}</span>
                </a>
                <a href={PAYMENT_WHATSAPP_HREF} className="flex min-w-0 items-center gap-2.5 rounded-lg border border-border bg-surface p-3 text-sm hover:border-primary/40 hover:text-primary">
                  <MessageCircle className="size-4 shrink-0 text-primary" />
                  <span className="min-w-0 break-all">WhatsApp: {PAYMENT_WHATSAPP}</span>
                </a>
              </div>
              <p className="mt-4 text-sm font-medium">Please send the required details only after completing the payment.</p>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Sending these details via WhatsApp is mandatory.</strong>
                {" "}Once we receive your email, we will proceed with sending your confirmation email,
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

              <div className="mt-8 flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/[0.07] p-5 text-sm leading-relaxed">
                <Clock3 className="mt-0.5 size-5 shrink-0 text-primary" />
                <p><span className="font-semibold">Note:</span> The confirmation email will be shared
                  within one hour, while the login credentials will be delivered by End of Day (Till
                  10:00 PM today).</p>
              </div>
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
