"use client";
import React, { useState } from "react";
import { GameCard } from "../GameCard/GameCard";
import { GameCardContainer } from "../GameCardContainer/GameCardContainer";
import { GamesListProps } from "./GamesList.types";

export const GamesList = ({ games, category, icon }: GamesListProps) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <GameCardContainer categoryName={category} icon={icon}>
      <div className="flex flex-col gap-4 items-center">
        <div className="grid grid-cols-2 justify-center md:gap-2 xl:grid-cols-4 xl:gap-4">
          {games[category].slice(0, visibleCount)?.map((item) => (
            <GameCard {...item} key={item.code} />
          ))}
        </div>

        {visibleCount < 30 && (
          <button
            aria-label="show more games"
            onClick={handleShowMore}
            className="bg-secondary font-bold py-2 px-3 text-xs w-fit rounded-xl md:px-4 md:py-3 md:text-base xl:px-6 xl:py-4 xl:text-lg"
          >
            Show More
          </button>
        )}
      </div>
    </GameCardContainer>
  );
};
