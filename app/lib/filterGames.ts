import { GameCardProps } from "../components/GameCard/GameCard.types";

export type GroupedGames = {
    [key: string]: GameCardProps[];
};