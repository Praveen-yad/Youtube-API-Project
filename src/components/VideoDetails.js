import React, { useState } from 'react'
import { BiLike} from 'react-icons/bi'
import { GrView} from 'react-icons/gr'
import { useSelector, useDispatch } from 'react-redux'
import { likedVideos } from '../Store/indexs'

function VideoDetails({ item }) {
  const Dark = useSelector((state) => state.darkMode)
  const dispatch = useDispatch();

  return (
    <div className={`${Dark ? `dark` : ``}`}>
      <div className='flex-1 flex flex-wrap justify-around p-3  rounded-xl h-full text-white transition-colors duration-300 sm:space-x-4 space-y-3 '>
          <div className='w-[10rem] sm:w-[12rem] text-black dark:text-white bg-[#e3e3e3] dark:bg-[#222222] rounded-xl h-fit p-3 min-h-[10rem] flex flex-col justify-center space-y-2 
          transition-colors duration-300 mt-3'>
            <div className='text-center text-lg'>Title </div>
              <div className='bg-white text-black  rounded-2xl py-1 px-3 '>{item?.snippet?.title.slice(0,55)}</div>
            </div>

          <div className='w-[10rem] sm:w-[12rem] bg-[#e3e3e3] dark:bg-[#222222] rounded-xl h-fit p-3 min-h-[10rem] flex flex-col justify-center space-y-2  dark:text-white text-black transition-colors duration-300'>
            <div className='text-center text-lg'>Channel</div>
            <div className='py-1 px-2 text-center rounded-3xl bg-white text-black'>{item?.snippet?.channelTitle}</div>
          </div>

          <div className='w-[15rem] sm:w-[11rem] bg-[#e3e3e3] dark:bg-[#222222] rounded-xl h-fit p-3 min-h-[10rem] flex flex-col justify-center space-y-2 dark:text-white text-black transition-colors duration-300'><div className='text-center text-lg '>Stats</div>
            <div className='flex items-center justify-center bg-white py-1 px-3 text-black rounded-3xl space-x-2'>
              <GrView/>
              <div>{parseInt(item?.statistics?.viewCount).toLocaleString()}</div>
            </div> 
            <div className='flex items-center justify-center bg-white py-1 px-3 text-black rounded-3xl hover:scale-[1.05] transition-transform duration-300 cursor-pointer' onClick={() => {dispatch(likedVideos(item))}}>
              <BiLike className='mr-3'/>{parseInt(item?.statistics?.likeCount).toLocaleString()}
            </div> 
          </div>

          <div className='w-[25rem] dark:bg-[#222222] bg-[#e3e3e3] rounded-xl p-2 h-[10rem] overflow-hidden flex flex-col justify-center space-y-1 text-black dark:text-white transition-colors duration-300'>
              <div className='text-center text-lg '>Description</div>
              <div className='bg-white p-3 rounded-2xl text-black transition-colors duration-300 h-[7rem] overflow-hidden'>{item?.snippet?.description.slice(0,120)}...</div>

          </div>
      </div>
    </div>
  )
}

export default VideoDetails