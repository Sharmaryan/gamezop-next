import React from "react";
import { Icon } from "../Icon";
import { GameCardContainerProps } from "./GameCardContainer.types";

export const GameCardContainer = ({
  children,
  categoryName,
  icon,
}: GameCardContainerProps) => {
  return (
    <div className="border-2 p-4 mx-auto rounded-3xl border-primary bg-primary md:p-10 xl:px-2">
      <div className="flex gap-2 items-center">
        <Icon name={icon} />
        <p className="text-md font-extrabold text-secondary md:text-xl xl:text-2xl">{categoryName}</p>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
};
