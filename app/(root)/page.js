"use client";

import instance from "@/utils/axiosConfig";
import { errorToast, successToast } from "@/utils/toastshow";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function Home() {

  const router = useRouter();

  // useEffect(() => {
  //   checkAuthentication();
  // }, [router])

  // const checkAuthentication = async () => {
  //   try {
  //     let refershToken = localStorage.getItem("refershToken");
  //     const res = await instance.post("/api/v1/auth/refershtoken", { refershToken });
  //   } catch (error) {
  //     errorToast(error);
  //     setTimeout(() => {
  //       router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/login`);
  //       // localStorage.removeItem("refershToken");
  //       // localStorage.removeItem("user");
  //     }, 800);
  //   }
  // }

  return (
    <section className=" w-full h-screen flex flex-col justify-center items-center">
      <p className="text-4xl">No Chats Found?</p>
      <p className="text-lg">please select a chat</p>
    </section>
  );
}
