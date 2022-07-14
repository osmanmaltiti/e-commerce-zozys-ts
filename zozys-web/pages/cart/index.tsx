/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ItemCard } from "../../components/cart/ItemCard";
import { Navbar } from "../../components/homePage/Navbar";
import { clearCart } from "../../redux/feature/cart/CartSlice";
import { RootState } from "../../redux/store/Store";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const subtotal = cartItems.reduce((acc, curr) => acc + curr.amount, 0);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Zozys | Cart</title>
      </Head>
      <main className="w-screen h-screen flex flex-col font-poppins">
        <Navbar />
        <div className="w-full h-[calc(100vh-3.3rem)] flex-shrink flex flex-col lg:flex-row">
          <div className="h-[70%] lg:h-full w-full lg:w-[60%] overflow-y-auto lg:scrollbar-thin scrollbar-thumb-primary-gray flex flex-col items-center">
            <h1 className="text-xl font-semibold w-full sticky top-0 text-center bg-white">
              CART
            </h1>
            <ul
              style={{ gridTemplateColumns: "10% 25% 20% 15% 15% 15%" }}
              className="w-[98%] bg-white grid text-xs md:text-sm lg:text-base sticky top-[28px] mb-2 shadow-sm "
            >
              <li></li>
              <li>Product</li>
              <li>Type</li>
              <li>Dim</li>
              <li>Price</li>
              <li>Amount</li>
            </ul>
            {cartItems.length > 0 ? (
              [...cartItems]
                .sort((a, b) =>
                  a.name > b.name ? 1 : b.name > a.name ? -1 : 0
                )
                .map((item, index) => (
                  <ItemCard
                    key={index}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    dimension={item.dimension}
                    quantity={item.quantity}
                    amount={item.amount}
                    type={item.type}
                    price={item.price}
                  />
                ))
            ) : (
              <div className="text-gray-500 m-auto grid place-items-center">
                <p>Nothing to display here</p>
                <button
                  className="text-black flex flex-row items-center gap-1"
                  onClick={() => router.back()}
                >
                  <Icon icon="bx:arrow-back" />
                  <p>shop now</p>
                </button>
              </div>
            )}
          </div>
          <div className="h-[30%] lg:h-full flex-shrink-0 w-full lg:border-t border-[#494949] lg:w-[40%] p-4 bg-primary-gray flex flex-col items-center ">
            <div className="w-full text-white border border-white p-2 rounded-md grid grid-cols-2">
              <p>Number of items</p>
              <p className="place-self-end">{cartItems.length}</p>
              <p>Subtotal</p>
              <p className="place-self-end">GHS {subtotal}</p>
            </div>
            <button
              className="text-white mt-4 hover:text-red-500 self-end"
              onClick={() => dispatch(clearCart())}
            >
              Clear
            </button>
            <button className="bg-white py-2 w-[80%] mt-auto">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
