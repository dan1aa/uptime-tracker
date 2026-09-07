"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NAV_ITEMS, NavItem } from '../../constants/nav'

export type MainSidebarProps = {
  className?: string;
}

function AppSidebar(props: MainSidebarProps) {

  const { className } = props;

  const pathname = usePathname();

  return (
    <Sidebar className={`border-r border-border bg-card ${className}`}>
      <SidebarHeader className="border-b border-border/50 px-6 py-4">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span>
            Uptime Tracker
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {NAV_ITEMS.map((navItem: NavItem) => {
                const isActive = pathname === navItem.url;
                return (
                  <SidebarMenuItem key={navItem.title}>
                    <SidebarMenuButton
                      isActive={isActive}
                      className={`h-10 px-3 transition-colors ${
                        isActive
                          ? "bg-emerald-500/10 text-emerald-500 font-medium hover:bg-emerald-500/15 hover:text-emerald-500"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Link href={navItem.url} className="flex items-center gap-3">
                        <navItem.icon
                          className={`h-4 w-4 ${isActive ? "text-emerald-500" : ""}`}
                        />
                        <span>{navItem.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
