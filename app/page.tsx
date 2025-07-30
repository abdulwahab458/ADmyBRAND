import Image from "next/image";
import Header from "@/app/sections/Header";
import Hero from "@/app/sections/Hero";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      <FAQ/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}
