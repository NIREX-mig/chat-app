"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  
  const pathname = usePathname();
  const router = useRouter();

  useEffect(()=>{
    // let isLogedin = localStorage.getItem("refershToken");
    // if(!isLogedin) {
    //   router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/login`);
    // }
  },[router])

  return (
    <section className={`w-full h-screen flex flex-col justify-center items-center ${pathname === "/" && "hidden md:flex"}`}>
      <p className="text-4xl">No Chats Found?</p>
      <p className="text-lg">please select a chat</p>
    </section>
  );
}
