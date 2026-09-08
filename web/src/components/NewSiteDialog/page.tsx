"use client";

import React, { useState } from "react";
import { useSnapshot } from "valtio";
import { store, actions } from "@/store";
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
import { Input } from "../ui/input";

export default function NewSiteDialog() {
  const snap = useSnapshot(store);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !url) return;

    actions.addMonitor({
      title: name,
      url,
      status: "live",
    });

    setName("");
    setUrl("");
  };

  return (
    <Dialog 
      open={snap.ui.isNewSiteModalOpen} 
      onOpenChange={actions.setNewSiteModalOpen}
    >
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Add New Monitor</DialogTitle>
          <DialogDescription>
            Enter the website details to start monitoring.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 py-2">
          <Input 
            placeholder="Monitor Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <Input 
            placeholder="https://example.com" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
          />

          <DialogFooter className="pt-2">
            <DialogClose>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}