"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { IncidentItem, MonitorItem, store } from "@/store";
import { useSnapshot } from "valtio";
import IncidentSearch from "@/components/IncidentSearch/page";
import IncidentsFilter from "@/components/IncidentsFilter/page";

function Incidents() {
  const snap = useSnapshot(store);

  const filteredIncidents: IncidentItem[] = snap.incidents.filter((incident: IncidentItem) => {
    const currentMonitor: MonitorItem | undefined = snap.monitors.find((monitor: MonitorItem) => monitor.id == incident.monitorId)
        const matchesSearch =
      currentMonitor?.title.toLowerCase().includes(snap.ui.searchIncidentsQuery.toLowerCase())

    const matchesResolved =
      snap.ui.incidentsFilter === "all" || incident.resolved === snap.ui.incidentsFilter;

    return matchesSearch && matchesResolved;
  })

  return (
    <div className="flex-1 min-h-0 overflow-y-auto pr-1">
      <div className='w-full h-fit flex items-center gap-x-4 py-2 px-3'>
        <IncidentSearch />
        <IncidentsFilter />
      </div>
      <div className="w-full flex h-fit items-center justify-between pl-4 py-2 border-b border-solid border-gray-500/15">
        <div className="w-1/4 h-fit">
          <Badge variant="outline" className='py-1 px-3 h-7 text-sm'>Title</Badge>
        </div>
        <div className="w-1/4 h-fit">
          <Badge variant="outline" className='py-1 px-3 h-7 text-sm'>Status</Badge>
        </div>
        <div className="w-1/4 h-fit">
          <Badge variant="outline" className='py-1 px-3 h-7 text-sm'>Resolved</Badge>
        </div>

        <div className="w-1/4 h-fit">
          <Badge variant="outline" className='py-1 px-3 h-7 text-sm'>Date</Badge>
        </div>
      </div>
      {filteredIncidents.map((incident: IncidentItem) => {
        return (
          <div
            key={incident.id}
            className={`w-full h-fit pl-4 py-3 flex items-center border-b border-solid border-gray-500/15 ${incident.resolved == "resolved" ? "opacity-55" : ""}`}
          >
            <div className="w-1/4 h-fit flex items-center gap-x-3">
            <div className={`${incident.resolved == "resolved" ? "bg-status-live" : "bg-status-down"} w-4 h-4 rounded-full`}></div>
              <span>
                {
                  snap.monitors.find(
                    (monitor: MonitorItem) => monitor.id == incident.monitorId,
                  )?.title
                }
              </span>
            </div>
            <div className="w-1/4 h-fit">
              <span>{incident.statusReceived}</span>
            </div>
            <div className="w-1/4 h-fit">
              <span>{incident.resolved == "resolved" ? "Resolved" : "Not resolved"}</span>
            </div>
            <div className="w-1/4 h-fit">
              <span>{incident.date.toLocaleString()}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Incidents;
