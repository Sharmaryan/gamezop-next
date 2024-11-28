"use client";
import React, { useState } from "react";
import { GamesList } from "../GamesList/GamesList";
import { gameCategoryIcons } from "../../lib/iconsList";
import { GroupedGames } from "../../types/filterGames";
import { Filter } from "../Filters/Filter";
import { ALL_GAMES } from "../../lib/constants";

export const GamesListFilter = ({ games }: { games: GroupedGames }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const allCategories = Object.keys(games);
  const categories = !selectedCategory
    ? allCategories
    : [...allCategories, ALL_GAMES];
  const handleCategory = (category: string) => {
    if (category === ALL_GAMES) {
      return setSelectedCategory("");
    }
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
