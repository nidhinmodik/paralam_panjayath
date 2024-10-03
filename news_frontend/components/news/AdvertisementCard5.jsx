import React from 'react';
import { base_api_url } from '../../config/config';
import Image from "next/legacy/image";
import banner from '../../assets/header-bg2.jpg'

const AdvertisementCard5 = async () => {
    const res = await fetch(`${base_api_url}/api/all/ads`, {
        next: {
            revalidate: 5,
        },
    });
    const { ads } = await res.json();

    const reversedAds = ads.reverse();

    return (
        <main className="overflow-x-auto object-fill">
            {reversedAds && reversedAds.length > 0 && (
                <div className=" w-full h-[400px] relative object-fill">
                    {reversedAds[5].mediaType === 'image' ? (
                        <Image
                            className="object-fill w-full h-full"
                            layout="fill"
                            src={reversedAds[5].mediaUrl.replace('http://', 'https://')}
                            alt="1st"
                        />
                    ) : reversedAds[5].mediaType === 'video' ? (
                        <video
                            className="object-fill w-full h-full"
                            autoPlay
                            controls
                            muted
                            loop
                            src={reversedAds[5].mediaUrl.replace('http://', 'https://')}
                            alt="1st"
                        />
                    ) : (
                        <div><p>No media available</p></div>
                    )}
                </div>
            )}
        </main>
    );
}

export default AdvertisementCard5;
