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
