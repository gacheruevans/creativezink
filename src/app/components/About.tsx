'use client'
import React from 'react'
import Image from 'next/image'
import { CloudArrowUpIcon, UserGroupIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Automation.',
    description:
      'Reduce manual tasks and improve productivity with custom business process automation.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Boost Customer Engagement.',
    description: ' Build loyalty and increase sales through tailored web, mobile, and CRM solutions.',
    icon: UserGroupIcon,
  },
  {
    name: 'Scale Without Limits.',
    description: 'Access cloud-ready, secure platforms that grow alongside your business.',
    icon: RectangleGroupIcon,
  },
]

export default function About() {
  return (
    <div id="about" className=" h-screen isolate py-24 overflow-hidden bg-gray-900 sm:py-32">
      <div className="mt-0 sm:mt-46 px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="font-semibold text-indigo-400 text-base/7">Invest In Great Development</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-white text-pretty sm:text-5xl">
                Automate, Customer Engagement & Scale
              </p>
              <p className="mt-6 text-gray-300 text-lg/8">
              Empower your small and medium enterprise with smart, scalable software solutions that drive growth and operational efficiency. At CreativezInk, we help SMEs simplify processes, reach new customers, and stay competitive in a digital-first world.
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
          <div className="relative lg:mt-4 lg:pr-12">
              <Image
                priority
                alt="Product screenshot"
                src="/about04.png"
                width={768}
                height={768}
                className="shadow-xl w-2xs mx-auto max-w-3xl rounded-xl ring-1 ring-white/10 sm:w-3xl md:-ml-4 lg:-ml-0"
              />
          </div>
        </div>
      </div>
    </div>
  )
}
