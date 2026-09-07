import { Badge } from "@/components/ui/badge";
import { MonitorStatus, STATUS_CONFIG } from "@/constants/site-status";

interface StatusBadgeProps {
  status: MonitorStatus;
  sitesCount: number;
  className?: string;
}

function StatusBadge(props: StatusBadgeProps) {

  const { status, sitesCount, className } = props;

  const config = STATUS_CONFIG[status];

  if (!config) return null;

  return (
    <Badge
      variant="outline"
      className={`inline-flex items-center gap-1.5 font-medium ${config.badgeClass} ${className ?? ""}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${config.dotClass}`} />
      <span>{sitesCount} {config.label}</span>
    </Badge>
  );
}

export default StatusBadge;