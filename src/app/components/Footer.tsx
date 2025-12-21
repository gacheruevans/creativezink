"use client";
import React from 'react'
import Link from 'next/link';

const navigation =[
    {name: 'home', href:'/'},
    {name: 'about', href:'/about'},
    {name: 'services', href:'/services'},
    {name: 'pricing', href:'/pricing'},
    {name: 'team', href:'/team'},
    {name: 'careers', href:'/careers'},
];

const socials = [
    {name: 'LinkedIn', href:'https://www.linkedin.com/company/creativez-ink/?viewAsMember=true'},
    {name: 'X', href:''},
    {name: 'Medium', href:''},
    {name: 'Instagram', href:''},
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div id="contact" className="px-8 py-8 text-white bg-slate-900 md:px-16 lg:px-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
                <h2 className="mb-4 text-lg font-weight-300">Office Address</h2>
                <p className="py-1 text-sm text-gray-300 font-weight-100">Rosegate Lusingetti,</p>
                <p className="py-1 text-sm text-gray-300 font-weight-100">Kamangu Thogoto Road</p>
                <p className="py-1 text-sm text-gray-300 font-weight-100">Kiambu, Nairobi</p>
                <p className="py-1 text-sm text-gray-300 font-weight-100">Phone: (+254) 701-262-152 | (+254) 720-851-489</p>
                <p className="py-1 text-sm text-gray-300 font-weight-100">Email: info@creativezink.co.ke</p>
            </div>
            <div>
                <h2 className="mb-4 text-lg font-weight-300">Quick Links</h2>
                <div className='flex flex-col'>
                    {navigation.map((link) => ( 
                        <Link href={link.href} key={link.name} className="capitalize py-1 text-sm text-gray-300 font-weight-100">{link.name}</Link>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="mb-4 text-lg font-weight-300">Legal</h2>
                <div className="flex flex-col">
                    <Link href="/legal/terms" className="py-1 text-medium text-gray-300 font-weight-100 hover:text-indigo-500">Terms of service</Link>
                    <Link href="/legal/privacy" className="py-1 text-medium text-gray-300 font-weight-100 hover:text-indigo-500">Privacy policy</Link>
                    <Link href="/legal/license" className="py-1 text-medium text-gray-300 font-weight-100 hover:text-indigo-500">License</Link>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="mb-4 text-lg font-weight-300">Contact Us</h2>
                <p className="py-1 text-sm text-gray-300 font-weight-100">We are here to help you with your legal needs. Reach out to us anytime.</p>
                <form className="mt-4">
                    <input type="text" placeholder="Your Name" className="w-full p-2 mb-2 bg-gray-700 border border-gray-600 rounded" />
                    <input type="email" placeholder="Your Email" className="w-full p-2 mb-2 bg-gray-700 border border-gray-600 rounded" />
                    <textarea placeholder="Your Message" className="w-full p-2 mb-2 bg-gray-700 border border-gray-600 rounded"></textarea>
                    <button type="submit" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Send Message</button>
                </form> 
            </div>
        </div>
        <div className=""></div>
        <div className="pt-6 mt-6 text-center text-gray-300 border-t border-gray-800">
            <p> ©{currentYear} CREATIVEZINK. All rights reserved. </p>
        </div>
        <div>
            <h2 className="mb-4 text-lg font-weight-300"> Follow Us</h2>
            <ul className="flex space-x-4 text-gray-300">
                {socials.map((sociallink) => 
                    sociallink.href &&
                    (<Link key={sociallink.name} href={sociallink.href}>{sociallink.name}</Link>)
                )}
            </ul>
        </div>
    </div>
  )
}

export default Footer