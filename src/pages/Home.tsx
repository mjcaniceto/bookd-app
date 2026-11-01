import Navbar from "../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
        <Navbar />

        <section> 
            <Hero />
        </section>
    
    </main>
  );
}