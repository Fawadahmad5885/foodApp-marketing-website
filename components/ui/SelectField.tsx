"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/Label";
import { fieldControlClass } from "@/components/ui/fieldStyles";
import { cn } from "@/lib/utils";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label: string;
  id: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  className?: string;
};

export function SelectField({
  label,
  id,
  name,
  required,
  placeholder = "Select an option",
  value,
  onChange,
  options,
  className,
}: SelectFieldProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  const selectedOption = options.find((option) => option.value === value);
  const displayLabel = selectedOption?.label ?? placeholder;

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className={cn("space-y-2", className)} ref={containerRef}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>

      {name && (
        <input
          type="text"
          name={name}
          value={value}
          readOnly
          required={required}
          tabIndex={-1}
          aria-hidden
          className="pointer-events-none absolute h-0 w-0 opacity-0"
        />
      )}

      <div className="field-shell relative rounded-xl bg-surface">
        <button
          type="button"
          id={id}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listboxId}
          onClick={() => setOpen((current) => !current)}
          className={cn(
            fieldControlClass,
            "h-11 truncate px-4 pr-10 text-left",
            !selectedOption && "text-muted/70",
          )}
        >
          {displayLabel}
        </button>
        <ChevronDown
          className={cn(
            "pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden
        />

        {open && (
          <ul
            id={listboxId}
            role="listbox"
            aria-labelledby={id}
            className="absolute top-full z-20 mt-1 max-h-60 w-full overflow-y-auto rounded-xl border border-border bg-surface p-1 shadow-lg shadow-black/10"
          >
            {options.map((option) => {
              const isSelected = option.value === value;

              return (
                <li key={option.value} role="presentation">
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      onChange(option.value);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                      isSelected
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-foreground hover:bg-background",
                    )}
                  >
                    <span>{option.label}</span>
                    {isSelected && (
                      <Check className="h-4 w-4 shrink-0" aria-hidden />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
