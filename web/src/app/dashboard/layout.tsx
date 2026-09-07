import AppBreadcrumbs from "@/components/AppBreadcrumbs/page";
import MainHeader from "@/components/AppHeader/page";
import MainSidebar from "@/components/AppSidebar/page";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="w-full h-[100vh] flex">
        <MainSidebar className="" />
        <div className="flex-1 h-full flex flex-col min-w-0">
          <MainHeader />
          <AppBreadcrumbs />
          <main className="flex-1 min-h-0 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default DashboardLayout;
