"use client";

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useSnapshot } from "valtio";
import { actions, store } from "@/store";
import { STATUS_CONFIG } from "@/constants/site-status";
import { MonitorItem } from "@/types/monitor";

interface MonitorDetailViewDialogProps {
  monitor: MonitorItem | null;
}

function MonitorDetailViewDialog(props: MonitorDetailViewDialogProps) {
  const { monitor } = props;

  const snap = useSnapshot(store);

  const statusConfig = monitor?.status ? STATUS_CONFIG[monitor.status] : null;

  return (
    <Dialog
      open={snap.ui.isMonitorDetailViewModalOpen}
      onOpenChange={actions.setMonitorDetailViewModalOpen}
    >
      <DialogContent className="sm:max-w-sm">
        <DialogHeader className='border-b border-solid border-gray-500/15 pb-2'>
          <div className="w-full h-full flex items-center gap-x-2">
            <DialogTitle>{monitor?.title}</DialogTitle>
            <div
              className={`w-3 h-3 rounded-full ${statusConfig?.dotClass}`}
            ></div>
            <span>{statusConfig?.message}</span>
          </div>
        </DialogHeader>
        <div className="w-full h-fit flex flex-col">
          <div className='flex flex-col gap-y-1'>
            <span className='font-bold'>Last request: {monitor?.lastRequest.toLocaleString()}</span>
            <span className='font-bold'>Last success request: {monitor?.lastSuccessRequest.toLocaleString()}</span>
            <span className='font-bold'>Requests frequency: {monitor?.requestsFrequency}/h</span>
            <span className='font-bold'>Failed requests in last 24h: {monitor?.lastFailedRequests}</span>
          </div>
        </div>
        <DialogFooter className="pt-2">
          <DialogClose>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default MonitorDetailViewDialog;
