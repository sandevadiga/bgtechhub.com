"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import StudentSupport from "@/components/StudentSupport";
// import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  // Initialize scroll-triggered animations
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />

        <WhyUs />
        <StudentSupport />
        {/* <Portfolio /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
