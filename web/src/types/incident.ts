export interface IncidentItem {
  id: string;
  monitorId: string;
  statusReceived: number;
  date: Date;
  resolved: string;
}

export type IncidentFilter = "resolved" | "not_resolved" | "all";