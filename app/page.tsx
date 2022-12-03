import AboutMe from "../src/components/about-me";
import ContactMe from "../src/components/contact-me";
import TechsUsed from "../src/components/techs-used";
import Testimonies from "../src/components/testimonies";

/* eslint-disable no-lone-blocks */
export default function Home() {
  return (
    <>
      <div>
        <AboutMe />
        <TechsUsed />
        <Testimonies />
        <ContactMe />
      </div>
    </>
  );
}
