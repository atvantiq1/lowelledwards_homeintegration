"use client";

import { useState, type ReactNode } from "react";

export default function CapabilityItem({
  label,
  description,
  icon,
}: {
  label: string;
  description: string;
  icon: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li data-open={open} className="group/cap">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full cursor-pointer items-center gap-3 text-left outline-none focus-visible:text-cream"
      >
        {icon}
        <span className="font-body text-sm text-cream/70 transition-colors duration-300 group-hover/cap:text-cream group-data-[open=true]/cap:text-cream">
          {label}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="ml-auto h-4 w-4 shrink-0 text-gold/70 transition-transform duration-300 group-hover/cap:rotate-180 group-hover/cap:text-gold group-data-[open=true]/cap:rotate-180 group-data-[open=true]/cap:text-gold"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300 ease-out group-hover/cap:grid-rows-[1fr] group-hover/cap:opacity-100 group-data-[open=true]/cap:grid-rows-[1fr] group-data-[open=true]/cap:opacity-100 motion-reduce:transition-none">
        <p className="overflow-hidden pl-9 font-body text-xs leading-relaxed text-cream/55">
          <span className="block pt-2">{description}</span>
        </p>
      </div>
    </li>
  );
}
