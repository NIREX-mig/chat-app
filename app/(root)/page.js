import ChatFoter from "@/components/ChatFoter";
import Header from "@/components/Header";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="h-screen">
      <Header/>
    <UserButton />
    <ChatFoter/>
  </div>
  );
}
