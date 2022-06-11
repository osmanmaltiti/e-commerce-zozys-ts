/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zozys | Login</title>
      </Head>
      <main
        style={{
          backgroundImage: "url('/header2.jpg')",
        }}
        className="w-screen h-screen flex flex-row font-poppins"
      >
        <div className="hidden lg:flex lg:w-[50%] h-full backdrop-blur-sm"></div>
        <section className="flex flex-col items-center w-full lg:w-[50%] lg:self-end h-full justify-center gap-12 backdrop-blur-sm bg-[#ffffff8a]">
          <h1 className="text-3xl font-medium">ZOZYS</h1>
          <form className="flex flex-col w-[90%] lg:w-[60%] gap-y-10 items-center">
            <label htmlFor="fullname" className="w-full">
              <input
                className="border-b border-black w-full bg-inherit"
                placeholder="Full Name"
              />
            </label>
            <label htmlFor="email" className="w-full">
              <input
                className="border-b border-black w-full bg-inherit"
                placeholder="Email"
              />
            </label>
            <label htmlFor="number" className="w-full">
              <input
                className="border-b border-black w-full bg-inherit"
                placeholder="Phone Number"
              />
            </label>
            <label htmlFor="location" className="w-full">
              <input
                className="border-b border-black w-full bg-inherit"
                placeholder="Location"
              />
            </label>
            <label htmlFor="password" className="w-full">
              <input
                className="border-b border-black w-full bg-inherit"
                placeholder="Password"
              />
            </label>
            <button className="w-fit bg-black text-white px-8 py-1">
              Register
            </button>
            <Link href="/login">
              <a className="text-center">Already registered? Sign in here</a>
            </Link>
          </form>
        </section>
      </main>
    </>
  );
};

export default Register;
