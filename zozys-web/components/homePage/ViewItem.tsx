import { Icon } from "@iconify/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrement,
  increment,
  removeItem,
} from "../../redux/feature/cart/CartSlice";
import { RootState } from "../../redux/store/Store";

/* eslint-disable @next/next/no-img-element */
interface IViewItem {
  state: boolean;
  setOpen: () => void;
}

export const ViewItem: React.FC<IViewItem> = ({ state, setOpen }) => {
  const dispatch = useDispatch();

  const { id, name, image, type, dimension, description, stock, price } =
    useSelector((state: RootState) => state.home.viewItem);

  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const currentItem = cartItems.find((item) => item.id === id);

  const onAddOrRemoveFromCart = () => {
    if (currentItem) {
      dispatch(removeItem(id));
    } else {
      dispatch(
        addToCart({
          id,
          name,
          image,
          type,
          dimension,
          description,
          stock,
          price,
          quantity: 1,
          amount: price,
        })
      );
    }
  };

  const onIncrement = () => {
    dispatch(increment(id));
  };

  const onDecrement = () => {
    dispatch(decrement(id));
  };

  return (
    <div
      className={`${
        state ? "inline" : "hidden"
      } w-screen h-screen flex flex-col fixed z-20 bg-[#000000c7] font-poppins`}
    >
      <div className="h-full w-full lg:h-fit lg:w-fit lg:p-24 m-auto bg-white py-8 lg:rounded-md overflow-y-auto flex flex-col lg:flex-row gap-10 relative">
        <Icon
          onClick={setOpen}
          icon="eva:close-outline"
          className="top-1 left-1 absolute text-3xl text-primary-gray hover:cursor-pointer"
        />
        <div className="flex flex-col flex-shrink-0 items-center gap-4 mt-auto">
          <img
            alt=""
            src="/header2.jpg"
            className="aspect-square h-[14rem] mx-auto object-cover shadow-md"
          />
          <div className="w-[70%] flex flex-col items-center gap-2 mx-auto">
            <span className="flex flex-row items-center justify-center gap-6">
              <div className="w-8 h-8 rounded-full bg-gray-300 grid place-items-center">
                <Icon
                  onClick={onDecrement}
                  icon="akar-icons:minus"
                  className="text-2xl text-primary-gray hover:cursor-pointer"
                />
              </div>
              <h2 className="text-3xl font-semibold select-none">
                {currentItem ? currentItem.quantity : 0}
              </h2>
              <div className="w-8 h-8 rounded-full bg-gray-300 grid place-items-center">
                <Icon
                  onClick={onIncrement}
                  icon="akar-icons:plus"
                  className="text-2xl text-primary-gray hover:cursor-pointer"
                />
              </div>
            </span>
            <p className="select-none">
              Amount: GHS{" "}
              <strong>
                {currentItem ? currentItem.amount.toLocaleString() : 0}
              </strong>
            </p>
            <div className="w-[6rem] h-[.4rem] bg-gray-500 rounded-full"></div>
            <button
              onClick={onAddOrRemoveFromCart}
              className={`${
                currentItem ? "bg-red-600" : "bg-green-500 animate-bounce"
              } px-6 mt-6 text-lg text-white p-1 whitespace-nowrap`}
            >
              {currentItem ? <p>REMOVE FROM CART</p> : <p>ADD TO CART</p>}
            </button>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 gap-2 items-start px-3 mb-auto">
          <h1 className="text-2xl font-semibold">{name?.toUpperCase()}</h1>
          <h2 className="text-xl mt-2 font-semibold capitalize">
            TYPE: {type}
          </h2>
          <h2 className="text-xl font-semibold">
            PRICE: GHS{price?.toLocaleString()}
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
