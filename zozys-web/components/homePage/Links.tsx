import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useMedia } from "../../hooks/useMedia";
import { RootState } from "../../redux/store/Store";

interface ILinks {
  state: "mobile" | "desktop";
  open: boolean;
}

export const Links: React.FC<ILinks> = ({ state, open }) => {
  const router = useRouter();
  const currentPath = router.asPath;
  const lg = useMedia("(min-width: 1024px)");
  const { page } = router.query;
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const cartSize = useSelector((state: RootState) => state.cart.cart.length);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const onLogInOrOut = () => {
    if (loggedIn) {
      localStorage.removeItem("token");
      localStorage.removeItem("userdata");
      router.push("/login");
    } else {
      router.push("/login");
    }
  };

  return (
    <ul
      className={`${
        state === "mobile"
          ? `${
              open ? "flex" : "hidden"
            } flex flex-col absolute top-[3rem] p-2 w-full left-0 items-center bg-primary-gray opacity-[95%] z-20 select-none`
          : "grid grid-cols-2 col-span-2 gap-4 select-none justify-between flex-grow"
      }`}
    >
      <span className="flex flex-col lg:flex-row items-center place-self-center lg:gap-4">
        <li>
          <Link href="/home?page=wood">
            <a
              className={`${
                page === "wood" ? "text-primary-gray bg-white" : null
              } px-6 lg:py-1 lg:rounded`}
            >
              Wood
            </a>
          </Link>
        </li>
        <li>
          <Link href="/home?page=door">
            <a
              className={`${
                page === "door" ? "text-primary-gray bg-white" : null
              } px-6 lg:py-1 lg:rounded`}
            >
              Door
            </a>
          </Link>
        </li>
      </span>
      <span className="flex flex-col items-center lg:flex-row lg:place-self-end lg:gap-4">
        <li>
          <Link href="/cart">
            {lg ? (
              <span className="relative">
                <Icon
                  icon="clarity:shopping-cart-solid"
                  className={`${
                    currentPath.includes("cart")
                      ? "text-primary-gray bg-white"
                      : "text-white"
                  } text-3xl rounded p-1 hover:cursor-pointer`}
                />
                <p
                  className={`${
                    cartSize > 0 ? "inline" : "hidden"
                  } absolute w-5 h-5 -top-2 bg-green-500 text-center leading-5 rounded-full text-xs -right-2`}
                >
                  {cartSize}
                </p>
              </span>
            ) : (
              <a
                className={`${
                  currentPath.includes("cart")
                    ? "text-primary-gray bg-white"
                    : "text-white"
                } px-6 lg:py-1 lg:rounded relative`}
              >
                Cart
              </a>
            )}
          </Link>
        </li>
        <li>
          <button onClick={onLogInOrOut}>
            {loggedIn ? <p className="text-red-400">Log Out</p> : <p>Log In</p>}
          </button>
        </li>
      </span>
    </ul>
  );
};
