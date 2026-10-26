"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { Check, ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  id: string;
  value: string;
  options: SelectOption[];
  placeholder: string;
  onChange: (value: string) => void;
  // Called once focus leaves the field, after any choice has been applied.
  onBlur?: () => void;
  disabled?: boolean;
  invalid?: boolean;
  describedBy?: string;
  // Adds a filter box, for long lists such as cities.
  searchable?: boolean;
  className?: string;
}

// A themed replacement for <select>, whose option list the browser draws
// in its own colors and cannot be restyled.
export default function SelectField({
  id,
  value,
  options,
  placeholder,
  onChange,
  onBlur,
  disabled = false,
  invalid = false,
  describedBy,
  searchable = false,
  className = "",
}: SelectFieldProps) {
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const typeahead = useRef({ text: "", timer: 0 });

  const selected = options.find((option) => option.value === value);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q
      ? options.filter((option) => option.label.toLowerCase().includes(q))
      : options;
  }, [options, query]);

  function openList() {
    if (disabled) return;
    setQuery("");
    setActiveIndex(Math.max(0, options.findIndex((o) => o.value === value)));
    setOpen(true);
  }

  function close(refocus: boolean) {
    setOpen(false);
    if (refocus) buttonRef.current?.focus();
  }

  function choose(option: SelectOption) {
    if (option.value !== value) onChange(option.value);
    close(true);
  }

  useEffect(() => {
    if (!open) return;
    if (searchable) searchRef.current?.focus();

    function handlePointerDown(e: PointerEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open, searchable]);

  useEffect(() => {
    if (!open || activeIndex < 0) return;
    const item = listRef.current?.children[activeIndex] as HTMLElement | undefined;
    item?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex]);

  // Jumps to the first option starting with the letters typed in quick succession.
  function jumpTo(char: string) {
    const state = typeahead.current;
    window.clearTimeout(state.timer);
    state.text += char.toLowerCase();
    state.timer = window.setTimeout(() => (state.text = ""), 600);
    const index = visible.findIndex((o) => o.label.toLowerCase().startsWith(state.text));
    if (index >= 0) setActiveIndex(index);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openList();
      }
      return;
    }

    const last = visible.length - 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((i) => Math.min(last, i + 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((i) => Math.max(0, i - 1));
        break;
      case "Home":
      case "End":
        if (searchable) break;
        e.preventDefault();
        setActiveIndex(e.key === "Home" ? 0 : last);
        break;
      case "Enter":
        e.preventDefault();
        if (visible[activeIndex]) choose(visible[activeIndex]);
        break;
      case "Escape":
        e.preventDefault();
        close(true);
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        if (!searchable && e.key.length === 1 && !e.metaKey && !e.ctrlKey) {
          jumpTo(e.key);
        }
    }
  }

  const activeId =
    open && visible[activeIndex] ? `${listId}-${activeIndex}` : undefined;

  return (
    <div
      ref={rootRef}
      className={`relative mt-2 ${className}`}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node | null)) {
          setOpen(false);
          onBlur?.();
        }
      }}
    >
      <button
        ref={buttonRef}
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={searchable ? undefined : activeId}
        aria-invalid={invalid}
        aria-describedby={describedBy}
        disabled={disabled}
        onClick={() => (open ? close(false) : openList())}
        onKeyDown={handleKeyDown}
        className={`flex w-full items-center justify-between gap-3 rounded-md border bg-bg px-4 py-3 text-left font-body text-base transition-colors duration-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 ${
          open || invalid ? "" : "border-bg4 focus:border-gold"
        } ${open ? "border-gold" : ""} ${invalid && !open ? "border-red" : ""}`}
      >
        <span className={`truncate ${selected ? "text-cream" : "text-cream/35"}`}>
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-cream/45 transition-transform duration-300 ${
            open ? "rotate-180 text-gold" : ""
          }`}
          strokeWidth={1.8}
          aria-hidden
        />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-md border border-bg4 bg-bg shadow-[0_16px_40px_-12px_rgba(26,26,46,0.25)]">
          {searchable && (
            <div className="border-b border-bg4 p-2">
              <input
                ref={searchRef}
                type="text"
                role="combobox"
                aria-label="Filter options"
                aria-expanded
                aria-controls={listId}
                aria-activedescendant={activeId}
                autoComplete="off"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search…"
                className="w-full rounded border border-bg4 bg-bg2 px-3 py-2 font-body text-sm text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none"
              />
            </div>
          )}
          <ul
            ref={listRef}
            id={listId}
            role="listbox"
            aria-labelledby={id}
            className="max-h-64 overflow-y-auto py-1"
          >
            {visible.map((option, index) => {
              const isSelected = option.value === value;
              const isActive = index === activeIndex;
              return (
                <li
                  key={option.value}
                  id={`${listId}-${index}`}
                  role="option"
                  aria-selected={isSelected}
                  // Keep focus on the trigger or search box while clicking.
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => choose(option)}
                  className={`flex cursor-pointer items-center justify-between gap-3 px-4 py-2.5 font-body text-sm transition-colors duration-150 ${
                    isActive ? "bg-gold/8" : ""
                  } ${isSelected ? "font-medium text-gold" : "text-cream/80"}`}
                >
                  <span className="truncate">{option.label}</span>
                  {isSelected && (
                    <Check className="size-4 shrink-0" strokeWidth={2} aria-hidden />
                  )}
                </li>
              );
            })}
            {visible.length === 0 && (
              <li className="px-4 py-2.5 font-body text-sm text-cream/45">
                No matches
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
