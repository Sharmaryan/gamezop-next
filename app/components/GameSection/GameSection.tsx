import React from "react";
import { GameCardProps } from "../GameCard/GameCard.types";
import { getData } from "../../lib/data";
import { filterGamesByCategories } from "../../lib/filterGamesByCategories";
import { GamesList } from "../GamesList/GamesList";
import { gameCategoryIcons } from "../../lib/iconsList";

const GameSection = async () => {
  const response: {
    games: GameCardProps[];
  } = await getData();

  const games = filterGamesByCategories(response.games);
  const categories = Object.keys(games);
  return (
    <div className="flex flex-col gap-10 bg-background_primary py-10">
      {categories.map((category, index) => (
        <GamesList
          key={category}
          games={games}
          category={category}
          icon={gameCategoryIcons[index]}
        />
      ))}
    </div>
  );
};

export default GameSection
