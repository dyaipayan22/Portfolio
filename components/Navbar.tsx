'use client';

import { MENU_ITEMS, SOCIAL_ICONS } from '@/constants';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full h-24 bg-red-200 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="hidden md:w-1/3 md:flex items-center gap-4">
        {MENU_ITEMS?.map((menu) => (
          <Link href={menu.url} key={menu.url}>
            <span>{menu.label}</span>
          </Link>
        ))}
      </div>

      <div className="md:w-1/3 md:flex md:justify-center">Logo</div>

      <div className="hidden md:w-1/3 md:flex items-center gap-4 justify-end">
        {SOCIAL_ICONS?.map((icon) => (
          <Link href={icon.url} key={icon.url}>
            <span>{icon.image}</span>
          </Link>
        ))}
      </div>

      <HamburgerMenuIcon className="md:hidden" onClick={toggleOpen} />

      {/**RESPONSIVE MENU */}
      {open && (
        <div
          className={
            'absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col'
          }
        >
          <div className="flex flex-col justify-center gap-4">
            {MENU_ITEMS?.map((menu) => (
              <Link href={menu.url} key={menu.url}>
                <span>{menu.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            {SOCIAL_ICONS?.map((icon) => (
              <Link
                href={icon.url}
                key={icon.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>{icon.image}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
