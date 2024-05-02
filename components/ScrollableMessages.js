import ScrollableFeed from "react-scrollable-feed"

const ScrollableMessages = ({ allMessages , selectedUser }) => {
  return (
    <ScrollableFeed className="p-3 ">
        {allMessages.map((msg, i) => {
          return <articl key={i} className={`my-1 m:max-w-[40%] max-w-[40%] px-2 rounded-lg text-wrap ${msg.sender._id == selectedUser?.participants._id ? "float-left bg-green-300 text-black" : "float-right bg-blue-300 text-black"} clear-both`}>
            <p className="text-wrap p-2">{msg.message}</p>
          </articl>
        })}
    </ScrollableFeed>
  )
}

export default ScrollableMessages
