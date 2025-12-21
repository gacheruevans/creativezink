'use client'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

const navigation = [
    { name: 'home' , href: '/home' },
    { name: 'about', href: '/about' },
    { name: 'services', href:'/services' },
    { name: 'pricing', href:'/pricing' },
    { name: 'careers', href:'/careers' },
    { name: 'team', href:'/team' },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState('home');
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleNavClick = (name: string) => {
        setIsActive(name);
        setMobileMenuOpen(false); // Close mobile menu when clicking nav item
      
        const sectionId = name;
        // Check if an element with the given id exists and is a div
        const section = document.getElementById(sectionId);
        if (section && section.tagName.toLowerCase() === 'div') {
          section.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = `/#${sectionId}`;
        }
    };

    // Throttle scroll events for better performance with proper typing
    const throttle = <T extends (...args: unknown[]) => unknown>(
        func: T, 
        delay: number
    ): ((...args: Parameters<T>) => void) => {
        let timeoutId: NodeJS.Timeout;
        let lastExecTime = 0;
        return function (...args: Parameters<T>) {
            const currentTime = Date.now();
            
            if (currentTime - lastExecTime > delay) {
                func(...args);
                lastExecTime = currentTime;
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func(...args);
                    lastExecTime = Date.now();
                }, delay - (currentTime - lastExecTime));
            }
        };
    };

    // Function to calculate scroll progress
    const calculateScrollProgress = useCallback(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        return Math.min(Math.max(scrollPercent, 0), 100);
    }, []);

    // Function to determine which section is currently in view
    const getCurrentSection = useCallback(() => {
        const sections = navigation.map(item => item.name);
        const scrollPosition = window.scrollY + 100; // Offset for header height
        
        // Check each section to see which one is currently visible
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section) {
                const sectionTop = section.offsetTop;
                
                // If we're at or past this section's start, it's the active one
                if (scrollPosition >= sectionTop) {
                    return sections[i];
                }
            }
        }
        
        // Default to first section if nothing else matches
        return sections[0];
    }, []);

    const handleScroll = useCallback(() => {
        // Update scroll progress
        const progress = calculateScrollProgress();
        setScrollProgress(progress);

        // Update active section based on scroll position
        const currentSection = getCurrentSection();
        setIsActive(currentSection);

        // Show scroll-to-top button logic
        const homeSection = document.getElementById('home');
        const homeRect = homeSection?.getBoundingClientRect();
        const isHomeVisible = homeRect && homeRect.top <= 100 && homeRect.bottom >= 100;
        setShowScrollTop(!isHomeVisible && window.scrollY > 50);
    }, [getCurrentSection, calculateScrollProgress]);

    useEffect(() => {
        const throttledHandleScroll = throttle(handleScroll, 50); // Reduced throttle for smoother progress bar
        window.addEventListener('scroll', throttledHandleScroll);
        
        // Set initial values on component mount
        handleScroll();
        
        return () => window.removeEventListener('scroll', throttledHandleScroll);
    }, [handleScroll]);
    
    const handleScrollToTop = () => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: 'smooth' });
          setIsActive('home'); // Update active state when scrolling to top
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
   
  return (
    <>
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-900 z-[60]">
            <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>

        <header className="fixed bg-slate-900 inset-x-0 top-0 z-50 mt-1">
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
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <div key={item.name}  className={`${isActive === item.name ? 'border-b-2 border-blue-400': 'hover:text-indigo-500'}`}>
                            <Link 
                            href={item.href} 
                            onClick={(e) => { 
                                e.preventDefault();
                                handleNavClick(item.name);
                            }}
                            className={`text-white capitalize transition-colors duration-300 ${isActive === item.name ? 'text-blue-400' : ''}`}
                            >
                            {item.name}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {/* Scroll to Top Button */}
                    {showScrollTop && (
                        <button
                            onClick={handleScrollToTop}
                            className="fixed z-50 p-3 text-white transition rounded-full shadow-lg bottom-1/3 right-8 bg-amber-400 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            aria-label="Scroll to top"
                        >
                            ↑
                        </button>
                    )}
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
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.name);
                                }}
                                className={`block px-3 py-2 -mx-3 font-semibold text-slate-900 rounded-lg text-base/7 hover:bg-gray-50 capitalize ${isActive === item.name ? "bg-blue-50 border-l-4 border-blue-600 text-blue-600" : ""}`}
                                >
                                {item.name}
                                </Link>
                            </div>
                            ))}
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    </>
  )
}

export default Navbar