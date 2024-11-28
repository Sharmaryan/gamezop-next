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
    <>
      <Filter categories={categories} handleCategory={handleCategory} />
      <div className="flex flex-col gap-10 bg-background_primary py-10">
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
    </>
  );
};
