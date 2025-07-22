'use client'
import React,{useState} from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'


import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function Hero() {
  return (
    <div id="home" className="py-24 overflow-hidden bg-gray-900 sm:py-32">
      <Navbar />
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="font-semibold text-indigo-400 text-base/7">Invest In Great Developers</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-white text-pretty sm:text-5xl">
                Get a consultation with our team
              </p>
              <p className="mt-6 text-gray-300 text-lg/8">
              At CreativezInk, we understand that no two businesses are the same - so why should your software be? Our expert-led consultation process is designed to uncover your unique needs, offer strategic advice, and help you choose the right tech solutions to accelerate your growth. Whether you're looking to build a new platform from scratch or optimize an existing one, our team of seasoned developers and consultants is ready to guide you through every step of the journey.
              </p>
              <dl className="max-w-xl mt-10 space-y-8 text-gray-400 text-base/7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute text-indigo-400 top-1 left-1 size-5" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            priority
            alt="Product screenshot"
            src="/unsplash-resources/developer-desk.jpg"
            width={2432}
            height={1442}
            className="shadow-xl w-3xl max-w-none rounded-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
