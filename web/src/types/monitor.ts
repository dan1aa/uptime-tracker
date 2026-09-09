export type MonitorStatus = "live" | "down" | "needs_watching";

export type MonitorFilterType = MonitorStatus | "all";

export interface MonitorItem {
  id: string;
  title: string;
  url: string;
  status: MonitorStatus;
  lastRequest: Date;
  lastSuccessRequest: Date;
  requestsFrequency: number;
  lastFailedRequests: number;
}