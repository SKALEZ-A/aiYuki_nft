import Image from "next/image";
import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#041E00]">
      <Navbar />
      <div className="container mt-32 px-8 py-6 mx-auto">
        <Dashboard />
      </div>
      <Footer />
    </main>
  );
}
