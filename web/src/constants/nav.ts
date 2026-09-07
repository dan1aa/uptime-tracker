import {
  Activity,
  LayoutDashboard,
  BellRing,
  Settings,
  Radio,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  badge?: string | number;
}

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Monitors",
    url: "/dashboard/monitors",
    icon: Radio,
  },
  {
    title: "Incidents",
    url: "/dashboard/incidents",
    icon: Activity,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];