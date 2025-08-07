'use client'
import Image from 'next/image'
import Navbar from './Header'

export default function Hero() {

  return (
    <div id="home" className="bg-slate-900">
      <Navbar />
      <div className="h-screen py-27 mt-25 relative px-6 isolate pt-14 lg:px-8">
        <Image
          alt="background image"
          width={2830}
          height={1500}
          src="/nairobibg.jpg"
          className="saturate-200 absolute inset-0 blur-xs opacity-60 object-cover object-right -z-10 size-full md:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="top-1/2 max-w-6xl py-32 mx-auto sm:py-48 lg:py-56">
          <div className="mt-48 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-white text-balance sm:text-7xl">
              Solutions that enrich <span className="text-slate-950">SMEs</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-white text-pretty sm:text-xl/8">
              Empower your small and medium enterprise with digital solutions designed to drive growth, efficiency, and profitability.
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <a
                href="#pricing"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#pricing" className="font-semibold text-white hover:text-indigo-600 text-sm/6">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}
