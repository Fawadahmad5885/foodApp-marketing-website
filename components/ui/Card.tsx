import Link from "next/link";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  hover?: boolean;
};

export function Card({ children, className, href, hover = false }: CardProps) {
  const classes = cn(
    "rounded-2xl border border-border bg-surface p-6 shadow-sm",
    hover &&
      "transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "block group")}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
