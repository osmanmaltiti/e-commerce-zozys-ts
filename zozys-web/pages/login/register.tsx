/* eslint-disable react/no-unescaped-entities */
import { useFormik } from "formik";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import { createUser, INewUser } from "../../api/login/register";

const Register: NextPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<INewUser | null>(null);
  const [obscure, setObscure] = useState<boolean>(true);
  const passwordType = obscure ? "password" : "text";

  const onHide = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setObscure(!obscure);
  };

  const { data, mutate } = useSWR(["/api/user/register", user], createUser, {
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
    shouldRetryOnError: false,
  });

  if (typeof data !== "undefined") {
    const { name, userdata } = data;
    if (name === "Success") {
      const { userInfo, token } = userdata;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("userdata", JSON.stringify(userInfo));
      router.push("/home?page=wood");
    } else console.log(data);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      number: "",
      location: "",
    },
    onSubmit: (values) => {
      setUser(values);
      mutate();
    },
  });

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
        <section className="flex flex-col items-center w-full lg:w-[50%] lg:self-end h-full justify-center gap-12 backdrop-blur-sm bg-[#ffffffaf]">
          <h1 className="text-3xl font-semibold">ZOZYS</h1>
          <form
            className="flex flex-col w-[90%] lg:w-[60%] gap-y-6 items-center"
            onSubmit={formik.handleSubmit}
          >
            <label htmlFor="name" className="w-full">
              <input
                id="name"
                type="text"
                className="border-b-2 border-gray-500 lg:text-lg w-full bg-inherit p-2 focus:outline-none focus:border-black"
                placeholder="Full Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
            </label>
            <label htmlFor="email" className="w-full">
              <input
                id="email"
                type="email"
                className="border-b-2 border-gray-500 lg:text-lg w-full bg-inherit p-2 focus:outline-none focus:border-black"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
            </label>
            <label htmlFor="number" className="w-full">
              <input
                placeholder="Phone Number"
                id="number"
                type="tel"
                className="border-b-2 border-gray-500 lg:text-lg w-full bg-inherit p-2 focus:outline-none focus:border-black"
                value={formik.values.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
            </label>
            <label htmlFor="location" className="w-full">
              <input
                placeholder="Location"
                id="location"
                type="text"
                className="border-b-2 border-gray-500 lg:text-lg w-full bg-inherit p-2 focus:outline-none focus:border-black"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            <label htmlFor="password" className="w-full flex flex-row relative">
              <input
                id="password"
                type={passwordType}
                className="border-b-2 border-gray-500 lg:text-lg w-full bg-inherit p-2 focus:outline-none focus:border-black"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                minLength={8}
                required
              />
              <button
                onClick={onHide}
                className="absolute right-0 top-1/2 -translate-y-1/2"
              >
                hide
              </button>
            </label>
            <button
              type="submit"
              className="w-fit bg-black text-white px-8 py-1"
            >
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
