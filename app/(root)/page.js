"use client";

import instance from "@/utils/axiosConfig";
import { errorToast, successToast } from "@/utils/toastshow";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function Home() {

  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const refershToken = typeof window !== "undefined" ? localStorage.getItem("refershToken") : null;
        const res = await instance.post("/api/v1/auth/refershtoken",{refershToken});
        if (res.data.success) {
          successToast(res);
        }
      } catch (error) {
        errorToast(error);
        localStorage.removeItem("refershToken");
        localStorage.removeItem("user");
        router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/login`);
      }
    }
    checkLogin();
  }, [])

  return (
    <section className=" w-full h-screen">
      <p className="text-wrap p-2">hello </p>
    </section>
  );
}
