"use client";
import React, { useState } from "react";
import { GamesList } from "../GamesList/GamesList";
import { gameCategoryIcons } from "../../lib/iconsList";
import { GroupedGames } from "../../types/filterGames";
import { Filter } from "../Filters/Filter";

export const GamesListFilter = ({
  categories,
  games,
}: {
  categories: string[];
  games: GroupedGames;
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategory = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <div className="bg-background_primary">
      <div className="py-5 sticky top-16 z-50">
        <Filter categories={categories} handleCategory={handleCategory} />
      </div>
      <div className="flex flex-col gap-10 pb-5">
        {selectedCategory ? (
          <GamesList
            games={games}
            category={selectedCategory}
            icon={gameCategoryIcons[0]}
            showAllGames={true}
          />
        ) : (
          categories.map((category, index) => (
            <GamesList
              key={category}
              games={games}
              category={category}
              icon={gameCategoryIcons[index]}
            />
          ))
        )}
      </div>
    </div>
  );
};
