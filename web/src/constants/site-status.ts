import { MonitorStatus } from "@/types/monitor";
import { StatusConfig } from "@/types/site-status";


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