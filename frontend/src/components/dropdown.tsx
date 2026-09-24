"use client";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, ChevronDown } from "lucide-react";

export type DropdownOption = { value: string; label: string };

export function Dropdown({
  value: valueProp,
  defaultValue = "",
  onChange,
  options,
  name,
  required,
  disabled,
  placeholder = "Select",
  hint,
  ariaLabel,
  className = "",
}: {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  options: DropdownOption[];
  name?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  hint?: string;
  ariaLabel?: string;
  className?: string;
}) {
  const [inner, setInner] = useState(defaultValue);
  const value = valueProp !== undefined ? valueProp : inner;
  const [open, setOpen] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [active, setActive] = useState(-1);
  const [box, setBox] = useState<{
    top?: number;
    bottom?: number;
    left: number;
    width: number;
  } | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLUListElement>(null);
  const listId = useId();
  const selected = options.find((option) => option.value === value);

  function place() {
    const rect = trigger.current?.getBoundingClientRect();
    if (!rect) return;
    const width = Math.max(rect.width, 200);
    const left = Math.max(8, Math.min(rect.left, window.innerWidth - width - 8));
    const roomBelow = window.innerHeight - rect.bottom;
    const openUp = roomBelow < 220 && rect.top > roomBelow;
    setBox(
      openUp
        ? { bottom: window.innerHeight - rect.top + 6, left, width }
        : { top: rect.bottom + 6, left, width },
    );
  }

  useEffect(() => {
    if (!open) return;
    place();
    const close = (event: MouseEvent) => {
      const target = event.target as Node;
      if (root.current?.contains(target) || menu.current?.contains(target)) return;
      setOpen(false);
    };
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    document.addEventListener("mousedown", close);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
      document.removeEventListener("mousedown", close);
    };
  }, [open]);

  useEffect(() => {
    const form = root.current?.closest("form");
    if (!form || !required) return;
    const check = (event: Event) => {
      if (value) return;
      event.preventDefault();
      event.stopPropagation();
      setInvalid(true);
      setOpen(true);
      trigger.current?.focus();
    };
    form.addEventListener("submit", check, true);
    return () => form.removeEventListener("submit", check, true);
  }, [required, value]);

  function choose(next: string) {
    setInner(next);
    onChange?.(next);
    setInvalid(false);
    setOpen(false);
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (disabled || !options.length) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const current = options.findIndex((option) => option.value === value);
      const start = active >= 0 ? active : Math.max(current, 0);
      const delta = event.key === "ArrowDown" ? 1 : -1;
      setActive((start + delta + options.length) % options.length);
      setOpen(true);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (open && active >= 0) choose(options[active].value);
      else setOpen((current) => !current);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div
      className={`nv-dropdown${open ? " open" : ""}${invalid ? " invalid" : ""} ${className}`.trim()}
      ref={root}
    >
      {name && <input type="hidden" name={name} value={value} />}
      <button
        ref={trigger}
        type="button"
        className="nv-dropdown-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={() => {
          if (disabled) return;
          setOpen((current) => !current);
          setActive(Math.max(0, options.findIndex((option) => option.value === value)));
        }}
        onKeyDown={onKeyDown}
      >
        <span className="nv-dropdown-value">
          {hint && <small>{hint}</small>}
          <span className={selected ? "" : "placeholder"}>
            {selected?.label || placeholder}
          </span>
        </span>
        <ChevronDown size={16} />
      </button>
      {invalid && <span className="nv-dropdown-error">Choose an option</span>}
      {open &&
        box &&
        createPortal(
          <ul
            ref={menu}
            id={listId}
            className="nv-dropdown-menu"
            role="listbox"
            style={box}
          >
            {options.map((option, index) => (
              <li key={option.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={option.value === value}
                  className={
                    option.value === value
                      ? "selected"
                      : index === active
                        ? "active"
                        : ""
                  }
                  onMouseEnter={() => setActive(index)}
                  onClick={() => choose(option.value)}
                >
                  {option.label}
                  {option.value === value && <Check size={14} />}
                </button>
              </li>
            ))}
          </ul>,
          document.body,
        )}
    </div>
  );
}
