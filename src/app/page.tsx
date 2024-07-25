import Homepage from "@/components/home";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-svh max-h-svh relative">
      <section className="relative z-10">
        <Homepage />
      </section>
    </main>
  );
}
