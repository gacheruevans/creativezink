import Head from 'next/head'
import NavBar from './components/header'
import Counter from './components/countdown'
import Footer from './components/footer'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Creativez Ink" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main className={styles.main}>
        <Counter/>
      </main>
      <Footer/>
    </div>
  )
}
