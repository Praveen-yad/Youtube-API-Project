import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
 
function LodingAnimation() {
    const Dark = useSelector((state) => state.darkMode)
    const Animation = {
        visible:{
            y:[5, -5, 5],
            transition:{
                duration:1,
                repeat: Infinity,
                staggerChildren: 0.2
            }
            
        },
    }
  return (
    <div className={`flex flex-col items-center space-y-7 ${Dark ? `dark` : ``} `}>
        <motion.div variants={Animation}  animate={'visible'} className='flex space-x-3'>
            <motion.div className='w-5 h-5 bg-black dark:bg-white rounded-full' variants={Animation}></motion.div>
            <motion.div className='w-5 h-5 bg-black dark:bg-white rounded-full' variants={Animation}></motion.div>
            <motion.div className='w-5 h-5 bg-black dark:bg-white rounded-full' variants={Animation}></motion.div>
        </motion.div>
    <div className='w-full text-lg dark:text-white text-black'>Please Wait...</div>
  </div>
  )
}

export default LodingAnimation