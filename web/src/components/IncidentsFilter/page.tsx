"use client";

import React from "react";
import { Button } from "../ui/button";
import { useSnapshot } from "valtio";
import { actions, store } from "@/store";

export type IncidentFilter = "resolved" | "not_resolved" | "all";

function IncidentsFilter() {
  const snap = useSnapshot(store);

  const INCIDENTS_FILTERS: { label: string; value: IncidentFilter }[] = [
    { label: "All", value: "all" },
    { label: "Resolved", value: "resolved" },
    { label: "Not resolved", value: "not_resolved" },
  ];

  return (
    <div className="w-fit h-full flex items-center gap-x-2">
      {INCIDENTS_FILTERS.map(
        (incidentsFilter: { label: string; value: IncidentFilter }) => {

          const isActive = snap.ui.incidentsFilter == incidentsFilter.value;

          return (
            <Button className="w-30 h-9 transition-colors" variant={isActive ? "default" : "secondary"} key={incidentsFilter.value}
            onClick={() => {
              actions.setIncidentsFilter(incidentsFilter.value);
            }}
          >
            {incidentsFilter.label}
          </Button>
          )
        }
        ,
      )}
    </div>
  );
}

export default IncidentsFilter;
