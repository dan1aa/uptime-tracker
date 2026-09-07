"use client"

import React, { useState } from "react";
import MonitorCard from "@/components/MonitorCard/page";
import MonitorSearch from "@/components/MonitorSearch/page";

function Monitors() {
  const INITIAL_MONITORS = [
    {
      id: "1",
      title: "Google",
      url: "https://google.com",
      status: "live" as const,
    },
    {
      id: "2",
      title: "GitHub",
      url: "https://github.com",
      status: "down" as const,
    },
    {
      id: "3",
      title: "Cloudflare",
      url: "https://cloudflare.com",
      status: "needs_watching" as const,
    },
        {
      id: "4",
      title: "Test1",
      url: "https://test1.com",
      status: "needs_watching" as const,
    },
        {
      id: "5",
      title: "Asdf",
      url: "https://asdf.com",
      status: "live" as const,
    },
        {
      id: "6",
      title: "WWW",
      url: "https://www.com",
      status: "down" as const,
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredMonitors = INITIAL_MONITORS.filter((monitor) =>
    monitor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    monitor.url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col">
      <div className="mb-4 shrink-0 px-3 py-1">
        <MonitorSearch value={searchQuery} onChange={setSearchQuery}/>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto pr-1">
        <div className="grid grid-cols-4 gap-4 content-start pb-4 px-3 pt-1">
          {filteredMonitors.map(monitor => {
            return <MonitorCard key={monitor.id}
            url={monitor.url}
            status={monitor.status}
            title={monitor.title}
            className="h-fit"
          />
          })}
        </div>
      </div>
    </div>
  );
}

export default Monitors;
