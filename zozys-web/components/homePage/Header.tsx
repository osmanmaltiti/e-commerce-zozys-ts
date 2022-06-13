/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [counter, setCounter] = useState(0);
  const images: Array<string> = ["/header2.jpg", "header1.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter < images.length - 1) {
        setCounter((prev) => prev + 1);
      } else {
        setCounter(0);
      }
    }, 10000);

    return () => clearInterval(timer);
  });

  const next = () => {
    if (counter < images.length - 1) setCounter((prev) => prev + 1);
    else setCounter(0);
  };

  const prev = () => {
    if (counter > 0) setCounter((prev) => prev - 1);
    else setCounter(images.length - 1);
  };

  return (
    <div className="w-full h-[381px] 2xl:h-[500px] flex-shrink-0 relative">
      <button
        className="btn absolute left-1 top-[45%] w-fit aspect-square text-4xl z-10 rounded-full text-[white] opacity-25 hover:opacity-100"
        onClick={prev}
      >
        <Icon icon="dashicons:arrow-left-alt2" />
      </button>
      <button
        className="btn absolute right-1 top-[45%] aspect-square text-4xl z-10 rounded-full text-[white] opacity-25 hover:opacity-100"
        onClick={next}
      >
        <Icon icon="dashicons:arrow-right-alt2" />
      </button>
      {images.map((image, index) =>
        index == counter ? (
          <SliderImage key={index} images={image} state={"active"} />
        ) : (
          <SliderImage key={index} images={image} state={"inactive"} />
        )
      )}
      <div className="absolute top-0 w-full h-full bg-[#00000049]"></div>
    </div>
  );
};

interface ISliderImage {
  state: string;
  images: string;
}

const SliderImage: React.FC<ISliderImage> = ({ state, images }) => {
  return (
    <div
      className={`${state} w-full h-full absolute flex flex-row overflow-hidden 
       `}
    >
      <img
        className="object-cover w-full h-full object-center"
        src={images}
        alt=""
      />
    </div>
  );
};
