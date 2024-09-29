import React from 'react'

const Gallery = () => {


    return (
        <div className="w-full flex flex-col gap-y-[14px]">
            <div className="text-xl font-bold text-white relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
                Contact
            </div>
            <div className="grid grid-cols-3 gap-2 text-white">
            <a href="mailto:onebyonenewschannel@gmail.com" target='_blank'>onebyonenewschannel@gmail.com</a>
            </div>
            <div className="flex flex-cols gap-2 text-white">
            <a href="https://api.whatsapp.com/send?phone=+918943947138" target='_blank'>WhatsApp</a>
            </div>
        </div>
    )
}

export default Gallery