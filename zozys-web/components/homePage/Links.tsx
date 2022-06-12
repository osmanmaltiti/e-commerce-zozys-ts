import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMedia } from "../../hooks/useMedia";

interface ILinks {
  state: "mobile" | "desktop";
  open: boolean;
}

export const Links: React.FC<ILinks> = ({ state, open }) => {
  const router = useRouter();
  const { page } = router.query;
  const lg = useMedia("(min-width: 1024px)");
  const currentPath = router.asPath;

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
      <span className="flex flex-col items-center lg:flex-row lg:place-self-end lg:gap-8">
        <li>
          <Link href="/cart">
            {lg ? (
              <Icon
                icon="clarity:shopping-cart-solid"
                className={`${
                  currentPath.includes("cart")
                    ? "text-primary-gray bg-white"
                    : "text-white"
                } text-3xl rounded-full  p-1 hover:cursor-pointer`}
              />
            ) : (
              <a
                className={`${
                  currentPath.includes("cart")
                    ? "text-primary-gray bg-white"
                    : "text-white"
                } px-6 lg:py-1 lg:rounded`}
              >
                Cart
              </a>
            )}
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Log In</a>
          </Link>
        </li>
      </span>
    </ul>
  );
};
