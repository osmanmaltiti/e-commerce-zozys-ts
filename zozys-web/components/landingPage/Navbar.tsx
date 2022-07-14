import { Icon } from "@iconify/react";
import React from "react";
import { Links } from "./Links";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  return (
    <nav className="w-full h-[3rem] fixed top-0 flex flex-row justify-between lg:justify-around items-center py-2 px-4 text-white backdrop-blur-sm z-20 bg-[#00000088]">
      <>
        <p className="text-3xl font-semibold lg:hidden">Zozys</p>
        <p className="text-2xl hidden lg:inline">ZOZYS ENTERPRISE</p>
      </>
      <span className="lg:hidden ml-auto">
        <Icon
          onClick={() => setOpenMenu(!openMenu)}
          icon="dashicons:menu"
          className="text-3xl lg:hidden"
        />
      </span>
      <>
        <span className="hidden lg:inline">
          <Links state="desktop" open={openMenu} />
        </span>
        <span className="lg:hidden">
          <Links state="mobile" open={openMenu} />
        </span>
      </>
    </nav>
  );
};
