import React from "react";
import { FilterProps } from "./Filter.types";
import { Button } from "../Button/Button";

export const Filter = ({ categories, handleCategory }: FilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 bg-background_primary">
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
