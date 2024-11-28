import { GroupedGames } from "../../types/filterGames";

export type GamesListProps = {
    games: GroupedGames;
    category: string;
    icon?: string;
    showAllGames?: boolean
}