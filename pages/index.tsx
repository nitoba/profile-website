/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "../styles/home.module.css";
import AboutMe from "./components/about-me";
import ContactMe from "./components/contact-me";
import Footer from "./components/footer";
import Header from "./components/header";
import TechsUsed from "./components/techs-used";
import Testimonies from "./components/testimonies";
const Home: NextPage = () => {
  return (
    <>
      <title>Bruno Alves - Full Stack Dev</title>
      <div className={styles.container}>
        <Header />
        <AboutMe />
        <TechsUsed />
        <Testimonies />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
};

export default Home;
