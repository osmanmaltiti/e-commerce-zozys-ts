import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <div
      id="footer"
      className="w-full bg-primary-gray text-white mt-12 flex flex-row justify-between p-2 items-center"
    >
      <p className="text-base">@ 2022, Zozys</p>
      <span className="flex flex-row gap-2">
        <Icon icon="akar-icons:whatsapp-fill" className="text-xl" />
        <Icon icon="el:facebook" className="text-xl" />
        <Icon icon="akar-icons:twitter-fill" className="text-xl" />
      </span>
    </div>
  );
};
