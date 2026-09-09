import { proxy } from "valtio";
import { MonitorFilterType, MonitorItem } from "@/types/monitor";
import { IncidentFilter, IncidentItem } from "@/types/incident";

interface AppStore {
  ui: {
    isNewSiteModalOpen: boolean;
    isMonitorDetailViewModalOpen: boolean;
    searchMonitorQuery: string;
    statusMonitorFilter: MonitorFilterType;
    searchIncidentsQuery: string;
    incidentsFilter: string;
    selectedMonitor: MonitorItem | null;
  };
  monitors: MonitorItem[];
  incidents: IncidentItem[];
}

export const store = proxy<AppStore>({
  ui: {
    isNewSiteModalOpen: false,
    isMonitorDetailViewModalOpen: false,
    searchMonitorQuery: "",
    statusMonitorFilter: "all",
    searchIncidentsQuery: "",
    incidentsFilter: "all",
    selectedMonitor: null
  },
  monitors: [
    { id: "1", title: "Google", url: "https://google.com", status: "live", lastRequest: new Date(), lastSuccessRequest: new Date(Date.now() - 10 * 60 * 1000), requestsFrequency: 15, lastFailedRequests: 4 },
    { id: "2", title: "GitHub", url: "https://github.com", status: "down", lastRequest: new Date(), lastSuccessRequest: new Date(Date.now() - 10 * 60 * 1000), requestsFrequency: 15, lastFailedRequests: 4 },
    { id: "3", title: "Cloudflare", url: "https://cloudflare.com", status: "needs_watching", lastRequest: new Date(), lastSuccessRequest: new Date(Date.now() - 10 * 60 * 1000), requestsFrequency: 15, lastFailedRequests: 4 },
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
  setMonitorDetailViewModalOpen: (open: boolean) => {
    store.ui.isMonitorDetailViewModalOpen = open;
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
  setActiveMonitor: (monitor: MonitorItem) => {
    store.ui.selectedMonitor = monitor;
  }
};