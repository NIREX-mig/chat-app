
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
    return (
        <div>
            <Sidebar />
            <main>
                {children}
            </main>
        </div>
    );
}