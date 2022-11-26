import React from 'react'
import { useSelector } from 'react-redux'
import {FcApproval} from 'react-icons/fc'
import { Link } from 'react-router-dom'

function Videos({ items }) {
  const Dark = useSelector((state) => state.darkMode)
  return (
    <div className={Dark ? `dark`: ``}>
      <div className='w-[19rem] h-[15.5rem] p-2 bg-[#e3e3e3] dark:bg-[#222222] mt-7 rounded-xl overflow- group relative dark:text-white text-black transition-colors duration-300'>
        <Link to={`/Video/${items.id.videoId || items.id}`}>
          <img src={items?.snippet?.thumbnails?.high?.url} className='object-cover w-[19rem] h-[10rem] rounded-lg' />
        </Link>
        <div className='absolute w-[18rem] bottom-1 h-[28%] group-hover:h-[55%] transition-all dark:text-white text-black duration-300 backdrop-blur-sm p-2 space-y-2 bg-[#a3a3a3] dark:bg-black dark:bg-opacity-30 bg-opacity-30 rounded-lg overflow-hidden '>
          <div>{items?.snippet?.title.slice(0,55)}</div>
          <div>{'> '}{items?.snippet?.publishedAt.slice(0,10)}</div>
          <div className='flex items-center'>
            <div className='mr-1'>{items?.snippet?.channelTitle}</div>
            <FcApproval className='mb-1'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videos