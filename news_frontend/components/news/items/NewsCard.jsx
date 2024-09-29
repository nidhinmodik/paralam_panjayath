import React from "react";
import Image from "next/legacy/image"; // Using the legacy Image component
import Link from "next/link";

const NewsCard = ({ item }) => {
  return (
    <div className="bg-white shadow flex p-4">
      <div className="relative group h-full">
        {/* Parent container with position: relative and width/height */}
        <div className="group-hover:scale-[1.1] transition-all duration-[1s] w-[100px] md:w-[160px] h-[93px] lg:w-[100px] relative">
          {/* Next.js Image component */}
          <Image
            className="object-cover" // Add object-cover to ensure proper fit
            layout="fill"
            src={item?.image}
            alt="image"
          />
          {/* Optional overlay effect */}
          <div className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"></div>
        </div>
      </div>

      {/* Content container */}
      <div className="flex flex-col gap-y-1 w-[calc(100%-100px)] md:w-[calc(100%-160px)] lg:w-[calc(100%-100px)] pl-3">
        {/* Category link */}
        <Link
          href={`/news/category/${item?.category}`}
          className="text-sm font-semibold text-[#c80000]"
        >
          {item?.category}
        </Link>

        {/* Title link */}
        <Link
          href={`/news/${item?.slug}`}
          className="text-sm font-semibold text-[#333333] hover:text-[#c80000]"
        >
          {item?.title}
        </Link>

        {/* Date and writer info */}
        <div className="flex gap-x-2 text-xs font-normal text-slate-600">
          <span>{item?.date}</span>
          <span>{item?.writerName}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;