import React from 'react'
import secretary from '../../assets/secretary.jpeg';
import femalelogo from '../../assets/femalelogo.png';
import Image from 'next/image';



const Gallery = () => {


    return (
        <div className='w-full flex flex-col gap-y-[1px] overflow-x-auto mx-10'>
            <div className='text-xl font-bold text-dark relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3'>
                Sarpanch
            </div>
            <div className='flex flex-cols-3 flex-2 text-dark'>
                <div>
                    <b><h2 className='my-4'>President</h2></b>
                    <Image
                        className=''
                        width={70}
                        height={70}
                        src={femalelogo}
                        alt='femalelogo'
                    />
                    <h4>Mini K U</h4>
                    <h5>tel : 9496046116</h5>
                </div>
            </div>
            <div className='flex flex-cols-3 flex-2 text-dark'>
                <div>
                    <b><h2 className='my-4'>Secretary</h2></b>
                    <Image
                        className=''
                        width={70}
                        height={70}
                        src={secretary}
                        alt='secretary'
                    />
                    <h4>Sathian T</h4>
                    <h5>tel : 9496046117</h5>
                    <h6>sathianinfo@yahoo.com</h6>
                </div>
            </div>
            {/* <div className='flex flex-cols gap-2 text-white'>
                <a href='https://api.whatsapp.com/send?phone=+918943947138' target='_blank'>WhatsApp</a>
            </div> */}
        </div>
    )
}

export default Gallery