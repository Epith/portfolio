import Image from "next/image";
import HeroSelection from "./components/HeroSelection";
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSelection />
      </div>
    </main>
  );
}
