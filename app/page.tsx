import { getData } from "./lib/data";
import { GameCardProps } from "./types/gameCard";
import { filterGamesByCategories } from "./lib/filterGamesByCategories";
import { Suspense } from "react";
import { GamesList } from "./components/GamesList";
import { gameCategoryIcons } from "./lib/iconsList";

export default async function Home() {
  const response: {
    games: GameCardProps[];
  } = await getData();

  const games = filterGamesByCategories(response.games);
  const categories = Object.keys(games);

  return (
    <div className="bg-background_primary">
      <Suspense fallback={<h1>loading...</h1>}>
        <div className="flex flex-col gap-10">
          {categories.map((category, index) => (
            <GamesList
              key={category}
              games={games}
              category={category}
              icon={gameCategoryIcons[index]}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
