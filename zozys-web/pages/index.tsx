/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { NextPage } from "next";
import Head from "next/head";

const LandingPage: NextPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col font-poppins">
      <Head>
        <title>Zozys Enterprise</title>
      </Head>
      <nav className="w-full h-[3rem] bg-primary-gray flex flex-row justify-between items-center py-2 px-4">
        <p className="text-3xl font-semibold">Zozys</p>
        <Icon icon="dashicons:menu" className="text-3xl" />
      </nav>
      <section className="w-full h-[calc(100vh-3rem)] overflow-y-auto">
        <header className="w-full h-[15rem] bg-red-500 relative">
          <img src="" alt="" className="w-full h-full object-cover" />
          <div className="w-[90%] bg-white absolute -bottom-[8rem] border border-primary-gray left-[50%] -translate-x-[50%] p-2">
            <h3 className="text-3xl font-semibold">WELCOME</h3>
            <h4 className="text-2xl mb-2 font-medium">TO ZOZYS ENTERPRISE</h4>
            <p className="lg:text-lg">
              Amet deserunt aliquip laborum qui adipisicing ullamco irure
              aliquip occaecat. Velit mollit nisi laboris aute sunt magna
              reprehenderit eu aliquip. In ut excepteur eiusmod voluptate est
              excepteur occaecat duis dolore consectetur excepteur aliquip
            </p>
          </div>
        </header>
        <main className="w-full flex flex-col pt-[10rem]">
          <div
            id="services"
            className="w-full bg-primary-gray pt-3 pb-[10rem] flex flex-col items-center relative"
          >
            <h3 className="text-2xl font-semibold text-center">
              WE OFFER A VARIETY OF SERVICES
            </h3>
            <div className="w-[14rem] h-[.75rem] bg-white rounded-full"></div>
            <ul className="flex flex-col items-center mt-4">
              <li className="text-xl font-poppins">Wood Processing</li>
              <li className="text-xl">Wood Sales</li>
              <li className="text-xl">Doors</li>
              <li className="text-xl">Room Furniture</li>
              <li className="text-xl">Kitchen Furniture</li>
              <li className="text-xl">Wood Related Contracts</li>
            </ul>
            <div className="w-[90%] h-[20rem] bg-white absolute -bottom-[11rem] border border-primary-gray left-[50%] -translate-x-[50%] p-2"></div>
          </div>
          <div
            id="inventory"
            className="w-full mt-[13rem] items-center flex flex-col"
          >
            <h3 className="text-3xl font-medium text-center">
              EXPLORE OUR INVENTORY
            </h3>
            <div className="w-[14rem] h-[.75rem] bg-primary-gray rounded-full"></div>
            <span className="flex flex-col gap-3 mt-8">
              <button className="w-[20rem] h-[10rem] border-none overflow-hidden gap-2 bg-black flex flex-col items-center relative justify-center group">
                <p className="z-10 text-3xl text-white">BUY WOOD</p>
                <div className="w-[4rem] group-hover:w-[8rem] transition-all h-[.4rem] bg-primary-gray rounded-full"></div>
                <img
                  src=""
                  alt=""
                  className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-[1.05] transition-all"
                />
              </button>
              <button className="w-[20rem] h-[10rem] border-none overflow-hidden gap-2 bg-black flex flex-col items-center relative justify-center group">
                <p className="z-10 text-3xl text-white">BUY DOOR</p>
                <div className="w-[4rem] group-hover:w-[8rem] transition-all h-[.4rem] bg-primary-gray rounded-full"></div>
                <img
                  src=""
                  alt=""
                  className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-[1.05] transition-all"
                />
              </button>
            </span>
          </div>
          <div
            id="contact"
            className="w-full bg-primary-gray flex flex-col items-center mt-4 pt-4"
          >
            <h3 className="text-3xl font-medium">MEET THE CEO</h3>
            <div className="w-[8rem] h-[.4rem] bg-white rounded-full"></div>
            <div className="w-[15rem] h-[10rem] aspect-square bg-white mt-6"></div>
            <p className="w-[15rem] text-center mt-5">
              Enim reprehenderit velit sint est. Nisi aliqua est mollit mollit
              ullamco proident officia cupidatat.
            </p>
            <p className="text-2xl font-medium mt-2">Mr. Superman</p>
            <div className="flex flex-col w-[95%] bg-white items-center mt-4 py-4 gap-y-4">
              <label className="w-[95%] border-b border-black mx-auto bg-primary-gray rounded-t-[4px] overflow-hidden">
                <input
                  type="text"
                  className="h-[3rem] w-full bg-inherit px-3"
                  placeholder="Full Name"
                />
              </label>
              <label className="w-[95%] border-b border-black mx-auto bg-primary-gray rounded-t-[4px] overflow-hidden">
                <input
                  type="text"
                  className="h-[3rem] w-full bg-inherit px-3"
                  placeholder="Email Address"
                />
              </label>
              <label className="w-[95%] border-b border-black mx-auto bg-primary-gray rounded-t-[4px] overflow-hidden">
                <textarea
                  className="h-[12rem] w-full bg-inherit px-3 resize-none"
                  placeholder="Message"
                />
              </label>
            </div>
            <button className="w-[40%] rounded-[6px] self-end mr-3 my-4 py-2 text-white bg-sky-500">
              SEND
            </button>
          </div>
          <div
            id="footer"
            className="w-full mt-16 bg-primary-gray flex flex-row justify-between p-2 items-center"
          >
            <p className="text-lg">@ 2022, Zozys</p>
            <span className="flex flex-row gap-2">
              <Icon icon="akar-icons:whatsapp-fill" className="text-xl" />
              <Icon icon="el:facebook" className="text-xl" />
              <Icon icon="akar-icons:twitter-fill" className="text-xl" />
            </span>
          </div>
        </main>
      </section>
    </div>
  );
};

export default LandingPage;
