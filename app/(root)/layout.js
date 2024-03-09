
import Sidebar from "@/components/Sidebar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }) {
    return (
        <section className="flex">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Sidebar />
            <main className="w-full">
                {children}
            </main>
        </section>
    );
}