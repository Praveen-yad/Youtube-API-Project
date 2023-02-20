import React,{ useState} from 'react'
import {BiSearchAlt2 ,BiLike} from 'react-icons/bi'
import { useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from '../Store/index'
import { Link } from 'react-router-dom'
import { SiRedux, SiReact, SiTailwindcss, SiYoutube } from 'react-icons/si'

function SearchPage() {
    const Dark = useSelector((state) => state.darkMode)
    const dispatch = useDispatch();
    const [SearchBar, setSearchBar] = useState(false)
    const [SearchedTerm, setSearchedTerm] = useState('')

    const navigate = useNavigate()
    const ClickHandler = () => {
        if(SearchedTerm){
            navigate(`/Search/${SearchedTerm}`)
        }
    }
    const ClickHandler02 = (event) => {
        if(SearchedTerm){
            if(event.key == 'Enter'){
                navigate(`/Search/${SearchedTerm}`)
            }
        }
    }
    const SearchTermHandler = (e) => {
        setSearchedTerm(e.target.value)  
    }
    const darkModeHandler = () => {
        dispatch(toggleDarkMode())
    }

  return (
    <div className={Dark ? `dark` : ``}>
        <div className="w-[100vw] flex flex-col items-center justify-center bg-white dark:bg-[#111111] min-h-[100vh] transition-color duration-300 ">
            <div className='text-6xl text-center sm:text-7xl tracking-tighter font-bold text-[#222222] dark:text-white transition-colors duration-300 -mt-20 sm:-mt-10 selcet-none'>Youtube API Project</div>
            <div className='flex space-x-3 mt-6'>
                <div className='bg-[#222222] dark:text-[#111111] text-white dark:bg-white px-10 py-1 rounded-full text-lg cursor-pointer transition-colors duration-300 select-none' onClick={() => setSearchBar(!SearchBar)} >Search</div>
                <Link to={'/Explore'}>
                    <div className=' px-10 py-1 rounded-full text-lg cursor-pointer bg-[#222222] text-white dark:bg-white dark:text-black transition-colors duration-300 select-none'>Explore</div>
                </Link>
            </div>

            {SearchBar && <div className='mt-3 animate-slide w-[282px] rounded-full overflow-hidden bg-[#222222] dark:bg-white flex items-center justify-between px-1 py-1 transition-color duration-300'>
                <input placeholder='Search Here..' className={`text-white dark:text-black bg-[#222222] dark:bg-white outline-none w-[85%] px-2 transition-color duration-300`} onKeyDown={ClickHandler02} onChange={SearchTermHandler}/>
                <div className='bg-white p-1 cursor-pointer rounded-full dark:bg-[#222222] transition-color duration-300' onClick={ClickHandler}><BiSearchAlt2 className='text-xl dark:text-white text-black'/></div>
                </div>}

            <div onClick={darkModeHandler} className='text-white cursor-pointer bg-[#222222] dark:text-[#111111] dark:bg-white w-[282px] rounded-full transition-color duration-300 mt-3 p-1'><div className=' dark:bg-[#222222] bg-white text-black w-[50%] dark:text-white transition-all duration-[0.5s] text-center rounded-full py-1 translate-x-[136px] ease-in-out dark:translate-x-0 select-none'>{Dark ? 'Light' : 'Dark' }</div></div>

            <Link to='/Liked'>
                <div className='bg-[#222222] text-white dark:text-black dark:bg-white  rounded-full w-[282px] px-3 py-1 mt-3 text-lg flex justify-center items-center space-x-2 cursor-pointer'> <BiLike /><div>Likes Videos </div></div>
            </Link>
            <div className='space-x-5 sm:space-x-10 text-black dark:text-white absolute bottom-8 flex flex-wrap bg-[#f4f4f4] dark:bg-[#1a1a1a] py-5 px-4 sm:px-8 rounded-3xl shadow-lg items-center justify-center shadow-gray-400 dark:shadow-[#050505] transsition-all duration-300'> 
            <div className='flex flex-col items-center '>
                <SiReact className='text-[30px] sm:text-[40px] text-sky-400 ' /> 
                <div className='text-sm sm:text-base select-none'>React.js</div>
            </div>
            <div className='flex flex-col items-center '>
                <SiTailwindcss className='text-[30px] sm:text-[40px] text-sky-500' /> 
                <div className='text-sm sm:text-base select-none'>Tailwind</div>
            </div>
            <div className='flex flex-col items-center '>
                <SiRedux className='text-[30px] sm:text-[40px] text-violet-700'/>
                <div className='text-sm sm:text-base select-none'>Redux</div>
            </div>
            <div className='flex flex-col items-center '>
                <SiYoutube className='text-[30px] sm:text-[40px] text-red-600' /> 
                <div className='text-sm sm:text-base select-none'>Youtube v3 API</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SearchPage
