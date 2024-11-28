import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <div className="py-5 sticky top-0 bg-primary z-50">
      <div className="max-w-[1240px] mx-auto">
        <Image
          src={
            "https://www.gamezop.com/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2Flogo%2Fgamezop-logo-dark.png&w=384&q=75"
          }
          alt="gamezop logo"
          height={150}
          width={150}
        />
      </div>
    </div>
  );
};
