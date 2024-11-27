import Image from "next/image";
import { BLUR_IMAGE_URL } from "../../lib/blurImage";
import { FaGamepad, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Tooltip from "../Tooltip/Tooltip";
import { GameCardProps } from "./GameCard.types";

export const GameCard = ({
  assets,
  name,
  tags,
  gamePreviews,
  url,
}: GameCardProps) => {
  return (
    <div className="flex flex-col border-2 border-primary px-6 py-4 rounded-xl w-80 gap-5 bg-background_primary">
      <p className="text-secondary text-lg font-bold">{name.en}</p>
      <Link href={url ?? '#'} className="relative h-60 w-full">
        <Image
          src={assets.cover}
          alt=""
          fill
          objectFit="cover"
          className="rounded-3xl"
          placeholder="blur"
          blurDataURL={BLUR_IMAGE_URL}
        />
      </Link>
      <div className="flex flex-wrap gap-2">
        {tags?.en.map((tag) => (
          <p
            key={tag}
            className="bg-secondary rounded-lg text-primary text-lg font-bold p-2"
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="flex justify-between">
        {gamePreviews?.en && (
          <Tooltip tooltipText="Watch Video">
            <Link href={gamePreviews.en} className="text-secondary">
              <FaYoutube size={25} />
            </Link>
          </Tooltip>
        )}
        {url && (
          <Tooltip tooltipText="Play">
            <Link href={url} className="text-secondary">
              <FaGamepad size={25} />
            </Link>
          </Tooltip>
        )}
      </div>
    </div>
  );
};
