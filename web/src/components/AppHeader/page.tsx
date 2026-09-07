import React from "react";
import { SiteStatusBadge } from "../SiteStatusBadge/page";

export type MainHeaderProps = {
  className?: string;
};

function AppHeader(props: MainHeaderProps) {
  const { className } = props;

  return (
    <div
      className={`w-full border-b border-gray-500/15 h-20 flex items-center px-3 ${className ?? ""}`}
    >
      <div className="w-fit h-full flex items-center gap-x-4">
        <SiteStatusBadge status="live" sitesCount={3} />
        <SiteStatusBadge status="needs_watching" sitesCount={5} />
        <SiteStatusBadge status="down" sitesCount={1} />
      </div>
    </div>
  );
}

export default AppHeader;
