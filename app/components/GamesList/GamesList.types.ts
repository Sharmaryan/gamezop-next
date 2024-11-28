import { GroupedGames } from "../../lib/filterGames";

export type GamesListProps = {
    games: GroupedGames;
    category: string;
    icon?: string;
    showAllGames?: boolean
    handleCategory?: (category: string) => void
}