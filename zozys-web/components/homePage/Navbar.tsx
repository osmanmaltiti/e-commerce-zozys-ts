/* eslint-disable react/jsx-no-undef */
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import { useMedia } from "../../hooks/useMedia";
import { Links } from "./Links";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const lg = useMedia("(min-width: 1024px)");

  return (
    <nav className="w-full h-[3.3rem] px-2 bg-primary-gray flex flex-row lg:grid grid-cols-3 items-center text-white sticky top-0 justify-between z-20 flex-grow-0">
      <Link href="/">
        <a className="text-xl lg:flex-grow">ZOZYS ENTERPRISE</a>
      </Link>
      {!lg && (
        <Icon
          onClick={() => setOpenMenu(!openMenu)}
          icon="dashicons:menu"
          className="text-3xl lg:hidden"
        />
      )}
      <>
        {lg ? (
          <Links state="desktop" open={openMenu} />
        ) : (
          <Links state="mobile" open={openMenu} />
        )}
      </>
    </nav>
  );
};
