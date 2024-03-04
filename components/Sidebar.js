import AddChat from "./AddChat"
import Chats from "./Chats"
import Search from "./Search"
import SidebarHeader from "./SidebarHeader"


const Sidebar = () => {
  return (
    <sectin>
      <SidebarHeader/>
      <Search/>
      <AddChat/>
      <Chats/>
    </sectin>
  )
}

export default Sidebar
