import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Banner />
      <div className="bg-brand-purple text-white">
        <Navbar />
        <Hero />
      </div>
      <About />
      <WhyChooseUs />
      <Process />
      <Courses />
      <Footer />
    </div>
  );
}
