'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import PricingForm from './forms/PricingForm'

interface Tier {
    name: string
    id: string
    href: string
    priceMonthly: string
    description: string
    features: string[]
    featured: boolean
}

interface PricingModalProps {
    isOpen: boolean
    onClose: () => void
    tier: Tier | null
}

export default function PricingModal({ isOpen, onClose, tier }: PricingModalProps) {
    if (!tier) return null

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-2xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-2xl data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-hidden"
                            >
                                <span className="sr-only">Close</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="bg-white">
                            <div className="sm:flex sm:items-stretch">
                                {/* Package Highlights */}
                                <div className="bg-gray-50 px-6 py-8 sm:w-1/2 sm:p-10">
                                    <DialogTitle as="h3" className="text-2xl font-bold tracking-tight text-gray-900">
                                        {tier.name}
                                    </DialogTitle>
                                    <p className="mt-4 flex items-baseline gap-x-1">
                                        <span className="text-4xl font-bold tracking-tight text-indigo-600">{tier.priceMonthly}</span>
                                        <span className="text-sm font-semibold text-gray-600">/month</span>
                                    </p>
                                    <p className="mt-6 text-base text-gray-600">
                                        {tier.description}
                                    </p>
                                    <div className="mt-8 border-t border-gray-200 pt-8">
                                        <h4 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">What&apos;s included</h4>
                                        <ul className="mt-4 space-y-3">
                                            {tier.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-x-3 text-sm text-gray-600">
                                                    <CheckIcon aria-hidden="true" className="h-5 w-5 flex-none text-indigo-600" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Form Section */}
                                <div className="px-6 py-8 sm:w-1/2 sm:p-10">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-6">Inquire Today</h4>
                                    <PricingForm planName={tier.name} onSuccess={onClose} />
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
