import { Fragment } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Pricing from "./components/Pricing"
import WorkWithUs from "./components/WorkWithUs"
import Team from "./components/Team"

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Services />
      <Pricing/>
      <WorkWithUs />
      <Team />
    </Fragment>
  );
}
