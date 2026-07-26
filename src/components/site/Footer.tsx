import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin, Hexagon } from "lucide-react";

export const COMPANY = {
  email: "support@intigrityfactor.com",
  whatsapp: "+91 92882 36779",
  whatsappHref: "https://wa.me/919288236779",
  address: "E89, Smondoville Road, Neotown, Electronic City, Bengaluru, Karnataka 560100, IN",
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-lg bg-accent-gradient text-primary-foreground">
              <Hexagon className="size-5" strokeWidth={2.4} />
            </span>
            <span className="font-display text-base font-semibold">
              Intigrityfactor <span className="text-primary">Innovations</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Bangalore-based full-service IT company delivering comprehensive, scalable, and secure
            technology solutions to businesses of all sizes.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/careers", label: "Careers & Internships" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Reach Us</h4>
          <ul className="mt-4 space-y-3.5 text-sm text-muted-foreground">
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-primary">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={COMPANY.whatsappHref} className="hover:text-primary">
                WhatsApp {COMPANY.whatsapp}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="leading-relaxed">{COMPANY.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Intigrityfactor Innovations. All rights reserved.</p>
          <p>IT System Custom Software Development · Founded 2017 · Bengaluru, India</p>
        </div>
      </div>
    </footer>
  );
}
