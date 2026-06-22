import { ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/Label";
import { fieldControlClass } from "@/components/ui/fieldStyles";
import { cn } from "@/lib/utils";

type FieldShellProps = {
  children: React.ReactNode;
  className?: string;
};

function FieldShell({ children, className }: FieldShellProps) {
  return <div className={cn("field-shell rounded-xl bg-surface", className)}>{children}</div>;
}

type TextFieldProps = {
  label: string;
  id: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function TextField({
  label,
  id,
  required,
  className,
  type = "text",
  ...props
}: TextFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <FieldShell>
        <input
          id={id}
          type={type}
          className={cn(fieldControlClass, "h-11 px-4", className)}
          {...props}
        />
      </FieldShell>
    </div>
  );
}

type TextAreaFieldProps = {
  label: string;
  id: string;
  required?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextAreaField({
  label,
  id,
  required,
  className,
  ...props
}: TextAreaFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <FieldShell>
        <textarea
          id={id}
          className={cn(fieldControlClass, "min-h-[140px] resize-y px-4 py-3", className)}
          {...props}
        />
      </FieldShell>
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  id: string;
  required?: boolean;
  children: React.ReactNode;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export function SelectField({
  label,
  id,
  required,
  className,
  children,
  ...props
}: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <FieldShell className="relative">
        <select
          id={id}
          className={cn(fieldControlClass, "h-11 appearance-none px-4 pr-10", className)}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted"
          aria-hidden
        />
      </FieldShell>
    </div>
  );
}
