import { FiMoreVertical } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";

const SidebarHeader = () => {
  return (
    <section className="flex justify-between items-center border-b-2 border-secoundry py-2 pb-4">
        <RxAvatar size={30} />
        <FiMoreVertical size={20}/>
    </section>
  )
}

export default SidebarHeader
