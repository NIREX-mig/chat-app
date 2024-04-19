"use client";

import { useEffect } from "react";

// import { setSocket } from "@/redux/features/appSlice";
// import { useEffect } from "react";
// import { io } from "socket.io-client";
// import { useDispatch } from "react-redux";


export default function Home() {

  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   const socketConnection = io("http://localhost:8000", { transports: ['websocket'], autoConnect : false });

  //   dispatch(setSocket(socketConnection));

  //   return () =>{
  //     socketConnection.disconnect();
  //   }
  // }, [dispatch, setSocket])

  // useEffect(() => {
  //   const isAuthenticated =
  //     typeof window !== "undefined" ? localStorage.getItem("refershToken") : null;
  //     if (!isAuthenticated) {
  //       router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/login`);
  //     }
  // }, [])

  return (
    <section className=" w-full h-screen">
      <p className="text-wrap p-2">hello </p>
    </section>
  );
}
