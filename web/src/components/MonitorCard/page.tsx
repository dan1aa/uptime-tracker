import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { STATUS_CONFIG } from "@/constants/site-status";
import { Button } from "../ui/button";
import { actions } from "@/store";
import { MonitorItem } from "@/types/monitor";

export type MonitorCardProps = {
  monitor: MonitorItem;
  className?: string;
};

function MonitorCard(props: MonitorCardProps) {
  const { monitor, className } = props;

  const statusConfig = monitor?.status ? STATUS_CONFIG[monitor.status] : null;

  return (
    <Card className={`${className} h-fit`}>
      <CardHeader>
        <div className="pb-2">
          <CardTitle>{monitor?.title || ""}</CardTitle>
          <CardDescription>{monitor?.url || ""}</CardDescription>
        </div>
        <div className="flex w-full h-fit gap-x-2 items-center">
          <div
            className={`w-3 h-3 rounded-full ${statusConfig?.dotClass ?? "bg-zinc-600"}`}
          />
          <span>{statusConfig?.message ?? "Unknown"}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center w-fit h-fit gap-x-2">
          <Button
            variant={"default"}
            onClick={() => {
              actions.setActiveMonitor(monitor);
              actions.setMonitorDetailViewModalOpen(true);
            }}
          >
            View
          </Button>
          <Button
            variant={"destructive"}
            onClick={() => {
              actions.removeMonitor(monitor?.id || "");
            }}
          >
            Remove
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default MonitorCard;
