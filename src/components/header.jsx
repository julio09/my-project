import { motion } from 'framer-motion'
import React from 'react'

function header() {
  const button = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.9
      }
    },
    hover: {
      scale: 1.2
    },
    tap: {
      scale:0.8,
      transition:{
        type: "spring"
      }
    }
  }

  const ListContainer = {
       hidden:{
        opacity: 0,
        y:-100,
       },
       show: {
        opacity:1,
        y: 0,
        transition: {
          duration:0.8,
          ease: [0, 0.55, 0.45, 1],
          staggerDirection: -1,
          delayChildren: 0.9
        }
    }
  }

  const ListItem = {
    hidden:{
      opacity:0
    },
    show:{
      opacity:1
    },
    hover: {
      scale: 1.4
    },
    tap: {
      scale:0.8,
      transition:{
        type: "spring"
      }
    }
  }
  return (
    <>
    <motion.div variants={ListContainer} initial="hidden" animate="show" className='flex justify-between items-center py-6 px-56'>
        <motion.span className='font-sans font-bold text-medium'>MONAX</motion.span>
        <ul className='flex items-center gap-[48px] '>
            <motion.li variants={ListItem} initial="hidden" animate="show" whileHover="hover" whileTap="tap" className='cursor-pointer flex gap-2 items-center font-sans text-normal'>Products <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M13.125 5.25L7 10.5L0.875 5.25" stroke="#1C1C1C" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </motion.li>
            <motion.li variants={ListItem} initial="hidden" animate="show" whileHover="hover" whileTap="tap" className='cursor-pointer flex gap-2 items-center font-sans text-normal'>Compare Plans <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M13.125 5.25L7 10.5L0.875 5.25" stroke="#1C1C1C" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </motion.li>
            <motion.li variants={ListItem} initial="hidden" animate="show" whileHover="hover" whileTap="tap" className='cursor-pointer flex gap-2 items-center font-sans text-normal'>About Us
            </motion.li>
            <motion.li variants={ListItem} initial="hidden" animate="show" whileHover="hover" whileTap="tap" className='cursor-pointer flex gap-2 items-center font-sans text-normal'>Ressources <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M13.125 5.25L7 10.5L0.875 5.25" stroke="#1C1C1C" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </motion.li>
        </ul>
        <motion.button variants={button} initial="hidden" whileTap="tap" animate="show" whileHover="hover" className='rounded-radius font-sans text-normal font-bold py-[18px] px-[48px] bg-primary text-white'>Contact us</motion.button>
    </motion.div>
    </>
  )
}

export default header