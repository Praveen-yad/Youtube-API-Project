import React,{ useState } from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from '../Store/index'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {BsSun, BsFillMoonFill} from 'react-icons/bs'


function PlayVideoHeader() {
  const Dark = useSelector((state) => state.darkMode)
  const [Input, setInput] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const DarkModeHandler = () => {
    dispatch(toggleDarkMode())
  }
  const ChangeHandler =(e) => {
    setInput(e.target.value)
  }
  const SearchHandler01 = (e) => {
    if(Input){
      if(e.key == 'Enter'){
        navigate(`/Search/${Input}`) 
      }
    }
  }
  const SearchHandler02 = () => {
    if(Input){
      navigate(`/Search/${Input}`) 
      setInput('')
    }
  }
  return (
    <div className={`${Dark ? `dark` : ``} w-full`}>
      <div className='w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center justify-between px-5'>
        <div className='flex space-x-1'>
          <Link to={'/'}><div className='bg-[#111111] dark:bg-white dark:text-black py-1 px-3 rounded-full text-white transition-colors duration-300'>Youtube API</div></Link>
        </div>
        <div className='flex space-x-3'>
          <div className='flex items-center bg-white py-1 pl-3 pr-2 rounded-full'>
            <input className='outline-none text-black w-[13rem] sm:w-[18rem]' value={Input} placeholder='Search here..' onChange={ChangeHandler} onKeyDown={SearchHandler01} />
            <BiSearchAlt2 className='text-xl text-black' onClick={SearchHandler02}/>
          </div>
          <div className='w-16 px-1 dark:bg-white bg-[#111111] rounded-full flex items-center transition-colors duration-300' onClick={DarkModeHandler}>
            <div className='w-6 h-6 rounded-full translate-x-0 dark:translate-x-[31px] ease-in-out translation-transform duration-500 '>
              <BsSun className='h-full w-full text-white dark:text-[#111111] dark:flex hidden'/>
              <BsFillMoonFill className='h-full w-full text-white dark:text-[#111111] dark:hidden flex'/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideoHeader