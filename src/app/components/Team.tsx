'use client'
import React from 'react'
import  Image from 'next/image'

const people = [
  {
    name: 'Evans Gacheru Munene',
    role: 'Founder / CEO',
    imageUrl:
      '/ceo-profile.jpeg',
  },
  {
    name: 'Maurine Nyambura Gacheru',
    role: 'Financial Manager',
    imageUrl:
      '/fm-profile.png',
  }
]

const Team = () => {
  return (
    <div id="team" className="py-24 bg-white sm:py-32">
      <div className="grid gap-20 px-6 mx-auto max-w-7xl lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 text-pretty sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-gray-600 text-lg/8">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  alt=""
                  src={person.imageUrl}
                  width={16}
                  height={16}
                  className="rounded-full size-16 outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 className="font-semibold tracking-tight text-gray-900 text-base/7">{person.name}</h3>
                  <p className="font-semibold text-indigo-600 text-sm/6">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Team
