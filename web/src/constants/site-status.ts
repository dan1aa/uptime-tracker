export type MonitorStatus = "live" | "down" | "needs_watching";

export interface StatusConfig {
  label: string;
  badgeClass: string;
  dotClass: string;
  message: string;
}

export const STATUS_CONFIG: Record<MonitorStatus, StatusConfig> = {
  live: {
    label: "sites are live",
    badgeClass: "bg-status-live-muted text-status-live border-status-live-border",
    dotClass: "bg-status-live",
    message: "Site is live"
  },
  down: {
    label: "sites are down",
    badgeClass: "bg-status-down-muted text-status-down border-status-down-border",
    dotClass: "bg-status-down",
    message: "Site is down"
  },
  needs_watching: {
    label: "sites need watching",
    badgeClass: "bg-status-watching-muted text-status-watching border-status-watching-border",
    dotClass: "bg-status-watching",
    message: "Site needs watching"
  },
};