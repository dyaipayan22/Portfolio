'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { MENU_ITEMS, SOCIAL_ICONS } from '@/constants';
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16">
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
            <Image src={icon.image} width={24} height={24} alt="Social Icons" />
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
                <Image
                  src={icon.image}
                  width={24}
                  height={24}
                  alt="Social Icons"
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
