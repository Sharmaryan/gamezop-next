import Image from "next/image";
import { BLUR_IMAGE_URL } from "../../lib/blurImage";
import { FaGamepad, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Tooltip from "../Tooltip/Tooltip";
import { GameCardProps } from "./GameCard.types";

export const GameCard = ({
  assets,
  name,
  gamePreviews,
  url,
}: GameCardProps) => {
  return (
    <div className="flex flex-col w-40 border-2 border-primary px-5 py-3 rounded-xl gap-5 bg-background_primary md:w-60 xl:w-[300px]">
      <p className="text-secondary text-sm md:text-base xl:text-lg xl:font-bold">
        {name.en}
      </p>
      <Link
        href={url ?? "#"}
        className="relative h-20 w-full md:h-40 xl:h-60"
        aria-label="game image"
      >
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
      <div className="flex mt-auto">
        {gamePreviews?.en && (
          <Tooltip tooltipText="Watch Video">
            <Link
              href={gamePreviews.en}
              className="text-secondary"
              aria-label="youtube"
            >
              <div>
                <FaYoutube size={15} className="text-warning md:hidden" />
                <FaYoutube
                  size={20}
                  className="text-warning hidden md:block xl:hidden"
                />
                <FaYoutube size={30} className="text-warning hidden xl:block" />
              </div>
            </Link>
          </Tooltip>
        )}
        <div className="ml-auto">
          {url && (
            <Tooltip tooltipText="Play">
              <Link href={url} className="text-secondary" aria-label="gaming">
                <FaGamepad size={15} className="text-success md:hidden" />
                <FaGamepad
                  size={20}
                  className="text-success hidden md:block xl:hidden"
                />
                <FaGamepad size={30} className="text-success hidden xl:block" />
              </Link>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};
