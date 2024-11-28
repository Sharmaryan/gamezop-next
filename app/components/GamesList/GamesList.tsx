import React, { useState } from "react";
import { GameCard } from "../GameCard/GameCard";
import { GameCardContainer } from "../GameCardContainer/GameCardContainer";
import { GamesListProps } from "./GamesList.types";
import { Button } from "../Button/Button";
import { LOAD_GAMES_COUNT } from "../../lib/constants";

export const GamesList = ({
  games,
  category,
  icon,
  showAllGames = false,
}: GamesListProps) => {
  const [visibleCount, setVisibleCount] = useState(LOAD_GAMES_COUNT);
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + LOAD_GAMES_COUNT);
  };

  return (
    <GameCardContainer categoryName={category} icon={icon}>
      <div className="flex flex-col gap-4 items-center">
        <div className="grid grid-cols-2 justify-center md:gap-2 xl:grid-cols-4 xl:gap-4">
          {showAllGames
            ? games[category]?.map((item) => (
                <GameCard {...item} key={item.code} />
              ))
            : games[category]
                ?.slice(0, visibleCount)
                ?.map((item) => <GameCard {...item} key={item.code} />)}
        </div>

        {visibleCount < 30 && !showAllGames && (
          <Button aria-label="show more games" onClick={handleShowMore} className="bg-secondary font-bold py-2 px-3 text-xs w-fit rounded-xl md:px-4 md:py-3 md:text-base">
            Show More
          </Button>
        )}
      </div>
    </GameCardContainer>
  );
};
