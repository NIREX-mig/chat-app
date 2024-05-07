"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "@/redux/features/appSlice";
import socket from "@/socket";

const Chat = ({ chat }) => {

  const router = useRouter();
  const dispatch = useDispatch();

  const handleOnClick = () => {
    router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/chat`)
    dispatch(setSelectedUser(chat))
    localStorage.setItem("selectedUser",JSON.stringify(chat));
    const username = chat.username;
    socket.connect();
    socket.auth = { username };
    const chatId= chat._id;
    socket.emit("join_chat",chatId);
    
  }

  return (
    <section className=" w-full flex items-center justify-between hover:bg-secoundry " onClick={handleOnClick}>
      <div className="flex items-center gap-5 truncate my-1 p-2 ">
        <Image src={chat.participants.avatar} alt="profile_pic" width={30} height={30} className="rounded-full" />
        <h3 className="cursor-default">
          {chat.participants.username}
        </h3>
      </div>
      <div>
        <p className="cursor-default bg-green-400/15 text-sm text-green-500 px-2 rounded-full mr-5">1</p>
      </div>
    </section>
  )
}

export default Chat
