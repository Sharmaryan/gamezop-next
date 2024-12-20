"use client";
import React, { useState } from "react";
import { GamesList } from "../GamesList/GamesList";
import { gameCategoryIcons } from "../../lib/iconsList";
import { GroupedGames } from "../../lib/filterGames";
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
    <main className="bg-background_primary">
      <div className="py-5 sticky top-16 z-50 backdrop-blur-2xl">
        <Filter categories={categories} handleCategory={handleCategory} selectedCategory={selectedCategory}/>
      </div>
      <div className="flex flex-col gap-10 pb-5">
        {selectedCategory ? (
          <GamesList
            games={games}
            category={selectedCategory}
            showAllGames={true}
          />
        ) : (
          categories.map((category, index) => (
            <GamesList
              key={category}
              games={games}
              category={category}
              icon={gameCategoryIcons[index]}
              handleCategory={handleCategory}
            />
          ))
        )}
      </div>
    </main>
  );
};
