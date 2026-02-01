'use client'

import { submitPricingForm } from '@/app/actions/pricing'
import { useState } from 'react'

interface PricingFormProps {
    planName: string
    onSuccess: () => void
}

export default function PricingForm({ planName, onSuccess }: PricingFormProps) {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState<'success' | 'error' | null>(null)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setLoading(true)
        setMessage('')
        setStatus(null)

        const formData = new FormData(event.currentTarget)
        formData.append('plan_name', planName)

        try {
            const result = await submitPricingForm(formData)
            if (result.success) {
                setStatus('success')
                setMessage(result.message)
                setTimeout(() => {
                    onSuccess()
                }, 2000)
            } else {
                setStatus('error')
                setMessage(result.message)
            }
        } catch (error) {
            setStatus('error')
            setMessage('Something went wrong. Please try again later.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="first_name" className="block text-sm font-semibold text-gray-900">
                        First Name
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            autoComplete="given-name"
                            required
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="last_name" className="block text-sm font-semibold text-gray-900">
                        Last Name
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            autoComplete="family-name"
                            required
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                    Email
                </label>
                <div className="mt-2.5">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="contact" className="block text-sm font-semibold text-gray-900">
                    Contact Number
                </label>
                <div className="mt-2.5">
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        autoComplete="tel"
                        required
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                >
                    {loading ? 'Sending...' : 'Get Started'}
                </button>
            </div>

            {status === 'success' && (
                <p className="mt-4 text-center text-sm font-semibold text-green-600">{message}</p>
            )}
            {status === 'error' && (
                <p className="mt-4 text-center text-sm font-semibold text-red-600">{message}</p>
            )}
        </form>
    )
}
