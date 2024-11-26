import { GroupedGames } from "../types/filterGames";
import { GameCardProps } from "../types/gameCard";

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
