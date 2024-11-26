import Image from "next/image";
import { GameCardProps } from "../types/gameCard";
import { BLUR_IMAGE_URL } from "../lib/blurImage";

export const GameCard = ({
  assets,
  name,
  description,
  tags,
}: GameCardProps) => {
  return (
    <div className="flex flex-col border-2 border-primary px-6 py-4 rounded-xl w-80 gap-5 bg-background_primary">
      <p className="text-secondary text-lg font-bold">{name.en}</p>
      <div className="relative h-60 w-full">
        <Image
          src={assets.cover}
          alt=""
          fill
          objectFit="cover"
          className="rounded-3xl"
          placeholder="blur"
          blurDataURL={BLUR_IMAGE_URL}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {tags?.en.map((tag) => (
          <p key={tag} className="bg-secondary rounded-lg text-primary text-lg font-bold p-2">{tag}</p>
        ))}
      </div>
      {/* <p className="text-secondary text-lg font-light">{description?.en}</p> */}
    </div>
  );
};
