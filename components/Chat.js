"use client";
import { useRouter } from "next/navigation";
import { RxAvatar } from "react-icons/rx"

const Chat = ({ user }) => {

  const router = useRouter();

  const handleOnClick = () => {
    router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/chat/${user._id}`)
  }
  return (
    <section className=" w-full flex items-center justify-around hover:bg-secoundry " onClick={handleOnClick}>
      <div className="flex items-center gap-5 truncate my-1 p-2 ">
        <RxAvatar size={40} />
        <h3 className="cursor-default">
          {user?.contect}
        </h3>
      </div>
      <div>
        <p className="cursor-default bg-green-400/15 text-sm text-green-500 px-2 rounded-full">1</p>
      </div>
    </section>
  )
}

export default Chat
