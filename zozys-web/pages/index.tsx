/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "../components/landingPage/Header";
import { Navbar } from "../components/landingPage/Navbar";

const LandingPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Zozys Enterprise</title>
      </Head>
      <div className="w-screen h-screen flex flex-col font-poppins text-white">
        <Navbar />
        <section className="w-full h-[calc(100vh-3rem)] overflow-y-auto">
          <Header />
          <main className="w-full flex flex-col">
            <div
              id="services"
              className="w-full bg-[#5d5d5de4] pt-3 pb-[10rem] lg:py-[3rem] flex flex-col lg:flex-row items-center lg:justify-around relative"
            >
              <span className="flex flex-col items-center lg:self-start lg:items-start">
                <h3 className="text-2xl font-semibold text-center">
                  WE OFFER A VARIETY OF SERVICES
                </h3>
                <div className="w-[14rem] h-[.5rem] bg-white rounded-full"></div>
                <ul className="flex flex-col items-center lg:items-start mt-4">
                  <li className="text-xl font-poppins">Wood Processing</li>
                  <li className="text-xl">Wood Sales</li>
                  <li className="text-xl">Doors</li>
                  <li className="text-xl">Room Furniture</li>
                  <li className="text-xl">Kitchen Furniture</li>
                  <li className="text-xl">Wood Related Contracts</li>
                </ul>
              </span>
              <div className="w-[90%] lg:w-[50%] h-[20rem] lg:h-[25rem] bg-white absolute lg:relative -bottom-[11rem]  left-[50%] -translate-x-[50%] lg:translate-x-0 lg:left-0 lg:bottom-0 shadow-md">
                <img
                  src="/header1.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div
              id="inventory"
              className="w-full mt-[13rem] lg:my-[3rem] items-center flex flex-col"
            >
              <h3 className="text-3xl text-primary-gray font-medium text-center">
                EXPLORE OUR INVENTORY
              </h3>
              <div className="w-[14rem] h-[.5rem] bg-[#5d5d5de4]  rounded-full"></div>
              <span className="flex flex-col lg:flex-row gap-10 mt-8">
                <button
                  onClick={() =>
                    router.push({
                      pathname: "/home",
                      query: { page: "wood" },
                    })
                  }
                  className="w-[20rem] h-[10rem] lg:w-[25rem] lg:h-[20rem]  border-none overflow-hidden gap-2 bg-black flex flex-col items-center relative justify-center group"
                >
                  <p className="z-10 text-3xl text-white">BUY WOOD</p>
                  <div className="w-[4rem] group-hover:w-[8rem] transition-all duration-500 h-[.4rem] bg-white  rounded-full z-10"></div>
                  <img
                    src="/header2.jpg"
                    alt=""
                    className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-[1.05] duration-500 transition-all"
                  />
                  <div className="absolute w-full h-full bg-[#00000062]"></div>
                </button>
                <button
                  onClick={() =>
                    router.push({
                      pathname: "/home",
                      query: { page: "door" },
                    })
                  }
                  className="w-[20rem] h-[10rem] lg:w-[25rem] lg:h-[20rem] border-none overflow-hidden gap-2 bg-black flex flex-col items-center relative justify-center group"
                >
                  <p className="z-10 text-3xl text-white">BUY DOOR</p>
                  <div className="w-[4rem] group-hover:w-[8rem] transition-all h-[.4rem] bg-white  duration-500 rounded-full z-10"></div>
                  <img
                    src="/door1.jpg"
                    alt=""
                    className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-[1.05] duration-500 transition-all"
                  />
                  <div className="absolute w-full h-full bg-[#00000062]"></div>
                </button>
              </span>
            </div>
            <div
              id="contact"
              className="w-full bg-[#5d5d5de4] flex flex-col lg:flex-row lg:justify-around items-center mt-8 py-4 lg:py-8"
            >
              <span className="flex flex-col items-center flex-shrink-0">
                <h3 className="text-3xl font-medium">MEET THE CEO</h3>
                <div className="w-[8rem] h-[.4rem] bg-white rounded-full"></div>
                <div className="w-[15rem] h-[10rem] aspect-square bg-white mt-6">
                  <img
                    alt=""
                    src="/profile1.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="w-[15rem] text-center mt-5">
                  Enim reprehenderit velit sint est. Nisi aliqua est mollit
                  mollit ullamco proident officia cupidatat.
                </p>
                <p className="text-2xl font-medium mt-2">Mr. Superman</p>
                <ul className="hidden lg:flex flex-col gap-2 mt-6">
                  <li className="flex flex-row">
                    <p>zozysenterprise@gmail.com</p>
                  </li>
                  <li className="flex flex-row">
                    <p>+233 00 000 0000</p>
                  </li>
                  <li className="flex flex-row">
                    <p>Locate Us</p>
                  </li>
                </ul>
              </span>
              <div className="flex flex-col w-[95%] lg:w-[50%] bg-white items-center mt-4 lg:mt-0 py-4 gap-y-4">
                <label className="w-[95%] border-b border-black mx-auto bg-[#5d5d5de4]  rounded-t-[4px] overflow-hidden">
                  <input
                    type="text"
                    className="h-[3rem] w-full bg-inherit px-3"
                    placeholder="Full Name"
                  />
                </label>
                <label className="w-[95%] border-b border-black mx-auto bg-[#5d5d5de4]  rounded-t-[4px] overflow-hidden">
                  <input
                    type="text"
                    className="h-[3rem] w-full bg-inherit px-3"
                    placeholder="Email Address"
                  />
                </label>
                <label className="w-[95%] border-b border-black mx-auto bg-[#5d5d5de4]  rounded-t-[4px] overflow-hidden">
                  <textarea
                    className="h-[12rem] w-full bg-inherit px-3 resize-none"
                    placeholder="Message"
                  />
                </label>
                <button className="w-[40%] rounded-[6px] self-end mr-3 lg:my-4 py-2 text-white bg-sky-500">
                  SEND
                </button>
              </div>
            </div>
            <div
              id="footer"
              className="w-full bg-[#5d5d5de4]  lg:bg-white text-primary-gray flex flex-row justify-between p-2 items-center"
            >
              <p className="text-lg">&copy; ZOZYS ENTERPRISE 2022</p>
              <span className="flex flex-row gap-4">
                <Icon icon="akar-icons:whatsapp-fill" className="text-xl" />
                <Icon icon="el:facebook" className="text-xl" />
                <Icon icon="akar-icons:twitter-fill" className="text-xl" />
              </span>
            </div>
          </main>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
