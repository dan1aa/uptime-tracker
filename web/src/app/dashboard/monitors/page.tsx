"use client";

import React from "react";
import MonitorCard from "@/components/MonitorCard/page";
import MonitorSearch from "@/components/MonitorSearch/page";
import MonitorFilter from "@/components/MonitorFilter/page";
import { useSnapshot } from "valtio";
import { actions, store } from "@/store";
import EmptySearch from "@/components/EmptySearch/page";
import { FolderIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import MonitorDetailViewDialog from "@/components/MonitorDetailViewDialog/page";
import { MonitorItem } from "@/types/monitor";

function Monitors() {
  const snap = useSnapshot(store);

  const filteredMonitors = snap.monitors.filter((monitor: MonitorItem) => {
    const matchesSearch = monitor.title
      .toLowerCase()
      .includes(snap.ui.searchMonitorQuery.toLowerCase());

    const matchesStatus =
      snap.ui.statusMonitorFilter === "all" ||
      monitor.status === snap.ui.statusMonitorFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="h-full flex flex-col">
      <div className="mb-2 shrink-0 px-3 pt-4 flex items-center gap-x-4">
        <MonitorSearch />
        <MonitorFilter />
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto pr-1">
        <div
          className={`grid ${filteredMonitors.length ? "grid-cols-4" : "grid-cols-1"} gap-4 content-start pb-4 px-3 pt-1`}
        >
          {filteredMonitors.length ? (
            filteredMonitors.map((monitor) => {
              return <MonitorCard key={monitor.id} monitor={monitor} />;
            })
          ) : (
            <EmptySearch
              title="No monitors found"
              message="No monitors found, try to adjust your query or add new one"
              Icon={FolderIcon}
              ButtonComponent={Button}
              buttonAttrs={{ variant: "default", children: "Add new", onClick: () => { actions.setNewSiteModalOpen(true) } }}
            />
          )}
        </div>
      </div>
      <MonitorDetailViewDialog monitor={snap.ui.selectedMonitor} />
    </div>
  );
}

export default Monitors;
