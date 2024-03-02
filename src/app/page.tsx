import Image from "next/image";
import HeroSelection from "./components/HeroSelection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 py-4">
        <HeroSelection />
      </div>
    </main>
  );
}
