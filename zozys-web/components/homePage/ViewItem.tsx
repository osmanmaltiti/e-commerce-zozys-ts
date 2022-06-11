import { Icon } from "@iconify/react";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/Store";

/* eslint-disable @next/next/no-img-element */
interface IViewItem {
  state: boolean;
  setOpen: () => void;
}

export const ViewItem: React.FC<IViewItem> = ({ state, setOpen }) => {
  const { name, image, type, dimension, description, stock, price } =
    useSelector((state: RootState) => state.home.viewItem);

  return (
    <div
      className={`${
        state ? "inline" : "hidden"
      } w-screen h-screen flex flex-col fixed z-20 bg-[#000000c7] font-poppins`}
    >
      <div className="h-full w-full lg:h-[90%] lg:w-[80%] 2xl:h-[70%] 2xl:w-[60%] m-auto aspect-square bg-white py-8 lg:rounded-md overflow-y-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 relative lg:place-items-center">
        <Icon
          onClick={setOpen}
          icon="eva:close-outline"
          className="top-1 left-1 absolute text-3xl text-primary-gray hover:cursor-pointer"
        />
        <div className="flex flex-col items-center gap-4">
          <img
            alt=""
            src={image}
            className="w-full h-[15rem] mx-auto object-cover shadow-md"
          />
          <div className="w-[70%] flex flex-col items-center gap-2 mx-auto">
            <span className="flex flex-row items-center justify-center gap-6">
              <div className="w-8 h-8 rounded-full bg-gray-300 grid place-items-center">
                <Icon
                  icon="akar-icons:minus"
                  className="text-2xl text-primary-gray"
                />
              </div>
              <h2 className="text-3xl font-semibold">5</h2>
              <div className="w-8 h-8 rounded-full bg-gray-300 grid place-items-center">
                <Icon
                  icon="akar-icons:plus"
                  className="text-2xl text-primary-gray"
                />
              </div>
            </span>
            <p>
              Amount: GHS <strong>{(150).toLocaleString()}</strong>
            </p>
            <div className="w-[6rem] h-[.4rem] bg-gray-500 rounded-full"></div>
            <button className="px-6 mt-6 text-lg bg-primary-gray text-white p-1">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start px-3">
          <h1 className="text-2xl font-semibold">{name.toUpperCase()}</h1>
          <h2 className="text-xl mt-2 font-semibold capitalize">
            TYPE: {type}
          </h2>
          <h2 className="text-xl font-semibold">
            PRICE: GHS{price.toLocaleString()}
          </h2>
          <h2 className="text-xl font-semibold">IN STOCK: {stock}</h2>
          <h2 className="text-xl font-semibold">DIMENSION: {dimension}</h2>
          <div className="w-[8rem] h-[.4rem] bg-gray-500 rounded-full"></div>
          <h3 className="mt-2 font-semibold">BRIEF DESCRIPTION</h3>
          <p className="lg:w-[45ch] flex-grow">{description}</p>
        </div>
      </div>
    </div>
  );
};
