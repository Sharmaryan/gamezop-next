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
    <div className="flex flex-col w-40 border-2 border-primary px-6 py-4 rounded-xl gap-5 bg-background_primary md:w-60 xl:w-[300px]">
      <p className="text-secondary text-sm md:text-base xl:text-lg xl:font-bold">
        {name.en}
      </p>
      <Link href={url ?? "#"} className="relative h-20 w-full md:h-40 xl:h-60">
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
            className="bg-secondary p-0.5 text-[10px] rounded-lg text-primary md:text-base md:p-1 xl:text-md xl:font-bold xl:px-4"
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="flex justify-between">
        {gamePreviews?.en && (
          <Tooltip tooltipText="Watch Video">
            <Link href={gamePreviews.en} className="text-secondary">
              <div>
                <FaYoutube size={15} className="md:hidden" />
                <FaYoutube size={20} className="hidden md:block xl:hidden" />
                <FaYoutube size={25} className="hidden xl:block" />
              </div>
            </Link>
          </Tooltip>
        )}
        {url && (
          <Tooltip tooltipText="Play">
            <Link href={url} className="text-secondary">
              <FaGamepad size={15} className="md:hidden" />
              <FaGamepad size={20} className="hidden md:block xl:hidden" />
              <FaGamepad size={25} className="hidden xl:block" />
            </Link>
          </Tooltip>
        )}
      </div>
    </div>
  );
};
