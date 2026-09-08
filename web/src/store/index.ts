import { proxy } from "valtio";
import { MonitorStatus } from "@/constants/site-status";
import { MonitorFilterType } from "@/components/MonitorFilter/page";

export interface MonitorItem {
  id: string;
  title: string;
  url: string;
  status: MonitorStatus;
}

interface AppStore {
  ui: {
    isNewSiteModalOpen: boolean;
    searchQuery: string;
    statusFilter: MonitorFilterType;
  };
  monitors: MonitorItem[];
}

export const store = proxy<AppStore>({
  ui: {
    isNewSiteModalOpen: false,
    searchQuery: "",
    statusFilter: "all",
  },
  monitors: [
    { id: "1", title: "Google", url: "https://google.com", status: "live" },
    { id: "2", title: "GitHub", url: "https://github.com", status: "down" },
    { id: "3", title: "Cloudflare", url: "https://cloudflare.com", status: "needs_watching" },
  ],
});

export const actions = {
  setNewSiteModalOpen: (open: boolean) => {
    store.ui.isNewSiteModalOpen = open;
  },

  setSearchQuery: (query: string) => {
    store.ui.searchQuery = query;
  },
  setStatusFilter: (filter: MonitorFilterType) => {
    store.ui.statusFilter = filter;
  },

  addMonitor: (monitor: Omit<MonitorItem, "id">) => {
    store.monitors.push({
      ...monitor,
      id: crypto.randomUUID(),
    });
    store.ui.isNewSiteModalOpen = false;
  },
  removeMonitor: (id: string) => {
    store.monitors = store.monitors.filter((m) => m.id !== id);
  },
};