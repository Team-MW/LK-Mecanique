import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Marquee from "@/components/Marquee";
import Method from "@/components/Method";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <Services />
        <Method />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
