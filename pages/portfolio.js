import Sidebar from './components/sidebar'
import NavBar from './components/header'
import Head from 'next/head'
import Footer from './components/footer'
import styles from '../styles/Home.module.css'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Creativez Ink" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main className="w-full bg-black">
        <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 md:py-14 sm:px20 md:px-32">
          <div className="col-span-12 p-4 font-medium leading-none text-center text-black bg-white lg:col-span-3 rounded-2xl">
            <Sidebar/>
          </div>
          <div className="col-span-12 font-medium leading-none text-center text-black bg-white lg:col-span-9 rounded-2xl">
            Main content
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
