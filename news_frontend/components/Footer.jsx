import React from 'react'
import Image from 'next/image';
import logo from '../assets/logo.png';
import Link from 'next/link';
import Category from './Category';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import Gallery from './news/Gallery';

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='bg-[#1e1919]'>
        <div className='px-4 md:px-8 py-10 w-full gap-12 grid lg:grid-cols-4 grid-cols-1'>
          <div className='w-full'>
            <div className='w-full flex flex-col gap-y-[0px] gap-l-[15px] px-2'>
              <Image
                className=''
                width={200}
                height={100}
                src={logo}
                alt='logo'
              />
              <div className="text-xl font-bold text-white relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3 md-5">
                About One by one
              </div>
              <h2 className='text-slate-500 my-[15px]'>
                പക്ഷപാതരഹിതവും ആകർഷകവുമായ വാർത്താ കവറേജിനുള്ള നിങ്ങളുടെ ഉറവിടം. വ്യക്തതയോടും കൃത്യതയോടും പത്രപ്രവർത്തന സമഗ്രതയോടുള്ള പ്രതിബദ്ധതയോടും കൂടി നൽകുന്ന, പ്രാധാന്യമുള്ള കഥകൾ നിങ്ങൾക്ക് എത്തിക്കാൻ ഞങ്ങൾ പ്രതിജ്ഞാബദ്ധരാണ്.
              </h2>
            </div>
          </div>
          <Gallery />
          <div>
            <Category categories={[]} titleStyle='text-white' />
          </div>
          {/* <RecentNewsFooter /> */}
        </div>
      </div>
      <div className='bg-[#262323]'>
        <div className='px-4 md:px-8 py-5 flex flex-col md:flex-row gap-3 justify-between items-center'>
          <div className='flex gap-y-2 text-gray-400 justify-start items-center'>
            <span>Copyright © 2023</span>
            <Link href={'#'}>Learn with Project</Link>
          </div>
          <div className='flex gap-x-[4px]'>
            <a
              className='w-[37px] h-[35px] text-white flex justify-center items-center bg-[#ffffff2b]'
              href='#'
            >
              <FaFacebookF />
            </a>
            <a
              className='w-[37px] text-white h-[35px] flex justify-center items-center bg-[#ffffff2b]'
              href='#'
            >
              <AiOutlineTwitter />
            </a>
            <a
              className='w-[37px] text-white h-[35px] flex justify-center items-center bg-[#ffffff2b]'
              href='#'
            >
              <AiFillYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer