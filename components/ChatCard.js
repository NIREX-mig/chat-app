'use client';


const ChatCard = ({msg, i, SelectedUser, }) => {
  return (
    <article key={i} className={`my-1 m:max-w-[40%] max-w-[40%] px-2 text-wrap ${msg.sender._id == SelectedUser?.participants?._id ? "float-left bg-green-300 text-black rounded-e-xl rounded-tl-xl" : "float-right bg-blue-300 text-black rounded-s-xl rounded-tr-xl"} clear-both flex flex-col items-end`}>
      <p className="text-wrap p-2">{msg.message}</p>
      <p className="text-xs p-1">{moment(msg.createdAt).fromNow()}</p>
    </article>
  )
}

export default ChatCard
