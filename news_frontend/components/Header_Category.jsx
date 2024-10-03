'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'
import { BsList } from 'react-icons/bs'
import { base_api_url } from '../config/config'
import { useRouter } from 'next/navigation'

const Header_Category = () => {
    const router = useRouter()
    const path = usePathname()
    const [state, setState] = useState('')
    const [categories, set_categories] = useState([])
    const [show, setShow] = useState(false)
    const [cate_show, set_cate_show] = useState(false)

    useEffect(() => {
        const get_categories = async () => {
            try {
                const res = await fetch(`${base_api_url}/api/category/all`)
                const data = await res.json()
                set_categories(data.categories)
                console.log(data.categories); // Log `data.categories`
            } catch (error) {
                console.log(error)
            }
        }

        get_categories()
    }, [])

    const search = (e) => {
        e.preventDefault()
        router.push(`/search/news?value=${state}`)
        setState('')
        setShow(false)
    }

    return (
        <div className='w-full'>
            <div className='bg-[#c80000] w-full text-white uppercase font-semibold relative'>
                <div className='px-2 flex justify-between items-center relative h-[50px]'>
                    <div onClick={() => set_cate_show(!cate_show)} className={`text-3xl flex lg:hidden font-bold h-full w-[48px] cursor-pointer justify-center items-center ${cate_show ? 'bg-[#00000026]' : ''} hover:bg-[#00000026]`}>
                        <BsList />
                    </div>
                    <Link className={`px-2 bg-[#c80000] text-xs py-[8px] ${path === '/' ? 'bg-[#00000026]' : ''}`} href={'/news/category/Panjayath'} >പ്രധാനവാർത്തകൾ</Link>
                    <Link className={`px-2 bg-[#c80000] text-xs py-[8px] ${path === '/' ? 'bg-[#00000026]' : ''}`} href={'/news/category/Information'} >അറിയ്പുകൾ</Link>
                    <Link className={`px-2 bg-[#c80000] text-xs my-2 py-[8px] ${path === '/' ? 'bg-[#00000026]' : ''}`} href="https://api.whatsapp.com/send?phone=+918943947138" target='_blank' >ഷെയർ ന്യൂസ്/റിവ്യൂ</Link>
                    <div className='flex-wrap hidden lg:flex'>
                        {/* <Link className={`px-6 font-medium py-[13px] ${path === '/' ? 'bg-[#00000026]' : ''}`} href={'/'} >Home</Link> */}
                        {/* {
                            categories.length > 0 && categories.map((c) => 
                                <Link key={c.category} className={`px-6 font-medium py-[13px] ${path === c.category ? 'bg-[#00000026]' : ''}`} href={`/news/category/${c.category}`} >
                                    {c.category}
                                </Link>
                            )
                        } */}
                        <Link className={`px-2 bg-[#c80000] mx-4 text-xs py-[8px] ${path === '/' ? 'bg-[#00000026]' : ''}`} href={'/news/category/Panjayath'} >പഞ്ചായത്തു വാർത്തകൾ</Link>
                        <Link className={`px-2 bg-[#c80000] mx-4 text-xs py-[8px] ${path === '/' ? 'bg-[#00000026]' : ''}`} href={'/news/category/Ward'} >വാർഡ് തല വാർത്തകൾ</Link>
                        <Link className={`px-2 bg-[#c80000] mx-4 text-xs py-[8px] ${path === '/' ? 'bg-[#00000026]' : ''}`} href={'/news/category/Kerala'} >കേരള വാർത്തകൾ</Link>
                        <Link className={`px-2 bg-[#c80000] mx-4 text-xs py-[8px] ${path === '/' ? 'bg-[#00000026]' : ''}`} href={'/news/category/Education'} >വിദ്യാഭ്യാസം</Link>
                    </div>
                    {/* <div className='h-full w-[48px]'>
                        <div
                            onClick={() => setShow(!show)}
                            className={`text-xl ${show ? 'bg-[#00000026]' : ''} font-bold h-full w-full cursor-pointer justify-center flex items-center hover:bg-[#00000026]`}>
                            {
                                show ? <IoClose /> : <AiOutlineSearch />
                            }
                        </div>
                        <div className={`absolute lg:block transition-all text-slate-700 z-20 shadow-lg lg:right-10 top-[50px] w-full lg:w-[300px] right-0 ${show ? 'visible' : 'invisible'} `}>
                            <div className='p-3 bg-white'>
                                <form onSubmit={search} className='flex'>
                                    <div className='w-[calc(100%-45px)] h-[40px]'>
                                        <input value={state} required onChange={(e) => setState(e.target.value)} type="text" placeholder='search' className='h-full w-full p-2 border border-slate-300 outline-none bg-slate-100' />
                                    </div>
                                    <button className='w-[45px] hover:bg-red-700 cursor-pointer h-[40px] flex justify-center outline-none items-center bg-red-600 text-white text-xl'>
                                        <AiOutlineSearch />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {
                cate_show && <div className='flex flex-wrap lg:hidden py-2 px-[30px]'>
                    <Link className={`px-4 font-medium py-[5px] ${path === '/' ? 'bg-[#00000026]' : ''}`} href={'/'} >Home</Link>
                    {
                        categories.map((c) => 
                            <Link key={c.category} className={`px-4 font-medium py-[5px] ${path === c.category ? 'bg-[#00000026]' : ''}`} href={`/news/category/${c.category}`} >
                                {c.category}
                            </Link>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default Header_Category