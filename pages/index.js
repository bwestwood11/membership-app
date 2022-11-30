import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Stats from '../components/Stats'

export default function Home() {
  return (
    <div className="pt-26">
      <Hero />
      <Stats />
    </div>
  )
}
