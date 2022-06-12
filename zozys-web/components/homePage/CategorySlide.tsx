import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setViewItem } from "../../redux/feature/home/HomeSlice";
import { IViewItem } from "../../redux/feature/home/type";

/* eslint-disable @next/next/no-img-element */
interface ICategorySlide {
  setOpen: () => void;
  items: Array<IViewItem>;
  filter: string;
}

export const CategorySlide: React.FC<ICategorySlide> = ({
  setOpen,
  items,
  filter,
}) => {
  const dispatch = useDispatch();

  const onView = (item: IViewItem) => {
    dispatch(
      setViewItem({
        ...item,
        image: "/header2.jpg",
        description:
          "Sunt ut aliqua ea elit veniam labore nulla. Officia cupidatat sit ipsum proident eiusmod. Excepteur in magna sunt incididunt ad irure dolore.",
      })
    );
    setOpen();
  };
  return (
    <div className="w-full h-[12rem] lg:h-[16rem] flex border-y border-l lg:border-r border-primary-gray relative pl-4">
      <h1 className="absolute bg-primary-gray text-white px-8 py-2 -top-10 left-6 capitalize">
        {filter}
      </h1>
      <div className="h-full w-full flex flex-row items-center gap-4 overflow-x-auto">
        {items.map((item, index) => (
          <button
            onClick={() => onView(item)}
            key={index}
            className="flex flex-col h-[85%] aspect-square flex-shrink-0 relative group overflow-hidden"
          >
            <img
              alt=""
              src="/header2.jpg"
              className="w-full h-full object-cover group-hover:scale-[1.07] duration-[300ms]"
            />
            <p className="bottom-4 text-black px-6 group-hover:bg-white transition-colors left-[50%] -translate-x-[50%] text-xl bg-[#ffffff8d] absolute z-10 whitespace-nowrap">
              {item.name}
            </p>
            <div className="w-full h-full absolute top-0 left-0 bg-[#0000003a]"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export const CategorySlideSkeleton = () => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <div className="w-full h-[12rem] lg:h-[16rem] flex border-y border-l lg:border-r border-primary-gray relative pl-4">
      <h1 className="absolute bg-primary-gray text-white px-8 py-2 -top-10 left-6 capitalize">
        {page}
      </h1>
      <div className="h-full w-full flex flex-row items-center gap-4 overflow-x-auto">
        <button className="flex flex-col h-[85%] aspect-square flex-shrink-0 relative bg-white opacity-[20%] animate-pulse delay-[1000ms]">
          <p className="bottom-4 text-black px-6 group-hover:bg-white transition-colors left-[50%] -translate-x-[50%] text-xl bg-[#ffffff8d] absolute z-10">
            Loading...
          </p>
          <div className="w-full h-full absolute top-0 left-0 bg-[#0000003a]"></div>
        </button>
      </div>
    </div>
  );
};
