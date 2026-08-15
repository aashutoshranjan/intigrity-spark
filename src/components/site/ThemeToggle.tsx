import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

/**
 * Theme toggle. Default theme is light so the white-background payment QR
 * renders cleanly; users can switch to dark via the header icon. Preference
 * is persisted to localStorage and applied by an inline head script (see
 * __root.tsx) before paint to avoid a flash.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  function toggle() {
    const isDark = document.documentElement.classList.contains("dark");
    const next: Theme = isDark ? "light" : "dark";
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore storage failures (private mode, etc.) */
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface/60 text-foreground transition-colors hover:border-primary/50 hover:text-primary"
    >
      {mounted && theme === "dark" ? (
        <Sun className="size-[1.15rem]" />
      ) : (
        <Moon className="size-[1.15rem]" />
      )}
    </button>
  );
}
