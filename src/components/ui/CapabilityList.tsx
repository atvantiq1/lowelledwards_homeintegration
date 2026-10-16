import type { ComponentType } from "react";
import CapabilityItem from "@/components/ui/CapabilityItem";

type Capability = {
  label: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

export default function CapabilityList({ items }: { items: Capability[] }) {
  return (
    <ul className="mt-8 grid grid-cols-2 items-start gap-x-6 gap-y-5 border-t border-bg4 pt-8">
      {items.map(({ label, description, icon: Icon }) => (
        <CapabilityItem
          key={label}
          label={label}
          description={description}
          icon={
            <Icon className="h-6 w-6 shrink-0 text-gold/80 transition-colors duration-300 group-hover/cap:text-gold group-data-[open=true]/cap:text-gold" />
          }
        />
      ))}
    </ul>
  );
}
