'use client'
import React, {useState, useEffect} from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
    {name:'home' ,href:'/home'},
    {name:'about', href: '/about'},
    {name:'services', href:'/services'},
    {name: 'pricing', href:'/pricing'},
    {name: 'careers', href:'/workwithus'},
    {name: 'team', href:'/team'},
    {name:'contact', href:'/contact'},
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState('home');
    const handleNavClick = (name: string) => {
        setIsActive(name);
      
        const sectionId = name;
        // Check if an element with the given id exists and is a div
        const section = document.getElementById(sectionId);
        if (section && section.tagName.toLowerCase() === 'div') {
          section.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = `/#${sectionId}`;
        }
    };
    
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          // Show button only if not on 'home' section and scrolled down
          const homeSection = document.getElementById('home');
          const homeRect = homeSection?.getBoundingClientRect();
          const isHomeVisible = homeRect && homeRect.top <= 100 && homeRect.bottom >= 100;
          setShowScrollTop(!isHomeVisible && window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const handleScrollToTop = () => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
   
  return (
    <header className="fixed bg-slate-900 inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5 mx-10 mt-4 text-center">
                    <p className="text-white w-auto h-10 text-2xl">CreativezInk</p>
                </Link>
            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                    <Link 
                    key={item.name} 
                    href={item.href} 
                    onClick={(e) => { 
                        e.preventDefault();
                        setIsActive(item.name);
                        handleNavClick(item.name);
                    }}
                    className={`text-white capitalize transition-colors duration-300 ${ isActive ? 'border-b-blue-600': 'hover:text-slate-100'}`}
                    >
                    {item.name}
                    </Link>
                ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                {/* Scroll to Top Button */}
                <button
                    onClick={handleScrollToTop}
                    className="fixed z-50 p-3 text-white transition rounded-full shadow-lg bottom-1/2 right-8 bg-amber-400 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    aria-label="Scroll to top"
                    style={{ display: showScrollTop ? 'block' : 'none' }}
                >
                    ↑
                </button>
            </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <Link href="/" className="-m-1.5 p-1.5 mx-10 mt-4 text-center">
                        <p className="text-slate-900 w-auto h-10 text-2xl">CreativezInk</p>
                    </Link>
                    <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="flow-root mt-6">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        {navigation.map((item) => (
                        <div className="py-6 space-y-2" key={item.name}>
                            <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                setIsActive(item.name);
                                handleNavClick(item.name);
                            }}
                            className={`block px-3 py-2 -mx-3 font-semibold text-slate-900 rounded-lg text-base/7 hover:bg-gray-50 ${isActive === item.name ? "item-active, border border-b-2 border-white" : " "}`}
                            >
                            {item.name}
                            </Link>
                        </div>
                        ))}
                    <div className="py-6">
                        <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                        </a>
                    </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
  )
}

export default Navbar