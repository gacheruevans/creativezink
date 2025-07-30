import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WorkWithUs from "./components/WorkWithUs";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <div className="content">
      <Hero />
      {/* <About /> */}
      <Services />
      <Pricing/>
      <WorkWithUs />
      <Team />
      <Footer />
    </div>
  );
}
