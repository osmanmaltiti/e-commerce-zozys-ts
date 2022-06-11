import { Icon } from "@iconify/react";
import React from "react";
import { useMedia } from "../../hooks/useMedia";
import { Links } from "./Links";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const lg = useMedia("(min-width: 1024px)");

  return (
    <nav className="w-full h-[3rem] relative bg-primary-gray flex flex-row justify-between lg:justify-around items-center py-2 px-4">
      <>
        <p className="text-3xl font-semibold lg:hidden">Zozys</p>
        <p className="text-2xl hidden lg:inline">Zozys Enterprise</p>
      </>
      <Icon
        onClick={() => setOpenMenu(!openMenu)}
        icon="dashicons:menu"
        className="text-3xl lg:hidden"
      />
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
