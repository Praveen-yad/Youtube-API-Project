import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { VideosList, Header } from './'
import { useSelector } from 'react-redux'
import LodingAnimation from './LodingAnimation'

function SearchFeed() {
    const { searchedTerm } = useParams();
    const [Term, setTerm] = useState(searchedTerm)
    const [Videos, setVideos] = useState([])
    const [Loading, setLoading] = useState(false)
    const Dark = useSelector((state) => state.darkMode)
    
    const fetchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=id&part=snippet&q=${Term}&order=date&key=${process.env.REACT_APP_API_KEY}&maxResults=30`
    useEffect(()=>{
      fetch(fetchUrl)
      .then(data => data.json())
      .then(data => setVideos(data.items))
      .then(() => setLoading(true))
    },[Term])
    // console.log(Videos)

  return (
    <div className={Dark ? `dark` : ``}>
      <div className='w-full min-h-[100vh] bg-white dark:bg-[#111111] flex flex-col items-center transition-colors duration-300'>
        <div className='w-full dark:bg-[#222222] dark:text-white text-black bg-[#e3e3e3] py-3 sticky top-0 transition-colors duration-300 z-20'>
          <Header searchedTerm={searchedTerm} setTerm={setTerm} setLoading={setLoading}/>
        </div>
        {Loading ? 
        <div className='w-full max-w-[83rem] my-5 flex flex-wrap justify-around z-0'>
          {Videos.map((items, index) => (
            <VideosList items={items} key={index} Dark={Dark} />
          ))}
        </div>
          :
        <div className='text-4xl w-full min-h-[90vh] flex items-center justify-center'> 
        <LodingAnimation/>
        </div> 
        }
      </div>
    </div>
  )
}
export default SearchFeed