import React from "react";
import { Button } from "../ui/button";
import { MonitorStatus } from "@/constants/site-status";

interface MonitorFilterProps {
  className?: string;
  value: string;
  onChange: (type: MonitorStatus | "all") => void;
}

export type MonitorFilterType = MonitorStatus | "all";

function MonitorFilter(props: MonitorFilterProps) {
  const { onChange, className, value } = props;

  const FILTERS: { label: string; value: MonitorFilterType }[] = [
    { label: "All", value: "all" },
    { label: "Live", value: "live" },
    { label: "Down", value: "down" },
    { label: "Watching", value: "needs_watching" },
  ];

  return (
    <div className={`w-fit h-full items-center flex gap-x-2 ${className}`}>
      {FILTERS.map((filter) => {
        const isActive = value === filter.value;

        return (
          <Button
            key={filter.value}
            type="button"
            onClick={() => onChange(filter.value)}
            variant={isActive ? "default" : "secondary"}
            className="w-20 h-9 transition-colors"
          >
            {filter.label}
          </Button>
        );
      })}
    </div>
  );
}

export default MonitorFilter;
