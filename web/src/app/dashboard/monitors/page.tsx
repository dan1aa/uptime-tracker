"use client";

import React from "react";
import MonitorCard from "@/components/MonitorCard/page";
import MonitorSearch from "@/components/MonitorSearch/page";
import MonitorFilter from "@/components/MonitorFilter/page";
import { MonitorStatus } from "@/constants/site-status";
import { useSnapshot } from "valtio";
import { MonitorItem, store } from "@/store";

function Monitors() {
  const snap = useSnapshot(store)

  const filteredMonitors = snap.monitors.filter((monitor: MonitorItem) => {
    const matchesSearch =
      monitor.title.toLowerCase().includes(snap.ui.searchMonitorQuery.toLowerCase())

    const matchesStatus =
      snap.ui.statusMonitorFilter === "all" || monitor.status === snap.ui.statusMonitorFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="h-full flex flex-col">
      <div className="mb-2 shrink-0 px-3 pt-4 flex items-center gap-x-4">
        <MonitorSearch />
        <MonitorFilter />
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto pr-1">
        <div className="grid grid-cols-4 gap-4 content-start pb-4 px-3 pt-1">
          {filteredMonitors.map((monitor) => {
            return (
              <MonitorCard
                key={monitor.id}
                url={monitor.url}
                status={monitor.status as MonitorStatus}
                title={monitor.title}
                className="h-fit"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Monitors;
