import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WorkWithUs from "@/components/WorkWithUs";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="content">
      <Hero/>
      <About />
      <Services />
      <WorkWithUs />
      <Team />
      <Footer />
    </div>
  );
}
