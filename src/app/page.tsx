import Hero from "@/components/hero/Hero";
import ImageCarousel from "@/components/hero/ImageCarousel";

export default function Home() {
  return( 
  <main className="max-w-6xl mx-auto">
    <Hero  />
    <ImageCarousel />
  </main>);
}
