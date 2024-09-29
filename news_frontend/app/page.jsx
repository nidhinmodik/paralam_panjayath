import HeadLines from "@/components/HeadLines";
import Title from "@/components/Title";
import DetailsNews from "@/components/news/DetailsNews";
import DetailsNewsCol from "@/components/news/DetailsNewsCol";
import DetailsNewsRow from "@/components/news/DetailsNewsRow";
import LatestNews from "@/components/news/LatestNews";
import PopularNews from "@/components/news/PopularNews";
import SimpleNewsCard from "@/components/news/items/SimpleNewsCard";
import NewsCard from "@/components/news/items/NewsCard";
import Footer from "@/components/Footer";
import { base_api_url } from "@/config/config";
import AdvertisementBox from "@/components/news/AdvertisementBox";
import AdvertisementCard from "@/components/news/AdvertisementCard";
import AdvertisementCard2 from "@/components/news/AdvertisementCard2";
import AdvertisementCard3 from "@/components/news/AdvertisementCard3";

const Home = async () => {
  const news_data = await fetch(`${base_api_url}/api/all/news`, {
    next: {
      revalidate: 5,
    },
  });

  let news = await news_data?.json();

  news = news.news

  return (
    <div>
      <main>
        <HeadLines news={news} />
        <div className="bg-slate-100">
          <div className="px-4 md:px-8 py-8">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12">
                <LatestNews news={news["Breaking"]} />
              </div>
              <div className="w-full lg:w-6/12 mt-5 lg:mt-0">
                <div className="flex w-full flex-col gap-y-[14px] pl-0 lg:pl-2">
                  <Title title="Breaking News" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                    {news["Breaking"].map((item, i) => {
                      if (i < 4) {
                        return <SimpleNewsCard item={item} key={i} />;
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* <PopularNews type="Popular news"  news={news["Local"]} /> */}
            {/* first section */}
            <div className="w-full">
              <div className="flex flex-wrap my-[15px]">
                <div className="w-full lg:w-8/12">
                  <AdvertisementBox />
                  <DetailsNewsRow
                    news={news["Panjayath"]}
                    category="Panjayath"
                    type="details-news"
                  />
                  <DetailsNews news={news["Ward"]}
                    category="Ward" />
                </div>
                <div className="w-full lg:w-4/12">
                  <DetailsNewsCol
                    news={news["Kerala"]}
                    category="Kerala"
                  />
                  <AdvertisementCard />
                </div>
              </div>
            </div>
            {/* 2nd section */}
            <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12">
                  {
                    <div className="pr-2">
                      <DetailsNewsCol
                        news={news["Information"]}
                        category="Information"
                      />
                    </div>
                  }
                </div>
                <div className="w-full lg:w-8/12">
                  <div className="pl-2">
                    <DetailsNewsRow
                      news={news["Education"]}
                      category="Education"
                      type="details-news"
                    />
                     <AdvertisementCard2 />
                    <DetailsNews news={news["Information"]}
                      category="Information
                    " />
                  </div>
                </div>
              </div>
            </div>
            {/* 3th section  */}
            {/* <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12">
                 
                  <DetailsNewsRow
                    news={news["Local"]}
                    category="Local"
                    type="details-news"
                  />
                  <AdvertisementCard3 />
                </div>
                <div className="w-full lg:w-4/12">
                  <DetailsNewsCol
                    news={news["National"]}
                    category="National"
                  />
                </div>
              </div>
            </div> */}
            {/* 4rd section */}
            {/* <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12">
                  <div>
                    <DetailsNewsRow
                      news={news["Technology"]}
                      category="Technology"
                      type="details-news"
                    />
                  </div>
                </div>
              </div>
            </div> */}
            {/* 5th section */}
            {/* <div className="w-full lg:w-4/12">
              <div className="pl-2">
                <Title title="Recent news" />
                <div className="grid grid-cols-1 gap-y-[14px] mt-4">
                  {news['Breaking'].map((item, i) => (
                    <NewsCard item={item} key={i} />
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Home;