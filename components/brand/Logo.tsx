import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  showWordmark?: boolean;
};

export function Logo({
  variant = "dark",
  className,
  showWordmark = true,
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5 group", className)}
      aria-label="Fiesta home"
    >
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-xl transition-transform group-hover:scale-105",
          isLight ? "bg-surface" : "bg-primary",
        )}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="h-5 w-5"
          aria-hidden
        >
          <path
            d="M8 22c0-6 3-10 8-12 5 2 8 6 8 12"
            stroke={isLight ? "#E8432A" : "#FFFFFF"}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle
            cx="16"
            cy="11"
            r="3"
            fill={isLight ? "#F5A623" : "#F5A623"}
          />
          <path
            d="M6 24h20"
            stroke={isLight ? "#E8432A" : "#FFFFFF"}
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </span>
      {showWordmark && (
        <span
          className={cn(
            "text-xl font-bold tracking-tight",
            isLight ? "text-surface" : "text-foreground",
          )}
        >
          Fiesta
        </span>
      )}
    </Link>
  );
}
