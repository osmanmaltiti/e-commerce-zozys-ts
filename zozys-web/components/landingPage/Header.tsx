/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header id="header" className="w-full h-full relative">
      <Navbar />
      <div className="absolute w-full h-full bg-[#00000064] z-10"></div>
      <Image alt="" src="/landing1.JPG" layout="fill" objectFit="cover" />
      <div className="w-[35ch] lg:w-[50ch] text-white absolute top-[50%] left-[50%] -translate-x-[50%] p-2 flex flex-col items-center z-10">
        <h3 className="text-3xl lg:text-5xl font-semibold">WELCOME</h3>
        <h4 className="text-2xl lg:text-4xl mb-2 font-medium">
          TO ZOZYS ENTERPRISE
        </h4>
        <p className="lg:text-lg text-center">
          Amet deserunt aliquip laborum qui adipisicing ullamco irure aliquip
          occaecat. Velit mollit nisi laboris aute sunt magna reprehenderit eu
          aliquip. In ut excepteur eiusmod voluptate est excepteur occaecat duis
          dolore consectetur excepteur aliquip
        </p>
      </div>
    </header>
  );
};
