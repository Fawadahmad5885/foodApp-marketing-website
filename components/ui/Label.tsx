import { cn } from "@/lib/utils";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
};

export function Label({ className, children, required, ...props }: LabelProps) {
  return (
    <label
      className={cn("block text-sm font-medium text-foreground", className)}
      {...props}
    >
      {children}
      {required && (
        <span className="ml-0.5 text-error" aria-hidden>
          *
        </span>
      )}
    </label>
  );
}
