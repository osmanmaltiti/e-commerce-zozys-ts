import Link from "next/link";

interface ILinks {
  state: "mobile" | "desktop";
  open: boolean;
}

export const Links: React.FC<ILinks> = ({ state, open }) => {
  return (
    <ul
      className={`${
        state === "mobile"
          ? `${
              open ? "flex" : "hidden"
            } flex flex-col absolute top-[3rem] w-full left-0 items-center gap-2 bg-primary-gray z-20 select-none`
          : "flex flex-row gap-4 select-none"
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
        <Link href="#contact">
          <a>CONTACT</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a>LOGOUT</a>
        </Link>
      </li>
    </ul>
  );
};
