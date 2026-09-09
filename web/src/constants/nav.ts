import { NavItem } from "@/types/nav";
import {
  Activity,
  Settings,
  Radio,
} from "lucide-react";

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