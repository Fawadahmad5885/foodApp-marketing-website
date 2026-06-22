import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

type SectionHeaderProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {badge && (
        <Badge variant="primary" className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${className}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed text-muted ${className}`}>{description}</p>
      )}
    </div>
  );
}
