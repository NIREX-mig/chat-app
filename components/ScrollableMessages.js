import ScrollableFeed from "react-scrollable-feed"

const ScrollableMessages = ({ allMessages }) => {
  return (
    <ScrollableFeed className=" bg-green-500">
        {allMessages.map((msg, i) => {
          return <articl key={i} className="bg-secoundry my-1 md:w-[30%] w-[40%] px-2 rounded-lg text-wrap float-right clear-both ">
            <p className="text-wrap p-2">{msg.message}</p>
          </articl>
        })}
    </ScrollableFeed>
  )
}

export default ScrollableMessages
