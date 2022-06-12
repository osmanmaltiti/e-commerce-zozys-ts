/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  removeItem,
} from "../../redux/feature/cart/CartSlice";

interface IItemCard {
  id: string;
  image: string;
  name: string;
  type: string;
  price: number;
  dimension: string;
  quantity: number;
  amount: number;
}

export const ItemCard: React.FC<IItemCard> = ({
  id,
  image,
  name,
  type,
  price,
  dimension,
  quantity,
  amount,
}) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{ gridTemplateColumns: "10% 25% 20% 15% 15% 15%" }}
      className="w-[98%] grid justify-between items-center text-xs md:text-sm lg:text-base xl:text-lg mb-2 border-b border-gray-300 py-1 gap-y-1"
    >
      <img
        alt=""
        src={image}
        className="w-[2rem] lg:w-[4rem] aspect-square object-cover"
      />
      <p className="font-medium">{name}</p>
      <p>{type}</p>
      <p>{dimension}</p>
      <p>GHS {price}</p>
      <p>GHS {amount}</p>
      <p></p>
      <span className="flex flex-row col-span-4 bg-gradient-to-r to-[#5b5b5b] from-primary-gray text-white rounded justify-center items-center gap-x-4 lg:py-1 ">
        <button onClick={() => dispatch(decrement(id))}>
          <Icon
            icon="akar-icons:minus"
            className="text-lg lg:text-xl text-white hover:cursor-pointer"
          />
        </button>
        <h2 className="text-lg lg:text-xl font-semibold">{quantity}</h2>
        <button onClick={() => dispatch(increment(id))}>
          <Icon
            icon="akar-icons:plus"
            className="text-lg lg:text-xl text-white hover:cursor-pointer"
          />
        </button>
      </span>
      <Icon
        onClick={() => dispatch(removeItem(id))}
        icon="eva:close-outline"
        className="text-xl text-primary-gray place-self-center hover:cursor-pointer"
      />
    </div>
  );
};
