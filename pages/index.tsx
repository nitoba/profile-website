/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import styles from '../styles/home.module.css'
import { AboutMe } from './components/about-me'
import { Footer } from './components/footer'
import { Header } from './components/header'
const Home: NextPage = () => {
  return (
    <>
    <div className={styles.container}>
      <Header />
      <AboutMe />
    </div>
    <Footer />
    </>
  )
}

export default Home
