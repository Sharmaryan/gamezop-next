import React from "react";
import { FilterProps } from "./Filter.types";
import { Button } from "../Button/Button";

export const Filter = ({ categories, handleCategory }: FilterProps) => {
  return (
    <div className="flex px-6 flex-wrap gap-2 max-w-[1240px] mx-auto xl:px-0">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => {
            handleCategory(category);
          }}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
