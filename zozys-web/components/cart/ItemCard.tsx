/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";

interface IItemCard {
  image: string;
  name: string;
  type: string;
  price: number;
  dimension: string;
  quantity: number;
  amount: number;
  removeItem?: () => void;
}

export const ItemCard: React.FC<IItemCard> = ({
  image,
  name,
  type,
  price,
  dimension,
  quantity,
  amount,
  removeItem,
}) => {
  return (
    <div className="w-[98%] flex flex-row justify-between items-center text-sm border-b border-gray-300 py-1 gap-2">
      <img
        alt=""
        src={image}
        className="w-[3rem] lg:w-[4rem] aspect-square object-cover"
      />
      <span className="flex flex-col self-start justify-between h-full lg:text-lg flex-grow">
        <p className="font-medium">{name}</p>
        <p>{type}</p>
      </span>
      <span className="flex flex-row flex-grow justify-between items-center h-full">
        <span className="flex flex-col self-start justify-between h-full lg:text-lg">
          <p>GHS {price}</p>
          <p>{dimension}</p>
        </span>
        <span className="flex flex-col self-start justify-between items-center h-full lg:text-lg">
          <span className="flex flex-row justify-center items-center gap-2 ">
            <Icon
              icon="akar-icons:minus"
              className="text-lg lg:text-xl text-primary-gray"
            />
            <h2 className="text-lg lg:text-xl font-semibold">{quantity}</h2>
            <Icon
              icon="akar-icons:plus"
              className="text-lg lg:text-xl text-primary-gray"
            />
          </span>
          <p>GHS {amount}</p>
        </span>
        <Icon
          onClick={removeItem}
          icon="eva:close-outline"
          className="text-xl text-primary-gray hover:cursor-pointer"
        />
      </span>
    </div>
  );
};
