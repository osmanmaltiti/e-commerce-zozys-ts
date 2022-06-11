/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Login: NextPage = () => {
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
            <label htmlFor="email" className="w-full">
              <input
                className="border-b border-black w-full bg-inherit"
                placeholder="Email"
              />
            </label>
            <label htmlFor="email" className="w-full">
              <input
                className="border-b border-black w-full bg-inherit"
                placeholder="Password"
              />
            </label>
            <button className="w-fit bg-black text-white px-8 py-1">
              Sign In
            </button>
            <Link href="/login/register">
              <a className="text-center">
                Don't have an account? Register here
              </a>
            </Link>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
