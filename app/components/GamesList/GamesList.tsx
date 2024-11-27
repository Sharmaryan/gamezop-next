"use client";
import React, { useState } from "react";
import { GameCard } from "../GameCard/GameCard";
import { GameCardContainer } from "../GameCardContainer/GameCardContainer";
import { GamesListProps } from "./GamesList.types";

export const GamesList = ({
  games,
  category,
  icon,
}:GamesListProps) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <GameCardContainer categoryName={category} icon={icon}>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex gap-2 mt-5 flex-wrap">
          {games[category].slice(0, visibleCount)?.map((item) => (
            <GameCard {...item} key={item.code}/>
          ))}
        </div>

        {visibleCount < 30 && (
          <button
            aria-label="show more games"
            onClick={handleShowMore}
            className="px-6 py-4 bg-secondary w-fit rounded-xl font-bold"
          >
            Show More
          </button>
        )}
      </div>
    </GameCardContainer>
  );
};