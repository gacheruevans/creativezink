import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Creativez Ink" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <span className={styles.logo}>
          <Image src="/creativez-ink-logo.png" alt="Company Logo" width={200} height={200} />
        </span>

        <p className={styles.description}>
            We are launching soon please stay tuned!
        </p>

      </main>

      <footer className={styles.footer}>
          Copyrigth 2022 by Creativezink. All rights reserved
      </footer>
    </div>
  )
}
