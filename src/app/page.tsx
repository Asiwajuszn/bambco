import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorks from "@/components/sections/HowItWorks";
import ShippingPolicy from "@/components/sections/ShippingPolicy";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <ShippingPolicy />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WAFloat />
    </>
  );
}
