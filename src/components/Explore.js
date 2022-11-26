import React from 'react'
import { Link } from 'react-router-dom'
import { FcMusic, FcClapperboard, FcDiploma2 } from 'react-icons/fc'
import { IoGameControllerOutline } from 'react-icons/io5'
import { BiCodeAlt } from 'react-icons/bi'
import { SiReact, SiGooglepodcasts } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import {PlayVideoHeader} from './'
import { useSelector } from 'react-redux'

function Explore() {
  const Dark = useSelector((state) => state.darkMode)
  return (
    <div className={`${Dark ? `dark` : ``}`}>
      <div className='bg-[#e3e3e3] dark:bg-[#222222] w-full py-3 sticky top-0 z-10 transition-colors duration-300'>
        <PlayVideoHeader/> 
      </div>
      <div className='flex flex-col justify-center items-center text-white w-full min-h-[93vh] bg-white dark:bg-[#111111] transition-colors duration-300'>
          <div className='flex max-w-5xl justify-center flex-wrap'>
            {list.map((item, index)=> (
                <Link key={index} to={`/Search/${item.name}`}>
                  <div className='bg-[#222222] m-5 flex flex-col items-center py-10 px-20 rounded-3xl space-y-2 shadow-xl shadow-gray-400  dark:shadow-black hover:scale-110 transition-all duration-300 '>
                    <div className='text-2xl'>{item.icon}</div>
                    <div className='capitalize text-lg'>{item.name}</div>
                  </div>
                </Link>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Explore
 const list = [
    {
      name : 'music',
      icon : <FcMusic/>
    },
    {
      name : 'Gaming',
      icon : <IoGameControllerOutline/>
    },
    {
      name : 'movies',
      icon : <FcClapperboard/>
    },
    {
      name : 'coding',
      icon : <BiCodeAlt/>
    },
    {
      name : 'reactJs',
      icon : <SiReact/>
    },
    {
      name : 'nextJs',
      icon : <TbBrandNextjs/>
    },
    {
      name : 'education',
      icon : <FcDiploma2/>
    },
    {
      name : 'podcast',
      icon : <SiGooglepodcasts/>
    },
 ]