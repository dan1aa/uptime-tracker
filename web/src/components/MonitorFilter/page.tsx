"use client";

import React from "react";
import { Button } from "../ui/button";
import { MonitorStatus } from "@/constants/site-status";
import { actions, store } from "@/store";
import { useSnapshot } from "valtio";

interface MonitorFilterProps {
  className?: string;
}

export type MonitorFilterType = MonitorStatus | "all";

function MonitorFilter(props: MonitorFilterProps) {
  const { className } = props;

  const snap = useSnapshot(store)

  const FILTERS: { label: string; value: MonitorFilterType }[] = [
    { label: "All", value: "all" },
    { label: "Live", value: "live" },
    { label: "Down", value: "down" },
    { label: "Watching", value: "needs_watching" },
  ];

  return (
    <div className={`w-fit h-full items-center flex gap-x-2 ${className}`}>
      {FILTERS.map((filter) => {
        const isActive = snap.ui.statusMonitorFilter === filter.value;

        return (
          <Button
            key={filter.value}
            type="button"
            onClick={() => {actions.setStatusMonitorFilter(filter.value)}}
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
