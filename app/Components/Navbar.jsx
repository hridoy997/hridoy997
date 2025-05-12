import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

const Navbar = () => {

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    return (
        <>

            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='navbar-bg' className='w-full' />
            </div>

            <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
                <Link href="#top">
                    <Image src={assets.logo} alt='logo' className='w-28 cursor-pointer mr-14' priority />
                </Link>
                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
                    <li><Link className='font-ovo' href="#top">Home</Link></li>
                    <li><Link className='font-ovo' href="#about">About me</Link></li>
                    <li><Link className='font-ovo' href="#services">Services</Link></li>
                    <li><Link className='font-ovo' href="#work">My Work</Link></li>
                    <li><Link className='font-ovo' href="#contact">Contact me</Link></li>
                </ul>
                <div className='flex items-center gap-8'>
                    <button>
                        <Image src={assets.moon_icon} alt='menu-icon' className='w-6 cursor-pointer' />
                    </button>
                    <Link href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo">
                        Contact
                        <Image src={assets.arrow_icon} alt="arrow-icon" className="w-3" />
                    </Link>
                    <button onClick={openMenu} className='block md:hidden ml-3'>
                        <Image src={assets.menu_black} alt='menu-icon' className='w-6 cursor-pointer' />
                    </button>
                </div>
                {/* mobaile menu  */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='close_black' className='w-5 cursor-pointer' />
                    </div>

                    <li><Link className='font-ovo' onClick={closeMenu} href="#top">Home</Link></li>
                    <li><Link className='font-ovo' onClick={closeMenu} href="#about">About me</Link></li>
                    <li><Link className='font-ovo' onClick={closeMenu} href="#services">Services</Link></li>
                    <li><Link className='font-ovo' onClick={closeMenu} href="#work">My Work</Link></li>
                    <li><Link className='font-ovo' onClick={closeMenu} href="#contact">Contact me</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
