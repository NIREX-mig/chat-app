"use client";
import { useRouter } from "next/navigation";
import { RxAvatar } from "react-icons/rx"

const Chat = ({ user }) => {

  const router = useRouter();

  const handleOnClick = () =>{
    router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/${user._id}`)
  }
  return (
    <section className=" w-full flex items-center gap-5 truncate my-1 hover:bg-secoundry p-2 " onClick={handleOnClick}>
      <RxAvatar size={40} />
      <h3>
        {user?.contect}
      </h3>
    </section>
  )
}

export default Chat
