import React,{ useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PlayVideoHeader, VideosList } from './'

function Liked() {
    const data = useSelector((state) => state.likedVid)
    const Dark = useSelector((state) => state.darkMode)
    
  return (
    <div className={` ${Dark? `dark` : ``} `}>
    <div className='flex flex-col w-full min-h-[100vh] '>
        <div className=' bg-[#e3e3e3] dark:bg-[#222222] py-2 transition-colors duration-300'>
            <PlayVideoHeader/>
        </div>
        <div className='flex-1 flex flex-wrap justify-center  bg-[#fff] dark:bg-[#111111]'>
            {data.map((item) => (
                <div key={item.id} className='m-5'><VideosList items={item} /></div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Liked