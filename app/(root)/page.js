"use client";

import instance from "@/utils/axiosConfig";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { errorToast } from "@/utils/toastshow";
import socket from "@/socket";


export default function Home() {

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    socket.auth = { user }
    socket.connect();
    checkAuth();
  }, [])

  const checkAuth = async () => {
    try {
      let refershToken = localStorage.getItem("refershToken");
      const { data } = await instance.post("/api/v1/auth/refershtoken", { refershToken })
      if (data.success) {
        localStorage.setItem("refershToken", data.data);
      }
    } catch (error) {
      router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/login`);
      errorToast(error);
    }
  }

  return (
    <section className={`w-full h-screen flex flex-col justify-center items-center ${pathname === "/" && "hidden md:flex"}`}>
      <p className="text-4xl">No Chats Found?</p>
      <p className="text-lg">please select a chat</p>
    </section>
  );
}
