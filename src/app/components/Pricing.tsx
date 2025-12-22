import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

interface Tier {
  name: string
  id: string
  href: string
  priceMonthly: string
  description: string
  features: string[]
  featured: boolean
}

const tiers: Tier[] = [
  {
    name: 'Basic',
    id: 'basic',
    href: 'basic',
    priceMonthly: '$450',
    description: "Perfect for small businesses or startups needing a professional web presence without ongoing maintenance.",
    features: ['4-page responsive website', 'custom design iteration', 'Consultation on best framework', 'No hosting or maintenance included'],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: 'enterprise',
    priceMonthly: '$5500',
    description: 'Our premium solution for enterprises that need a fully customized, secure, and scalable platform. Dedicated team of developers and designers.',
    features: [
      'Fully custom website (4 iterations)',
      'Admin Dashboard & User login access',
      'Database support',
      'SEO',
      'CI/CD deployment pipelines',
      'Hosting & domain included',
      'Technical documentation',
      'AI integrated assistant',
      'Full maintenance & support $3800/month'
    ],
    featured: true,
  },
  {
    name: 'Standard',
    id: 'standard',
    href: 'standard',
    priceMonthly: '$900',
    description: "Ideal for SMEs seeking a complete digital solution with hosting, database, and admin capabilities.",
    features: [
      'Hosting & domain included',
      '4-page responsive website',
      'custom design iterations',
      'Admin Dashboard & User login access',
      'Database support',
      'Email hosting & integration',
      'Optional maintenance: $1000/month'
    ],
    featured: false,
  },

]

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  return (
    <div id="pricing" className="min-h-screen relative px-6 py-24 bg-white isolate sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 overflow-hidden -top-3 -z-10 transform-gpu px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-semibold text-indigo-600 text-base/7">Pricing</h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-lime-500 text-balance sm:text-5xl">
          Choose the Right Plan for Your Business
        </p>
      </div>
      <p className="max-w-2xl mx-auto mt-4 text-base font-medium text-center text-gray-600 text-pretty sm:text-lg/8">
        Our flexible plans are designed to meet businesses at every stage of growth, from startups seeking a simple web presence to enterprises that need fully customized, scalable solutions.
      </p>

      <div className="grid items-center max-w-lg grid-cols-1 mx-auto mt-10 gap-y-6 sm:mt-16 sm:gap-y-0 lg:max-w-6xl lg:grid-cols-3">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                  : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-6 ring-1 ring-gray-900/10 sm:p-8',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-lime-400' : 'text-lime-600', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="flex items-baseline mt-4 gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-amber-400' : 'text-gray-900',
                  'text-4xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-6 space-y-2 text-sm/6 sm:mt-8',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-8',
              )}
            >
              Get started today
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
