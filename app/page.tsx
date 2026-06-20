import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import WhyHome from "@/components/sections/WhyHome";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import ZoneIntervention from "@/components/sections/ZoneIntervention";
import InstagramSection from "@/components/sections/Instagram";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline />
        <WhyHome />
        <Services />
        <Gallery />
        <Process />
        <Testimonials />
        <ZoneIntervention />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
