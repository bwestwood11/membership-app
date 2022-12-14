import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import PricingSection from '../components/PricingSection'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="pt-26">
      <Hero />
      <Stats />
      <PricingSection />
      <Features />
      <Footer />
    </div>
  )
}
