import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';

const SimpleNewsCard = ({ item, type }) => {
  return (
    <div className='group relative'>
      {/* Parent element with position: relative */}
      <div className='relative overflow-hidden'>
        <div
          className={`${
            type ? 'h-[270px] sm:h-[470px]' : 'h-[228px]'
          } w-full group-hover:scale-[1.1] transition-all duration-[1s] relative`}
          style={{ position: 'relative' }} // Ensures layout: fill works correctly
        >
          {/* Next.js Image component */}
          <Image
            className='object-cover' // Add object-cover for proper image scaling
            layout='fill'
            href={`/news/${item.slug}`}
            src={item.image}
            alt='images'
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Overlay effect */}
      <div className='w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300'></div>

      {/* Content (title, date, category) */}
      <div className='left-5 absolute bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-y-2'>
        <div className='px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]'>
          {item.category}
        </div>
        <Link href={`/news/${item.slug}`} className='text-xs overflow-hidden'>
          {item.title}
        </Link>
        <div className='flex gap-x-2 text-xs font-normal'>
          <span>{item.date}</span>
          <span>{item.writerName}</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleNewsCard;