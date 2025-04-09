import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import OutputCards from "@/components/output-cards";
export default function Home() {
   return (
      <div className="min-h-screen bg-cyberteal-background">
         <Navbar />
         <main className="container mx-auto px-4 py-8">
            <HeroSection />
            <OutputCards />
         </main>
      </div>
   );
}
