import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import TopCarousel from '../components/TopCarousel'
import TopCategories from '../components/TopCategories'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <TopCarousel/>
      <TopCategories/>
    </>
  )
}
