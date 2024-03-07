import { RxAvatar } from "react-icons/rx"

const Chat = ({ user }) => {
  return (
    <section className=" w-full flex items-center gap-5 truncate my-1 hover:bg-secoundry p-2 ">
      <RxAvatar size={40} />
      <p>
        {user.contect}
      </p>
    </section>
  )
}

export default Chat
