import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "tertiary" | "secondary" | "muted";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  primary: "border border-primary/50 px-3 text-primary",
  tertiary: " text-primary uppercase tracking-wider",
  secondary: "border border-secondary/50 px-3 text-primary",
  muted: "bg-border/60 text-muted",
};

export function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full  py-1 text-sm font-bold  ",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
