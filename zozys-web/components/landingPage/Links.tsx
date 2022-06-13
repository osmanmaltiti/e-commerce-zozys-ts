import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface ILinks {
  state: "mobile" | "desktop";
  open: boolean;
}

export const Links: React.FC<ILinks> = ({ state, open }) => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

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
            } flex flex-col absolute top-[3rem] w-full left-0 items-center gap-2 bg-inherit z-20 select-none`
          : "flex flex-row gap-8 select-none"
      }`}
    >
      <li>
        <Link href="#header">
          <a>HOME</a>
        </Link>
      </li>
      <li>
        <Link href="#services">
          <a>SERVICES</a>
        </Link>
      </li>
      <li>
        <Link href="#inventory">
          <a>SHOP</a>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <a>CONTACT</a>
        </Link>
      </li>
      <li>
        <button onClick={onLogInOrOut}>
          {loggedIn ? <p className="text-red-400">LOG OUT</p> : <p>LOG IN</p>}
        </button>
      </li>
    </ul>
  );
};
