import React from "react";
import { footerMock } from "./Footer.mock";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-background_primary">
      <div className="flex justify-center py-6 text-xs border-y-2 border-primary_light md:text-base">
        <div className="max-w-[1240px] flex flex-col gap-5 px-6 xl:px-0">
          <div className="flex flex-wrap gap-4">
            {footerMock.links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-secondary underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {footerMock.description.map((description) => (
              <div key={description.id} className="text-primary_light">
                {description.content}

                {description.link && (
                  <Link href={description.link} className="text-light">
                    {description.link}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="text-primary_light font-bold">
            © 2024 Advergame Technologies Pvt. Ltd. (&quot;ATPL&quot;). Gamezop ® &
            Quizzop ® are registered trademarks of ATPL
          </p>
        </div>
      </div>
      <div className="py-3 px-6 max-w-[1240px] mx-auto text-xs text-primary_light md:text-base md:py-6 xl:px-0 xl:py-8">
        Property ID: cfuucl7YgA
      </div>
    </footer>
  );
};
