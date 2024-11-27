import React from "react";
import { Icon } from "../Icon";
import { GameCardContainerProps } from "./GameCardContainer.types";

export const GameCardContainer = ({
  children,
  categoryName,
  icon,
}: GameCardContainerProps) => {
  return (
    <div className="px-4 py-6 border-2 rounded-3xl border-primary bg-primary max-w-[1340px] mx-auto">
      <div className="flex gap-2 items-center">
        <Icon name={icon} />
        <p className="text-2xl font-extrabold text-secondary">{categoryName}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};