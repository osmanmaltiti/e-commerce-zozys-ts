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
      <main className="w-screen h-screen flex flex-col font-poppins overflow-y-auto">
        <Navbar />
        <Header />
        <section className="w-full flex flex-col flex-grow pt-4 pl-2 lg:px-12 gap-4">
          <nav className="flex flex-row justify-between">
            <span></span>
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
          <div className="flex flex-col w-full mt-10 gap-20">
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
        </section>
        <ViewItem state={viewItem} setOpen={() => setViewItem(false)} />
        <Footer />
      </main>
    </>
  );
};

export default Home;
