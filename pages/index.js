import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import waves from '../assets/Waves.svg'

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Portifolio Marcelo</title>
      </Head>
      <Header />
      <main className="flex justify-center">
        <div>
        <p className={`mt-40 text-7xl text-center text-gray-100 ${styles.name}`}>MARCELO</p>
        <p className={`text-2xl text-center text-gray-100`}>Designer e FullStack Developer.</p>
        </div>
      </main>
      <Image
      src={waves}
      className={`bottom-0 fixed ${styles.waves}`}
      // width='100%'
      responsive={true}
      alt=""
      />
    </div>
  )
}
