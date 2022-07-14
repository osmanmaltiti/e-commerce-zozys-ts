/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import useSWR from "swr";
import { getWood } from "../../api/homepage/wood";
import {
  CategorySlide,
  CategorySlideSkeleton,
} from "../../components/homePage/CategorySlide";
import { Footer } from "../../components/homePage/Footer";
import { Header } from "../../components/homePage/Header";
import { Navbar } from "../../components/homePage/Navbar";
import { FilterOrder, Select } from "../../components/homePage/Select";
import { ViewItem } from "../../components/homePage/ViewItem";
import { IItems } from "../../redux/feature/home/type";

const Home = () => {
  const router = useRouter();
  const { page } = router.query;

  const [viewItem, setViewItem] = useState<boolean>(false);
  const [filterBy, setFilterBy] = useState<string>("type");
  const [items, setItems] = useState<IItems[]>([]);

  const { data, error } = useSWR([`/api/${page}`, filterBy], getWood);

  useMemo(() => {
    setItems(data?.items as Array<IItems>);
  }, [error, data]);

  return (
    <>
      <Head>
        <title>Zozys | Home</title>
      </Head>
      <main className="w-screen h-screen flex flex-col font-poppins ">
        <Navbar />
        <section className="w-full h-[calc(100vh-3.3rem)] flex flex-col items-center flex-grow gap-4 overflow-y-auto lg:scrollbar-thin scrollbar-thumb-primary-gray">
          <Header />
          <nav className="flex flex-row justify-between w-[95%]">
            <span className="text-2xl flex-col lg:flex hidden">
              {page === "wood"
                ? "EXPLORE OUR WOOD CATALOGUE"
                : "EXPLORE OUR DOOR CATALOGUE"}
              <div className="w-[14rem] h-[.5rem] bg-gray-400 rounded-full"></div>
            </span>
            <span className="flex flex-row gap-2">
              {FilterOrder.map((item, index) => (
                <Select
                  key={index}
                  name={item.name}
                  options={item.options}
                  onChanged={(event) =>
                    setFilterBy(event.target.value.toLowerCase())
                  }
                />
              ))}
            </span>
          </nav>
          <div className="flex flex-col mt-16 gap-20 w-[95%] ml-auto lg:mx-auto">
            {items ? (
              items.map((item, index) => (
                <CategorySlide
                  key={index}
                  filter={item.filter}
                  items={item.data}
                  setOpen={() => setViewItem(true)}
                />
              ))
            ) : (
              <CategorySlideSkeleton />
            )}
          </div>
          <Footer />
        </section>
        <ViewItem state={viewItem} setOpen={() => setViewItem(false)} />
      </main>
    </>
  );
};

export default Home;
