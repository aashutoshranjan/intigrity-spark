// Central runtime configuration. Nothing here is hardcoded to a hosting provider:
// values come from environment variables so the app works on any custom domain.

// Trailing slash stripped so `${SITE_URL}/path` is always well formed.
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "").replace(/\/+$/, "");

// Replaceable QR code: drop a new file at public/qr-code.png (or point
// VITE_QR_CODE_URL at another path) — no code changes required.
export const QR_CODE_URL = import.meta.env.VITE_QR_CODE_URL ?? "/qr-code.png";
