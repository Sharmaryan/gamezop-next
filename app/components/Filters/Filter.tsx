import React from "react";
import { FilterProps } from "./Filter.types";
import { Button } from "../Button/Button";

export const Filter = ({
  categories,
  handleCategory,
  selectedCategory,
}: FilterProps) => {
  return (
    <div className="flex px-6 flex-wrap gap-2 max-w-[1240px] mx-auto xl:px-0">
      {categories.map((category) => (
        <Button
          className={`font-bold py-2 px-3 text-xs w-fit rounded-xl md:px-4 md:py-3 md:text-base ${
            selectedCategory === category ? "bg-light" : "bg-secondary"
          }`}
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
