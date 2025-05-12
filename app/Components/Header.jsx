import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <Image src={assets.profile_img} alt='profile_img' className='rounded-full w-32' />
            </div>
            <h3 className='flex items-center gap-2 text-xl md:text-2xl mb-3 font-ovo'>
                Hi! I'm Arman Hossain Hridoy
                <Image src={assets.hand_icon} alt='hand_icon' className='w-6' />
            </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Fronted web developer</h1>
            <p className='max-w-2xl mx-auto font-ovo'>
                I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
            </p>
            <div className='flex flex-col md:flex-row items-center gap-4 mt-4'>
                <Link href={"#contact"} className='px-10 py-3 border text-white border-white bg-black rounded-full flex items-center gap-2'>
                    Contact me
                    <Image src={assets.right_arrow_white} alt='profile_img' className='w-4' />
                </Link>
                <Link href={"/sample-resume.pdf"} download className='px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2'>
                    Contact me
                    <Image src={assets.download_icon} alt='profile_img' className='w-4' />
                </Link>
            </div>
        </div>
    )
}

export default Header
