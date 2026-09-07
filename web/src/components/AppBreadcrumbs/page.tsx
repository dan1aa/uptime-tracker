"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";
import { ROUTE_LABELS } from "@/constants/route-labels";

export type AppBreadcrumbsProps = {
    className?: string;
}

export default function AppBreadcrumbs(props: AppBreadcrumbsProps) {

  const { className } = props;

  const pathname = usePathname();

  const segments = pathname.split("/").filter((segment) => segment !== "dashboard" && Boolean(segment));

  if (segments.length === 0) return null;

  return (
    <Breadcrumb className={`px-3 pt-7 pb-5 ${className}`}>
      <BreadcrumbList>
        <BreadcrumbItem>
            <HomeIcon fill="black" className='w-4 h-4'/>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = index === segments.length - 1;

          const label = ROUTE_LABELS[segment] || decodeURIComponent(segment);

          return (
            <React.Fragment key={href}>
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="font-medium">
                    {label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink render={<a href={href}></a>}>
                    {label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}