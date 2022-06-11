import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import { CategorySlide } from "../components/homePage/CategorySlide";
import { Footer } from "../components/homePage/Footer";
import { Header } from "../components/homePage/Header";
import { Navbar } from "../components/homePage/Navbar";
import { FilterOrder, Select } from "../components/homePage/Select";
import { ViewItem } from "../components/homePage/ViewItem";
import { RootState } from "../redux/store/Store";

const Home = () => {
  const [viewItem, setViewItem] = React.useState<boolean>(false);
  const items = useSelector((state: RootState) => state.home.items);

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
                <Select key={index} name={item.name} options={item.options} />
              ))}
            </span>
          </nav>
          <div className="flex flex-col w-full mt-10 gap-20">
            {items.map((item, index) => (
              <CategorySlide
                key={index}
                items={item.items}
                setOpen={() => setViewItem(true)}
              />
            ))}
          </div>
        </section>
        <ViewItem state={viewItem} setOpen={() => setViewItem(false)} />
        <Footer />
      </main>
    </>
  );
};

export default Home;
