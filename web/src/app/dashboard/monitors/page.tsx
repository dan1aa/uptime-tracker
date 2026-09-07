"use client";

import React, { useState } from "react";
import MonitorCard from "@/components/MonitorCard/page";
import MonitorSearch from "@/components/MonitorSearch/page";
import MonitorFilter, {
  MonitorFilterType,
} from "@/components/MonitorFilter/page";
import { MonitorStatus } from "@/constants/site-status";

function Monitors() {
  const MONITORS_DATA = [
    {
      id: "1",
      title: "Google",
      url: "https://google.com",
      status: "live",
    },
    {
      id: "2",
      title: "GitHub",
      url: "https://github.com",
      status: "down",
    },
    {
      id: "3",
      title: "Cloudflare",
      url: "https://cloudflare.com",
      status: "needs_watching",
    },
    {
      id: "4",
      title: "AWS",
      url: "https://aws.amazon.com",
      status: "live",
    },
    {
      id: "5",
      title: "Vercel",
      url: "https://vercel.com",
      status: "needs_watching",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<MonitorFilterType>("all");

  const filteredMonitors = MONITORS_DATA.filter((monitor) => {
    const matchesSearch =
      monitor.title.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus =
      activeFilter === "all" || monitor.status === activeFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="h-full flex flex-col">
      <div className="mb-2 shrink-0 px-3 pt-4 flex items-center gap-x-4">
        <MonitorSearch value={searchQuery} onChange={setSearchQuery} />
        <MonitorFilter value={activeFilter} onChange={setActiveFilter}/>
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
