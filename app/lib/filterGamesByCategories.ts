import { GameCardProps } from "../components/GameCard/GameCard.types";
import { GroupedGames } from "./filterGames";

export const filterGamesByCategories = (games: GameCardProps[]) => {
    const groupedGames: GroupedGames = {};

    games.forEach((game) => {
        game?.categories?.en.forEach((category) => {
            if (!groupedGames[category]) {
                groupedGames[category] = [];
            }
            groupedGames[category].push(game);
        });
    });

    return groupedGames;
}
