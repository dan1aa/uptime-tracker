import React from "react";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";
import { ButtonProps } from "@base-ui/react";

interface EmptySearchProps {
  Icon: LucideIcon;
  title: string;
  message: string;
  ButtonComponent?: React.ComponentType<ButtonProps>;
  buttonAttrs?: Record<string, string | (() => void)>;
}

function EmptySearch(props: EmptySearchProps) {
  const { Icon, title, message, ButtonComponent, buttonAttrs } = props;

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Icon />
        </EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>{message}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        {ButtonComponent && <ButtonComponent {...buttonAttrs}></ButtonComponent>}
      </EmptyContent>
    </Empty>
  );
}

export default EmptySearch;
