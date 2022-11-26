import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import VideoDetails from './VideoDetails'
import LodingAnimation from './LodingAnimation'
import { useSelector } from 'react-redux'
import ReactPlayer from 'react-player/lazy'
import PlayVideoHeader from './PlayVideoHeader'

function VideoPlayer() {
    const { videoId } = useParams()
    const [Item, setItem] = useState('')
    const Dark = useSelector((state) => state.darkMode)

    const fetchUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`
    useEffect(()=>{
      fetch(fetchUrl)
      .then(data => data.json())
      .then(data => setItem(data.items[0]))
    },[videoId])
    console.log(Item)
  
  return (
    <div className={` ${Dark ? `dark` : ``}`}>
      <div className='bg-[#e3e3e3] dark:bg-[#222222] w-full py-3 sticky top-0 z-10'>
        <PlayVideoHeader/> 
      </div>
      <div className={`bg-white dark:bg-[#111111] sm:p-5 w-full min-h-[100vh] flex flex-col items-center justify-center transition-colors duration-300`}>
      <div className='flex flex-col w-full items-center z-0 mt-3'>
        <div className='flex items-center justify-center absolute z-0 text-5xl w-[90vw] h-[13rem] sm:h-[45vw] xl:w-[65rem] xl:h-[35rem] rounded-xl '> <LodingAnimation/></div>
        <div className='w-[90vw] h-[13rem] sm:h-[45vw] xl:w-[75rem] xl:h-[38.5rem] rounded-2xl overflow-hidden z-10'>
          <ReactPlayer url={`https://www.youtube.com/embed/${videoId}`} controls width='100%' height='100%' playing={true}/>
        </div>
        <div className='flex-1 mt-5 w-[90vw] max-w-[65rem]'>
          <VideoDetails item={Item}/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default VideoPlayer

