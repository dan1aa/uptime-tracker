"use client";

import React from "react";
import StatusBadge from "../StatusBadge/page";
import { Button } from "../ui/button";
import { useSnapshot } from "valtio";
import { actions, MonitorItem, store } from "@/store";

interface MainHeaderProps {
  className?: string;
};

function AppHeader(props: MainHeaderProps) {

  const snap = useSnapshot(store);

  const liveCount = snap.monitors.filter((monitor: MonitorItem) => monitor.status == 'live').length;
  const downCount = snap.monitors.filter((monitor: MonitorItem) => monitor.status == 'down').length;
  const needsWatchingCount = snap.monitors.filter((monitor: MonitorItem) => monitor.status == 'needs_watching').length;

  const { className } = props;

  return (
    <div
      className={`w-full border-b border-gray-500/15 h-20 flex items-center justify-between px-3 ${className ?? ""}`}
    >
      <div className="w-fit h-full flex items-center gap-x-4">
        <StatusBadge status="live" sitesCount={liveCount} />
        <StatusBadge status="needs_watching" sitesCount={downCount} />
        <StatusBadge status="down" sitesCount={needsWatchingCount} />
      </div>
      <div className='w-fit flex items-center h-full gap-x-6'>
        <Button variant={"default"} onClick={() => { actions.setNewSiteModalOpen(true) }}>Add new</Button>
      </div>
    </div>
  );
}

export default AppHeader;
