import React from "react";
import { GameCardProps } from "../GameCard/GameCard.types";
import { getData } from "../../lib/data";
import { filterGamesByCategories } from "../../lib/filterGamesByCategories";
import { GamesListFilter } from "../GamesListFilter/GamesListFilter";

const GameSection = async () => {
  const response: {
    games: GameCardProps[];
  } = await getData();

  const games = filterGamesByCategories(response.games);
  return <GamesListFilter games={games} />;
};

export default GameSection;
