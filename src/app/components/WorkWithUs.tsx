'use client'
import React from 'react'
import Image from 'next/image'

const links = [
  { name: 'Open roles', href: '/roles' },
  { name: 'Internship program', href: '/internship' },
  { name: 'Our values', href: '/values' },
]
const stats = [
  { name: 'Global office', value: '1' },
  { name: 'Full-time cross-functional colleagues', value: '10+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Annual paid leave days', value: '21' },
]

const WorkWithUs = () => {
  return (
    <section id="workwithus" className="relative py-24 overflow-hidden bg-slate-900 isolate sm:py-32">
      <Image
        alt="background image"
        width={2830}
        height={1500}
        src="/office-lobby.jpg"
        className="absolute inset-0 blur-xs object-cover opacity-90 object-right -z-10 size-full md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Work with us</h2>
          <p className="mt-8 text-lg font-medium text-gray-300 text-pretty sm:text-xl/8">
            Want to work with a cross functional team? COme join us.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 font-semibold text-white gap-x-8 gap-y-6 text-base/7 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="grid grid-cols-1 gap-8 mt-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-gray-300 text-base/7">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
export default WorkWithUs