import { proxy } from "valtio";
import { MonitorStatus } from "@/constants/site-status";
import { MonitorFilterType } from "@/components/MonitorFilter/page";
import { IncidentFilter } from "@/components/IncidentsFilter/page";

export interface MonitorItem {
  id: string;
  title: string;
  url: string;
  status: MonitorStatus;
}

export interface IncidentItem {
  id: string;
  monitorId: string;
  statusReceived: number;
  date: Date;
  resolved: string;
}

interface AppStore {
  ui: {
    isNewSiteModalOpen: boolean;
    searchMonitorQuery: string;
    statusMonitorFilter: MonitorFilterType;
    searchIncidentsQuery: string;
    incidentsFilter: string;
  };
  monitors: MonitorItem[];
  incidents: IncidentItem[];
}

export const store = proxy<AppStore>({
  ui: {
    isNewSiteModalOpen: false,
    searchMonitorQuery: "",
    statusMonitorFilter: "all",
    searchIncidentsQuery: "",
    incidentsFilter: "all"
  },
  monitors: [
    { id: "1", title: "Google", url: "https://google.com", status: "live" },
    { id: "2", title: "GitHub", url: "https://github.com", status: "down" },
    { id: "3", title: "Cloudflare", url: "https://cloudflare.com", status: "needs_watching" },
  ],
  incidents: [
    { id: crypto.randomUUID(), monitorId: "2", statusReceived: 403, date: new Date(), resolved: "not_resolved" },
    { id: crypto.randomUUID(), monitorId: "3", statusReceived: 403, date: new Date(), resolved: "resolved" }
  ]
});

export const actions = {
  setNewSiteModalOpen: (open: boolean) => {
    store.ui.isNewSiteModalOpen = open;
  },

  setSearchMonitorQuery: (query: string) => {
    store.ui.searchMonitorQuery = query;
  },
  setStatusMonitorFilter: (filter: MonitorFilterType) => {
    store.ui.statusMonitorFilter = filter;
  },
  setSearchIncidentQuery: (query: string) => {
    store.ui.searchIncidentsQuery = query;
  },
  setIncidentsFilter: (filter: IncidentFilter) => {
    store.ui.incidentsFilter = filter;
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