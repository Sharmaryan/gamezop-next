export type GameCardContainerProps = {
    children: React.ReactNode;
    categoryName: string;
    icon?: string
    handleCategory?: (category: string) => void
    showAllGames: boolean
}