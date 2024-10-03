import React from 'react'
import { base_api_url } from '../../config/config';
import Image from "next/legacy/image";

const AdvertisementCard3 = async() => {
    const res = await fetch(`${base_api_url}/api/all/ads`, {
        next: {
            revalidate: 3,
        },
    });
    const { ads } = await res.json();

    const reversedAds = ads.reverse();

    return (
        <main className="bg-white mx-2 my-3 object-fill">
            {reversedAds && reversedAds.length > 0 && (
                <div className="w-full h-[250px] relative object-fill">
                    {reversedAds[3].mediaType === 'image' ? (
                        <Image
                            className="object-fill w-full h-full"
                            layout="fill"
                            src={reversedAds[3].mediaUrl.replace('http://', 'https://')}
                            alt="1st"
                        />
                    ) : reversedAds[3].mediaType === 'video' ? (
                        <video
                            className="object-fill w-full h-full"
                            autoPlay
                            loop
                            muted
                            src={reversedAds[3].mediaUrl.replace('http://', 'https://')}
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

export default AdvertisementCard3