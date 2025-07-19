import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'motion/react'

const Steps = () => {
  return (
    <motion.div initial={{opacity:0, y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className='flex flex-col items-center justify-center my-32'>
        <h1 className='text=3xl sm:text-4xl font-semibold mb-2'> How it Works</h1>
        <p className='text-lg text-gray-600'> Transform words into stunning images</p>
        <motion.div initial={{opacity:0, x2:100}} transition={{delay:0.3, duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className='space-y-4 w-full max-w-3xl text-sm'>
            {stepsData.map((item, index)=>( 
                <motion.div className='flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-full 'key={index}>
                    <img src={item.icon} />
                    <div>
                        <h2 className='text-xl font-medium'>{item.title}</h2>
                        <p className='text-gray-500'>{item.description}</p>

                    </div>
                </motion.div>
            ))}
        </motion.div>
      
    </motion.div>
  )
}

export default Steps
