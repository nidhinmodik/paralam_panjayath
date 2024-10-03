import Breadcrumb from "@/components/Breadcrumb";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Search from "@/components/Search";
import Title from "@/components/Title";
import Image from "next/legacy/image";
import PopularNews from "@/components/news/PopularNews";
import NewsCard from "@/components/news/items/NewsCard";
import SimpleDetailsNewCard from "@/components/news/items/SimpleDetailsNewCard";
import React from "react";
import htmlParser from 'html-react-parser'
import { base_api_url } from '../../../config/config'
import RelatedNews from "@/components/news/RelatedNews";
import RecentNews from "@/components/news/RecentNews";
import AdvertisementBox from "@/components/news/AdvertisementBox";
import AdvertisementCard from "@/components/news/AdvertisementCard";
import AdvertisementCard4 from "@/components/news/AdvertisementCard4";
import AdvertisementCard3 from "@/components/news/AdvertisementCard3";

const Details = async ({ params }) => {

  const { slug } = params;

  const res = await fetch(`${base_api_url}/api/news/details/${slug}`, {
    next: {
      revalidate: 1
    }
  })
  const { news, relateNews } = await res.json()

  return (
    <div>
      <div className="bg-white shadow-sm py-4">
        <div className="px-4 md:px-8 w-full">
          <Breadcrumb one={news?.category} two={news?.title} />
        </div>
      </div>
      <div className="bg-slate-200 w-full">
        <div className="px-4 md:px-8 w-full py-8">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12">
              <div className="w-full pr-0 xl:pr-4">
                <div className="flex flex-col gap-y-5 bg-white">
                  <Image
                    src={news?.image}
                    alt={news?.title || "News image"}
                    width={800}
                    height={450}
                    layout="responsive"
                    objectFit="cover"
                  />
                  <div className="flex flex-col gap-y-4 px-6 pb-6">
                    <h3 className="text-red-700 uppercase font-medium text-xl">{news?.category}</h3>
                    <h2 className="text-3xl text-gray-700 font-bold">{news?.title}</h2>
                    <div className="flex gap-x-2 text-xs font-normal text-slate-600">
                      <span>{news?.date}/</span>
                      <span>{news?.writerName}</span>
                    </div>
                    <div className="w-full mx-10 my-10">
                      <h6>{news?.description}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <AdvertisementCard3 />
            </div>
            <div className="w-full xl:w-4/12">
              <div className="w-full pl-0 xl:pl-4">
                <div className="flex flex-col gap-y-8">
                  <Search />
                  <AdvertisementCard4 />
                  <RecentNews />
                  <div className="p-4 bg-white">
                    <Category titleStyle={"text-gray-700 font-bold"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <RelatedNews news={relateNews} type="Related news" />
            {/* <PopularNews type="Related news" /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;